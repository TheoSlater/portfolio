import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Theo Slater",
  initials: "TS",
  url: "https://theoslater.vercel.app",
  location: "Ross-on-Wye, Herefordshire, UK",
  locationLink: "https://www.google.com/maps/place/Ross-on-Wye",
  description:
    "Full Stack Junior Developer and enthusiast of all things tech and I love building things.",
  summary:
    "Just before Covid-19 hit, I started getting into coding with python and javascript. I started building small projects and then I got into web development. I started building websites for friends and family, and then I started building my own projects and I'm currently doing GCSE business and computer science degrees. I love building things, and I love learning new things. I am always looking for new challenges and opportunities to learn. [Check out my projects](#projects).",

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
      school: "John Kyrle High School",
      href: "https://jkhs.org.uk",
      degree: "GCSE Computer Science, GCSE Business, GCSE Music",
      logoUrl: "https://www.jkhs.org.uk/_site/images/design/logo.png",
      start: "2021",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Mockmate (unreleased)",
      href: "https://llm.report",
      dates: "Apr 2025 - Present",
      active: true,
      description:
        "A free revision tool for GCSE and A-Level students. Designed precisely to pull students into revision instantly. Mockmate offers a range of features including flashcards, quizzes, and practice exams. It is designed to be simple and easy to use.",
      technologies: ["Next.js", "Typescript", "Shadcn UI", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/1.png",
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
      title: "Chatbot UI (ollama)",
      href: "https://github.com/TheoSlater/chatbot-ui",
      dates: "Apr 2025 - Present",
      active: true,
      description:
        "With the rise of AI and the release of Ollama, I wanted to create a simple and easy to use chatbot UI that anyone can use. This project uses Ollama to run the models locally. Installation tutorials are available on the GitHub page.",
      technologies: ["Next.js", "Typescript", "Ollama", "Material UI"],
      links: [
        {
          type: "Source and installation",
          href: "https://github.com/TheoSlater/chatbot-ui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
