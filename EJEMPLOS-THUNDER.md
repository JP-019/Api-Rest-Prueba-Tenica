# 🧪 Ejemplos para Thunder Client (actualizado)

Estos ejemplos están alineados con los validadores y modelos del proyecto (los `id` deben enviarse como strings cuando el validador lo exige).

Base URL: `http://localhost:3000/api`

---

## 🧑 CLIENTES

### POST - Crear Cliente
URL: `/clientes`

Body (JSON) (requerido según `ClienteValidator`):
```json
{
  "clienteId": "1",
  "nombre": "Juan Pérez",
  "identidad": "123456789"
}
```

Ejemplo curl:
```bash
curl -X POST http://localhost:3000/api/clientes \
  -H "Content-Type: application/json" \
  -d '{"clienteId":"1","nombre":"Juan Pérez","identidad":"123456789"}'
```

Respuesta exitosa (201):
```json
{
  "success": true,
  "data": {
    "clienteId": "1",
    "nombre": "Juan Pérez",
    "identidad": "123456789"
  }
}
```

---

### GET - Obtener Todos los Clientes
URL: `/clientes`

Method: GET

curl:
```bash
curl http://localhost:3000/api/clientes
```

---

### GET - Obtener Cliente por ID
URL: `/clientes/:id` (ej: `/clientes/1`)

curl:
```bash
curl http://localhost:3000/api/clientes/1
```

---

### PUT - Actualizar Cliente
URL: `/clientes/1`

Body (JSON):
```json
{
  "clienteId": "1",
  "nombre": "Juan Carlos Pérez",
  "identidad": "987654321"
}
```

curl:
```bash
curl -X PUT http://localhost:3000/api/clientes/1 \
  -H "Content-Type: application/json" \
  -d '{"clienteId":"1","nombre":"Juan Carlos Pérez","identidad":"987654321"}'
```

---

### DELETE - Eliminar Cliente
URL: `/clientes/1`

curl:
```bash
curl -X DELETE http://localhost:3000/api/clientes/1
```

---

## 📦 PRODUCTOS

Los validadores piden `productoId` string en la creación.

### POST - Crear Producto
URL: `/productos`

Body (JSON):
```json
{
  "productoId": "4",
  "nombre": "Mouse Logitech",
  "precio": 25,
  "exitencia": 50
}
```

curl:
```bash
curl -X POST http://localhost:3000/api/productos \
  -H "Content-Type: application/json" \
  -d '{"productoId":"4","nombre":"Mouse Logitech","precio":25,"exitencia":50}'
```

Respuesta ejemplo (201):
```json
{
  "success": true,
  "data": {
    "productoId": "4",
    "nombre": "Mouse Logitech",
    "precio": 25,
    "exitencia": 50
  }
}
```

---

### GET - Obtener Todos los Productos
URL: `/productos`

curl:
```bash
curl http://localhost:3000/api/productos
```

---

### GET - Obtener Producto por ID
URL: `/productos/:id` (ej: `/productos/2`)

curl:
```bash
curl http://localhost:3000/api/productos/2
```

---

### PUT - Actualizar Producto
URL: `/productos/2`

Body (JSON):
```json
{
  "productoId": "2",
  "nombre": "Smartphone Samsung S",
  "precio": 820,
  "exitencia": 9
}
```

curl:
```bash
curl -X PUT http://localhost:3000/api/productos/2 \
  -H "Content-Type: application/json" \
  -d '{"productoId":"2","nombre":"Smartphone Samsung S","precio":820,"exitencia":9}'
```

---

### DELETE - Eliminar Producto
URL: `/productos/2`

curl:
```bash
curl -X DELETE http://localhost:3000/api/productos/2
```

---

## 📋 ÓRDENES

> Nota: el validador de órdenes (`OrdenValidator`) exige `ordenId` y `clienteId` como strings al crear/validar.

### POST - Crear Orden
URL: `/ordenes`

Body (JSON):
```json
{
  "ordenId": "2",
  "clienteId": "2",
  "subtotal": 800,
  "impuesto": 128,
  "total": 928
}
```

curl:
```bash
curl -X POST http://localhost:3000/api/ordenes \
  -H "Content-Type: application/json" \
  -d '{"ordenId":"2","clienteId":"2","subtotal":800,"impuesto":128,"total":928}'
```

Respuesta ejemplo (201):
```json
{
  "success": true,
  "data": {
    "ordenId": "2",
    "clienteId": "2",
    "subtotal": 800,
    "impuesto": 128,
    "total": 928
  }
}
```

---

### GET - Obtener Todas las Órdenes
URL: `/ordenes`

