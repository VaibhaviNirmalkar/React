import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Products from '../Pages/Products'
import Contact from '../Pages/Contact'
import ProductDetails from '../Pages/ProductDetails'
import { Route, Routes } from 'react-router-dom'



// function AppContent() {

//   const [cart, setCart] = useState([]);

//   // Add to Cart
//   function addToCart(shoe, size = "") {

//     setCart((previous) => {

//       const existing = previous.find(
//         (item) => item.id === shoe.id && item.size === size
//       );

//       if (existing) {
//         return previous.map((item) =>
//           item.id === shoe.id && item.size === size
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       return [
//         ...previous,
//         { ...shoe, size, quantity: 1 }
//       ];

//     });
//   }

//   // Update Quantity
//   function updateQuantity(id, size, change) {

//     setCart((previous) =>
//       previous
//         .map((item) =>
//           item.id === id && item.size === size
//             ? { ...item, quantity: item.quantity + change }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );

//   }

//   const cartCount = cart.reduce(
//     (sum, item) => sum + item.quantity,
//     0
//   );

//   return (
//     <>

//       <Navbar cartCount={cartCount} />

//       <Outline/>

//       <Footer />

//     </>
//   );
// }


function Outline() {
    return (
        <>
        <Routes>

        <Route
          path="/"
          element={<Home/>}
        />
 
        <Route
          path="/about"
          element={<About />}
        />

         <Route
          path="/products"
          element={<Products/>}
        /> 

        <Route
          path="/product/:id"
          element={<ProductDetails/>}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
            />
          }
        /> */}

        {/* <Route
          path="*"
          element={<h1 className="p-10 text-2xl">Page Not Found</h1>}
        /> */}

      </Routes>
        </>
    )
}

export default Outline
