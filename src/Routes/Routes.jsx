import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/ErrorPage";
import DashboardLayout from "../Layouts/Dashboard/DashboardLaout";
import Main from "../Layouts/Main";
import AddUser from "../pages/AdminPanel/AddUser";
import Dashboard from "../pages/AdminPanel/Dashboard";
import Cart from "../pages/Cart/Cart";
import CheckOut from "../pages/CheckOut/CheckOut";
import Login from "../pages/Forms/Login";
import SignUp from "../pages/Forms/SignUp";
import Shop from "../pages/Shop/Shop";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import { productAndCartData } from "../utility/getProductandCart";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage />,
        loader: productAndCartData ,
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
        element:<PrivateRoute><DashboardLayout /></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard />
            },
            {
                path:'/dashboard/add-user',
                element:<AddUser />
            },
        ]
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