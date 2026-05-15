import React from "react";
import { Outlet, NavLink } from "react-router-dom";
export default function HomePage() {
    return(<>
        <header>
            <NavLink to="/"><h1>HomePage</h1></NavLink>
            <nav>
                <NavLink to="waldo">Waldo</NavLink>
                <NavLink to="pokemon">Pokemon</NavLink>
            </nav>
        </header>
        <Outlet />
    </>);
}