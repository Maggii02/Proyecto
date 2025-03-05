// controllers/homeController.js
const authenticateJWT = require("../middlewares/authenticateJWT");

exports.getHome = (req, res) => {
  // Si el usuario está autenticado, responder con un mensaje o contenido.
  res.status(200).send("Bienvenido a la página de inicio");
};
