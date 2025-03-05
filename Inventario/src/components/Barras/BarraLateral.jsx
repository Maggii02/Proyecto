// src/components/BarraLateral.jsx
import React from "react";
import { Offcanvas } from "react-bootstrap";

const BarraLateral = ({ show, onClose }) => {
  return (
    <Offcanvas show={show} onHide={onClose} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menú Lateral</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p>Contenido de la barra lateral...</p>
        {/* Aquí puedes agregar los links o contenido que desees */}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default BarraLateral;
