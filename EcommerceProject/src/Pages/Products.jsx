
import React from "react";

function Products() {
  return (
    <section className="px-8 md:px-16 py-12">

      <h1 className="text-4xl font-bold mb-3">
        Our Collection
      </h1>

      <p className="text-gray-500 mb-8">
        Find the perfect pair for every occasion.
      </p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search shoes..."
        className="border rounded-lg p-3 w-full md:w-80 mb-6"
      />

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-10">
        <button className="px-5 py-2 rounded-full border bg-black text-white">
          All
        </button>

        <button className="px-5 py-2 rounded-full border">
          Sneakers
        </button>

        <button className="px-5 py-2 rounded-full border">
          Sports
        </button>

        <button className="px-5 py-2 rounded-full border">
          Casual
        </button>

        <button className="px-5 py-2 rounded-full border">
          Formal
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Product 1 */}
        <div className="border rounded-xl p-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Sneakers"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-4">
            Classic Sneakers
          </h2>
          <p className="text-gray-500 mt-2">₹1,999</p>
          <button className="bg-black text-white px-5 py-3 rounded-lg mt-4 w-full">
            View Product
          </button>
        </div>

        {/* Product 2 */}
        <div className="border rounded-xl p-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Sports Shoes"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-4">
            Sports Shoes
          </h2>
          <p className="text-gray-500 mt-2">₹2,499</p>
          <button className="bg-black text-white px-5 py-3 rounded-lg mt-4 w-full">
            View Product
          </button>
        </div>

        {/* Product 3 */}
        <div className="border rounded-xl p-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Casual Shoes"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-4">
            Casual Shoes
          </h2>
          <p className="text-gray-500 mt-2">₹1,799</p>
          <button className="bg-black text-white px-5 py-3 rounded-lg mt-4 w-full">
            View Product
          </button>
        </div>

      </div>

    </section>
  );
}

export default Products;
