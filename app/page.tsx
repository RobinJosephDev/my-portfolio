import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I’m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Robin Joseph
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
              Full Stack Developer specializing in PHP (Laravel) and JavaScript
              (Node.js, React, Next.js). I build scalable web apps, optimize
              performance, and deliver clean, maintainable code.
            </p>

            <div className="flex gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 rounded bg-gray-900 dark:bg-white text-white dark:text-black font-semibold"
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center">
            <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700">
              <Image
                src="/profile.png"
                alt="Robin Joseph"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Skills */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-2">Backend</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Laravel, Node.js, Express, REST APIs, MySQL, PostgreSQL, Redis
              </p>
            </div>
            <div className="p-5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-2">Frontend</h3>
              <p className="text-gray-700 dark:text-gray-300">
                React, Next.js, Redux, Tailwind CSS, Responsive UI
              </p>
            </div>
            <div className="p-5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-2">Cloud & DevOps</h3>
              <p className="text-gray-700 dark:text-gray-300">
                AWS (EC2, S3), Linux, GitHub Actions, CI/CD
              </p>
            </div>
          </div>
        </section>

        {/* Work Highlights */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Work Highlights</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-2">Laravel + PHP</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Built and maintained Laravel applications, migrated legacy PHP,
                optimized SQL queries and caching using Redis.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-2">Full Stack JavaScript</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Built Node.js APIs, React/Next.js frontends, real-time apps with
                Socket.io and deployed on AWS.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-2">MERN Ecommerce</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Full-stack ecommerce with JWT auth, cart, checkout & admin
                dashboard.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-2">Realtime Chat</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Chat app using Socket.io with online/offline status & media
                upload.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-2">Event Booking</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Next.js + Node.js booking platform with RBAC and analytics
                dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 p-8 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div>
              <h2 className="text-2xl font-bold">
                Want to build something together?
              </h2>
              <p className="text-gray-200 dark:text-gray-700 mt-2">
                I’m open to freelance, contract, and full-time roles. Let’s
                connect.
              </p>
            </div>
            <div className="flex gap-4 justify-end">
              <Link
                href="/contact"
                className="px-6 py-3 rounded bg-white text-black font-semibold dark:bg-gray-800 dark:text-white"
              >
                Contact Me
              </Link>

              <Link
                href="/resume"
                target="_blank"
                className="px-6 py-3 rounded border border-gray-300 text-white dark:border-gray-600 dark:text-white dark:bg-gray-800"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
