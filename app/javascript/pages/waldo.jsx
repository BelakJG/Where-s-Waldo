import React, { useState } from "react";
import waldoBackground from "../images/waldoBackground.jpeg";
import characterWaldo from "../images/characterWaldo.webp";
import characterOdlaw from "../images/characterOdlaw.webp";
import GuessingGame from "../components/guessingGame";
import "../styles/guessingGame.css";

export default function Waldo() {
    const characters = [
        {name: "Waldo", x: 1585, y: 600, image: characterWaldo},
        {name: "Odlaw", x: 275, y: 565, image: characterOdlaw}
    ];

    return(<GuessingGame characterData={characters} backgroundImage={waldoBackground} pageName={"waldo"} />);
}