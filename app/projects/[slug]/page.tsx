import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import ProjectBlogLayout from "@/app/features/projects/components/ProjectBlogLayout";
import { Metadata } from "next";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { MDX_COMPONENTS } from "@/mdx-components";
import remarkGfm from "remark-gfm";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Theo Slater`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { default: MDXContent } = await evaluate(project.content, {
    ...runtime,
    remarkPlugins: [remarkGfm],
  });

  return (
    <ProjectBlogLayout project={project}>
      <MDXContent components={MDX_COMPONENTS} />
    </ProjectBlogLayout>
  );
}
