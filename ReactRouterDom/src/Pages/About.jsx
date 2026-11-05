
import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-20 text-center text-white">
        <h1 className="text-4xl font-extrabold md:text-5xl">
          About Us
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-indigo-100">
          We believe in creativity, innovation, and building
          meaningful experiences for everyone.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
        >
          Back to Home
        </a>
      </section>

      {/* About Content */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">

        <div>
          <p className="font-semibold uppercase tracking-widest text-indigo-600">
            Who We Are
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            We Turn Ideas Into Reality
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Welcome to MyWebsite! We are passionate about creating
            useful, simple, and innovative digital experiences.
            Our goal is to make things easier for people through
            creativity, technology, and collaboration.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            We believe that every great idea begins with a vision.
            Our focus is on continuous improvement, learning, and
            creating experiences that make a difference.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Contact Us
          </a>
        </div>

        {/* Illustration Card */}
        <div className="flex min-h-72 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-200 p-10">
          <div className="text-center">
            <div className="text-8xl">💡</div>
            <h3 className="mt-5 text-2xl font-bold text-indigo-700">
              Ideas. Innovation. Growth.
            </h3>
            <p className="mt-3 text-gray-600">
              Building a better future together.
            </p>
          </div>
        </div>

      </section>

      {/* Mission and Vision */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-3xl font-bold">
            Our Mission & Vision
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl border border-gray-100 p-8 shadow-sm transition hover:shadow-lg">
              <div className="text-4xl">🎯</div>

              <h3 className="mt-4 text-2xl font-bold text-indigo-600">
                Our Mission
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Our mission is to provide a simple, accessible,
                and engaging experience that helps people explore
                ideas and achieve their goals.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 p-8 shadow-sm transition hover:shadow-lg">
              <div className="text-4xl">🌟</div>

              <h3 className="mt-4 text-2xl font-bold text-indigo-600">
                Our Vision
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Our vision is to create a future where creativity,
                technology, and collaboration help everyone reach
                their full potential.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-3xl font-bold">
            Why Choose Us?
          </h2>

          <p className="mt-3 text-center text-gray-600">
            The values that make us different.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">

            <div className="rounded-xl bg-white p-7 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
              <div className="text-4xl">🚀</div>
              <h3 className="mt-4 text-xl font-bold">
                Innovation
              </h3>
              <p className="mt-3 text-gray-600">
                We explore new ideas and creative solutions.
              </p>
            </div>

            <div className="rounded-xl bg-white p-7 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
              <div className="text-4xl">🤝</div>
              <h3 className="mt-4 text-xl font-bold">
                Teamwork
              </h3>
              <p className="mt-3 text-gray-600">
                We believe in collaboration and shared success.
              </p>
            </div>

            <div className="rounded-xl bg-white p-7 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
              <div className="text-4xl">💎</div>
              <h3 className="mt-4 text-xl font-bold">
                Quality
              </h3>
              <p className="mt-3 text-gray-600">
                We focus on quality, simplicity, and user experience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 px-6 py-14 text-center text-white">
        <h2 className="text-3xl font-bold">
          Let's Build Something Great!
        </h2>

        <p className="mt-4 text-indigo-100">
          Have a question or an idea? We would love to hear from you.
        </p>

        <a
          href="/contact"
          className="mt-7 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
        >
          Get in Touch
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

export default About;
