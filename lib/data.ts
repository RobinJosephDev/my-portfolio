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
    title: "Mantraworx",
    description:
      "Built a production-grade, multi-tenant transactional email platform handling the complete email lifecycle from API ingestion to SMTP delivery. Architected a polyglot microservices ecosystem using Go, Node.js/TypeScript, React, PostgreSQL, Redis, and Docker. Features include custom SMTP relay with DKIM signing (RSA-2048 & Ed25519), STARTTLS, IP warmup automation, BullMQ-powered job processing, domain verification, webhook delivery, high-throughput open/click tracking, real-time analytics dashboards, and GDPR-compliant suppression management. Designed for scalability, tenant isolation, observability, and reliable high-volume email delivery.",
    link: "https://mantraworx.com/workspace",
    image: "/images/mantraworx.png",
  },
  {
    id: 2,
    title: "Mail Service",
    description:
      "Built MantraWorx, a comprehensive enterprise workforce and project delivery platform that centralizes HR operations, project management, payroll, finance, document workflows, real-time collaboration, and AI-powered knowledge retrieval. Developed modules for projects, sprints, tasks, attendance, employee management, approvals, budgeting, salary processing, document management, chat, notifications, video meetings, and role-based access control (RBAC). Integrated an AI assistant powered by Retrieval-Augmented Generation (RAG) and structured operational queries to provide intelligent access to organizational knowledge and business data.",
    link: "https://mail.mantraworx.com/admin/",
    image: "/images/email.png",
  },
  {
    id: 3,
    title: "MERN CRM Application",
    description:
      "A production-ready full-stack CRM built with the MERN stack featuring JWT authentication, full Role-Based Access Control (Admin, Employee, Carrier, Customer), dynamic role-based dashboards with analytics, background email queue processing using Redis, secure password reset workflow, lead/quote/shipment management, and complete CRUD operations. Designed with scalable architecture, centralized error handling, secure token management, and real-world business workflow logic.",
    link: "https://github.com/RobinJosephDev/mern-crm",
    image: "/images/mern-crm.png",
  },
  {
    id: 4,
    title: "Full Stack Realtime Chat App",
    description:
      "A MERN stack chat application with real-time messaging, private & group chats, online status, JWT authentication, media uploads via Cloudinary, and a responsive UI built with React, TailwindCSS, and DaisyUI. Powered by Socket.io for live communication and ready for production deployment.",
    link: "https://github.com/RobinJosephDev/mern-chat-app.git",
    image: "/images/mern-chat.png",
  },
  {
    id: 5,
    title: "Resort Booking App",
    description:
      "A full-stack MERN + TypeScript resort booking system with a modern React + Tailwind CSS frontend and a secure Express + MongoDB backend. Features include responsive UI, booking management, admin dashboard, input validation, and RESTful APIs, fully deployable with Vercel and Render.",
    link: "https://github.com/RobinJosephDev/mern-resort-booking.git",
    image: "/images/mern-resort-booking.png",
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
