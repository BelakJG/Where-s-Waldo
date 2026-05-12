import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../components/App";
import "../styles/index.css";

export default document.addEventListener("turbo:load", () => {
    const container = document.getElementById("root");
    const root = createRoot(container);
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
});
