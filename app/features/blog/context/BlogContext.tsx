"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Heading = {
  id: string;
  text: string;
  level: 2 | 3;
};

interface BlogContextType {
  headings: Heading[];
  setHeadings: (headings: Heading[]) => void;
  activeId: string;
  setActiveId: (id: string) => void;
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
  toggleExpanded: () => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function BlogProvider({ children }: { children: ReactNode }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  return (
    <BlogContext.Provider
      value={{
        headings,
        setHeadings,
        activeId,
        setActiveId,
        isExpanded,
        setIsExpanded,
        toggleExpanded,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
}
