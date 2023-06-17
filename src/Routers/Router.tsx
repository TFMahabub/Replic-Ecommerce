import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/pages/checkout/Checkout";
import AdminOverview from "../components/pages/dashbord/AdminOverview";
import HomePage from "../components/pages/home/HomePage";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import DashbordLayout from "../layouts/DashbordLayout";
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
  },
  {
    path: '/dashbord',
    element: <DashbordLayout />,
    children: [
      {
        path: '/dashbord',
        element: <AdminOverview />
      },
      {
        path: '/dashbord/admin',
        element: <AdminOverview />
      },
    ]
  }
])

export default routers;