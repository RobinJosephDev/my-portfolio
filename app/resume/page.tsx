import Link from "next/link";

export const metadata = {
  title: "Resume",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Robin Joseph</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">Full Stack Developer | Node.js | React | REST APIs | AWS</p>
        </header>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <div className="space-y-1 text-gray-700 dark:text-gray-300">
            <div>Bengaluru, India</div>
            <div>📞 9605556454</div>
            <div>✉️ robinjo1776@gmail.com</div>
            <div className="flex gap-4">
              <Link href="https://github.com/RobinJosephDev" target="_blank" className="underline hover:text-blue-500">
                GitHub
              </Link>
              <Link href="https://linkedin.com/in/yourprofile" target="_blank" className="underline hover:text-blue-500">
                LinkedIn
              </Link>
              <Link href="https://my-portfolio-lemon-two-94.vercel.app/" target="_blank" className="underline hover:text-blue-500">
                Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Summary</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Full Stack Developer with 3+ years of experience building scalable backend systems and end-to-end web applications using Node.js, React,
            and Laravel. Experienced in REST API design, JWT authentication, RBAC implementation, database optimization (SQL & MongoDB), Redis
            caching, and AWS deployments. Backend-focused engineer comfortable owning features from architecture to production.
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>

          <div className="space-y-6">
            {/* Freelance */}
            <div>
              <h3 className="text-xl font-bold">Full Stack Developer – Freelance</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">May 2024 – Oct 2025</p>
              <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
                <li>Designed and maintained Laravel-based applications with RESTful APIs serving production workloads.</li>
                <li>Migrated legacy PHP systems to Laravel & PHP 8+, improving maintainability and performance.</li>
                <li>Implemented Redis caching and optimized SQL queries, improving API response times.</li>
                <li>Deployed and managed applications on AWS EC2 with Linux server configuration.</li>
              </ul>
            </div>

            {/* Contract */}
            <div>
              <h3 className="text-xl font-bold">Software Developer – Contract</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sealink Logistics, Vancouver | May 2023 – Nov 2023</p>
              <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
                <li>Enhanced Laravel backend for a secure credit reporting system.</li>
                <li>Migrated database from MySQL to Amazon Redshift for improved analytics performance.</li>
                <li>Integrated third-party vendor APIs with secure data exchange workflows.</li>
                <li>Managed feature branches and production deployments using Git workflows.</li>
              </ul>
            </div>

            {/* Web Developer */}
            <div>
              <h3 className="text-xl font-bold">Web Developer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Vandalay Business Solutions, Kochi | Oct 2025 – Jan 2026</p>
              <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
                <li>Developed responsive WordPress websites from design mockups.</li>
                <li>Built reusable backend modules reducing development time by 30%.</li>
                <li>Optimized website performance and ensured cross-browser compatibility.</li>
              </ul>
            </div>

            {/* PHP Developer */}
            <div>
              <h3 className="text-xl font-bold">PHP Developer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hackney Solutions, Kerala | Sep 2016 – Nov 2017</p>
              <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
                <li>Developed WordPress and Magento websites with payment gateway integrations.</li>
                <li>Customized themes and plugins to extend CMS functionality.</li>
                <li>Improved performance and security for production deployments.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>

          <div className="space-y-6">
            {/* CRM */}
            <div>
              <h3 className="text-xl font-bold">MERN CRM Application</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Enterprise-grade CRM with Role-Based Access Control, JWT authentication, Redis-backed background jobs, and full Lead → Quote →
                Shipment workflow.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tech: MongoDB, Express.js, React (TypeScript), Node.js, Redis, JWT</p>
              <Link href="https://mern-crm-nine.vercel.app/" target="_blank" className="underline text-blue-500">
                Live Demo
              </Link>
            </div>

            {/* Chat */}
            <div>
              <h3 className="text-xl font-bold">Realtime Chat Application</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Real-time messaging platform using WebSockets with private/group chat, presence tracking, and Cloudinary media uploads.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tech: Node.js, Express, MongoDB, React, Socket.io</p>
              <Link href="https://mern-chat-2xxhq87n8-robinjo1776-5d95d5ba.vercel.app/" target="_blank" className="underline text-blue-500">
                Live Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
            <div>
              <strong>Backend:</strong> Node.js (Express), PHP (Laravel), REST APIs, JWT, RBAC, MVC
            </div>
            <div>
              <strong>Frontend:</strong> React.js, Next.js, Redux, JavaScript (ES6+), Tailwind CSS
            </div>
            <div>
              <strong>Database:</strong> MongoDB, PostgreSQL, MySQL, Redis
            </div>
            <div>
              <strong>Cloud & DevOps:</strong> AWS (EC2, S3), Linux, GitHub Actions
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>

          <div className="space-y-3">
            <div>
              <h3 className="font-bold">Graduate Certificate in Database Application Development</h3>
              <p className="text-gray-600 dark:text-gray-400">Seneca College</p>
            </div>

            <div>
              <h3 className="font-bold">Bachelor of Electronics and Telecommunication Engineering</h3>
              <p className="text-gray-600 dark:text-gray-400">University of Mumbai</p>
            </div>
          </div>
        </section>

        {/* Resume Download */}
        <section className="mt-8">
          <Link
            href="/Robin_Joseph_Resume.pdf"
            target="_blank"
            className="inline-block px-6 py-3 rounded bg-gray-900 dark:bg-white text-white dark:text-black font-semibold"
          >
            Download Resume (PDF)
          </Link>
        </section>
      </section>
    </main>
  );
}
