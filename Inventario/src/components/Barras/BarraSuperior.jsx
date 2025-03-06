import React from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BarraSuperior = ({ onLogout, onToggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
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
        {/* Botón para abrir/cerrar la barra lateral */}
        <Button variant="light" className="me-2" onClick={onToggleSidebar}>
          <i className="bi bi-list" />
        </Button>

        <Nav className="me-auto"></Nav>

        <Button variant="warning" onClick={handleLogout}>
          <i className="bi bi-box-arrow-right" /> Cerrar sesión
        </Button>
      </Container>
    </Navbar>
  );
};

export default BarraSuperior;
