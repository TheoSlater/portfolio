"use client";

import { useEffect, ReactNode } from "react";
import { useBlog, Heading } from "./BlogContext";

interface BlogInitializerProps {
  headings: Heading[];
  children: ReactNode;
}

export function BlogClientWrapper({ headings, children }: BlogInitializerProps) {
  const { setHeadings, setIsExpanded } = useBlog();

  useEffect(() => {
    setHeadings(headings);
    setIsExpanded(false); // Reset expansion on page change

    return () => {
      setHeadings([]);
      setIsExpanded(false);
    };
  }, [headings, setHeadings, setIsExpanded]);

  return <>{children}</>;
}
