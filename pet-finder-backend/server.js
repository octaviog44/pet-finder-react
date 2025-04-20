const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const authRouter = require("./routes/auth");

app.use(express.json());
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
