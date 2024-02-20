
import Blogs from "../Pages/Blogs";
import ErrorPage from "../Pages/ErrorPage";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Account from "../Pages/Account";
import WishList from "../Pages/WishList";
import ShoppingCart from "../Pages/ShoppingCart";
import Contact from "../Pages/Contact";

 const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/blogs',
          element: <Blogs />
        }
        ,
        {
          path: '/faq',
          element: <Faq />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/wishlist',
          element: <WishList />
        },
        {
          path: '/account',
          element: <Account />
        },
        {
          path: '/checkout',
          element: <ShoppingCart />
        }
      ]
    }
  ]);

  export default router;