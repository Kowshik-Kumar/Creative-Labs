export type Project = {
  title: string;
  category: string;
  image: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Atlas Core Platform",
    category: "Web Application",
    image: "/projects/groww.jpg",
    href: "#",
  },
  {
    title: "Northstar CRM",
    category: "Internal Tool",
    image: "/projects/cult.jpg",
    href: "#",
  },
  {
    title: "Helix Health Portal",
    category: "Customer Platform",
    image: "/projects/arovalis.jpg",
    href: "#",
  },
  {
    title: "Relay Ops Automation",
    category: "Workflow System",
    image: "/projects/maddrop.jpg",
    href: "#",
  },
];
