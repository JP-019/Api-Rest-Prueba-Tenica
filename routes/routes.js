const express = require("express");
const router = express.Router();


// Este archivo centraliza todas las rutas importando
// modulares de cada entidad (CAPAS)

// Importar rutas por entidad
const clientesRoutes = require("./clientes.routes");
const ordenesRoutes = require("./ordenes.routes");
const productosRoutes = require("./productos.routes");
const detallesRoutes = require("./detalles.routes");

// =====================================================
// 🧑 REGISTRAR RUTAS - CLIENTES
// =====================================================
router.use("/clientes", clientesRoutes);

// =====================================================
// 📋 REGISTRAR RUTAS - ÓRDENES
// =====================================================
router.use("/ordenes", ordenesRoutes);

// =====================================================
// 📦 REGISTRAR RUTAS - PRODUCTOS
// =====================================================
router.use("/productos", productosRoutes);

// =====================================================
// 🔗 REGISTRAR RUTAS - DETALLES DE ÓRDENES
// =====================================================
router.use("/", detallesRoutes);

module.exports = router;
