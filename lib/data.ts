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
    title: "MERN CRM Application",
    description:
      "A production-ready full-stack CRM built with the MERN stack featuring JWT authentication, full Role-Based Access Control (Admin, Employee, Carrier, Customer), dynamic role-based dashboards with analytics, background email queue processing using Redis, secure password reset workflow, lead/quote/shipment management, and complete CRUD operations. Designed with scalable architecture, centralized error handling, secure token management, and real-world business workflow logic.",
    link: "https://github.com/RobinJosephDev/mern-crm", // update if different
    image: "/images/mern-crm.png",
  },
  {
    id: 2,
    title: "Full Stack Realtime Chat App",
    description:
      "A MERN stack chat application with real-time messaging, private & group chats, online status, JWT authentication, media uploads via Cloudinary, and a responsive UI built with React, TailwindCSS, and DaisyUI. Powered by Socket.io for live communication and ready for production deployment.",
    link: "https://github.com/RobinJosephDev/mern-chat-app.git",
    image: "/images/mern-chat.png",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive developer portfolio built with Next.js, TypeScript, and Tailwind CSS to showcase projects, skills, and experience. Features include reusable components, optimized images, SEO-friendly pages, smooth animations, and a clean UI designed for performance and accessibility. Deployed with Vercel for fast global delivery.",
    link: "https://github.com/RobinJosephDev/my-portfolio",
    image: "/images/my-portfolio.png",
  },
  {
    id: 4,
    title: "Resort Booking App",
    description:
      "A full-stack MERN + TypeScript resort booking system with a modern React + Tailwind CSS frontend and a secure Express + MongoDB backend. Features include responsive UI, booking management, admin dashboard, input validation, and RESTful APIs, fully deployable with Vercel and Render.",
    link: "https://github.com/RobinJosephDev/mern-resort-booking.git",
    image: "/images/mern-resort-booking.png",
  },

  {
    id: 5,
    title: "Event Booking & Management Platform",
    description:
      "A full-stack platform built with Next.js, React, Tailwind CSS, Node.js, Express, and PostgreSQL, enabling users to browse, book, and manage event tickets, while admins can oversee events, bookings, and analytics. Features include JWT authentication, role-based access, responsive design, real-time booking validation, and an admin dashboard.",
    link: "https://github.com/RobinJosephDev/next-event-booking.git",
    image: "/images/next-event-booking.png",
  },
  {
    id: 6,
    title: "MEAN ERP",
    description:
      "Small ERP System – A full-stack MEAN + TypeScript ERP application featuring JWT authentication, role-based access (Admin/Manager/Employee), inventory and sales modules, and a dynamic dashboard with KPIs and charts. Built with Angular, Node.js, Express, MongoDB, and deployable via Vercel and Render, with optional Docker support for local orchestration.",
    link: "https://github.com/RobinJosephDev/mean-crud.git",
    image: "/images/mean-app.png",
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
