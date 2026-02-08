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
  "nombre": "Smartphone Samsung S25",
  "precio": 850,
  "exitencia": 8
}
```

curl:
```bash
curl -X PUT http://localhost:3000/api/productos/2 \
  -H "Content-Type: application/json" \
  -d '{"productoId":"2","nombre":"Smartphone Samsung S25","precio":850,"exitencia":8}'
```

Respuesta ejemplo (200):
```json
{
  "success": true,
  "data": {
    "productoId": "2",
    "nombre": "Smartphone Samsung S25",
    "precio": 850,
    "exitencia": 8
  }
}
```

---

### DELETE - Eliminar Producto
URL: `/productos/2`

curl:
```bash
curl -X DELETE http://localhost:3000/api/productos/2
```

Respuesta ejemplo (200):
```json
{
  "success": true,
  "message": "Producto eliminado"
}
```

**⚠️ Considerar:**
- Si el producto está presente en detalles de órdenes, se ignora (sin eliminación en cascada)
- Verifica primero si el producto está en uso

---

## 📋 ÓRDENES

> Nota: el validador de órdenes (`OrdenValidator`) exige `ordenId` y `clienteId` como strings al crear/validar.
> **Impuesto:** Se calcula al **15%** automáticamente cuando se agregan productos.

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

⚠️ **IMPORTANTE:** No actualizar directamente la orden. Los totales se recalculan automáticamente al agregar/actualizar/eliminar detalles.

Si necesitas cambiar el cliente, usa:

Body (JSON):
```json
{
  "ordenId": "2",
  "clienteId": "3",
  "subtotal": 0,
  "impuesto": 0,
  "total": 0
}
```

curl:
```bash
curl -X PUT http://localhost:3000/api/ordenes/2 \
  -H "Content-Type: application/json" \
  -d '{"ordenId":"2","clienteId":"3","subtotal":0,"impuesto":0,"total":0}'
```

Respuesta ejemplo (200):
```json
{
  "success": true,
  "data": {
    "ordenId": "2",
    "clienteId": "3",
    "subtotal": 0,
    "impuesto": 0,
    "total": 0
  }
}
```

---

### DELETE - Eliminar Orden
URL: `/ordenes/2`

curl:
```bash
curl -X DELETE http://localhost:3000/api/ordenes/2
```

Respuesta ejemplo (200):
```json
{
  "success": true,
  "message": "Orden eliminada"
}
```

**⚠️ IMPORTANTE:**
- Al eliminar la orden, los detalles permanecen en `DetallesOrdenes.json` (sin eliminación en cascada)
- Considera eliminar manualmente los detalles si es necesario
- Las existencias del producto NO se restauran

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

Respuesta ejemplo (201) - Precio producto $800 × 2 cantidad = $1600 + 15% = $1840:
```json
{
  "success": true,
  "data": {
    "detalleOrdenId": "DET-1707387645123-abc123xyz",
    "ordenId": "2",
    "productoId": "2",
    "cantidad": 2,
    "subtotal": 1600,
    "impuesto": 240,
    "total": 1840
  }
}
```

**Nota:** La orden se actualiza automáticamente con los nuevos totales

---

### GET - Ver detalles de una orden
URL: `/ordenes/2/detalles`

curl:
```bash
curl http://localhost:3000/api/ordenes/2/detalles
```

---

### PUT - Actualizar cantidad en detalle
URL ejemplo: `/detalles/DET-1707387645123-abc123xyz`

Body (JSON):
```json
{
  "cantidad": 3
}
```

curl:
```bash
curl -X PUT http://localhost:3000/api/detalles/DET-1707387645123-abc123xyz \
  -H "Content-Type: application/json" \
  -d '{"cantidad":3}'
```

Respuesta ejemplo (200) - Nueva cantidad 3 × $800 = $2400 + 15% = $2760:
```json
{
  "success": true,
  "data": {
    "detalleOrdenId": "DET-1707387645123-abc123xyz",
    "ordenId": "2",
    "productoId": "2",
    "cantidad": 3,
    "subtotal": 2400,
    "impuesto": 360,
    "total": 2760
  }
}
```

**⚠️ IMPORTANTE:**
- Se valida que haya existencia suficiente
- La orden se recalcula automáticamente

---

### DELETE - Remover producto de orden
URL ejemplo: `/detalles/DET-1707387645123-abc123xyz`

curl:
```bash
curl -X DELETE http://localhost:3000/api/detalles/DET-1707387645123-abc123xyz
```

Respuesta ejemplo (200):
```json
{
  "success": true,
  "message": "Producto removido de la orden"
}
```

**⚠️ IMPORTANTE:**
- El detalle se elimina de `DetallesOrdenes.json`
- Las existencias del producto NO se restauran
- La orden se recalcula automáticamente (se eliminan los totales del detalle)

---

## 🔁 Flujo de prueba recomendado (comandos curl)

### Paso 1: Crear cliente
```bash
curl -X POST http://localhost:3000/api/clientes \
  -H "Content-Type: application/json" \
  -d '{"clienteId":"TEST-001","nombre":"Juan Pérez","identidad":"123456789"}'
