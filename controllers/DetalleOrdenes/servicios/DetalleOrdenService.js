const fs = require("fs");
const path = require("path");
const DetalleOrden = require("../../../models/DetalleOrden");

const RUTA_DETALLES = path.join(__dirname, "../../../Data/DetallesOrdenes.json");
const RUTA_PRODUCTOS = path.join(__dirname, "../../../Data/Productos.json");
const RUTA_ORDENES = path.join(__dirname, "../../../Data/OrdenesController.json");
const ESPACIOS_INDENTACION_JSON = 2;

class DetalleOrdenService {
  static leerDetalles() {
    let detalles = [];
    if (fs.existsSync(RUTA_DETALLES)) {
      const detallesData = fs.readFileSync(RUTA_DETALLES, "utf8");
      detalles = JSON.parse(detallesData) || [];
    }
    return detalles;
  }

  static guardarDetalles(detalles) {
    fs.writeFileSync(RUTA_DETALLES, JSON.stringify(detalles, null, ESPACIOS_INDENTACION_JSON), "utf8");
  }

  static obtenerProducto(productoId) {
    if (!fs.existsSync(RUTA_PRODUCTOS)) {
      throw new Error("El archivo de productos no existe");
    }
    const productosData = fs.readFileSync(RUTA_PRODUCTOS, "utf8");
    const productos = JSON.parse(productosData) || [];
    return productos.find(p => p.productoId === productoId);
  }

  static obtenerOrden(ordenId) {
    if (!fs.existsSync(RUTA_ORDENES)) {
      throw new Error("El archivo de órdenes no existe");
    }
    const ordenesData = fs.readFileSync(RUTA_ORDENES, "utf8");
    const ordenes = JSON.parse(ordenesData) || [];
    return ordenes.find(o => o.ordenId === ordenId);
  }

  static encontrarDetallesPorOrden(ordenId) {
    const detalles = this.leerDetalles();
    return detalles.filter(d => d.ordenId === ordenId);
  }

  static encontrarDetallePorId(detalleId) {
    const detalles = this.leerDetalles();
    return detalles.find(d => d.detalleOrdenId === detalleId);
  }

  static obtenerIndiceDetalle(detalleId) {
    const detalles = this.leerDetalles();
    return detalles.findIndex(d => d.detalleOrdenId === detalleId);
  }
}

module.exports = DetalleOrdenService;
