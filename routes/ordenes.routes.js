const express = require("express");
const router = express.Router();
const OrdenController = require("../controllers/Ordenes/OrdenController");


// POST   /ordenes           - Crear nueva orden
// GET    /ordenes           - Obtener todas las órdenes
// PUT    /ordenes/:id       - Actualizar orden por ID
// DELETE /ordenes/:id       - Eliminar orden por ID

/**
 * POST /ordenes
 * Crea una nueva orden
 * Body: { clienteId, impuesto, subtotal, total }
 */
router.post("/", (req, res) => {
  try {
    const resultado = OrdenController.create(req.body);
    res.status(201).json({ success: true, data: resultado });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

/**
 * GET /ordenes
 * Obtiene todas las órdenes
 */
router.get("/", (req, res) => {
  try {
    const resultado = OrdenController.read();
    res.status(200).json({ success: true, data: resultado });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

/**
 * PUT /ordenes/:id
 * Actualiza una orden por ID
 * Params: id
 * Body: { clienteId, impuesto, subtotal, total }
 */
router.put("/:id", (req, res) => {
  try {
    const resultado = OrdenController.update(req.params.id, req.body);
    res.status(200).json({ success: true, data: resultado });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

/**
 * DELETE /ordenes/:id
 * Elimina una orden por ID
 * Params: id
 */
router.delete("/:id", (req, res) => {
  try {
    OrdenController.delete(req.params.id);
    res.status(200).json({ success: true, message: "Orden eliminada" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;
