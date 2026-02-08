const fs = require("fs");
const path = require("path");

const RUTA_ARCHIVO_DATOS_EJEMPLOS = path.join(__dirname, "../data/ejemplo.json");
const ESPACIOS_INDENTACION_JSON = 2;

exports.eliminarDatos = (id) => {
  try {
    if (!fs.existsSync(RUTA_ARCHIVO_DATOS_EJEMPLOS)) {
      throw new Error("El archivo no existe");
    }

    const datosJsonSinProcesar = fs.readFileSync(RUTA_ARCHIVO_DATOS_EJEMPLOS, "utf8");
    let datosEjemplos = datosJsonSinProcesar ? JSON.parse(datosJsonSinProcesar) : [];

    if (!Array.isArray(datosEjemplos)) {
      datosEjemplos = [];
    }

    const datosEjemplosFiltrados = datosEjemplos.filter(elemento => elemento.id !== id);

    if (datosEjemplosFiltrados.length === datosEjemplos.length) {
      throw new Error("Registro no encontrado");
    }

    fs.writeFileSync(RUTA_ARCHIVO_DATOS_EJEMPLOS, JSON.stringify(datosEjemplosFiltrados, null, ESPACIOS_INDENTACION_JSON), "utf8");
    console.log("✅ Datos eliminados correctamente.");
  } catch (error) {
    console.error("❌ Error al eliminar registro de ejemplos:", error.message);
    throw new Error("No se pudo eliminar el registro");
  }
};


