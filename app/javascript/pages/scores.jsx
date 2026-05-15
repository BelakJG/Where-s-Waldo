import React, { useState, useEffect } from "react";
import "../styles/allScores.css";

export default function Scores() {
    const [gameScores, setGameScores] = useState({
        "Waldo": [],
        "Pokemon": []
    });
    const [allScores, setAllScores] = useState([]);
    useEffect(() => {
        fetch("/api/v1/scores?limit=10")
            .then(response => response.json())
            .then(data => {
                setAllScores(data);

                const groupedScores = {};
                Object.keys(gameScores).forEach(key => {
                    groupedScores[key] = data.filter(score => score.game === key);
                });
                setGameScores(groupedScores);
                console.log(groupedScores);
            })
            .catch(error => {
                console.error(error);
                throw error;
            });
    }, []);

    const scoreDisplay = Object.entries(gameScores).map(([game, scoreList]) => 
        <table id={`${game}-table`} key={game}>
            <caption><h2>{game} Leader Board</h2></caption>
            <thead>
                <tr>
                    <th scope="col">Rank: </th>
                    <th scope="col">Name: </th>
                    <th scope="col">Time: </th>
                </tr>
            </thead>
            <tbody>
                {scoreList.length > 0 ? (scoreList.map((score, index) => 
                    <tr key={score.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{score.name}</td>
                        <td>{new Date(score.time).toISOString().slice(14,19)}</td>
                    </tr>))
                    : (<tr>
                        <td colSpan={3}>No Scores Yet :(</td>
                    </tr>)
                }
            </tbody>
        </table>);

    return(<div id="allScores">
        {scoreDisplay}
    </div>);
}