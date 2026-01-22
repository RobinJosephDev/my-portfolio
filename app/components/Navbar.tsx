"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/slices/themeSlice";
import { RootState } from "@/store";
import { useEffect } from "react";

// Heroicons
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
      
      {/* Logo (clickable) */}
      <Link href="/" className="font-bold text-xl text-black dark:text-white">
        Robin Joseph
      </Link>

      {/* Links */}
      <div className="flex gap-4 items-center">
        <Link href="/" className="text-black dark:text-white hover:underline">
          About Me
        </Link>

        <Link href="/projects" className="text-black dark:text-white hover:underline">
          Projects
        </Link>

        <Link href="/contact" className="text-black dark:text-white hover:underline">
          Contact
        </Link>

        {/* Resume Button */}
        <Link
          href="/resume"
          target="_blank"
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600"
        >
          Resume
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={() => dispatch(toggleTheme())}
          className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
        >
          {darkMode ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
}
