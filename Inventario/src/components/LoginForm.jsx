import React, { useState } from "react";
import api from "../services/api";
import { Container, Card, Form, Button, InputGroup } from "react-bootstrap";
import SpinnerLogin from "./SpinnerLogin";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./images/Logo.png";
import training from "./images/training.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom"; // Asegúrate de que esto esté importado

const LoginForm = ({ onLogin }) => {
  const backgroundStyle = {
    backgroundImage: `url(${training})`,
  };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate(); // Inicializa el hook de navegación

  const handleLogin = async (data) => {
    setLoading(true);
    try {
      const response = await api.post("/auth/login", {
        username: data.username,
        password: data.password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      onLogin(token);

      // Redirige al usuario a la ruta /home después de iniciar sesión
      navigate("/home"); // Aquí rediriges correctamente a la página de inicio
    } catch (err) {
      setError("Credenciales incorrectas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={backgroundStyle} className="fondo">
      <Container>
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <Card
                  style={{ width: "400px", height: "440px" }}
                  className="mb-3"
                >
                  <Card.Body>
                    <div className="pt-4 pb-2">
                      <div className="d-flex justify-content-center py-4">
                        <div className="logo d-flex align-items-center w-auto">
                          <img src={Logo} height={"70px"} alt="" />
                        </div>
                      </div>
                    </div>
                    <Form onSubmit={handleSubmit(handleLogin)}>
                      <Form.Group className="mb-2" controlId="username">
                        <Form.Label className="form-label">Usuario</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <i className="bi bi-person-fill"></i>
                          </InputGroup.Text>
                          <Form.Control
                            placeholder="Usuario"
                            {...register("username", { required: true })}
                            required
                          />
                        </InputGroup>
                      </Form.Group>

                      <Form.Group className="mb-2" controlId="password">
                        <Form.Label className="form-label">
                          Contraseña
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <i className="bi bi-lock-fill"></i>
                          </InputGroup.Text>
                          <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            {...register("password", { required: true })}
                            required
                            autoComplete="on"
                          />
                        </InputGroup>
                      </Form.Group>

                      {error && (
                        <p className="text-danger text-center">{error}</p>
                      )}

                      <Button
                        className="w-100"
                        variant="warning"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? <SpinnerLogin /> : "INICIAR SESIÓN"}
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default LoginForm;
