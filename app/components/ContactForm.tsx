// components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-green-500">Message Sent!</h2>
        <p className="text-gray-500 mt-2">
          Thanks for reaching out. I’ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
        Contact Me
      </h2>

      <input
        type="text"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <input
        type="email"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <textarea
        placeholder="Your Message"
        required
        rows={5}
        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
