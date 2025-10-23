// components/Footer.tsx
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16 py-6 text-center">
      <div className="flex justify-center space-x-6 mb-3">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
        >
          <Github />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:your@email.com"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
        >
          <Mail />
        </a>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Robin Jo. All rights reserved.
      </p>
    </footer>
  );
}
