console.log("✔ Copilot is editing files");
import type { Metadata } from "next";
import "./globals.css";
import ClientNavBar from "../components/ClientNavBar";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";

export const metadata: Metadata = {
  title: "Orinowo — Luxury AI Music Studio",
  description:
    "Create luxury-grade AI music with social gamification and investor-ready features.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_URL || "https://orinowowa.vercel.app",
  ),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Orinowo — Luxury AI Music Studio",
    description:
      "Cinematic AI music, social gamification, and investor-ready features.",
    images: ["/og.jpg"],
    type: "website",
    siteName: "Orinowo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orinowo — Luxury AI Music Studio",
    description:
      "Cinematic AI music, social gamification, and investor-ready features.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen text-white antialiased">
        <ClientNavBar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
