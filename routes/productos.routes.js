const express = require("express");
const router = express.Router();
const ProductoController = require("../controllers/Productos/ProductoController");


// POST   /productos         - Crear nuevo producto
// GET    /productos         - Obtener todos los productos
// PUT    /productos/:id     - Actualizar producto por ID
// DELETE /productos/:id     - Eliminar producto por ID

/**
 * POST /productos
 * Crea un nuevo producto
 * Body: { nombre, precio, exitencia }
 */
router.post("/", (req, res) => {
  try {
    const resultado = ProductoController.create(req.body);
    res.status(201).json({ success: true, data: resultado });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

/**
 * GET /productos
 * Obtiene todos los productos
 */
router.get("/", (req, res) => {
  try {
    const resultado = ProductoController.read();
    res.status(200).json({ success: true, data: resultado });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

/**
 * PUT /productos/:id
 * Actualiza un producto por ID
 * Params: id
 * Body: { nombre, precio, exitencia }
 */
router.put("/:id", (req, res) => {
  try {
    const resultado = ProductoController.update(req.params.id, req.body);
    res.status(200).json({ success: true, data: resultado });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

/**
 * DELETE /productos/:id
 * Elimina un producto por ID
 * Params: id
 */
router.delete("/:id", (req, res) => {
  try {
    ProductoController.delete(req.params.id);
    res.status(200).json({ success: true, message: "Producto eliminado" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;
