
import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-16 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          Contact Us
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
          Have any questions? We would love to hear from you.
          Get in touch with us anytime.
        </p>
      </section>

      {/* Main Section */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">

        {/* Contact Information */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Get In Touch
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Feel free to contact us if you have any questions,
            suggestions, or feedback. We are always happy to help you.
          </p>

          {/* Email */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-2xl">
              📧
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Email Address
              </h3>
              <p className="text-gray-600">
                hello@example.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-2xl">
              📞
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Phone Number
              </h3>
              <p className="text-gray-600">
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-2xl">
              📍
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Our Location
              </h3>
              <p className="text-gray-600">
                Your City, India
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8">
            <h3 className="font-semibold text-gray-800">
              Follow Us
            </h3>

            <div className="mt-4 flex gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-600">
                IG
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-600">
                f
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-600">
                in
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form UI */}
        <div className="rounded-2xl bg-white p-8 shadow-lg">

          <h2 className="text-2xl font-bold text-gray-800">
            Send Us a Message
          </h2>

          <p className="mt-2 text-gray-500">
            Fill out the form below to get in touch.
          </p>

          <form className="mt-6 space-y-5">

            {/* Name */}
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Subject
              </label>

              <input
                type="text"
                placeholder="Enter subject"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Your Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
              />
            </div>

            {/* Button */}
            <button
              type="button"
              className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Send Message
            </button>

          </form>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-6 py-6 text-center text-gray-300">
        <p>
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default Contact;
