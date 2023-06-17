import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages/home/HomePage";
import Login from "../components/pages/login/Login";
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
      }
    ]
  }
])

export default routers;