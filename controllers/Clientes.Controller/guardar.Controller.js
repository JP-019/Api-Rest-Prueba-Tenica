const fs = require("fs");
const path = require("path");

const RUTA_ARCHIVO_DATOS_EJEMPLOS = path.join(__dirname, "../data/ejemplo.json");
const ESPACIOS_INDENTACION_JSON = 2;

exports.guardarDatos = (datosNuevos) => {
  try {
    let datosEjemplosExistentes = [];

    if (fs.existsSync(RUTA_ARCHIVO_DATOS_EJEMPLOS)) {
      const datosJsonSinProcesar = fs.readFileSync(RUTA_ARCHIVO_DATOS_EJEMPLOS, "utf8");
      datosEjemplosExistentes = datosJsonSinProcesar ? JSON.parse(datosJsonSinProcesar) : [];
    }

    if (!Array.isArray(datosEjemplosExistentes)) {
      datosEjemplosExistentes = [];
    }

    datosEjemplosExistentes.push(datosNuevos);

    fs.writeFileSync(RUTA_ARCHIVO_DATOS_EJEMPLOS, JSON.stringify(datosEjemplosExistentes, null, ESPACIOS_INDENTACION_JSON), "utf8");
    console.log("✅ Datos agregados correctamente.");
  } catch (error) {
    console.error("❌ Error al guardar archivo de ejemplos:", error.message);
    throw new Error("No se pudo guardar el archivo de datos");
  }
};

