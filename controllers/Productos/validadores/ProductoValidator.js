class ProductoValidator {
  static validarDatos(datos) {
    const errores = [];

    if (!datos.productoId || typeof datos.productoId !== "string") {
      errores.push("productoId es requerido y debe ser string");
    }

    if (!datos.nombre || typeof datos.nombre !== "string") {
      errores.push("nombre es requerido y debe ser string");
    }

    if (typeof datos.precio !== "number" || datos.precio < 0) {
      errores.push("precio debe ser un número positivo");
    }

    if (typeof datos.exitencia !== "number" || datos.exitencia < 0) {
      errores.push("existencia debe ser un número positivo");
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
        error: "ID del producto es requerido"
      };
    }
    return { esValido: true };
  }
}

module.exports = ProductoValidator;
