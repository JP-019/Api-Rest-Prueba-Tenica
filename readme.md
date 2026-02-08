Aquí tienes las correcciones aplicadas a tu README.md, listo para usar y sin errores de consistencia:

---

# 🚀 API REST - Gestión de Clientes, Productos y Órdenes

Una API REST moderna construida con **Node.js y Express** para gestionar clientes, productos, órdenes y sus relaciones.

---

## 📚 Tecnologías Utilizadas

### Backend

* **Node.js** - Runtime de JavaScript para servidor
* **Express.js** - Framework web minimalista y flexible
* **JavaScript (ES6+)** - Lenguaje de programación

### Almacenamiento

* **JSON (File-based)** - Persistencia de datos en archivos JSON
* **Sistema de Archivos (fs)** - Lectura y escritura de datos

### Arquitectura

* **Arquitectura de Capas** - Separación en 3 niveles:

  * **Capa de Rutas** - Manejo de endpoints (clientes.routes.js, ordenes.routes.js, etc.)
  * **Capa de Controladores** - Orquestación de lógica (operaciones/)
  * **Capa de Servicios** - Acceso a datos (servicios/)
  * **Capa de Validadores** - Validación de entrada (validadores/)

### Herramientas de Desarrollo

* **npm** - Gestor de dependencias
* **Git** - Control de versiones

---

## 📁 Estructura del Proyecto

```
Api-Rest-Prueba-Tenica/
├── controllers/
│   ├── Clientes/
│   │   ├── operaciones/
│   │   ├── servicios/
│   │   ├── validadores/
│   │   └── ClienteController.js
│   ├── Ordenes/
│   ├── Productos/
│   └── DetalleOrdenes/
├── models/
│   ├── Cliente.js
│   ├── Orden.js
│   ├── Producto.js
│   └── DetalleOrden.js
├── routes/
│   ├── routes.js             (Orquestador central)
│   ├── clientes.routes.js
│   ├── ordenes.routes.js
│   ├── productos.routes.js
│   └── detalles.routes.js
├── Data/
│   ├── Clientes.json
│   ├── Ordenes.json
│   ├── Productos.json
│   └── DetalleOrdenes.json
├── index.js
├── package.json
└── API-GUIA.md
```



## 🎯 Características Principales

✅ **CRUD Completo** - Crear, Leer, Actualizar, Eliminar
✅ **Relaciones de Datos** - Órdenes con Productos
✅ **Validación de Entrada** - Validadores en cada operación
✅ **Cálculo Automático** - Impuesto al 16% en órdenes y detalles
✅ **Arquitectura Modular** - Fácil de mantener y escalar
✅ **Separación de Capas** - Cada capa tiene responsabilidad única

---

## 🚀 Cómo Iniciar

### Instalación de dependencias

```bash
npm install
```

### Iniciar el servidor

```bash
npm run start
```

Servidor disponible en: `http://localhost:3000/api`

### Verificar instalación

```bash
npm list
```

---

## 🏃 Cómo Ejecutar

### Desarrollo (con recarga automática)

```bash
npm run start
```

El servidor estará disponible en: **http://localhost:3000**

### Producción (sin nodemon)

```bash
node index.js
```

### Detener el servidor

```bash
Ctrl + C
```

---

## 📡 Endpoints Disponibles

### 📌 Clientes

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/clientes` | Obtener todos los clientes |
| `GET` | `/api/clientes/:id` | Obtener cliente por ID |
| `POST` | `/api/clientes` | Crear nuevo cliente |
| `PUT` | `/api/clientes/:id` | Actualizar cliente |
| `DELETE` | `/api/clientes/:id` | Eliminar cliente |

**Ejemplo de creación:**
```bash
curl -X POST http://localhost:3000/api/clientes \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Juan", "identidad": "123456789"}'
```

---

### 📦 Productos

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/productos` | Obtener todos los productos |
| `GET` | `/api/productos/:id` | Obtener producto por ID |
| `POST` | `/api/productos` | Crear nuevo producto |
| `PUT` | `/api/productos/:id` | Actualizar producto |
| `DELETE` | `/api/productos/:id` | Eliminar producto |

