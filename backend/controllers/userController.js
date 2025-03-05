const db = require("../db");

// Lógica para obtener todos los usuarios
exports.getUsers = (req, res) => {
  db.query("SELECT id, username FROM usuarios", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};
