import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/components/JsonLd";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f8fafc",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhruvisoftwaresolutions.com"),
  title: {
    default: "Dhruvi Software Solutions | Software Products & Custom Engineering",
    template: "%s | Dhruvi Software Solutions",
  },
  description:
    "We build our own software platforms (Neojan & Talentgate) and engineer custom digital solutions for ambitious businesses — from SaaS platforms and web applications to enterprise software and product engineering.",
  keywords: [
    "software development company",
    "software development company India",
    "custom software development",
    "product engineering company",
    "SaaS development company",
    "Neojan platform",
    "Talentgate recruitment software",
    "enterprise software development",
    "software modernization",
  ],
  authors: [{ name: "Dhruvi Software Solutions" }],
  creator: "Dhruvi Software Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhruvisoftwaresolutions.com",
    title: "Dhruvi Software Solutions | Software Products & Custom Engineering",
    description:
      "We build our own software platforms and engineer custom software applications for ambitious businesses looking to launch, scale, and automate.",
    siteName: "Dhruvi Software Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruvi Software Solutions | Software Products & Custom Engineering",
    description:
      "We build our own software products and engineer custom software for ambitious businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-sky-500/20 selection:text-sky-900">
        <Navbar />
        <main className="flex-grow pt-16 sm:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