**Ejemplo de creación:**
```bash
curl -X POST http://localhost:3000/api/productos \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Laptop", "precio": 1200, "exitencia": 5}'
```

---

### 📋 Órdenes

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/ordenes` | Obtener todas las órdenes |
| `GET` | `/api/ordenes/:id` | Obtener orden por ID |
| `POST` | `/api/ordenes` | Crear nueva orden |
| `PUT` | `/api/ordenes/:id` | Actualizar orden |
| `DELETE` | `/api/ordenes/:id` | Eliminar orden |

**Ejemplo de creación:**
```bash
curl -X POST http://localhost:3000/api/ordenes \
  -H "Content-Type: application/json" \
  -d '{"clienteId": "1", "impuesto": 0, "subtotal": 0, "total": 0}'
```

---

### 🔗 Detalles de Órdenes (Agregar/Remover Productos)

| Método | Ruta | Descripción |
|--------|------|-------------|
| `POST` | `/api/ordenes/:ordenId/productos/:productoId` | Agregar producto a orden |
| `GET` | `/api/ordenes/:ordenId/detalles` | Obtener detalles de una orden |
| `GET` | `/api/detalles` | Obtener todos los detalles (Admin) |
| `PUT` | `/api/detalles/:detalleId` | Actualizar cantidad en detalle |
| `DELETE` | `/api/detalles/:detalleId` | Remover producto de orden |

**Ejemplo de agregar producto a orden:**
```bash
curl -X POST http://localhost:3000/api/ordenes/ORD-1/productos/PROD-1 \
  -H "Content-Type: application/json" \
  -d '{"cantidad": 2}'
