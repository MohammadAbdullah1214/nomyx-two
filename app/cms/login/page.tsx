import LoginForm from "./LoginForm";

type CmsLoginPageProps = {
  searchParams: Promise<{
    next?: string;
  }>;
};

function getSafeNextPath(nextPath: string | undefined) {
  if (!nextPath || !nextPath.startsWith("/cms/") || nextPath === "/cms/login") {
    return "/cms/blogs";
  }

  return nextPath;
}

export default async function CmsLoginPage({ searchParams }: CmsLoginPageProps) {
  const params = await searchParams;
  const nextPath = getSafeNextPath(params.next);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(191,219,254,0.32),transparent_28%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_24%,#f8fafc_100%)] text-ink">
      <div className="custom-container flex min-h-screen items-center justify-center py-12">
        <LoginForm nextPath={nextPath} />
      </div>
    </main>
  );
}
