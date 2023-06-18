import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/pages/checkout/Checkout";
import AdminOverview from "../components/pages/dashbord/AdminOverview";
import Customers from "../components/pages/dashbord/Customers";
import OrderList from "../components/pages/dashbord/OrderList";
import Products from "../components/pages/dashbord/Products";
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
      {
        path: '/dashbord/customers',
        element: <Customers />
      },
      {
        path: '/dashbord/products',
        element: <Products />
      },
      {
        path: '/dashbord/order-list',
        element: <OrderList />
      },
    ]
  }
])

export default routers;