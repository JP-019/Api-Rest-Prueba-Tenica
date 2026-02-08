const fs = require("fs");
const path = require("path");

const RUTA_ARCHIVO_DATOS_EJEMPLOS = path.join(__dirname, "../data/ejemplo.json");

exports.leerDatos = () => {
  try {
    if (!fs.existsSync(RUTA_ARCHIVO_DATOS_EJEMPLOS)) {
      return [];
    }

    const datosJsonSinProcesar = fs.readFileSync(RUTA_ARCHIVO_DATOS_EJEMPLOS, "utf8");
    return datosJsonSinProcesar ? JSON.parse(datosJsonSinProcesar) : [];
  } catch (error) {
    console.error("❌ Error al leer archivo de ejemplos:", error.message);
    throw new Error("No se pudo leer el archivo de datos");
  }
};
