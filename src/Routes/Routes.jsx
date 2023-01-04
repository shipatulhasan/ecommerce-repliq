import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Products from "../pages/Products/Products";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Products />
            }
        ]
    }
])