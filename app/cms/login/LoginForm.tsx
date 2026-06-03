"use client";

import { FormEvent, useState } from "react";
import { ArrowLeft, Eye, EyeOff, LockKeyhole, LogIn, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type LoginFormProps = {
  nextPath: string;
};

export default function LoginForm({ nextPath }: LoginFormProps) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/cms/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to sign in.");
      }

      router.replace(nextPath);
      router.refresh();
    } catch (requestError) {
      const message =
        requestError instanceof Error ? requestError.message : "Unable to sign in.";
      setError(message);
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-6 flex justify-center">
        <Image
          src="/nomyx-logo.png"
          alt="Nomyx"
          width={190}
          height={48}
          priority
          className="h-auto w-[190px]"
        />
      </div>

      <div className="border border-border bg-white p-6 shadow-[0_24px_72px_rgba(10,17,40,0.12)] md:p-8">
      <form onSubmit={handleSubmit}>
      <div className="mb-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">
          CMS Access
        </p>
        <h1 className="text-4xl font-black uppercase leading-none tracking-[-0.04em] text-ink md:text-5xl">
          Admin Login
        </h1>
      </div>

      {error && (
        <div className="mb-5 border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">
            Username
          </span>
          <div className="relative">
            <UserRound
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
            />
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="username"
              className="h-14 w-full border border-border bg-white pl-12 pr-4 text-base font-medium outline-none transition-colors focus:border-accent"
              required
            />
          </div>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">
            Password
          </span>
          <div className="relative">
            <LockKeyhole
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
            />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              className="h-14 w-full border border-border bg-white pl-12 pr-12 text-base font-medium outline-none transition-colors focus:border-accent"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-ink-muted transition-colors hover:text-accent"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 bg-ink px-5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_18px_36px_rgba(10,17,40,0.18)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <LogIn size={16} />
        {submitting ? "Signing In" : "Sign In"}
      </button>
      </form>

      <Link
        href="/"
        className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 border border-border bg-white px-5 text-xs font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:border-accent hover:text-accent"
      >
        <ArrowLeft size={15} />
        Back to Home
      </Link>
      </div>
    </div>
  );
}
