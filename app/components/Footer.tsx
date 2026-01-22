import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 text-center dark:bg-gray-900">
      <div className="flex justify-center space-x-6 mb-3">
        <a
          href="https://github.com/RobinJosephDev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-500 transition dark:text-white"
        >
          <Github />
        </a>
        <a
          href="https://linkedin.com/in/rjo17"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-500 transition dark:text-white"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:robinjo1776@email.com"
          className="text-gray-600 hover:text-blue-500 transition dark:text-white"
        >
          <Mail />
        </a>
      </div>
      <p className="text-sm text-gray-500 dark:text-white">
        © {new Date().getFullYear()} Robin Jo. All rights reserved.
      </p>
    </footer>
  );
}
