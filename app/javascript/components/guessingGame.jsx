import React, { useState } from "react";
import "../styles/guessingGame.css";

export default function GuessingGame({ characterData, backgroundImage, pageName }) {
    const [ boxes, setBoxes ] = useState([]);
    const [ characters, setCharacters] = useState(characterData);
    const [menuValues, setMenuValues ] = useState({
        visible: false,
        x: 0,
        y: 0
    });

    function openMenu(event) {
        const gameContainer = document.getElementById("guessingGame");
        const rect = gameContainer.getBoundingClientRect();
        const x = event.clientX - rect.left + gameContainer.scrollLeft;
        const y = event.clientY - rect.top + gameContainer.scrollTop;
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
        const gameContainer = document.getElementById("guessingGame");
        const guess = characters.find(character => character.name === name);
        if (!guess) {
            console.log(`${pageName} guessingGame.jsx: character not found`);
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

    return(<div id="guessingGame">
            {rightBoxes}
            <div id="possibleGuesses" style={{backgroundColor: characters.length > 0 ? "rgba(255, 255, 255, .75)" : "white"}}>
                { characters.length > 0 ? <h2>Characters left to find</h2> : <h2>All characters found!</h2> }
                <div className="characters">{possibleCharacters}</div>
            </div>
            <div id="guessMenu" style={{left: menuValues.x, top: menuValues.y, display: menuValues.visible ? "flex" : "none"}}>{characterGuesses}</div>
            <img src={backgroundImage} alt="find waldo pic" onClick={!menuValues.visible ? openMenu : closeMenu}></img>
        </div>);
}