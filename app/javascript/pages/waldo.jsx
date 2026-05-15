import React, { useState } from "react";
import waldoBackground from "../images/waldoBackground.jpeg";
import characterWaldo from "../images/characterWaldo.webp";
import characterOdlaw from "../images/characterOdlaw.webp";
import characterWoof from "../images/characterWoof.webp";

import GuessingGame from "../components/guessingGame";

export default function Waldo() {
    const characters = [
        {name: "Waldo", x: 1585, y: 600, image: characterWaldo},
        {name: "Odlaw", x: 275, y: 565, image: characterOdlaw},
        {name: "Woof", x: 1743, y: 573, image: characterWoof}
    ];

    return(<GuessingGame characterData={characters} backgroundImage={waldoBackground} pageName={"waldo"} />);
}