class DetalleOrdenValidator {
  static validarProductoYOrden(ordenId, productoId) {
    const errores = [];

    if (!ordenId || typeof ordenId !== "string") {
      errores.push("ordenId es requerido y debe ser string");
    }

    if (!productoId || typeof productoId !== "string") {
      errores.push("productoId es requerido y debe ser string");
    }

    return {
      esValido: errores.length === 0,
      errores
    };
  }

  static validarCantidad(cantidad) {
    if (!cantidad || typeof cantidad !== "number" || cantidad <= 0) {
      return {
        esValido: false,
        error: "Cantidad debe ser un número positivo"
      };
    }
    return { esValido: true };
  }

  static validarIdRequerido(id) {
    if (!id) {
      return {
        esValido: false,
        error: "ID es requerido"
      };
    }
    return { esValido: true };
  }
}

module.exports = DetalleOrdenValidator;
