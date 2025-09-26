import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./components/home/Home.jsx";
import ToolsComparaisonPage from "./components/toolsComparaison/ToolsComparaisonPage.jsx";

const BASE_URL = import.meta.env.BASE_URL;
const router = createBrowserRouter([
    {
        path: BASE_URL,
        element: <Home />,
    },
    {
        path: `${BASE_URL}comparaison-outils`,
        element: <ToolsComparaisonPage />,
    }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
