import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import ItemDetails from './components/item-details/ItemDetails.tsx';
import Login from './components/login/Login.tsx';
import MyStoreWrapper from './components/my-store/my-store-wrapper/MyStoreWrapper.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './components/signup/Signup.tsx';
import NewProduct from './components/my-store/new-product/NewProduct.tsx';
import NewOrder from './components/my-store/new-order/NewOrder.tsx';
import AllProductsScreen from './screens/all-products-screen/AllProductsScreen.tsx';
import MyProductsScreen from './screens/my-products-screen/MyProductsScreen.tsx';
import CheckoutFail from './components/checkout-fail/CheckoutFail.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/products",
        element: <AllProductsScreen />,
      },
      {
        path: "/products/:id",
        element: <ItemDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/checkoutfail",
        element: <CheckoutFail />,
      },
      {
        path: "/mystore",
        element: <MyStoreWrapper />,
        children: [
          {
            path: "/mystore/products",
            element: <MyProductsScreen />,
          },
          {
            path: "/mystore/newproduct",
            element: <NewProduct />,
          },
          {
            path: "/mystore/neworder",
            element: <NewOrder />,
          }
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
