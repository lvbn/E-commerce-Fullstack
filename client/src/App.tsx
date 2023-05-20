
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import { useMenuSlice } from "./zustand/MenuSlice";

function App() {
  const closeMenu = useMenuSlice((state) => state.closeMenu)
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/products')
  }, [])

  return (
    <>
      <Navbar />
      <ShoppingCart />
      <div
        id="detail"
        onClick={closeMenu}
      >
        <Outlet />
      </div>
    </>
  );
}

export default App;
