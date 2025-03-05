const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Obtener el token del header Authorization

  if (!token) return res.status(403).json({ message: "Acceso denegado" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Token no válido" });
    req.user = user;
    next();
  });
};

module.exports = authenticateJWT;
