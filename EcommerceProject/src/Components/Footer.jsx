import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-8 mt-16">

      <h2 className="text-xl font-bold tracking-widest">
        SOLESTYLE.
      </h2>

      <p className="text-gray-400 text-sm mt-3">
        Find your style. Walk with confidence.
      </p>

      <div className="flex justify-center gap-6 mt-5 text-sm">
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <p className="text-gray-500 text-xs mt-5">
        © 2026 SoleStyle. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;