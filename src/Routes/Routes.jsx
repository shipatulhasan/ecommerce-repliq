import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Cart from "../pages/Cart/Cart";
import Shop from "../pages/Shop/Shop";
import SingleProduct from "../pages/SingleProduct/SingleProduct";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
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
        ]
    }
])