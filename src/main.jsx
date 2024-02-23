import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/assets/css/index.css";
import "../app/globals.css";
import CurrencyProvider from "./hooks/CurrencyProvider.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Blogs from "./Pages/Blogs";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";
import WishList from "./Pages/WishList";
import Account from "./Pages/Account";
import ShoppingCart from "./Pages/ShoppingCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/checkout",
        element: <ShoppingCart />,
      },
    ],
  },
]);

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: '/',
//     children: [
//       {
//         path: '/blogs',
//         element: <Blogs />
//       },
//       {
//         path: '/faq',
//         element: <Faq />
//       },
//       {
//         path: '/contact',
//         element: <Contact />
//       },
//       {
//         path: '/wishlist',
//         element: <WishList />
//       },
//       {
//         path: '/account',
//         element: <Account />
//       },
//       {
//         path: '/checkout',
//         element: <ShoppingCart />
//       }
//     ]
//   }
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <CurrencyProvider>
          <App />
        </CurrencyProvider>
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
);
