import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/pages/checkout/Checkout";
import HomePage from "../components/pages/home/HomePage";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import MainLayout from "../layouts/MainLayout";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/checkout',
        element: <Checkout />
      }
    ]
  }
])

export default routers;