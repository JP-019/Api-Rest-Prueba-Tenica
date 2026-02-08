class DetalleOrden {
  constructor({ detalleOrdenId, ordenId, productoId, cantidad,impuesto,subtotal,total }) {
    this.detalleOrdenId = detalleOrdenId;
    this.ordenId = ordenId;
    this.productoId = productoId;
    this.cantidad = cantidad;
    this.impuesto = impuesto;
    this.subtotal = subtotal;
    this.total = total;
  }
}

module.exports = DetalleOrden;
