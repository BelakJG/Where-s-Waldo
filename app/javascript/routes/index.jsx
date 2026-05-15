import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorpage";
import HomePage from "../pages/homepage";
import Waldo from "../pages/waldo";
import Scores from "../pages/scores";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Scores />
            },
            {
                path: "waldo",
                element: <Waldo />
            }
        ]
    }
]);