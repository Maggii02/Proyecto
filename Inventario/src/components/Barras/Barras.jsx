// src/components/Barras.jsx
import React, { useState } from "react";
import BarraSuperior from "./BarraSuperior";
import BarraLateral from "./BarraLateral";
import Home from "../../Home";

const Barras = ({ onLogout }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div>
      {/* Barra Superior */}
      <BarraSuperior
        onLogout={onLogout}
        onToggleSidebar={handleToggleSidebar}
      />

      {/* Barra Lateral */}
      <BarraLateral show={showSidebar} onClose={handleCloseSidebar} />

      {/* Contenido principal */}
      <Home onLogout={onLogout} />
    </div>
  );
};

export default Barras;
