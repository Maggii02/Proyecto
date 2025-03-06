import React from "react";
import { Offcanvas } from "react-bootstrap";

const BarraLateral = ({ show, onClose }) => {
  return (
    <Offcanvas show={show} onHide={onClose} placement="start">
      <Offcanvas.Header closeButton style={{ backgroundColor: "#ffc107" }}>
        <Offcanvas.Title>Menú de Opciones</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body style={{ backgroundColor: "#565552" }}>
        <p>Contenido de la barra lateral...</p>
        {/* Aquí puedes agregar los links o contenido que desees */}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default BarraLateral;
