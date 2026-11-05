import React from "react";

function Contact() {
  return (
    <section className="px-8 md:px-16 py-16">

      <h1 className="text-4xl font-bold mb-4">
        Contact Us
      </h1>

      <p className="text-gray-500 mb-8">
        Have questions? We would love to hear from you.
      </p>

      <div className="space-y-5 text-gray-700">

        <p>
          <strong>Email:</strong> support@solestyle.com
        </p>

        <p>
          <strong>Phone:</strong> +91 9876543210
        </p>

        <p>
          <strong>Address:</strong> India
        </p>

        <p>
          <strong>Customer Support:</strong> Monday - Saturday
        </p>

      </div>

    </section>
  );
}

export default Contact;