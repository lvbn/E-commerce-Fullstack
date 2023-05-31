
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import { useEffect } from "react";
import { useMenuSlice } from "./zustand/MenuSlice";

//// STRIPE
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import Success from "./components/after-checkout/success";
// import Fail from "./components/after-checkout/fail";
const stripePromise = loadStripe('pk_test_51N8hjDJKkXA9mV6ak5ut2w6TuNdUKdu9jIaUbFf8ttSFyaOAgLZD7EjFPY7i9ABX5zPEBVUNeluE8z0qiWP75qv400RR6hD0bp');

// import { useCartSlice } from "./zustand/ShoppingCartSlice";

function App() {
  const closeMenu = useMenuSlice((state) => state.closeMenu)
  // const toggleMenu = useMenuSlice((state) => state.toggleMenu)

  // const closeCart = useCartSlice((state) => state.closeCart)
  // const toggleCart = useCartSlice((state) => state.toggleCart)

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/products')
  }, [])

  // useEffect(() => {
  //   let handler = (e: Event) => {
  //     if (e) {
  //       const rgxUserThumbnail = /(userThumbnail)/g
  //       // const rgxShoppingCart = /(cartItems)|(cartItemsIcon)/g

  //       let target = e.target as Element

  //       // if (target.classList[0].match(rgxUserThumbnail)) {
  //       //   toggleMenu()
  //       // } else {
  //       //   closeMenu()
  //       // }

  //       // if (target.classList[0].match(rgxShoppingCart)) {
  //       //   toggleCart()
  //       // } else {
  //       //   closeCart()
  //       // }
  //     }
  //   };

  //   document.addEventListener("mousedown", handler);


  //   return() =>{
  //     document.removeEventListener("mousedown", handler);
  //   }

  // }, []);

  return (
    <>
    <Elements stripe={stripePromise}>
      <Navbar />
      <ShoppingCart />
      <div
        id="detail"
        onClick={() => {
          closeMenu()
          // closeCart()
        }}
      >
        <Outlet />
      </div>
      </Elements>
    </>
  );
}

export default App;
