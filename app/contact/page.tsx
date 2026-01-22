export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Want to collaborate or discuss a project? Send me a message and I’ll get back to you.
          </p>
        </header>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h2 className="font-bold text-lg mb-2">Location</h2>
            <p className="text-gray-700 dark:text-gray-300">Alappuzha, Kerala</p>
          </div>

          <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h2 className="font-bold text-lg mb-2">Email</h2>
            <p className="text-gray-700 dark:text-gray-300">robinjo1776@gmail.com</p>
          </div>

          <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h2 className="font-bold text-lg mb-2">Phone</h2>
            <p className="text-gray-700 dark:text-gray-300">9605556454</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h2 className="font-bold text-xl mb-4">Send a Message</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                rows={5}
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
