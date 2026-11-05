import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-5 bg-white border-b">

      <Link to="/" className="text-2xl font-bold tracking-widest">
        SOLESTYLE.
      </Link>

      <div className="flex gap-4 md:gap-8 text-sm font-medium">
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/cart">Cart ({cartCount})</Link> */}
      </div>

    </nav>
  );
}

export default Navbar;