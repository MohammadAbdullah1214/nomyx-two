import type { Metadata } from "next";
import { CustomCursor, Footer, Navbar } from "@/app/home";
import ContactPageClient from "./ContactPageClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Nomyx | Talk to Our Team",
  description:
    "Contact the Nomyx team about the platform, partnerships and integrations, investor relations, or media. Send a message or book a discovery call.",
  pathname: "/contact-us",
});

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <CustomCursor />
      <Navbar variant="light" transparentInitially={true} hideBorder={true} />
      <main className="overflow-hidden">
        <ContactPageClient />
      </main>
      <Footer />
    </div>
  );
}
