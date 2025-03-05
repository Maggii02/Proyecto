// routes/homeRoutes.js
const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const authenticateJWT = require("../middlewares/authenticateJWT");

// Ruta protegida de inicio
router.get("/home", authenticateJWT, homeController.getHome);

module.exports = router;
