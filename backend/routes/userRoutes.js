const express = require("express");
const router = express.Router();
const authenticateJWT = require("../middlewares/authenticateJWT");
const userController = require("../controllers/userController");

// Ruta para obtener usuarios
router.get("/users", authenticateJWT, userController.getUsers);

module.exports = router;
