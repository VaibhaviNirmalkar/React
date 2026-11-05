import React from "react";

function About() {
  return (
    <section className="px-8 md:px-16 py-16">

      <h1 className="text-4xl font-bold mb-6">
        About SoleStyle
      </h1>

      <p className="text-gray-600 leading-8 max-w-3xl">
        Welcome to SoleStyle, your destination for stylish
        and comfortable footwear.

        From trendy sneakers to sports and formal shoes,
        we bring together quality, comfort and modern
        fashion in one place.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">
        Our Mission
      </h2>

      <p className="text-gray-600 leading-8 max-w-3xl">
        Our mission is to make quality footwear accessible
        to everyone with a simple and enjoyable shopping
        experience.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">
        Why Choose Us?
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-600">
        <li>Premium quality shoes</li>
        <li>Affordable prices</li>
        <li>Latest footwear collection</li>
        <li>Comfortable designs</li>
        <li>Easy shopping experience</li>
      </ul>

    </section>
  );
}

export default About;