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
    const [menuValues, setMenuValues ] = useState({
        visible: false,
        x: 0,
        y: 0
    });

    function openMenu(event) {
        const waldoContainer = document.getElementById("waldo");
        const rect = waldoContainer.getBoundingClientRect();
        const x = event.clientX - rect.left + waldoContainer.scrollLeft;
        const y = event.clientY - rect.top + waldoContainer.scrollTop;
        setMenuValues({
            visible: true,
            x: x,
            y: y
        });
    }

    function closeMenu() {
        setMenuValues({visible: false, x: 0, y: 0});
    }
    
    function makeGuess(x, y, name) {
        const waldoContainer = document.getElementById("waldo");
        const guess = characters.find(character => character.name === name);
        if (!guess) {
            console.log("waldo.jsx: character not found");
            return;
        }
        console.log(`click x: ${x}, y: ${y}`);

        if (Math.abs(x - guess.x) <= 30 && Math.abs(y - guess.y) <= 50) {
            setBoxes(boxes => [...boxes, {x: guess.x, y: guess.y}]);
            console.log(`Correct! You found ${name}!`);
            setCharacters(characters => characters.filter(character => character.name !== name));
        } else {
            console.log(`Guess for ${name} incorrect, try again`);
        }
        closeMenu();
    }

    const rightBoxes = boxes.map((box, index) => <div style={{
        left: `${box.x}px`,
        top: `${box.y}px`
    }} key={`box-${index}`} className="correctGuess"></div>);

    const possibleCharacters = characters.map((character, index) => <div className="character" key={`charcter-${index}`}>
        <img src={character.image}></img>
        <p>{character.name}</p>
    </div>);

    const characterGuesses = characters.map((character, index) => <button type="button" 
                                                                    key={`button-${index}`} 
                                                                    onClick={() => makeGuess(menuValues.x, menuValues.y, character.name)}>
                                                                    <h2>{character.name}</h2>
                                                                </button>);

    return(<div id="waldo">
        {rightBoxes}
        <div id="possibleGuesses" style={{backgroundColor: characters.length > 0 ? "rgba(255, 255, 255, .75)" : "white"}}>
            { characters.length > 0 ? <h2>Characters left to find</h2> : <h2>All characters found!</h2> }
            <div className="characters">{possibleCharacters}</div>
        </div>
        <div id="guessMenu" style={{left: menuValues.x, top: menuValues.y, display: menuValues.visible ? "flex" : "none"}}>{characterGuesses}</div>
        <img src={waldoBackground} alt="find waldo pic" onClick={!menuValues.visible ? openMenu : closeMenu}></img>
    </div>);
}