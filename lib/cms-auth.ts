const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

export const CMS_SESSION_COOKIE = "nomyx_cms_session";
export const CMS_SESSION_TTL_SECONDS = 60 * 60 * 12;

type CmsSessionPayload = {
  exp: number;
};

function getCmsUsername() {
  return process.env.CMS_USERNAME || "";
}

function getCmsPassword() {
  return process.env.CMS_PASSWORD || "";
}

function toBase64Url(bytes: Uint8Array) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64Url(value: string) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);

  try {
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    return textDecoder.decode(bytes);
  } catch {
    return null;
  }
}

function constantTimeEqual(first: string, second: string) {
  if (first.length !== second.length) {
    return false;
  }

  let result = 0;
  for (let index = 0; index < first.length; index += 1) {
    result |= first.charCodeAt(index) ^ second.charCodeAt(index);
  }

  return result === 0;
}

async function sha256(value: string) {
  const digest = await globalThis.crypto.subtle.digest("SHA-256", textEncoder.encode(value));
  return toBase64Url(new Uint8Array(digest));
}

async function sign(value: string) {
  const password = getCmsPassword();

  if (!password) {
    return null;
  }

  const key = await globalThis.crypto.subtle.importKey(
    "raw",
    textEncoder.encode(password),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await globalThis.crypto.subtle.sign("HMAC", key, textEncoder.encode(value));

  return toBase64Url(new Uint8Array(signature));
}

export function isCmsAuthConfigured() {
  return Boolean(getCmsUsername() && getCmsPassword());
}

export function cmsSessionCookieOptions() {
  return {
    httpOnly: true,
    maxAge: CMS_SESSION_TTL_SECONDS,
    path: "/",
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
  };
}

export async function verifyCmsCredentials(username: string, password: string) {
  const configuredUsername = getCmsUsername();
  const configuredPassword = getCmsPassword();

  if (!configuredUsername || !configuredPassword) {
    return false;
  }

  const [
    usernameHash,
    configuredUsernameHash,
    passwordHash,
    configuredPasswordHash,
  ] = await Promise.all([
    sha256(username),
    sha256(configuredUsername),
    sha256(password),
    sha256(configuredPassword),
  ]);

  return (
    constantTimeEqual(usernameHash, configuredUsernameHash) &&
    constantTimeEqual(passwordHash, configuredPasswordHash)
  );
}

export async function createCmsSession() {
  const payload: CmsSessionPayload = {
    exp: Date.now() + CMS_SESSION_TTL_SECONDS * 1000,
  };
  const encodedPayload = toBase64Url(textEncoder.encode(JSON.stringify(payload)));
  const signature = await sign(encodedPayload);

  if (!signature) {
    throw new Error("CMS authentication is not configured.");
  }

  return `${encodedPayload}.${signature}`;
}

export async function verifyCmsSession(session: string | undefined) {
  if (!session) {
    return false;
  }

  const [encodedPayload, providedSignature] = session.split(".");

  if (!encodedPayload || !providedSignature) {
    return false;
  }

  const expectedSignature = await sign(encodedPayload);

  if (!expectedSignature || !constantTimeEqual(providedSignature, expectedSignature)) {
    return false;
  }

  const decodedPayload = fromBase64Url(encodedPayload);

  if (!decodedPayload) {
    return false;
  }

  try {
    const payload = JSON.parse(decodedPayload) as CmsSessionPayload;
    return typeof payload.exp === "number" && payload.exp > Date.now();
  } catch {
    return false;
  }
}
