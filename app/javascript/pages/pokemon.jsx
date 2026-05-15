import React from "react";
import GuessingGame from "../components/guessingGame";

export default function Pokemon() {
    const characters = [
        {name: "Spinarak", x: 1695, y: 950, image: "https://raw.githubusercontent.com/BelakJG/Where-s-Waldo/refs/heads/main/app/javascript/images/characterSpinarak.png"},
        {name: "Stunky", x: 1230, y: 380, image: "https://raw.githubusercontent.com/BelakJG/Where-s-Waldo/refs/heads/main/app/javascript/images/characterStunky.png"},
        {name: "Smoochum", x: 318, y: 1010, image: "https://raw.githubusercontent.com/BelakJG/Where-s-Waldo/refs/heads/main/app/javascript/images/characterSmoochum.png"}
    ];

    return(<GuessingGame characterData={characters} backgroundImage={"https://raw.githubusercontent.com/BelakJG/Where-s-Waldo/refs/heads/main/app/javascript/images/pokemonBackground.jpg"} pageName={"Pokemon"} />);
}