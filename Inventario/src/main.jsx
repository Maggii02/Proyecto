// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Usamos React 18 con el nuevo método de renderizado
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
