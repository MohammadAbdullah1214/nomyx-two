import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ToastProvider from "@/app/components/ToastProvider";
import localFont from "next/font/local";

const openSauceSans = localFont({
  src: [
    {
      path: "../public/fonts/OpenSauceSans-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/OpenSauceSans-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/fonts/OpenSauceSans-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/OpenSauceSans-SemiBold.ttf",
      weight: "600",
      style: "semi-bold",
    },
    {
      path: "../public/fonts/OpenSauceSans-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/fonts/OpenSauceSans-ExtraBold.ttf",
      weight: "800",
      style: "extra-bold",
    },
  ],
  variable: "--font-open-sauce",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nomyx.io"),
  title: "Nomyx - Agile Infrastructure for Institutional Capital",
  description:
    "Tokenization infrastructure for institutional capital with upgradeable smart contracts and built-in compliance.",
  applicationName: "Nomyx",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nomyx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSauceSans.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MXFWRT49');`,
          }}
        />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="NrLNMOqsZRzdvyokHjuxwQ" async></script>
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MXFWRT49"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
