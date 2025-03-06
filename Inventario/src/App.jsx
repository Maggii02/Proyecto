// App.jsx
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./Home";
import Barras from "./components/Barras/Barras";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleLogin = (token) => {
    setToken(token);
    localStorage.setItem("token", token); 
  };

  const handleLogout = () => {
    setToken(""); // Eliminar el token del estado
    localStorage.removeItem("token"); // Eliminar el token del localStorage
  };

  return (
    <BrowserRouter>
      {" "}
      {/* Asegúrate de que BrowserRouter envuelva todos los componentes */}
      <Routes>
        <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
        <Route element={<Barras onLogout={handleLogout} />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
