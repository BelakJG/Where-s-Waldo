import React from "react";
import { Outlet, NavLink } from "react-router-dom";
export default function HomePage() {
    return(<>
        <header>
            <NavLink to="/"><h1>HomePage</h1></NavLink>
            <NavLink to="waldo">Waldo</NavLink>
        </header>
        <Outlet />
    </>);
}