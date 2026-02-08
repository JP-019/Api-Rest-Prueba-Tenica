class ClienteValidator {
  static validarDatos(datos) {
    const errores = [];

    if (!datos.clienteId || typeof datos.clienteId !== "string") {
      errores.push("clienteId es requerido y debe ser string");
    }

    if (!datos.nombre || typeof datos.nombre !== "string") {
      errores.push("nombre es requerido y debe ser string");
    }

    if (!datos.identidad || typeof datos.identidad !== "string") {
      errores.push("identidad es requerido y debe ser string");
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
        error: "ID del cliente es requerido"
      };
    }
    return { esValido: true };
  }
}

module.exports = ClienteValidator;
