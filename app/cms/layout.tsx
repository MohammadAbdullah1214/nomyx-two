"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FileText, Newspaper, FolderTree, Users, LayoutDashboard, LogOut, UserCircle } from "lucide-react";
import CmsLogoutButton from "@/app/cms/CmsLogoutButton";

export default function CmsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/cms/blogs", label: "Blog Entries", icon: FileText },
    { href: "/cms/news", label: "News Articles", icon: Newspaper },
    { href: "/cms/authors", label: "Authors", icon: UserCircle },
    { href: "/cms/categories", label: "News Categories", icon: FolderTree },
    { href: "/cms/leads", label: "Resource Leads", icon: Users },
  ];

  if (pathname === "/cms/login") {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-[#F8FBFF]">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-border bg-white shadow-sm flex flex-col shrink-0 sticky top-0 h-screen overflow-y-auto">
        <div className="p-6 border-b border-border">
          <Link href="/" className="flex items-center gap-2">
            {/* <span className="text-xl font-black uppercase tracking-tighter">Nomyx</span> */}
            <img src="/nomyx-logo.png" alt="Nomyx Logo" className={`h-8 xl:h-9 w-33 object-contain transition-all duration-300`} />
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded">CMS</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-[10px] text-[12px] font-bold uppercase tracking-widest transition-all duration-200 ${
                  isActive 
                    ? "bg-accent text-white shadow-[0_8px_20px_-6px_rgba(33,94,199,0.4)] translate-x-1" 
                    : "text-ink-muted hover:bg-slate-50 hover:text-ink hover:translate-x-0.5"
                }`}
              >
                <Icon size={18} className={isActive ? "text-white" : "text-slate-400"} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <CmsLogoutButton />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
