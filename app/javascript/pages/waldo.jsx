import React from "react";
import GuessingGame from "../components/guessingGame";

export default function Waldo() {
    const characters = [
        {name: "Waldo", x: 1585, y: 600, image: "https://raw.githubusercontent.com/BelakJG/Where-s-Waldo/refs/heads/main/app/javascript/images/characterWaldo.webp"},
        {name: "Odlaw", x: 275, y: 565, image: "https://raw.githubusercontent.com/BelakJG/Where-s-Waldo/refs/heads/main/app/javascript/images/characterOdlaw.webp"},
        {name: "Woof", x: 1743, y: 573, image: "https://raw.githubusercontent.com/BelakJG/Where-s-Waldo/refs/heads/main/app/javascript/images/characterWoof.webp"}
    ];

    return(<GuessingGame characterData={characters} backgroundImage={"https://raw.githubusercontent.com/BelakJG/Where-s-Waldo/refs/heads/main/app/javascript/images/waldoBackground.jpeg"} pageName={"Waldo"} />);
}