```

**Respuesta esperada:**
```json
{
  "success": true,
  "data": {
    "detalleOrdenId": "DET-1707398400000-abc123xyz",
    "ordenId": "ORD-1",
    "productoId": "PROD-1",
    "cantidad": 2,
    "subtotal": 2400,
    "impuesto": 360,
    "total": 2760
  }
}
```

---

## 📌 Entidades Principales

### 🧑 Cliente

* clienteId
* nombre
* identidad

### 📦 Producto

* productoId
* nombre
* precio
* existencia (stock)

### 📋 Orden

* ordenId
* clienteId
* subtotal
* impuesto
* total

### 🔗 Detalle de Orden

* detalleOrdenId
* ordenId
* productoId
* cantidad
* subtotal
* impuesto
* total



## 📖 Documentación

Para ver todos los endpoints disponibles: [API-GUIA.md](./API-GUIA.md)

---

## 📝 Notas Importantes

* El impuesto se calcula automáticamente al **15%**
* Los IDs se generan automáticamente con timestamp + aleatorio
* Los datos se almacenan en archivos JSON
* La validación es obligatoria en cada operación
* Cada entidad tiene su propia ruta y controlador
* Las existencias de productos se decrementan automáticamente al agregar a orden
* Los totales de la orden se recalculan automáticamente

---

## 💡 Decisiones Técnicas Importantes

### 1️⃣ **Impuesto del 15%**
- **Decisión:** Cambio de 16% a 15% según especificación de negocio
- **Implementación:** Calculado en `controllers/DetalleOrdenes/operaciones/agregar.js`
- **Fórmula:** `Impuesto = Subtotal × 0.15`
- **Precisión:** Redondeado a 2 decimales con `.toFixed(2)`

### 2️⃣ **Validación de Existencia (CRÍTICA)**
- **Decisión:** Validar stock antes de agregar producto a orden
- **Lógica:** Si `producto.exitencia < cantidad`, lanzar error
- **Impacto:** Previene sobreventa y mantiene integridad de datos
- **Ubicación:** `controllers/DetalleOrdenes/operaciones/agregar.js` línea 35-37

### 3️⃣ **Actualización Automática de Stock**
- **Decisión:** Decrementar existencia al agregar producto a orden
- **Fórmula:** `Existencia -= Cantidad`
- **Almacenamiento:** Cambio persiste en `Data/Productos.json`
- **Ubicación:** `ProductoService.guardarDatos()`

### 4️⃣ **Recálculo de Totales de Orden**
- **Decisión:** Sumar todos los detalles de una orden para obtener totales reales
- **Fórmulas:**
  - `Subtotal = Σ subtotales del detalle`
  - `Impuesto = Σ impuestos del detalle`
  - `Total = Σ totales del detalle`
- **Ubicación:** `controllers/DetalleOrdenes/operaciones/agregar.js` línea 73-93

### 5️⃣ **Almacenamiento en JSON**
- **Decisión:** Usar archivos JSON en lugar de base de datos
- **Ventajas:** Simplicidad, sin dependencias externas, fácil debug
- **Desventajas:** No es escalable a producción, sin transacciones
- **Archivos:**
  - `Data/Clientes.json`
  - `Data/Productos.json`
  - `Data/OrdenesController.json`
  - `Data/DetallesOrdenes.json`

### 6️⃣ **Arquitectura en Capas**
- **Decisión:** Separación en 4 capas para mantenibilidad
- **Capas:**
  1. **Rutas** - Manejo HTTP y respuestas
  2. **Controladores** - Orquestación de lógica
  3. **Operaciones** - Ejecución de CRUD
  4. **Servicios** - Acceso y persistencia de datos
- **Validadores** - Validación independiente en cada módulo

### 7️⃣ **Generación de IDs**
- **Decisión:** IDs automáticos usando microtimestamp + aleatoriedad
- **Formato:** `PREFIX-${Date.now()}-${random}`
- **Ejemplos:**
  - Cliente: `CLI-1707398400000-xyz789`
  - Producto: `PROD-1707398400000-abc123`
  - Orden: `ORD-1707398400000-def456`
  - Detalle: `DET-1707398400000-ghi789`

### 8️⃣ **Manejo de Errores**
- **Decisión:** Validación front-load antes de operaciones
- **Estrategia:**
  1. Validar datos de entrada
  2. Validar existencia de recursos
  3. Validar restricciones de negocio
  4. Ejecutar operación
  5. Persistir cambios
- **Ubicación:** Cada `operacion.js` tiene try-catch

### 9️⃣ **Cálculos Numéricos Precisos**
- **Decisión:** Usar `.toFixed(2)` para evitar errores de punto flotante
- **Ejemplo:** `Number((precio * cantidad).toFixed(2))`
- **Motivo:** JavaScript tiene imprecisión con decimales

### 🔟 **Estado de una Orden**
- **Nota:** Las órdenes se crean con totales en 0
- **Actualización:** Los totales se recalculan al agregar/actualizar/remover detalles
- **Implicación:** La orden es un agregado dependiente de sus detalles

---

## 🔄 Flujo de una Petición

1. **Request** llega a una ruta (clientes.routes.js)
2. **Controlador** recibe la petición
3. **Validador** valida los datos
4. **Operación** ejecuta la lógica (crear, leer, actualizar, eliminar)
5. **Servicio** gestiona el acceso a datos (JSON)
6. **Response** se devuelve al cliente

---

## 🧪 Flujo Completo: Agregar Producto a Orden

1. **POST** `/api/ordenes/:ordenId/productos/:productoId` con `{cantidad: X}`
2. **DetalleOrdenController.addProductoAOrden()** es llamado
3. **Validaciones:**
   - ✓ ordenId y productoId válidos
   - ✓ cantidad es número positivo
   - ✓ orden existe en base de datos
   - ✓ producto existe en base de datos
   - ✓ **CRÍTICO:** existencia del producto >= cantidad
4. **Cálculos:**
   - Subtotal = precio × cantidad
   - Impuesto = subtotal × 0.15
   - Total = subtotal + impuesto
5. **Operaciones:**
   - ✓ Crear registro en `DetallesOrdenes.json`
   - ✓ Decrementar existencia en `Productos.json`
   - ✓ Recalcular totales en `OrdenesController.json`
6. **Response:** Devolver detalleOrden creado con estructura completa







