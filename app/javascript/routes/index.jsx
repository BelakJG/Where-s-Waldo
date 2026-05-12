import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorpage";
import HomePage from "../pages/homepage";
import Waldo from "../pages/waldo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "waldo",
                element: <Waldo />
            }
        ]
    }
]);