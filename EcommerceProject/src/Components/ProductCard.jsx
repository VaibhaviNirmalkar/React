import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ shoe }) {
  return (
    <div className="group">

      <Link to={`/product/${shoe.id}`}>
        <img
          src={shoe.image}
          alt={shoe.name}
          className="w-full h-64 object-cover rounded-xl bg-gray-100"
        />

        <h3 className="font-semibold mt-4">
          {shoe.name}
        </h3>

        <p className="text-gray-500 text-sm">
          {shoe.category}
        </p>

        <p className="font-bold mt-2">
          ₹{shoe.price.toLocaleString("en-IN")}
        </p>
      </Link>

      <button
        onClick={() => addToCart(shoe)}
        className="w-full mt-3 bg-black text-white py-3 rounded-lg hover:bg-gray-700"
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;