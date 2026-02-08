const express = require("express");
const router = express.Router();
const DetalleOrdenController = require("../controllers/DetalleOrdenes/DetalleOrdenController");


// POST   /ordenes/:ordenId/productos/:productoId  - Agregar producto a orden
// GET    /ordenes/:ordenId/detalles               - Ver detalles de una orden
// PUT    /detalles/:detalleId                     - Actualizar cantidad (DetalleOrden)
// DELETE /detalles/:detalleId                     - Remover producto de la orden
// GET    /detalles                                - Ver todos los detalles (Admin)

/**
 * POST /ordenes/:ordenId/productos/:productoId
 * Agrega un producto a una orden
 * Params: ordenId, productoId
 * Body: { cantidad }
 */
router.post("/ordenes/:ordenId/productos/:productoId", (req, res) => {
  try {
    const { ordenId, productoId } = req.params;
    const { cantidad } = req.body;

    if (!cantidad || cantidad <= 0) {
      return res.status(400).json({ success: false, error: "Cantidad inválida" });
    }

    const resultado = DetalleOrdenController.addProductoAOrden(ordenId, productoId, cantidad);
    res.status(201).json({ success: true, data: resultado });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

/**
 * GET /ordenes/:ordenId/detalles
 * Obtiene los detalles (productos) de una orden
 * Params: ordenId
 */
router.get("/ordenes/:ordenId/detalles", (req, res) => {
  try {
    const { ordenId } = req.params;
    const resultado = DetalleOrdenController.getDetallesPorOrden(ordenId);
    res.status(200).json({ success: true, data: resultado });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

/**
 * PUT /detalles/:detalleId
 * Actualiza la cantidad de un producto en una orden
 * Params: detalleId
 * Body: { cantidad }
 */
router.put("/detalles/:detalleId", (req, res) => {
  try {
    const { detalleId } = req.params;
    const { cantidad } = req.body;

    if (!cantidad || cantidad <= 0) {
      return res.status(400).json({ success: false, error: "Cantidad inválida" });
    }

    const resultado = DetalleOrdenController.updateCantidad(detalleId, cantidad);
    res.status(200).json({ success: true, data: resultado });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

/**
 * DELETE /detalles/:detalleId
 * Remueve un producto de una orden
 * Params: detalleId
 */
router.delete("/detalles/:detalleId", (req, res) => {
  try {
    const { detalleId } = req.params;
    DetalleOrdenController.removeProductoDeOrden(detalleId);
    res.status(200).json({ success: true, message: "Producto removido de la orden" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

/**
 * GET /detalles
 * Obtiene todos los detalles de órdenes (Vista Admin)
 */
router.get("/detalles", (req, res) => {
  try {
    const resultado = DetalleOrdenController.getAllDetalles();
    res.status(200).json({ success: true, data: resultado });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;
