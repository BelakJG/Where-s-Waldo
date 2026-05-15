import React from "react";
import pokemonBackground from "../images/pokemonBackground.jpg";
import spinarak from "../images/characterSpinarak.png";
import stunky from "../images/characterStunky.png";
import smoochum from "../images/characterSmoochum.png";

import GuessingGame from "../components/guessingGame";

export default function Pokemon() {
    const characters = [
        {name: "Spinarak", x: 1695, y: 950, image: spinarak},
        {name: "Stunky", x: 1230, y: 380, image: stunky},
        {name: "Smoochum", x: 318, y: 1010, image: smoochum}
    ];

    return(<GuessingGame characterData={characters} backgroundImage={pokemonBackground} pageName={"Pokemon"} />);
}