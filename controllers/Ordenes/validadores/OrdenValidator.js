class OrdenValidator {
  static validarDatos(datos) {
    const errores = [];

    if (!datos.ordenId || typeof datos.ordenId !== "string") {
      errores.push("ordenId es requerido y debe ser string");
    }

    if (!datos.clienteId || typeof datos.clienteId !== "string") {
      errores.push("clienteId es requerido y debe ser string");
    }

    if (typeof datos.impuesto !== "number" || datos.impuesto < 0) {
      errores.push("impuesto debe ser un número positivo");
    }

    if (typeof datos.subtotal !== "number" || datos.subtotal < 0) {
      errores.push("subtotal debe ser un número positivo");
    }

    if (typeof datos.total !== "number" || datos.total < 0) {
      errores.push("total debe ser un número positivo");
    }

    return {
      esValido: errores.length === 0,
      errores
    };
  }

  static validarIdRequerido(id) {
    if (!id) {
      return {
        esValido: false,
        error: "ID de la orden es requerido"
      };
    }
    return { esValido: true };
  }
}

module.exports = OrdenValidator;
