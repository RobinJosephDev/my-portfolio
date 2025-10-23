"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
      >
        Hi, I’m <span className="text-blue-500">Robin</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl"
      >
        I’m a passionate web developer focused on building beautiful and
        performant web applications.
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
      >
        View My Work
      </motion.a>
    </section>
  );
}
