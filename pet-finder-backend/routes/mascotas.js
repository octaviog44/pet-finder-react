const express = require("express");
const router = express.Router();
const db = require("../db");

// Crear una mascota
router.post("/", async (req, res) => {
  const { nombre, ubicacion, foto, position, user_email } = req.body;
  try {
    await db.query(
      "INSERT INTO mascotas (nombre, ubicacion, foto, position_lat, position_lng, user_email) VALUES ($1, $2, $3, $4, $5, $6)",
      [nombre, ubicacion, foto, position[0], position[1], user_email]
    );
    res.status(201).json({ message: "Mascota reportada correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al reportar mascota" });
  }
});

// Obtener todas las mascotas
router.get("/", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM mascotas ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener mascotas" });
  }
});

// Editar mascota
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, ubicacion, foto, position } = req.body;
  try {
    await db.query(
      "UPDATE mascotas SET nombre=$1, ubicacion=$2, foto=$3, position_lat=$4, position_lng=$5 WHERE id=$6",
      [nombre, ubicacion, foto, position[0], position[1], id]
    );
    res.json({ message: "Mascota actualizada correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al actualizar mascota" });
  }
});

// Eliminar mascota
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM mascotas WHERE id=$1", [id]);
    res.json({ message: "Mascota eliminada correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al eliminar mascota" });
  }
});

module.exports = router;
