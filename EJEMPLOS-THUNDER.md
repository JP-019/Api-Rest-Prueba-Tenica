# 🧪 Ejemplos para Testear en Thunder Client

Aquí tienes todos los ejemplos JSON listos para copiar y pegar en Thunder Client.

---

## 🧑 CLIENTES

### POST - Crear Cliente
**URL:** `http://localhost:3000/api/clientes`

**Body (JSON):**
```json
{
  "nombre": "Juan Pérez",
  "identidad": "123456789"
}
```

---

### GET - Obtener Todos los Clientes
**URL:** `http://localhost:3000/api/clientes`

**Method:** GET (sin body)

---

### GET - Obtener Cliente por ID
**URL:** `http://localhost:3000/api/clientes/1`

**Method:** GET (sin body)

---

### PUT - Actualizar Cliente
**URL:** `http://localhost:3000/api/clientes/1`

**Body (JSON):**
```json
{
  "nombre": "Juan Carlos Pérez",
  "identidad": "987654321"
}
```

---

### DELETE - Eliminar Cliente
**URL:** `http://localhost:3000/api/clientes/1`

**Method:** DELETE (sin body)

---

## 📦 PRODUCTOS

### POST - Crear Producto
**URL:** `http://localhost:3000/api/productos`

**Body (JSON):**
```json
{
  "nombre": "Laptop Dell",
  "precio": 1200,
  "exitencia": 5
}
```

---

### POST - Crear Otro Producto
**URL:** `http://localhost:3000/api/productos`

**Body (JSON):**
```json
{
  "nombre": "Mouse Logitech",
  "precio": 25,
  "exitencia": 50
}
```

---

### GET - Obtener Todos los Productos
**URL:** `http://localhost:3000/api/productos`

**Method:** GET (sin body)

---

### GET - Obtener Producto por ID
**URL:** `http://localhost:3000/api/productos/1`

**Method:** GET (sin body)

---

### PUT - Actualizar Producto
**URL:** `http://localhost:3000/api/productos/1`

**Body (JSON):**
```json
{
  "nombre": "Laptop HP",
  "precio": 1100,
  "exitencia": 8
}
```

---

### DELETE - Eliminar Producto
**URL:** `http://localhost:3000/api/productos/1`

**Method:** DELETE (sin body)

---

## 📋 ÓRDENES

### POST - Crear Orden
**URL:** `http://localhost:3000/api/ordenes`

**Body (JSON):**
```json
{
  "clienteId": "1",
  "subtotal": 1200,
  "impuesto": 192,
  "total": 1392
}
```

---

### GET - Obtener Todas las Órdenes
**URL:** `http://localhost:3000/api/ordenes`

**Method:** GET (sin body)

---

### GET - Obtener Orden por ID
**URL:** `http://localhost:3000/api/ordenes/1`

**Method:** GET (sin body)

---

### PUT - Actualizar Orden
**URL:** `http://localhost:3000/api/ordenes/1`

**Body (JSON):**
```json
{
  "clienteId": "1",
  "subtotal": 1500,
  "impuesto": 240,
  "total": 1740
}
```

---

### DELETE - Eliminar Orden
**URL:** `http://localhost:3000/api/ordenes/1`

**Method:** DELETE (sin body)

---

## 🔗 DETALLES DE ÓRDENES

### POST - Agregar Producto a Orden
**URL:** `http://localhost:3000/api/ordenes/1/productos/1`

**Body (JSON):**
```json
{
  "cantidad": 2
}
```

---

### GET - Ver Detalles de una Orden
**URL:** `http://localhost:3000/api/ordenes/1/detalles`

**Method:** GET (sin body)

---

### PUT - Actualizar Cantidad en Detalle
**URL:** `http://localhost:3000/api/detalles/1`

**Body (JSON):**
```json
{
  "cantidad": 5
}
```

---

### DELETE - Remover Producto de Orden
**URL:** `http://localhost:3000/api/detalles/1`

**Method:** DELETE (sin body)

---

### GET - Ver Todos los Detalles (Admin)
**URL:** `http://localhost:3000/api/detalles`

**Method:** GET (sin body)

---

## 📋 Orden de Prueba Recomendada

Sigue este orden para un flujo completo:

1. **POST `/api/clientes`** - Crear un cliente
2. **POST `/api/productos`** - Crear producto 1
3. **POST `/api/productos`** - Crear producto 2
4. **POST `/api/ordenes`** - Crear una orden
5. **POST `/api/ordenes/1/productos/1`** - Agregar producto a orden (cantidad: 2)
6. **POST `/api/ordenes/1/productos/2`** - Agregar otro producto (cantidad: 3)
7. **GET `/api/ordenes/1/detalles`** - Ver detalles de la orden
8. **PUT `/api/detalles/1`** - Cambiar cantidad en detalle
9. **GET `/api/detalles`** - Ver todos los detalles

---

## 🔍 Tips para Thunder Client

- Asegúrate de tener el servidor corriendo: `npm run start`
- Selecciona **POST**, **GET**, **PUT** o **DELETE** según corresponda
- El **Content-Type** debe ser `application/json`
- Copia el URL exacto en el campo URL
- Pega el JSON en la pestaña **Body**
- Presiona **Send** para ejecutar

---

## 📝 Notas Importantes

- Los IDs se generan automáticamente en las respuestas
- El impuesto se calcula al **16%** automáticamente
- Asegúrate de que los IDs existan antes de actualizar o eliminar
- Para referenciar clientes, productos u órdenes, usa los IDs generados
