
import React from "react";

function ProductDetails() {
  return (
    <section className="grid md:grid-cols-2 gap-10 px-8 md:px-16 py-12">

      {/* Product Image */}
      <img
        src="https://via.placeholder.com/500"
        alt="Running Shoes"
        className="w-full rounded-2xl bg-gray-100"
      />

      {/* Product Information */}
      <div className="py-5">

        <p className="text-gray-500">
          Sports Shoes
        </p>

        <h1 className="text-4xl font-bold mt-3">
          Running Shoes
        </h1>

        <p className="text-2xl font-semibold mt-5">
          ₹2,499
        </p>

        <p className="text-gray-500 mt-5">
          Stylish, comfortable and perfect for everyday use.
        </p>

        <h3 className="font-semibold mt-8 mb-3">
          Select Size (UK)
        </h3>

        <div className="flex gap-3">
          <button className="border px-5 py-3 rounded-lg">6</button>
          <button className="border px-5 py-3 rounded-lg bg-black text-white">7</button>
          <button className="border px-5 py-3 rounded-lg">8</button>
          <button className="border px-5 py-3 rounded-lg">9</button>
          <button className="border px-5 py-3 rounded-lg">10</button>
        </div>

        <button className="bg-black text-white w-full py-4 rounded-lg mt-8">
          Add to Cart
        </button>

      </div>

    </section>
  );
}

export default ProductDetails;
