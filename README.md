# Requerimientos Funcionales – Proyecto Nuxt + TS + FakeStoreAPI

## 1. Pantalla de Inicio
- **RF-1.1**: Mostrar un listado de productos obtenidos de la API (`GET /products`).
- **RF-1.2**: Implementar paginación o lazy loading para optimizar el fetching.
- **RF-1.3**: Permitir filtrar productos por categoría (`GET /products/category/{category}`).
- **RF-1.4**: Permitir buscar productos por nombre desde el frontend (sin endpoint de búsqueda).
- **RF-1.5**: Mostrar precio, título, imagen y rating de cada producto.

## 2. Detalle de Producto
- **RF-2.1**: Al hacer clic en un producto, abrir la página de detalle (`GET /products/{id}`).
- **RF-2.2**: Mostrar imagen, título, descripción, precio, rating y categoría.
- **RF-2.3**: Botón para añadir al carrito.

## 3. Carrito de Compras
- **RF-3.1**: Mostrar lista de productos agregados al carrito (datos persistidos en `Pinia` o `useState`).
- **RF-3.2**: Permitir modificar la cantidad de un producto.
- **RF-3.3**: Calcular y mostrar el total en tiempo real.
- **RF-3.4**: Opción para eliminar productos del carrito.
- **RF-3.5**: Guardar el carrito en `localStorage` para persistencia.

## 4. Categorías
- **RF-4.1**: Mostrar listado de categorías (`GET /products/categories`).
- **RF-4.2**: Filtrar productos por categoría seleccionada.
- **RF-4.3**: Mostrar contador de productos por categoría (opcional, precalculado en frontend).

## 5. Gestión de Usuario
- **RF-5.1**: Implementar login usando `POST /auth/login`.
- **RF-5.2**: Guardar el token y usarlo en endpoints que lo requieran.
- **RF-5.3**: Mostrar nombre del usuario autenticado (`GET /users/{id}`).

## 6. Optimización de Fetching
- **RF-6.1**: Usar `useAsyncData` y `useLazyAsyncData` para precarga y carga diferida según el caso.
- **RF-6.2**: Implementar caché de datos con la opción `key` para evitar refetch innecesario.
- **RF-6.3**: Revalidar datos con `stale-while-revalidate` (si aplica).
- **RF-6.4**: Manejo de errores y estados de carga con placeholders o skeletons.

## 7. TypeScript
- **RF-7.1**: Definir interfaces para `Product`, `Category`, `User`, `Cart`.
- **RF-7.2**: Tipar las respuestas de la API y el estado global.
- **RF-7.3**: Habilitar `strict` en el `tsconfig.json` para buenas prácticas.

## 8. Extras
- **RF-8.1**: Uso de componentes reutilizables para **Card**, **List**, **Button**, **Navbar**.
- **RF-8.2**: Diseño responsive con TailwindCSS.
- **RF-8.3**: Implementar meta tags dinámicos con `useHead` para SEO básico.
- **RF-8.4**: Manejo de rutas con parámetros (`/products/:id`, `/categories/:name`).
