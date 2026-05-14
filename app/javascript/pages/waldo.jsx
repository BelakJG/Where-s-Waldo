import React, { useState } from "react";
import waldo from "../images/waldo.jpeg"
import "../styles/waldo"

export default function Waldo() {
    const [ boxes, setBoxes ] = useState([]);
    function placeDiv(event) {
        const waldo = document.getElementById("waldo");
        const rect = waldo.getBoundingClientRect();
        const x = event.clientX - rect.left + waldo.scrollLeft;
        const y = event.clientY - rect.top + waldo.scrollTop;
        console.log(`x: ${x}, y: ${y}`);

        setBoxes([...boxes, {x: x, y: y}]);
    }

    const rightBoxes = boxes.map((box, index) => <div style={{
        width: "50px",
        height: "100px",
        border: "4px dashed #39FF14",
        outline: "2px solid white",
        position: "absolute",
        left: `${box.x}px`,
        top: `${box.y}px`,
        transform: "translate(-50%, -50%)"
    }} key={index}></div>);

    return(<div id="waldo" onClick={placeDiv}>
        {rightBoxes}
        <img src={waldo} alt="find waldo pic"></img>
    </div>);
}