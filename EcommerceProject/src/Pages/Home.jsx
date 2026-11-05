import React from "react";
import { Link } from "react-router-dom";

import shoes from "../Data/Shoes.js";
import ProductCard from "../Components/ProductCard.jsx";

function Home() {
  return (
    <>
  
     <div>

       {/* Hero Section */}

       <section className="bg-gray-100 grid md:grid-cols-2 items-center px-8 md:px-16 py-16 gap-10">

       <div>
         <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
            New Collection 2026
          </p>

           <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Step Into Your Style.
         </h1>

       <p className="text-gray-600 mt-5 mb-8">
            Discover premium sneakers, sports shoes and
            everyday footwear designed for comfort and style.
         </p>

         <Link
            to="/products"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg"
          >
            Explore Collection
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000"
          alt="Featured shoes"
          className="w-full h-80 object-cover rounded-2xl"
        />

       </section>

    //   {/* Categories */}

      <section className="px-8 md:px-16 py-16">

       <h2 className="text-3xl font-bold mb-8">
         Shop by Category
       </h2>

       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 

        {["Sneakers", "Sports", "Casual", "Formal"].map((category) => (
            <Link
              key={category}
              to="/products"
              state={{ category }}
              className="bg-gray-100 rounded-xl p-8 text-center font-semibold hover:bg-gray-200"
            >
              {category}
            </Link>
          ))}

        </div>

      </section>

      {/* Trending Products */}

     <section className="px-8 md:px-16 pb-16">

      <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
           Trending Shoes
         </h2>

         <Link to="/products" className="underline text-sm">
           View All
         </Link>

         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

           {shoes.slice(0, 3).map((shoe) => (
            <ProductCard
              key={shoe.id}
              shoe={shoe}
            //   addToCart={addToCart}
            />
          ))}

        </div>

      </section>

    </div>
    </>
  );
}

export default Home;