```

### Paso 2: Crear dos productos
```bash
curl -X POST http://localhost:3000/api/productos \
  -H "Content-Type: application/json" \
  -d '{"productoId":"PROD-001","nombre":"Laptop Dell","precio":1200,"exitencia":5}'

curl -X POST http://localhost:3000/api/productos \
  -H "Content-Type: application/json" \
  -d '{"productoId":"PROD-002","nombre":"Mouse","precio":50,"exitencia":20}'
```

### Paso 3: Crear orden vacía
```bash
curl -X POST http://localhost:3000/api/ordenes \
  -H "Content-Type: application/json" \
  -d '{"ordenId":"ORD-001","clienteId":"TEST-001","subtotal":0,"impuesto":0,"total":0}'
```

### Paso 4: Agregar productos a la orden
**Producto 1: 1 Laptop × $1200 = $1200 + 15% impuesto = $1380**
```bash
curl -X POST http://localhost:3000/api/ordenes/ORD-001/productos/PROD-001 \
  -H "Content-Type: application/json" \
  -d '{"cantidad":1}'
```

**Producto 2: 2 Mouse × $50c/u = $100 + 15% impuesto = $115**
```bash
curl -X POST http://localhost:3000/api/ordenes/ORD-001/productos/PROD-002 \
  -H "Content-Type: application/json" \
  -d '{"cantidad":2}'
```

### Paso 5: Ver detalles de la orden
```bash
curl http://localhost:3000/api/ordenes/ORD-001/detalles
```

**Resultado esperado:** Subtotal: $1300, Impuesto: $195, Total: $1495

### Paso 6: Actualizar cantidad de un producto
**Cambiar los 2 Mouse a 4 Mouse: 4 × $50 = $200 + 15% = $230**

Primero obtener el detalleOrdenId de PROD-002 del paso 5, luego:
```bash
curl -X PUT http://localhost:3000/api/detalles/DET-XXXXX \
  -H "Content-Type: application/json" \
  -d '{"cantidad":4}'
```

### Paso 7: Ver productos en existencia (verificar decremento)
```bash
curl http://localhost:3000/api/productos/PROD-002
```

**Resultado esperado:** existencia: 14 (20 - 2 del paso 4b - 4 del paso 6)

### Paso 8: Eliminar un producto de la orden
```bash
curl -X DELETE http://localhost:3000/api/detalles/DET-XXXXX
```

### Paso 9: Verificar que la orden se recalculó
```bash
curl http://localhost:3000/api/ordenes/ORD-001
```

**Resultado esperado:** Solo queda Laptop: Subtotal: $1200, Impuesto: $180, Total: $1380

---

## 🔍 Tips y notas

### IDs
- Todos los `id` que validadores exigen como `string` deben enviarse como cadena
- Formatos sugeridos: `CLI-001`, `PROD-001`, `ORD-001`, `DET-...` (auto-generado)

### Impuestos
- **Siempre 15%** en cálculos (Subtotal × 0.15)
- Se calcula automáticamente al agregar/actualizar detalles
- NO actualizar manualmente en la orden

### Existencias
- Se decrementan al agregar producto a orden
- **NO se restauran** al remover o eliminar detalle
- Validar previamente que hay stock suficiente

### Cascadas
- **Eliminar Orden:** Detalles permanecen orfandos (sin cascada)
- **Eliminar Producto:** Si está en detalles, permanece la referencia
- **Eliminar Detalle:** Orden se recalcula automáticamente

### Errores comunes
- ❌ Enviar `cantidad` como string: `{"cantidad": "5"}` → Error
- ❌ No validar stock antes de agregar producto
- ❌ Actualizar orden manualmente en lugar de agregar detalles
- ✅ Usar Postman/Thunder Client para ver estructuras de respuesta

### Servidor
- Asegúrate de tener el servidor corriendo: `npm run start` o `node index.js`
- Base URL: `http://localhost:3000/api`
- Todos los endpoints esperan `Content-Type: application/json`

---

**Fin del archivo de ejemplos.**
