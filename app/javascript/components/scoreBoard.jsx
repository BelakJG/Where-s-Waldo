import React, { useEffect, useState } from "react";
import "../styles/scoreBoard.css"
import { Form } from "react-router-dom";
export default function ScoreBoard({gameName, startTime}) {
    const [scores, setScores] = useState([]);
    const [timeSpent] = useState(() => performance.now() - startTime);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/v1/scores?game=${gameName}&limit=5`);
            if (!response.ok) {
                console.error(response.status);
                throw new Error(`Score Fetch Error: ${gameName}: ${response.status}`);
            }
            const scoreData = await response.json();
            setScores(scoreData);
        }
        fetchData();
    }, []);

    const boardScores = scores.map((score, index) => 
            <tr className="score" key={`key-${index}`}>
                <td>{score.name}</td>
                <td>{new Date(score.time).toISOString().slice(14,19)}</td>
            </tr>)

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const dataJSON = JSON.stringify({
            game: gameName,
            name: formData.get("name"),
            time: +formData.get("time")
        });

        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        fetch("/api/v1/scores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": csrfToken
            },
            body: dataJSON
        }).then(response => response.json())
        .then(data => setScores(prev => [...prev, data].sort((a,b) => a.time - b.time)))
        .catch(error => console.error(error));
    }

    return(<div id="scores">
        <h1>Leader Board</h1>
        <table>
            <thead>
                <tr>
                    <th itemScope="col">Name</th>
                    <th itemScope="col">Time</th>
                </tr>
            </thead>
            <tbody>{boardScores}</tbody>
        </table>
        <h2>Submit Score?</h2>
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" required></input>
            </div>
            <div className="field">
                <label htmlFor="time">Time: </label>
                <input type="hidden" name="time" value={timeSpent}></input>
                <input type="text" id="time" value={new Date(timeSpent).toISOString().slice(14,19)} readOnly></input>
            </div>
            <button type="submit">Add Entry</button>
        </form>
    </div>);
}