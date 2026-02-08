# 📖 Guía de Uso de la API REST

## ¿Qué es esto?

Una API REST simple para gestionar:
- **Clientes** - Personas que hacen pedidos
- **Productos** - Items que se venden
- **Órdenes** - Pedidos de clientes
- **Detalles de Órdenes** - Los productos dentro de cada orden

---

## 🚀 Iniciar el servidor

```bash
npm run start
```

El servidor corre en: `http://localhost:3000`

---

## 📚 EJEMPLOS DE LECTURA (READ)

### 1️⃣ LEER TODOS LOS CLIENTES

**URL:** `GET /api/clientes`

**Con curl:**
```bash
curl http://localhost:3000/api/clientes
```

**Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "clienteId": "CLI-001",
      "nombre": "Juan Pérez",
      "identidad": "12345678"
    },
    {
      "clienteId": "CLI-002",
      "nombre": "María López",
      "identidad": "87654321"
    }
  ]
}
```

---

### 2️⃣ LEER TODOS LOS PRODUCTOS

**URL:** `GET /api/productos`

**Con curl:**
```bash
curl http://localhost:3000/api/productos
```

**Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "productoId": "PROD-001",
      "nombre": "Laptop",
      "precio": 5000,
      "exitencia": 10
    },
    {
      "productoId": "PROD-002",
      "nombre": "Mouse",
      "precio": 150,
      "exitencia": 50
    }
  ]
}
```

---

### 3️⃣ LEER TODAS LAS ÓRDENES

**URL:** `GET /api/ordenes`

**Con curl:**
```bash
curl http://localhost:3000/api/ordenes
```

**Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "ordenId": "ORD-001",
      "clienteId": "CLI-001",
      "impuesto": 800,
      "subtotal": 5000,
      "total": 5800
    }
  ]
}
```

---

### 4️⃣ LEER DETALLES DE UNA ORDEN ESPECÍFICA

**URL:** `GET /api/ordenes/ORD-001/detalles`

**Con curl:**
```bash
curl http://localhost:3000/api/ordenes/ORD-001/detalles
```

**Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "detalleOrdenId": "DET-123456",
      "ordenId": "ORD-001",
      "productoId": "PROD-001",
      "cantidad": 2,
      "subtotal": 10000,
      "impuesto": 1600,
      "total": 11600,
      "producto": {
        "productoId": "PROD-001",
        "nombre": "Laptop",
        "precio": 5000,
        "exitencia": 8
      }
    }
  ]
}
```

---

### 5️⃣ LEER TODOS LOS DETALLES (ADMIN)

**URL:** `GET /api/detalles`

**Con curl:**
```bash
curl http://localhost:3000/api/detalles
```

**Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "detalleOrdenId": "DET-123456",
      "ordenId": "ORD-001",
      "productoId": "PROD-001",
      "cantidad": 2,
      "subtotal": 10000,
      "impuesto": 1600,
      "total": 11600
    }
  ]
}
```

---

## 🔧 CREAR DATOS (CREATE)

### 1️⃣ Crear un Cliente

**URL:** `POST /api/clientes`

**Body:**
```json
{
  "clienteId": "CLI-003",
  "nombre": "Carlos García",
  "identidad": "11223344"
}
```

**Con curl:**
```bash
curl -X POST http://localhost:3000/api/clientes \
  -H "Content-Type: application/json" \
  -d '{"clienteId":"CLI-003","nombre":"Carlos García","identidad":"11223344"}'
