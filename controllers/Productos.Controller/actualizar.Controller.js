const fs = require("fs");
const path = require("path");

const RUTA_ARCHIVO_DATOS_EJEMPLOS = path.join(__dirname, "../data/ejemplo.json");
const ESPACIOS_INDENTACION_JSON = 2;

exports.actualizarDatos = (id, datosActualizados) => {
  try {
    if (!fs.existsSync(RUTA_ARCHIVO_DATOS_EJEMPLOS)) {
      throw new Error("El archivo no existe");
    }

    const datosJsonSinProcesar = fs.readFileSync(RUTA_ARCHIVO_DATOS_EJEMPLOS, "utf8");
    let datosEjemplos = datosJsonSinProcesar ? JSON.parse(datosJsonSinProcesar) : [];

    if (!Array.isArray(datosEjemplos)) {
      datosEjemplos = [];
    }

    const indiceRegistro = datosEjemplos.findIndex(elemento => elemento.id === id);

    if (indiceRegistro === -1) {
      throw new Error("Registro no encontrado");
    }

    datosEjemplos[indiceRegistro] = {
      ...datosEjemplos[indiceRegistro],
      ...datosActualizados
    };

    fs.writeFileSync(RUTA_ARCHIVO_DATOS_EJEMPLOS, JSON.stringify(datosEjemplos, null, ESPACIOS_INDENTACION_JSON), "utf8");
    console.log("✅ Datos actualizados correctamente.");
  } catch (error) {
    console.error("❌ Error al actualizar archivo de ejemplos:", error.message);
    throw new Error("No se pudo actualizar el archivo de datos");
  }
};

