import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./components/home/Home.jsx";

console.log("Daron")
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
