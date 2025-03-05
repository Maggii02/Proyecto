const db = require("../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Lógica de inicio de sesión
exports.login = (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM usuarios WHERE username = ?",
    [username],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });

      if (results.length === 0)
        return res.status(400).json({ message: "Usuario no encontrado" });

      if (results[0].password !== password) {
        return res.status(400).json({ message: "Contraseña incorrecta" });
      }

      const token = jwt.sign(
        { userId: results[0].id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).json({ token });
    }
  );
};
