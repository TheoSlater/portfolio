import type { Metadata } from "next";
import { BlogClient } from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights and experiences from Theo Slater's journey as a developer — exploring ideas, overcoming challenges, and sharing lessons learned.",
  alternates: {
    canonical: "https://theoslater.xyz/blog",
  },
  openGraph: {
    title: "Blog | Theo Slater",
    description:
      "Insights and experiences from Theo Slater's journey as a developer.",
    url: "https://theoslater.xyz/blog",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