```

---

### 2️⃣ Crear un Producto

**URL:** `POST /api/productos`

**Body:**
```json
{
  "productoId": "PROD-003",
  "nombre": "Teclado",
  "precio": 500,
  "exitencia": 25
}
```

---

### 3️⃣ Crear una Orden

**URL:** `POST /api/ordenes`

**Body:**
```json
{
  "ordenId": "ORD-002",
  "clienteId": "CLI-001",
  "impuesto": 0,
  "subtotal": 0,
  "total": 0
}
```

---

### 4️⃣ Agregar Producto a una Orden

**URL:** `POST /api/ordenes/ORD-002/productos/PROD-001`

**Body:**
```json
{
  "cantidad": 3
}
```

**Respuesta:**
```json
{
  "success": true,
  "data": {
    "detalleOrdenId": "DET-789123",
    "ordenId": "ORD-002",
    "productoId": "PROD-001",
    "cantidad": 3,
    "subtotal": 15000,
    "impuesto": 2400,
    "total": 17400
  }
}
```

---

## ✏️ ACTUALIZAR DATOS (UPDATE)

### 1️⃣ Actualizar un Cliente

**URL:** `PUT /api/clientes/CLI-001`

**Body:**
```json
{
  "clienteId": "CLI-001",
  "nombre": "Juan Pérez Actualizado",
  "identidad": "12345678"
}
```

---

### 2️⃣ Actualizar Cantidad en una Orden

**URL:** `PUT /api/detalles/DET-789123`

**Body:**
```json
{
  "cantidad": 5
}
```

**Respuesta:**
```json
{
  "success": true,
  "data": {
    "detalleOrdenId": "DET-789123",
    "ordenId": "ORD-002",
    "productoId": "PROD-001",
    "cantidad": 5,
    "subtotal": 25000,
    "impuesto": 4000,
    "total": 29000
  }
}
```

---

## 🗑️ ELIMINAR DATOS (DELETE)

### 1️⃣ Eliminar un Cliente

**URL:** `DELETE /api/clientes/CLI-003`

**Respuesta:**
```json
{
  "success": true,
  "message": "Cliente eliminado"
}
```

---

### 2️⃣ Eliminar un Producto

**URL:** `DELETE /api/productos/PROD-003`

---

### 3️⃣ Eliminar una Orden

**URL:** `DELETE /api/ordenes/ORD-002`

---

### 4️⃣ Eliminar Producto de una Orden

**URL:** `DELETE /api/detalles/DET-789123`

**Respuesta:**
```json
{
  "success": true,
  "message": "Producto removido de la orden"
}
```

---

## 🏗️ ESTRUCTURA DEL CÓDIGO

```
controllers/
├── Clientes/          ← Gestiona personas
│   ├── operaciones/   ← CREAR, LEER, ACTUALIZAR, ELIMINAR
│   ├── servicios/     ← Acceso a archivos JSON
│   └── validadores/   ← Verificar datos correctos
│
├── Productos/         ← Gestiona productos
│   ├── operaciones/
│   ├── servicios/
│   └── validadores/
│
├── Ordenes/           ← Gestiona pedidos
│   ├── operaciones/
│   ├── servicios/
│   └── validadores/
│
└── DetalleOrdenes/    ← Une órdenes con productos
    ├── operaciones/
    ├── servicios/
    └── validadores/
```

**¿Qué significa cada carpeta?**

- **operaciones/** = Cada archivo tiene 1 tarea (crear, leer, etc)
- **servicios/** = Leen/escriben en archivos JSON
- **validadores/** = Verifican que los datos sean correctos

---

## 🔍 EJEMPLO COMPLETO: Hacer una Orden

1. **Crear cliente**
   ```bash
   curl -X POST http://localhost:3000/api/clientes \
     -H "Content-Type: application/json" \
     -d '{"clienteId":"CLI-100","nombre":"Pedro","identidad":"99999999"}'
   ```

2. **Crear producto**
   ```bash
   curl -X POST http://localhost:3000/api/productos \
     -H "Content-Type: application/json" \
     -d '{"productoId":"PROD-100","nombre":"Monitor","precio":2000,"exitencia":15}'
   ```

3. **Crear orden vacía**
   ```bash
   curl -X POST http://localhost:3000/api/ordenes \
     -H "Content-Type: application/json" \
     -d '{"ordenId":"ORD-100","clienteId":"CLI-100","impuesto":0,"subtotal":0,"total":0}'
   ```

4. **Agregar 2 monitores a la orden**
   ```bash
   curl -X POST http://localhost:3000/api/ordenes/ORD-100/productos/PROD-100 \
     -H "Content-Type: application/json" \
     -d '{"cantidad":2}'
   ```

5. **Ver la orden completa**
   ```bash
   curl http://localhost:3000/api/ordenes/ORD-100/detalles
   ```

**Resultado:**
- Subtotal: 2000 × 2 = 4000
- Impuesto (16%): 640
- Total: 4640

---

## 📁 Archivos de Datos

Los datos se guardan en archivos JSON:

- `Data/Clientes.json` - Lista de clientes
- `Data/Productos.json` - Lista de productos
- `Data/OrdenesController.json` - Lista de órdenes
- `Data/DetallesOrdenes.json` - Detalle de productos en órdenes

---

## ⚠️ Códigos de Error

| Código | Significado |
|--------|-------------|
| 200 | ✅ OK - Lectura exitosa |
| 201 | ✅ Created - Datos creados |
| 400 | ❌ Error - Datos inválidos |
| 404 | ❌ Not Found - No existe |

---

¡Listo! Ya sabes cómo usar la API. 🎉
