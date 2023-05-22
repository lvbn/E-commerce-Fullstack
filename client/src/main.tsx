import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import StoreItems from "./components/store-items/StoreItems";
import ItemDetails from './components/item-details/ItemDetails.tsx';
import Login from './components/login/Login.tsx';
import MyStoreWrapper from './components/my-store/my-store-wrapper/MyStoreWrapper.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './components/signup/Signup.tsx';
import NewProduct from './components/my-store/new-product/NewProduct.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/products",
        element: <StoreItems />,
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
        path: "/mystore",
        element: <MyStoreWrapper />,
        children: [
          {
            path: "/mystore/products",
            element: <StoreItems />,
          },
          {
            path: "/mystore/newproduct",
            element: <NewProduct />,
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
