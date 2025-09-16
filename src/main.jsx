import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./components/home/Home.jsx";
import ToolsComparaisonPage from "./components/toolsComparaison/ToolsComparaisonPage.jsx";

console.log("Daron")
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/comparaison-outils",
        element: <ToolsComparaisonPage />,
    }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
