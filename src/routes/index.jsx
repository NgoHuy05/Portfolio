import MainLayout from "@/layouts/MainLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Project from "@/pages/Project";
import { createBrowserRouter } from "react-router-dom";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {index: true, element: <Home /> },
            {path: 'project', element: <Project />},
            {path: 'about', element: <About />},
            {path: 'contact', element: <Contact />},
        ]
    }
])