const DetalleOrden = require("../../../models/DetalleOrden");
const DetalleOrdenService = require("../servicios/DetalleOrdenService");
const DetalleOrdenValidator = require("../validadores/DetalleOrdenValidator");
const ProductoService = require("../../Productos/servicios/ProductoService");
const OrdenService = require("../../Ordenes/servicios/OrdenService");

class AgregarProducto {
  static ejecutar(ordenId, productoId, cantidad) {
    try {
      // Validar datos
      const validacionDatos = DetalleOrdenValidator.validarProductoYOrden(ordenId, productoId);
      if (!validacionDatos.esValido) {
        throw new Error(validacionDatos.errores.join(", "));
      }

      const validacionCantidad = DetalleOrdenValidator.validarCantidad(cantidad);
      if (!validacionCantidad.esValido) {
        throw new Error(validacionCantidad.error);
      }

      // Validar que la orden existe
      const orden = DetalleOrdenService.obtenerOrden(ordenId);
      if (!orden) {
        throw new Error("Orden no encontrada");
      }

      // Validar que el producto existe
      const producto = DetalleOrdenService.obtenerProducto(productoId);
      if (!producto) {
        throw new Error("Producto no encontrado");
      }

      // Validar existencia suficiente (CRÍTICO)
      if (producto.exitencia < cantidad) {
        throw new Error("Cantidad insuficiente en existencia");
      }

      // Calcular precios
      const precio = producto.precio;
      const subtotal = Number((precio * cantidad).toFixed(2));
      const impuesto = Number((subtotal * 0.15).toFixed(2));
      const total = Number((subtotal + impuesto).toFixed(2));

      // Crear detalle de orden
      const detalles = DetalleOrdenService.leerDetalles();
      const detalleOrdenId = `DET-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

      const detalleOrden = new DetalleOrden({
        detalleOrdenId,
        ordenId,
        productoId,
        cantidad,
        impuesto,
        subtotal,
        total
      });

      detalles.push(detalleOrden);
      DetalleOrdenService.guardarDetalles(detalles);

      // Actualizar existencia del producto
      const productos = ProductoService.leerDatos();
      const indiceProducto = ProductoService.obtenerIndice(productoId);
      if (indiceProducto === -1) {
        throw new Error("Producto no encontrado al actualizar existencia");
      }

      productos[indiceProducto].exitencia = Number(productsafe(productos[indiceProducto].exitencia - cantidad));
      if (productos[indiceProducto].exitencia < 0) {
        throw new Error("Resultado de existencia inválido");
      }
      ProductoService.guardarDatos(productos);

      // Recalcular totales de la orden (sumando todos los detalles existentes para esa orden)
      const detallesActualizados = DetalleOrdenService.leerDetalles();
      const detallesDeOrden = detallesActualizados.filter(d => d.ordenId === ordenId);

      const sumaSubtotal = Number(detailsSum(detallesDeOrden, 'subtotal').toFixed(2));
      const sumaImpuesto = Number(detailsSum(detallesDeOrden, 'impuesto').toFixed(2));
      const sumaTotal = Number(detailsSum(detallesDeOrden, 'total').toFixed(2));

      const ordenes = OrdenService.leerDatos();
      const indiceOrden = OrdenService.obtenerIndice(ordenId);
      if (indiceOrden === -1) {
        throw new Error("Orden no encontrada al actualizar totales");
      }

      ordenes[indiceOrden].impuesto = sumaImpuesto;
      ordenes[indiceOrden].subtotal = sumaSubtotal;
      ordenes[indiceOrden].total = sumaTotal;
      OrdenService.guardarDatos(ordenes);

      console.log("✅ Producto agregado y totales actualizados correctamente.");
      return detalleOrden;
    } catch (error) {
      console.error("❌ Error al agregar producto a orden:", error.message);
      throw new Error(error.message);
    }
  }
}

// Helpers
function detailsSum(arr, key) {
  return arr.reduce((acc, cur) => acc + (Number(cur[key]) || 0), 0);
}

function productsafe(v) {
  const n = Number(v);
  return Number.isNaN(n) ? 0 : n;
}

module.exports = AgregarProducto;
