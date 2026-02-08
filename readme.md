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

* El impuesto se calcula automáticamente al **16%**
* Los IDs se generan automáticamente (UUID recomendado)
* Los datos se almacenan en archivos JSON
* La validación es obligatoria en cada operación
* Cada entidad tiene su propia ruta y controlador

---

## 🔄 Flujo de una Petición

1. **Request** llega a una ruta (clientes.routes.js)
2. **Controlador** recibe la petición
3. **Validador** valida los datos
4. **Operación** ejecuta la lógica (crear, leer, actualizar, eliminar)
5. **Servicio** gestiona el acceso a datos (JSON)
6. **Response** se devuelve al cliente







