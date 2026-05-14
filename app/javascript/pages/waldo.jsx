import React, { useState } from "react";
import waldo from "../images/waldoBackground.jpeg"
import "../styles/waldo.css"

export default function Waldo() {
    
    const [ boxes, setBoxes ] = useState([]);
    const [ characters, setCharacters] = useState([
        {name: "waldo", x: 1980, y: 645, image: waldo}
    ]);
    
    function makeGuess(event, name) {
        const waldoContainer = document.getElementById("waldo");
        const guess = characters.find(character => character.name === name);
        if (!guess) {
            console.log("waldo.jsx: character not found");
            return;
        }
        const rect = waldoContainer.getBoundingClientRect();
        const x = event.clientX - rect.left + waldoContainer.scrollLeft;
        const y = event.clientY - rect.top + waldoContainer.scrollTop;
        console.log(`click x: ${x}, y: ${y}`);

        if (Math.abs(x - guess.x) <= 30 && Math.abs(y - guess.y) <= 30) {
            setBoxes(boxes => [...boxes, {x: guess.x, y: guess.y}]);
            console.log(`Correct! You found ${name}!`);
            setCharacters(characters => characters.filter(character => character.name !== name));
        } else {
            console.log(`Guess for ${name} incorrect, try again`);
        }

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

    return(<div id="waldo" onClick={(event) => makeGuess(event, "waldo")}>
        {rightBoxes}
        <img src={waldo} alt="find waldo pic"></img>
    </div>);
}