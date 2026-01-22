import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Robin Joseph</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Full Stack Developer with 3+ years of hands-on experience building and shipping end-to-end web applications. Strong background in PHP (Laravel) and JavaScript/TypeScript, with practical experience across Node.js, REST APIs, React, and database-driven systems.
          </p>
        </header>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <div className="space-y-1 text-gray-700 dark:text-gray-300">
            <div>Alappuzha, Kerala</div>
            <div>📞 9605556454</div>
            <div>✉️ robinjo1776@gmail.com</div>
            <div className="flex gap-4">
              <Link href="#" className="underline hover:text-blue-500">
                Github
              </Link>
              <Link href="#" className="underline hover:text-blue-500">
                LinkedIn
              </Link>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Summary</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Full Stack Developer with 3+ years of hands-on experience building and shipping end-to-end web applications. Strong background in PHP (Laravel) and JavaScript/TypeScript, with practical experience across Node.js, REST APIs, React, and database-driven systems. Comfortable owning features from UI to backend, integrating third-party services, debugging production issues, and supporting deployments. Enjoys working in small teams and building real-world products.
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">Web Developer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hackney Solutions, Haripad, Kerala</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sep 2016 - Nov 2017</p>
              <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
                <li>Converted design mockups into responsive WordPress websites.</li>
                <li>Customized themes and plugins for client-specific functionality.</li>
                <li>Developed reusable backend modules, reducing development time by 30%.</li>
                <li>Ensured cross-browser compatibility and optimized site responsiveness.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold">PHP Developer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Vandalay Business Solutions, Kochi, Kerala</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Oct 2025 - Present</p>
              <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
                <li>Worked on Laravel backend to implement required changes for credit check report.</li>
                <li>Changed database from MySQL to Redshift for a social media project.</li>
                <li>Integrated API for third party vendor.</li>
                <li>Utilized GitHub to clone, merge and push changes to dev, pre and prod.</li>
                <li>Communicated with seniors when facing issues.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold">Software Developer (Contract)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Instalogic Marketing, Calgary, Canada</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">May 2023 - Nov 2023</p>
              <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
                <li>Designed and maintained Laravel-based applications with RESTful APIs.</li>
                <li>Migrated and refactored legacy PHP code to modern Laravel and PHP 8+ standards.</li>
                <li>Implemented Redis caching and optimized SQL queries for better response times.</li>
                <li>Deployed applications on AWS EC2 and handled Linux server configuration.</li>
                <li>Developed side projects using Node.js (Express) and React.js/Next.js.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold">Full Stack PHP Developer (Freelance)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sealink Logistics, Vancouver, Canada</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">May 2024 - Oct 2025</p>
              <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
                <li>Worked on full-stack PHP and Laravel projects for clients.</li>
                <li>Delivered robust backend APIs and improved application performance.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">MERN Ecommerce Platform</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Full-stack ecommerce application with JWT authentication, product catalog, cart, checkout, and admin dashboard.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tech Stack: Node.js, Express, MongoDB, JWT, React, Tailwind CSS, Zustand</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Realtime Chat Application (MERN + Socket.io)</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Real-time messaging platform with private/group chat, presence indicators, and Cloudinary media uploads.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tech Stack: Node.js, Express, Socket.io, MongoDB, React, Tailwind CSS</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Event Booking & Management Platform</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Event management system with JWT authentication, role-based access, and SEO optimized frontend using Next.js.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tech Stack: Node.js, Express, PostgreSQL, Next.js, React, Tailwind CSS</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold">Backend</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Node.js (Express), PHP (Laravel, CodeIgniter), REST APIs, MVC Architecture
              </p>
            </div>
            <div>
              <h3 className="font-bold">Frontend</h3>
              <p className="text-gray-700 dark:text-gray-300">
                React.js, Redux, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap
              </p>
            </div>
            <div>
              <h3 className="font-bold">Database</h3>
              <p className="text-gray-700 dark:text-gray-300">
                MySQL, PostgreSQL, MongoDB, Redis Caching, Query Optimization
              </p>
            </div>
            <div>
              <h3 className="font-bold">Cloud & DevOps</h3>
              <p className="text-gray-700 dark:text-gray-300">
                AWS (EC2, S3, Route 53), Linux Server Management, CI/CD (GitHub Actions)
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Graduate Certificate in Database Application Development</h3>
              <p className="text-gray-600 dark:text-gray-400">Seneca College of Applied Science and Technology</p>
              <p className="text-gray-600 dark:text-gray-400">Jan 2022 - Aug 2022</p>
            </div>

            <div>
              <h3 className="font-bold">Bachelor of Electronics and Telecommunication Engineering</h3>
              <p className="text-gray-600 dark:text-gray-400">University of Mumbai</p>
              <p className="text-gray-600 dark:text-gray-400">Aug 2007 - Aug 2013</p>
            </div>
          </div>
        </section>

        {/* Resume Download */}
        <section className="mt-8">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-block px-6 py-3 rounded bg-gray-900 dark:bg-white text-white dark:text-black font-semibold"
          >
            Download Resume
          </Link>
        </section>
      </section>
    </main>
  );
}
