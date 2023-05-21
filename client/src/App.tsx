
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import { useEffect } from "react";
import { useMenuSlice } from "./zustand/MenuSlice";
import { useCartSlice } from "./zustand/ShoppingCartSlice";

function App() {
  const closeMenu = useMenuSlice((state) => state.closeMenu)
  // const toggleMenu = useMenuSlice((state) => state.toggleMenu)

  const closeCart = useCartSlice((state) => state.closeCart)
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
      <Navbar />
      <ShoppingCart />
      <div
        id="detail"
        onClick={() => {
          closeMenu(),
          closeCart()
        }}
      >
        <Outlet />
      </div>
    </>
  );
}

export default App;
