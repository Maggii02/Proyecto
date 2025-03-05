// src/components/BarraSuperior.jsx
import React from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BarraSuperior = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Llama a la función onLogout que elimina el token
    onLogout();
    navigate("/"); // Redirige a la página de login
  };

  return (
    <Navbar
      expand="lg"
      className="fixed-top"
      style={{ backgroundColor: "#565552" }}
    >
      <Container fluid>
        <Nav className="me-auto"></Nav>
        <Button variant="warning" onClick={handleLogout}>
          <i className="bi bi-box-arrow-right" /> Cerrar sesión
        </Button>
      </Container>
    </Navbar>
  );
};

export default BarraSuperior;
