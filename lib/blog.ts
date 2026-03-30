import fs from "fs";
import path from "path";

export type BlogFrontmatter = {
  title: string;
  year: string;
  description: string;
  image?: string;
  slug: string;
};

export type BlogPost = BlogFrontmatter & {
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

function parseFrontmatter(raw: string): {
  data: BlogFrontmatter;
  content: string;
} {
  // Normalize line endings
  const normalized = raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();
  
  // More robust regex: handle optional spaces and surrounding newlines
  const match = normalized.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  
  if (!match) {
    // Fallback: try to find the second --- if it's missing a newline
    const lines = normalized.split("\n");
    if (lines[0].trim() === "---") {
      let endIdx = -1;
      for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim() === "---") {
          endIdx = i;
          break;
        }
      }
      if (endIdx > -1) {
        const yamlBlock = lines.slice(1, endIdx).join("\n");
        const content = lines.slice(endIdx + 1).join("\n").trim();
        return parseYaml(yamlBlock, content);
      }
    }
    throw new Error(`Invalid MDX frontmatter. Content length: ${raw.length}`);
  }

  const yamlBlock = match[1];
  const content = match[2].trim();
  return parseYaml(yamlBlock, content);
}

function parseYaml(yamlBlock: string, content: string): { data: BlogFrontmatter; content: string } {
  const data: Record<string, string> = {};
  for (const line of yamlBlock.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx > -1) {
      const key = line.slice(0, colonIdx).trim();
      const val = line
        .slice(colonIdx + 1)
        .trim()
        .replace(/^["']|["']$/g, ""); // Handle both single and double quotes
      data[key] = val;
    }
  }

  return { data: data as unknown as BlogFrontmatter, content };
}


export function getAllBlogPosts(): BlogFrontmatter[] {
  try {
    if (!fs.existsSync(CONTENT_DIR)) {
      return [];
    }
    const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
    return files.map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
      const { data } = parseFrontmatter(raw);
      return data;
    });
  } catch {
    return [];
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = parseFrontmatter(raw);
    return { ...data, content };
  } catch {
    return null;
  }
}
