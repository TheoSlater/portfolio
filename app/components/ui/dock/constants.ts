export const DEFAULT_MAGNIFICATION = 60;
export const DEFAULT_DISTANCE = 140;

/* Apple Dynamic Island spring — snappy with natural settle */
export const ISLAND_SPRING = {
  type: "spring" as const,
  stiffness: 400,
  damping: 34,
  mass: 0.8,
};

export const ISLAND_EASE = [0.4, 0, 0.2, 1] as const;

export interface NavItem {
  name: string;
  label: string;
  emoji?: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    name: "home",
    label: "Hi",
    emoji: "👋",
    href: "/",
  },
  {
    name: "projects",
    label: "Projects",
    href: "/projects",
  },
  {
    name: "blog",
    label: "Blog",
    href: "/blog",
  },
  {
    name: "about",
    label: "About",
    href: "/about",
  },
];
