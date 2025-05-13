import React from 'react';

export default function NewsletterSection() {
  return (
    <section className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xl font-medium mb-4">
          Sign up for our newsletter today.
        </h3>
        <form className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 rounded-md text-black w-full sm:w-1/2"
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded-md font-semibold"
          >
            Subscribe
          </button>
        </form>
        <p className="text-sm">We would love to hear from you:</p>
        <p className="text-lg font-semibold">hello@creative.com</p>
      </div>
    </section>
  );
}
