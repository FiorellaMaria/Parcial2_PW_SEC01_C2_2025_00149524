const express = require("express");
const app = express();
const PORT = 3130;

const cuentasRoutes = require("./routes/cuentas");

app.use("/cuentas", cuentasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});

// Ruta para obtener todas las cuentas
app.get("/cuentas", (req, res) => {
  res.json({
    count: cuentas.length,
    data: cuentas
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
