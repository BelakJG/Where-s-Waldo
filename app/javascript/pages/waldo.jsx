import React, { useState } from "react";
import waldoBackground from "../images/waldoBackground.jpeg";
import characterWaldo from "../images/characterWaldo.webp";
import characterOdlaw from "../images/characterOdlaw.webp";
import "../styles/waldo.css";

export default function Waldo() {
    
    const [ boxes, setBoxes ] = useState([]);
    const [ characters, setCharacters] = useState([
        {name: "Waldo", x: 1585, y: 600, image: characterWaldo},
        {name: "Odlaw", x: 275, y: 565, image: characterOdlaw}
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
        left: `${box.x}px`,
        top: `${box.y}px`
    }} key={index} className="correctGuess"></div>);

    const possibleCharacters = characters.map((character, index) => <div className="character" key={`charcter-${index}`}>
        <img src={character.image}></img>
        <p>{character.name}</p>
    </div>);

    return(<div id="waldo" onClick={(event) => makeGuess(event, "Waldo")}>
        {rightBoxes}
        <div id="possibleGuesses" style={{backgroundColor: characters.length > 0 ? "rgba(255, 255, 255, .75)" : "white"}}>
            { characters.length > 0 ? <h2>Characters to find</h2> : <h2>All characters found!</h2> }
            <div className="characters">{possibleCharacters}</div>
        </div>
        <img src={waldoBackground} alt="find waldo pic"></img>
    </div>);
}