
import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Navbar */}
      {/* <nav className="flex items-center justify-between bg-white px-8 py-5 shadow-md">
        <h1 className="text-2xl font-bold text-indigo-600">
          MyWebsite
        </h1>  */}

        {/* <ul className="hidden gap-8 md:flex">
          <li>
            <a href="/" className="text-indigo-600 hover:text-indigo-800">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-indigo-600">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-indigo-600">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="/login"
          className="rounded-lg bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700"
        >
          Login
        </a> */}
      {/* </nav> */}

      {/* Hero Section */}
      <section className="flex min-h-[75vh] flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
          Welcome to MyWebsite
        </p>

        <h2 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
          Build Your Ideas Into
          <span className="text-indigo-600"> Reality</span>
        </h2>

        <p className="mt-6 max-w-xl text-lg text-gray-600">
          Discover new possibilities, explore creative ideas, and
          start your journey with us today.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/about"
            className="rounded-lg bg-indigo-600 px-7 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Get Started
          </a>

          <a
            href="/contact"
            className="rounded-lg border border-gray-300 bg-white px-7 py-3 font-semibold transition hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold">
            What We Offer
          </h2>

          <p className="mt-3 text-center text-gray-600">
            Everything you need to get started.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">

            <div className="rounded-xl border border-gray-100 p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
              <div className="text-4xl">🚀</div>
              <h3 className="mt-4 text-xl font-bold">
                Innovation
              </h3>
              <p className="mt-3 text-gray-600">
                Explore fresh ideas and discover new opportunities.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
              <div className="text-4xl">🎯</div>
              <h3 className="mt-4 text-xl font-bold">
                Our Goals
              </h3>
              <p className="mt-3 text-gray-600">
                Turn your goals into meaningful achievements.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
              <div className="text-4xl">🤝</div>
              <h3 className="mt-4 text-xl font-bold">
                Community
              </h3>
              <p className="mt-3 text-gray-600">
                Connect with people and grow together.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Ready to Get Started?
        </h2>

        <p className="mt-4 text-indigo-100">
          Take the first step and explore what we have to offer.
        </p>

        <a
          href="/contact"
          className="mt-7 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
        >
          Contact Us
        </a>
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

export default Home;
