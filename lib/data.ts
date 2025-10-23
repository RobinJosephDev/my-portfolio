// lib/data.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image?: string;
}

export interface Skill {
  id: number;
  name: string;
  icon?: string; // optional URL or icon name
}

// Sample projects
export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js, Tailwind, and Redux.",
    link: "https://github.com/yourusername/portfolio",
    image: "/images/portfolio.png",
  },
  {
    id: 2,
    title: "Todo App",
    description: "A simple todo application using React and Redux Toolkit.",
    link: "https://github.com/yourusername/todo-app",
    image: "/images/todo.png",
  },
  {
    id: 3,
    title: "Blog Platform",
    description:
      "A blog platform with Markdown support and user authentication.",
    link: "https://github.com/yourusername/blog-platform",
    image: "/images/blog.png",
  },
];

// Sample skills
export const skills: Skill[] = [
  { id: 1, name: "JavaScript", icon: "/images/icons/js.png" },
  { id: 2, name: "TypeScript", icon: "/images/icons/ts.png" },
  { id: 3, name: "React", icon: "/images/icons/react.png" },
  { id: 4, name: "Next.js", icon: "/images/icons/nextjs.png" },
  { id: 5, name: "Tailwind CSS", icon: "/images/icons/tailwind.png" },
  { id: 6, name: "Redux Toolkit", icon: "/images/icons/redux.png" },
];
