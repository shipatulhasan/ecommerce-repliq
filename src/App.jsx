import { Toaster } from "react-hot-toast"
import { RouterProvider } from "react-router-dom"
import {router} from './Routes/Routes'
import './App'

function App() {


  return (
    <>
   <RouterProvider router={router} />
   <Toaster />
   
    </>
  )
}

export default App
