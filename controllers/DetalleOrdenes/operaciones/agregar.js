const DetalleOrden = require("../../../models/DetalleOrden");
const DetalleOrdenService = require("../servicios/DetalleOrdenService");
const DetalleOrdenValidator = require("../validadores/DetalleOrdenValidator");

class AgregarProducto {
  static ejecutar(ordenId, productoId, cantidad) {
    try {
      // Validar datos
      const validacionDatos = DetalleOrdenValidator.validarProductoYOrden(ordenId, productoId);
      if (!validacionDatos.esValido) {
        throw new Error(validacionDatos.errores.join(", "));
      }

      const validacionCantidad = DetalleOrdenValidator.validarCantidad(cantidad);
      if (!validacionCantidad.esValido) {
        throw new Error(validacionCantidad.error);
      }

      // Validar que la orden existe
      const orden = DetalleOrdenService.obtenerOrden(ordenId);
      if (!orden) {
        throw new Error("Orden no encontrada");
      }

      // Validar que el producto existe
      const producto = DetalleOrdenService.obtenerProducto(productoId);
      if (!producto) {
        throw new Error("Producto no encontrado");
      }

      // Validar existencia
      if (producto.exitencia < cantidad) {
        throw new Error("Cantidad insuficiente en existencia");
      }

      // Crear detalle de orden
      const detalles = DetalleOrdenService.leerDetalles();
      const detalleOrdenId = `DET-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const subtotal = producto.precio * cantidad;
      const impuesto = subtotal * 0.16; // 16% de impuesto
      const total = subtotal + impuesto;

      const detalleOrden = new DetalleOrden({
        detalleOrdenId,
        ordenId,
        productoId,
        cantidad,
        impuesto,
        subtotal,
        total
      });

      detalles.push(detalleOrden);
      DetalleOrdenService.guardarDetalles(detalles);

      console.log("✅ Producto agregado a la orden correctamente.");
      return detalleOrden;
    } catch (error) {
      console.error("❌ Error al agregar producto a orden:", error.message);
      throw new Error(error.message);
    }
  }
}

module.exports = AgregarProducto;
