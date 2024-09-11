import { createBrowserRouter } from "react-router-dom"
import Home from "../screens/Home"
import Cars from "../screens/Cars"
import Signup from "../screens/Signup"

export const routes= createBrowserRouter([
    {path: "/"  ,element: <Home/>},
    {path: "/cars",element: <Cars/> },
    {path: "/signup",element: <Signup/>}
]) 