import React from "react";
import waldo from "../images/waldo.jpeg"
import "../styles/waldo"

export default function Waldo() {
    return(<div id="waldo">
        <img src={waldo} alt="find waldo pic"></img>
    </div>);
}