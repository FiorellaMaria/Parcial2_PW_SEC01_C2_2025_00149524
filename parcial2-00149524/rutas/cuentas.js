const express = require("express");
const router = express.Router();
const { getAllCuentas, getCuentaById, getCuentaByQuery } = require("../controllers/cuentasController");

// Obtener todas las cuentas
router.get("/", getAllCuentas);

// Obtener una cuenta por ID
router.get("/:id", getCuentaById);

// Obtener cuentas por query parameter
router.get("/search", getCuentaByQuery);

module.exports = router;
