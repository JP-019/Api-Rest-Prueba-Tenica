const DetalleOrdenService = require("../servicios/DetalleOrdenService");

class LeerDetalles {
  static ejecutarTodos() {
    try {
      const detalles = DetalleOrdenService.leerDetalles();
      return detalles;
    } catch (error) {
      console.error("❌ Error al leer detalles:", error.message);
      throw new Error("No se pudieron obtener los detalles");
    }
  }

  static ejecutarPorOrden(ordenId) {
    try {
      const detalles = DetalleOrdenService.encontrarDetallesPorOrden(ordenId);
      
      // Enriquecer con información del producto
      return detalles.map(detalle => {
        try {
          const producto = DetalleOrdenService.obtenerProducto(detalle.productoId);
          return {
            ...detalle,
            producto
          };
        } catch {
          return detalle;
        }
      });
    } catch (error) {
      console.error("❌ Error al obtener detalles de orden:", error.message);
      throw new Error("No se pudieron obtener los detalles de la orden");
    }
  }
}

module.exports = LeerDetalles;
