const express = require("express");
const router = express.Router();
const ClienteController = require("../controllers/Clientes/ClienteController");


// POST   /clientes          - Crear nuevo cliente
// GET    /clientes          - Obtener todos los clientes
// PUT    /clientes/:id      - Actualizar cliente por ID
// DELETE /clientes/:id      - Eliminar cliente por ID

/**
 * POST /clientes
 * Crea un nuevo cliente
 * Body: { nombre, identidad }
 */
router.post("/", (req, res) => {
  try {
    const resultado = ClienteController.create(req.body);
    res.status(201).json({ success: true, data: resultado });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

/**
 * GET /clientes
 * Obtiene todos los clientes
 */
router.get("/", (req, res) => {
  try {
    const resultado = ClienteController.read();
    res.status(200).json({ success: true, data: resultado });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

/**
 * PUT /clientes/:id
 * Actualiza un cliente por ID
 * Params: id
 * Body: { nombre, identidad }
 */
router.put("/:id", (req, res) => {
  try {
    const resultado = ClienteController.update(req.params.id, req.body);
    res.status(200).json({ success: true, data: resultado });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

/**
 * DELETE /clientes/:id
 * Elimina un cliente por ID
 * Params: id
 */
router.delete("/:id", (req, res) => {
  try {
    ClienteController.delete(req.params.id);
    res.status(200).json({ success: true, message: "Cliente eliminado" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;
