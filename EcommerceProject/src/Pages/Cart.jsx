
import React from "react";

function Cart() {
  return (
    <section className="px-8 md:px-16 py-12">

      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="space-y-6">

        {/* Product 1 */}
        <div className="flex gap-5 items-center border-b pb-5">
          <img
            src="https://via.placeholder.com/100"
            alt="Product"
            className="w-24 h-24 object-cover rounded-lg"
          />

          <div className="flex-1">
            <h3 className="font-semibold">Running Shoes</h3>
            <p className="text-gray-500">₹2,499</p>
            <p className="text-sm text-gray-500">Size: 8</p>

            <div className="flex items-center gap-3 mt-3">
              <button className="border px-3">-</button>
              <span>1</span>
              <button className="border px-3">+</button>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex gap-5 items-center border-b pb-5">
          <img
            src="https://via.placeholder.com/100"
            alt="Product"
            className="w-24 h-24 object-cover rounded-lg"
          />

          <div className="flex-1">
            <h3 className="font-semibold">Casual Sneakers</h3>
            <p className="text-gray-500">₹1,999</p>
            <p className="text-sm text-gray-500">Size: 7</p>

            <div className="flex items-center gap-3 mt-3">
              <button className="border px-3">-</button>
              <span>1</span>
              <button className="border px-3">+</button>
            </div>
          </div>
        </div>

      </div>

      {/* Total Section */}
      <div className="text-right pt-5">
        <h2 className="text-2xl font-bold">
          Total: ₹4,498
        </h2>

        <button className="bg-black text-white px-8 py-4 rounded-lg mt-5">
          Proceed to Checkout
        </button>
      </div>

    </section>
  );
}

export default Cart;
