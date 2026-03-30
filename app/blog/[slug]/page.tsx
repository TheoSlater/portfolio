import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";
import ProjectBlogLayout from "@/app/features/projects/components/ProjectBlogLayout";
import { Metadata } from "next";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { MDX_COMPONENTS } from "@/mdx-components";
import remarkGfm from "remark-gfm";
import rehypeStarryNight from "rehype-starry-night";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Theo Slater`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const { default: MDXContent } = await evaluate(post.content, {
    ...runtime,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeStarryNight],
  });

  return (
    <ProjectBlogLayout project={post as any}>
      <MDXContent components={MDX_COMPONENTS} />
    </ProjectBlogLayout>
  );
}
