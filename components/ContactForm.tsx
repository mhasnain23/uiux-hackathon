import React from "react";

export function ContactForm() {
  return (
    <form className="w-full max-w-lg flex flex-col gap-6">
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Your Name
          <input
            type="text"
            className="mt-1 w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </label>
      </div>

      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Email Address
          <input
            type="email"
            className="mt-1 w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john@example.com"
          />
        </label>
      </div>

      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Subject
          <input
            type="text"
            className="mt-1 w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="How can we help?"
          />
        </label>
      </div>

      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Message
          <input
            className="mt-1 w-full px-4 py-8 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message here..."
          />
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-[#029fae] hover:bg-[#017e8b] text-white py-3 px-6 rounded-md transition-colors font-medium"
      >
        Send Message
      </button>
    </form>
  );
}
