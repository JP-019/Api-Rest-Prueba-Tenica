class Orden {
  constructor({ ordenId, clienteId, impuesto,subtotal, total }) {
    this.ordenId = ordenId;
    this.clienteId = clienteId;
    this.impuesto = impuesto;
    this.subtotal = subtotal;
    this.total = total;
  }
}

module.exports = Orden;
