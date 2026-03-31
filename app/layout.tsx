import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Providers from "./providers";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Geist } from "next/font/google";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  metadataBase: new URL("https://theoslater.xyz"),
  title: {
    default: "Theo Slater | Full-Stack Developer",
    template: "%s | Theo Slater",
  },
  description:
    "Theo Slater — 16-year-old Full-Stack Developer & Founder of Monolabs. Building minimal, powerful software with React, TypeScript, and Go.",
  keywords: [
    "Theo Slater",
    "Theo Slater developer",
    "Theo Slater Monolabs",
    "theoslater",
    "full-stack developer",
    "react developer",
    "typescript",
    "golang",
    "monolabs",
    "web developer",
    "software engineer",
  ],
  authors: [{ name: "Theo Slater", url: "https://theoslater.xyz" }],
  creator: "Theo Slater",
  alternates: {
    canonical: "https://theoslater.xyz",
  },
  openGraph: {
    title: "Theo Slater | Full-Stack Developer",
    description:
      "Theo Slater — 16-year-old Full-Stack Developer & Founder of Monolabs. Building minimal, powerful software.",
    url: "https://theoslater.xyz",
    siteName: "Theo Slater",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Theo Slater | Full-Stack Developer",
    description:
      "Theo Slater — 16-year-old Full-Stack Developer & Founder of Monolabs.",
    creator: "@theoslater",
  },
  verification: {
    google: "google987579226cc311be",
  },
};

const geist = Geist({
  subsets: ["latin"],
});

const GradualBlur = dynamic(() => import("./components/layout/gradual-blur"));

const ConstructionDialog = dynamic(
  () => import("./components/layout/construction-dialog"),
);
const Footer = dynamic(() => import("./components/layout/footer"));

import { Dock } from "./components/ui/dock";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Theo Slater",
  url: "https://theoslater.xyz",
  sameAs: ["https://github.com/theoslater", "https://monolabs.site"],
  jobTitle: "Full-Stack Developer",
  description:
    "Theo Slater is a 16-year-old Full-Stack Developer and Founder of Monolabs, specialising in React, TypeScript, and Go.",
  knowsAbout: [
    "React",
    "TypeScript",
    "Go",
    "Full-Stack Development",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="u4RNoQi70-hSfV4GxcuUAEk8jRSWyKIWI3ZGqW8mq-A"
      />
      <body className={geist.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
          <Dock />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
