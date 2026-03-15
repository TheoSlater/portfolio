import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Providers from "./providers";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Geist } from "next/font/google";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Theo Slater | Full-Stack Developer",
  description:
    "15-year-old Full-Stack Developer & Founder of Monolabs. Building minimal, powerful software.",
  keywords: [
    "developer",
    "full-stack",
    "react",
    "typescript",
    "golang",
    "monolabs",
  ],
  authors: [{ name: "Theo Slater" }],
  creator: "Theo Slater",
  openGraph: {
    title: "Theo Slater | Full-Stack Developer",
    description: "15-year-old Full-Stack Developer & Founder of Monolabs.",
    url: "https://theoslater.is-a.dev",
    siteName: "Theo Slater",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Theo Slater | Full-Stack Developer",
    description: "15-year-old Full-Stack Developer & Founder of Monolabs.",
    creator: "@theoslater",
  },
  other: {
    "google-site-verification": "google987579226cc311be.html",
  },
};

const geist = Geist({
  subsets: ["latin"],
});

const GradualBlur = dynamic(() => import("./components/layout/gradual-blur"));

const ConstructionDialog = dynamic(() => import("./components/layout/construction-dialog"));
const Footer = dynamic(() => import("./components/layout/footer"));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <GradualBlur
          target="page"
          position="bottom"
          height="6rem"
          strength={1}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
          zIndex={2000}
        />
        <ConstructionDialog />
        <Providers>
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
