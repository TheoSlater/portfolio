import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Theo Slater",
  initials: "TS",
  url: "https://theoslater.vercel.app",
  location: "Ross-on-Wye, Herefordshire, UK",
  locationLink: "https://www.google.com/maps/place/Ross-on-Wye",
  description:
    "Full Stack Junior Developer with a passion for technology and a love for building creative, functional solutions.",
  summary:
    "Just before Covid-19 hit, I started exploring coding with Python and JavaScript. I began with small projects, which quickly led me into the world of web development. I started creating websites for friends and family, and soon after, I began building my own passion projects. I'm currently studying GCSE Business and Computer Science, and I'm always driven by a deep love for learning and building. Whether it's experimenting with new technologies or solving real-world problems, I'm constantly looking for new challenges and opportunities to grow. [Check out my projects](#projects).  ",

  avatarUrl: "/headshot 2.jpg",
  skills: ["React", "Next.js", "Typescript", "Node.js", "Python", "Go", "C#"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "theoslater1@gmail.com",
    tel: "07931364074",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/TheoSlater",
        icon: Icons.github,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/theoslatwork",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelance Software Engineer",
      href: "/",
      badges: [],
      location: "Remote / Independent",
      title: "Freelance Software Engineer",
      logoUrl: "",
      start: "Nov 2022",
      end: "Present",
      description:
        "Building custom software solutions for clients ranging from startups to small businesses. Projects include web applications, automation scripts, and consulting on architecture and scaling. I work independently, managing client relations, development, and deployment.",
    },
  ],
  education: [
    {
      school: "GCSE",
      href: "/",
      degree: "GCSE Computer Science, GCSE Business, GCSE Music",
      logoUrl: "",
      start: "2024",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Stak.",
      href: "https://github.com/TheoSlater/stak.dev",
      dates: "June 2025 - Present",
      active: true,
      description:
        "A code generation platform that utilises Ollama to run local LLMs. This is in development and guaranteed to have issues.",
      technologies: [
        "Next.js",
        "Typescript",
        "Material UI",
        "TailwindCSS",
        "StackBlitz WebContainers",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/TheoSlater/stak.dev",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/stak.svg",
      video: "",
    },
    {
      title: "Forma UI (unreleased)",
      href: "https://github.com/TheoSlater/forma-ui",
      dates: "June 2025 - Present",
      active: true,
      description:
        "Designed, developed and simple UI library built from shadcn. It is designed to be simple and easy to use, with a focus on performance and accessibility. And guess wha? It's open source! You can use it in your own projects, and contribute to its development.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Framer-Motion",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/TheoSlater/forma-ui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Forma_UI.png",
      video: "",
    },
    {
      title: "Supabase Auth Template",
      href: "https://github.com/TheoSlater/supabase-auth-template",
      dates: "Nov 2024 - Nov 2024",
      active: false,
      description:
        "A simple and easy to use authentication template for Supabase. It is designed to be used as a starting point for your own projects, with a focus on simplicity and ease of use. It includes features such as email verification, password reset, and social login.",
      technologies: ["Next.js", "Typescript", "Supabase", "Material UI"],
      links: [
        {
          type: "Github",
          href: "https://github.com/TheoSlater/supabase-auth-template",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/auth_template_png.png",
      video: "",
    },
    {
      title: "Ollama UI",
      href: "https://github.com/TheoSlater/ollama-ui",
      dates: "July 2025 - Present",
      active: true,
      description:
        "This is a frontend for Ollama that utilises their CLI to pull, create and run Ollama models. Installation tutorials are available on the GitHub page. In development.",
      technologies: ["Next.js", "Typescript", "Ollama", "Material UI"],
      links: [
        {
          type: "Source and installation",
          href: "https://github.com/TheoSlater/ollama-ui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "ollama-ui.svg",
      video: "",
    },
  ],
} as const;
