import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout, 
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: "about-us",
                Component: AboutUsPage,
            }
        ]
    }
])