# 📖 Guía de Endpoints - API REST

## 🚀 Iniciar el servidor

```bash
npm run start
```

Servidor en: `http://localhost:3000/api`

---

## 🧑 CLIENTES

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/clientes` | Crear un cliente nuevo |
| GET | `/api/clientes` | Obtener todos los clientes |
| PUT | `/api/clientes/:id` | Actualizar datos de un cliente |
| DELETE | `/api/clientes/:id` | Eliminar un cliente |

---

## 📋 ÓRDENES

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/ordenes` | Crear una nueva orden |
| GET | `/api/ordenes` | Obtener todas las órdenes |
| PUT | `/api/ordenes/:id` | Actualizar una orden |
| DELETE | `/api/ordenes/:id` | Eliminar una orden |

---

## 📦 PRODUCTOS

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/productos` | Crear un producto nuevo |
| GET | `/api/productos` | Obtener todos los productos |
| PUT | `/api/productos/:id` | Actualizar datos de un producto |
| DELETE | `/api/productos/:id` | Eliminar un producto |

---

## 🔗 DETALLES DE ÓRDENES (Orden-Producto)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/ordenes/:ordenId/productos/:productoId` | Agregar un producto a una orden |
| GET | `/api/ordenes/:ordenId/detalles` | Ver los productos de una orden |
| PUT | `/api/detalles/:detalleId` | Cambiar la cantidad de un producto en la orden |
| DELETE | `/api/detalles/:detalleId` | Remover un producto de la orden |
| GET | `/api/detalles` | Ver todos los detalles (Admin) |

---

## 📊 Estructura Base de Datos

### Cliente
```json
{
  "clienteId": "1",
  "nombre": "Juan",
  "identidad": "123456789"
}
```

### Producto
```json
{
  "productoId": "1",
  "nombre": "Laptop",
  "precio": 1000,
  "exitencia": 5
}
```

### Orden
```json
{
  "ordenId": "1",
  "clienteId": "1",
  "subtotal": 1000,
  "impuesto": 160,
  "total": 1160
}
```

### Detalle de Orden
```json
{
  "detalleId": "1",
  "ordenId": "1",
  "productoId": "1",
  "cantidad": 1,
  "subtotal": 1000,
  "impuesto": 160,
  "total": 1160
}
```

---

## ✅ Notas

- El impuesto se calcula automáticamente al 16%
- Los IDs se generan automáticamente
- Usa JSON en el body de las peticiones POST y PUT

