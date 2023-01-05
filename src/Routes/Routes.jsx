import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/ErrorPage";
import Main from "../Layouts/Main";
import Cart from "../pages/Cart/Cart";
import CheckOut from "../pages/CheckOut/CheckOut";
import Shop from "../pages/Shop/Shop";
import SingleProduct from "../pages/SingleProduct/SingleProduct";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        errorElement:<ErrorPage />,
        children:[
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
    }
])