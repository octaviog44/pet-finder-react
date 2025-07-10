const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const authRouter = require("./routes/auth");
const mascotasRouter = require("./routes/mascotas");

// Middleware para aceptar payloads grandes
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/mascotas", mascotasRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
