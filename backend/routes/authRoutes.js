const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Ruta de inicio de sesión
router.post("/login", authController.login);

// Ruta de logout (en este caso solo eliminamos el token en el cliente)
router.post("/logout", (req, res) => {
  res.clearCookie("token"); // Borrar el token del cookie si se guarda ahí
  res.status(200).send("Sesión cerrada correctamente.");
});

module.exports = router;
