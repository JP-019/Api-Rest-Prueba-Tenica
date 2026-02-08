const fs = require("fs");
const path = require("path");
const Producto = require("../../../models/Producto");

const RUTA_ARCHIVO_DATOS = path.join(__dirname, "../../../Data/Productos.json");
const ESPACIOS_INDENTACION_JSON = 2;

class ProductoService {
  static leerDatos() {
    let datosExistentes = [];

    if (fs.existsSync(RUTA_ARCHIVO_DATOS)) {
      const datosJsonSinProcesar = fs.readFileSync(RUTA_ARCHIVO_DATOS, "utf8");
      datosExistentes = datosJsonSinProcesar ? JSON.parse(datosJsonSinProcesar) : [];
    }

    if (!Array.isArray(datosExistentes)) {
      datosExistentes = [];
    }

    return datosExistentes;
  }

  static guardarDatos(datos) {
    fs.writeFileSync(RUTA_ARCHIVO_DATOS, JSON.stringify(datos, null, ESPACIOS_INDENTACION_JSON), "utf8");
  }

  static encontrarPorId(id) {
    const datos = this.leerDatos();
    return datos.find(elemento => elemento.productoId === id);
  }

  static obtenerIndice(id) {
    const datos = this.leerDatos();
    return datos.findIndex(elemento => elemento.productoId === id);
  }
}

module.exports = ProductoService;
