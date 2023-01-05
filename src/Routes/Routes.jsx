import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/ErrorPage";
import Dashboard from "../Layouts/Dashboard/DashboardLaout";
import Main from "../Layouts/Main";
import Cart from "../pages/Cart/Cart";
import CheckOut from "../pages/CheckOut/CheckOut";
import Login from "../pages/Forms/Login";
import SignUp from "../pages/Forms/SignUp";
import Shop from "../pages/Shop/Shop";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage />,
        element:<PrivateRoute><Main /></PrivateRoute>,
        children:[
            {
                path:'/',
                element:<Shop />
            },
            {
                path:'/shop',
                element:<Shop />
            },
            {
                path:'/:id',
                element:<SingleProduct />
            },
            {
                path:'/cart',
                element:<Cart />
            },
            {
                path:'/checkout',
                element:<CheckOut />
            },
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard />
    },
    {
        path:'/login',
        element:<Login />
    },
    {
        path:'/signup',
        element:<SignUp />

    }
])