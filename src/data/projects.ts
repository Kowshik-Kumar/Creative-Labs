export type Project = {
  title: string;
  category: string;
  image: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Groww Launch Campaign",
    category: "Video & Motion",
    image: "/projects/groww.jpg",
    href: "#",
  },
  {
    title: "Cult Smartwatch Launch",
    category: "Product Video",
    image: "/projects/cult.jpg",
    href: "#",
  },
  {
    title: "Arovalis Brand Identity",
    category: "Branding & Packaging",
    image: "/projects/arovalis.jpg",
    href: "#",
  },
  {
    title: "MadDrop Interactive Website",
    category: "Web Design & Dev",
    image: "/projects/maddrop.jpg",
    href: "#",
  },
];