curl:
```bash
curl http://localhost:3000/api/ordenes
```

---

### GET - Obtener Orden por ID
URL: `/ordenes/:id` (ej: `/ordenes/2`)

curl:
```bash
curl http://localhost:3000/api/ordenes/2
```

---

### PUT - Actualizar Orden
URL: `/ordenes/2`

Body (JSON):
```json
{
  "ordenId": "2",
  "clienteId": "2",
  "subtotal": 1000,
  "impuesto": 160,
  "total": 1160
}
```

curl:
```bash
curl -X PUT http://localhost:3000/api/ordenes/2 \
  -H "Content-Type: application/json" \
  -d '{"ordenId":"2","clienteId":"2","subtotal":1000,"impuesto":160,"total":1160}'
```

---

### DELETE - Eliminar Orden
URL: `/ordenes/2`

curl:
```bash
curl -X DELETE http://localhost:3000/api/ordenes/2
```

---

## 🔗 DETALLES DE ÓRDENES

Rutas principales (según `detalles.routes.js`):
- POST `/ordenes/:ordenId/productos/:productoId` - Agregar producto a orden (Body: `{ cantidad }`)
- GET `/ordenes/:ordenId/detalles` - Ver detalles por orden
- PUT `/detalles/:detalleId` - Actualizar cantidad (Body: `{ cantidad }`)
- DELETE `/detalles/:detalleId` - Remover producto de la orden
- GET `/detalles` - Ver todos los detalles (admin)

### POST - Agregar producto a orden
URL ejemplo: `/ordenes/2/productos/2`

Body (JSON):
```json
{
  "cantidad": 2
}
```

curl:
```bash
curl -X POST http://localhost:3000/api/ordenes/2/productos/2 \
  -H "Content-Type: application/json" \
  -d '{"cantidad":2}'
```

Respuesta ejemplo (201):
```json
{
  "success": true,
  "data": {
    "detalleOrdenId": "DET-1707387645123-abc123xyz",
    "ordenId": "2",
    "productoId": "2",
    "cantidad": 2,
    "subtotal": 1600,
    "impuesto": 256,
    "total": 1856
  }
}
```

---

### GET - Ver detalles de una orden
URL: `/ordenes/2/detalles`

curl:
```bash
curl http://localhost:3000/api/ordenes/2/detalles
```

---

### PUT - Actualizar cantidad en detalle
URL ejemplo: `/detalles/:detalleId`

Body (JSON):
```json
{
  "cantidad": 5
}
```

curl:
```bash
curl -X PUT http://localhost:3000/api/detalles/DET-... \
  -H "Content-Type: application/json" \
  -d '{"cantidad":5}'
```

---

### DELETE - Remover producto de orden
URL ejemplo: `/detalles/DET-...`

curl:
```bash
curl -X DELETE http://localhost:3000/api/detalles/DET-...
```

---

## 🔁 Flujo de prueba recomendado (comandos curl)

1) Crear cliente
```bash
curl -X POST http://localhost:3000/api/clientes -H "Content-Type: application/json" -d '{"clienteId":"10","nombre":"Prueba","identidad":"000111222"}'
```

2) Crear dos productos
```bash
curl -X POST http://localhost:3000/api/productos -H "Content-Type: application/json" -d '{"productoId":"10","nombre":"Producto A","precio":100,"exitencia":20}'
curl -X POST http://localhost:3000/api/productos -H "Content-Type: application/json" -d '{"productoId":"11","nombre":"Producto B","precio":50,"exitencia":30}'
```

3) Crear orden
```bash
curl -X POST http://localhost:3000/api/ordenes -H "Content-Type: application/json" -d '{"ordenId":"10","clienteId":"10","subtotal":200,"impuesto":32,"total":232}'
```

4) Agregar productos a la orden
```bash
curl -X POST http://localhost:3000/api/ordenes/10/productos/10 -H "Content-Type: application/json" -d '{"cantidad":1}'
curl -X POST http://localhost:3000/api/ordenes/10/productos/11 -H "Content-Type: application/json" -d '{"cantidad":2}'
```

5) Ver detalles
```bash
curl http://localhost:3000/api/ordenes/10/detalles
```

---

## 🔍 Tips y notas
- Todos los `id` que validadores exigen como `string` deben enviarse como cadena.
- Si prefieres que los IDs se generen automáticamente, puedo añadir generación de IDs en los controladores (`UUID` o esquema `DET-...`).
- Asegúrate de tener el servidor corriendo: `npm run start` o `node index.js`.

---

**Fin del archivo de ejemplos.**
