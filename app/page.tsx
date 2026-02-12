import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I’m <span className="text-blue-600 dark:text-blue-400">Robin Joseph</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
              Full Stack Developer focused on building scalable backend systems and end-to-end web applications using Node.js, React, and Laravel.
              Experienced in REST API design, JWT authentication, RBAC, Redis caching, and AWS deployments.
            </p>

            <div className="flex gap-4">
              <Link href="/projects" className="px-6 py-3 rounded bg-gray-900 dark:bg-white text-white dark:text-black font-semibold">
                View Projects
              </Link>

              <Link href="/contact" className="px-6 py-3 rounded border border-gray-300 dark:border-gray-600">
                Contact Me
              </Link>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center">
            <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700">
              <Image src="/profile.png" alt="Robin Joseph" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>

        {/* Skills */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Core Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-2">Backend Engineering</h3>
              <p className="text-gray-700 dark:text-gray-300">Node.js (Express), Laravel, REST APIs, JWT, RBAC, Redis, MongoDB, PostgreSQL, MySQL</p>
            </div>

            <div className="p-5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-2">Frontend Development</h3>
              <p className="text-gray-700 dark:text-gray-300">React, Next.js, Redux, Tailwind CSS, Responsive UI, Component Architecture</p>
            </div>

            <div className="p-5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-2">Cloud & DevOps</h3>
              <p className="text-gray-700 dark:text-gray-300">AWS (EC2, S3), Linux Server Management, GitHub Actions, CI/CD, Git Workflows</p>
            </div>
          </div>
        </section>

        {/* Work Highlights */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Work Highlights</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-2">Scalable Backend Systems</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Designed and maintained Laravel and Node.js APIs, optimized SQL queries, implemented Redis caching, and deployed production
                applications on AWS EC2.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-2">Full Stack Product Development</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Built end-to-end features from database schema design to frontend UI, integrated third-party APIs, and implemented authentication &
                role-based access control.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* CRM */}
            <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-2">MERN CRM Application</h3>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Enterprise-grade CRM with Role-Based Access Control, JWT authentication, Redis-backed background job processing, and complete Lead →
                Quote → Shipment workflow.
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">MongoDB · Express · React (TypeScript) · Node.js · Redis</p>

              <Link href="https://mern-crm-nine.vercel.app/" target="_blank" className="text-blue-600 dark:text-blue-400 underline">
                Live Demo
              </Link>
            </div>

            {/* Chat */}
            <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-2">Realtime Chat Application</h3>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Real-time messaging platform using WebSockets with private & group chat, online/offline presence tracking, and secure Cloudinary media
                uploads.
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Node.js · Express · MongoDB · React · Socket.io</p>

              <Link
                href="https://mern-chat-2xxhq87n8-robinjo1776-5d95d5ba.vercel.app/"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Live Demo
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 p-8 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div>
              <h2 className="text-2xl font-bold">Let’s build something impactful.</h2>
              <p className="text-gray-200 dark:text-gray-700 mt-2">Open to freelance, contract, and full-time backend or full-stack roles.</p>
            </div>

            <div className="flex gap-4 justify-end">
              <Link href="/contact" className="px-6 py-3 rounded bg-white text-black font-semibold dark:bg-gray-800 dark:text-white">
                Contact Me
              </Link>

              <Link href="/Robin_Joseph_Resume.pdf" target="_blank" className="px-6 py-3 rounded border border-gray-300 dark:border-gray-600">
                Download Resume
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
