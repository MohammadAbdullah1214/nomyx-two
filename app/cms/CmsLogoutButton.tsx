"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function CmsLogoutButton() {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  const logout = async () => {
    setLoggingOut(true);

    try {
      const response = await fetch("/api/cms/logout", { method: "POST" });

      if (!response.ok) {
        throw new Error("Unable to sign out.");
      }

      router.replace("/cms/login");
      router.refresh();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to sign out.");
      setLoggingOut(false);
    }
  };

  return (
    <button
      type="button"
      onClick={logout}
      disabled={loggingOut}
      className="inline-flex h-12 items-center justify-center gap-2 border border-border bg-white px-5 text-xs font-bold uppercase tracking-[0.16em] text-ink shadow-sm transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <LogOut size={16} className="text-accent" />
      {loggingOut ? "Signing Out" : "Logout"}
    </button>
  );
}
