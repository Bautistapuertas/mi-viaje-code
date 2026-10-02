# Resumen Parcial — Desarrollo de Software 2026
> Este es el resumen teórico "de manual" basado en el apunte de la materia (C01 a C21), dividido exactamente en los 3 módulos de estudio. Ideal para repasar definiciones antes del examen.

---

## Módulo 1 — Web, Git, Scrum y TypeScript

### 1. Ciclo de Vida y Arquitectura
*   **Cascada:** Lineal y secuencial. No se puede volver atrás fácilmente. Asume que los requerimientos no cambian.
*   **Ágil (Scrum):** Iterativo e incremental. Entrega valor constante y se adapta al cambio.
*   **Escalabilidad:** **Vertical** (mejorar hardware, CPU, RAM) vs **Horizontal** (agregar más computadoras/nodos).
*   **Monolítico:** Todo en un solo proceso. Falla un componente, cae todo.
*   **Microservicios:** Servicios chicos e independientes. Cada uno tiene su propia lógica y base de datos (aislamiento de fallos).
*   **Multicapa:** Cada capa (Presentación → Negocio → Persistencia) se comunica **solo con la inmediatamente inferior**.

### 2. Requerimientos y UX/UI
*   **Historias de Usuario:** Requerimientos desde la vista del humano. Formato: *"Como [Rol], quiero [Acción], para [Beneficio]"*.
*   **INVEST:** Reglas para una buena historia: Independiente, Negociable, Valiosa, Estimable, **Small** (chica, clave para entrar en un sprint), Testeable.
*   **MoSCoW:** Priorización de tareas. **M**ust (Vital), **S**hould (Importante pero no bloquea), **C**ould (Un lujo), **W**on't (Descartado por ahora).
*   **Planning Poker:** Busca estimar el **tamaño/complejidad relativo** usando Fibonacci, no horas reloj exactas.
*   **UX vs UI:** **UX** es la experiencia completa del usuario (emociones, flujos). **UI** es lo visual en la pantalla.
*   **Diseño:** **Wireframe** (Baja fidelidad, estructura sin colores). **Mockup** (Estilo visual, tipografía, pero NO funcional). **Prototipo** (Alta fidelidad, interactivo).

### 3. Scrum
*   **Product Owner (PO):** Representa al cliente. Único responsable de **priorizar el Product Backlog**.
*   **Scrum Master:** Facilita el proceso, elimina bloqueos, asegura que se cumpla Scrum.
*   **Daily:** Sincronización del equipo de desarrollo (máx 15 min). No es un reporte para el jefe.
*   **Review vs Retrospective:** Review = Se muestra el **producto** terminado al cliente. Retrospective = El equipo mejora su **proceso** de trabajo.

### 4. Git y JS/TS
*   **Git pull:** Es la combinación de `git fetch` + `git merge`.
*   **Git clone:** Descarga una copia **completa** con todo el historial.
*   **let / const:** Tienen scope de bloque. `const` prohíbe reasignar.
*   **Promesas (Promise):** Valor futuro. Estados: `pending`, `fulfilled`, `rejected`. `async/await` pausa el código hasta que se resuelva.
*   **TypeScript:** Tipado estático (errores en tiempo de compilación). `any` apaga los chequeos (no recomendado), `unknown` obliga a verificar antes de usar.

---

## Módulo 2 — React Frontend

### 1. Conceptos Core
*   **Virtual DOM:** Copia ligera en memoria del DOM real. React hace "Diffing" (busca las diferencias) y actualiza solo el nodo del DOM real que cambió (muy rápido).
*   **Estado (State):** Memoria del componente. Si cambia, el componente se re-renderiza.
*   **Props:** Parámetros de configuración que el padre pasa al hijo. Son de **solo lectura**.
*   **Inmutabilidad:** En React no se debe mutar el estado original (ej: prohibido usar `.push()`). Siempre crear un array/objeto nuevo: `[...libros, nuevoLibro]`.

### 2. Hooks
*   **Regla general:** Van en el nivel superior del componente. Nunca dentro de loops o `if`. React los identifica por el **orden** en que se llaman.
*   **useEffect:** Maneja efectos secundarios (APIs, timers). 
    *   Sin array: corre en CADA render.
    *   `[]`: corre **una sola vez**, al montar.
    *   `[x]`: corre al montar y cada vez que cambia `x`.
*   **useContext:** Crea una "nube global" para evitar el **Prop Drilling** (pasar props nivel por nivel por componentes que no la necesitan).
*   **StrictMode:** En desarrollo monta el componente dos veces a propósito para buscar bugs (por eso ves 2 console.log).

### 3. Routing y Formularios
*   **`<Link>` vs `<a>`:** `<a>` recarga toda la página (pierde el estado). `<Link>` intercepta el click y renderiza el nuevo componente logrando una verdadera **SPA** (Single Page Application).
*   **Componente Controlado:** Un input cuyo valor es manejado 100% por el estado de React (`value` + `onChange`). React es la única fuente de la verdad.
*   **Zod:** Librería para validar esquemas (email, min, max).

### 4. CORS y Seguridad Front
*   **CORS:** Mecanismo del **navegador** para bloquear pedidos de otros orígenes. **Protege al usuario, no al servidor.** (Postman o curl no aplican CORS porque no son navegadores).
*   **Preflight (OPTIONS):** Request previo que manda el navegador en operaciones complejas (PUT, DELETE) para preguntar permisos.
*   **LocalStorage:** Guardar el token ahí tiene riesgo de **XSS** (un script malicioso inyectado puede leer el storage).
*   **Validación UI:** Esconder un botón de "Borrar" en React es pura **UX**, no es seguridad. La seguridad real recae siempre en el Backend.

---

## Módulo 3 — Backend, Seguridad y Testing

### 1. Backend y HTTP
*   **Capas del Backend:**
    *   **Routes:** Elige a qué controller ir (sin lógica).
    *   **Controllers:** Traducen HTTP a dominio. Eligen el Status Code.
    *   **Services:** Lógica pura de negocio. **No saben que existe HTTP** (no conocen `req`, `res` ni status codes).
*   **REST:** Estilo de arquitectura. Usa sustantivos en plural (`/api/libros`), no verbos (`/api/traerLibros` ❌).
*   **Idempotencia:** Si llamo a una ruta 10 veces, el sistema queda igual que si la llamara 1 vez. `PUT` y `DELETE` son idempotentes. `POST` no lo es.
*   **Status Codes:** 201 (Created), 204 (No Content), 400 (Bad Request / Error Zod), 409 (Conflict / Duplicado).

### 2. Base de Datos, Docker y ORM
*   **Docker:** Empaqueta la app y dependencias en un contenedor aislado. **Contenedor** (comparte kernel, levanta en segundos) vs **Máquina Virtual** (virtualiza Hardware, muy pesada).
*   **ORM (Prisma):** Traduce Programación Orientada a Objetos a SQL. **Qué NO hace:** No diseña tu BD ni optimiza mágicamente tus consultas complejas.
*   **onDelete: Cascade:** Borra automáticamente al registro padre y a todos sus hijos (peligroso, pero útil para no dejar registros huérfanos).

### 3. Autenticación y Seguridad
*   **401 vs 403:** 
    *   **401 Unauthorized:** No sé quién sos (falta token). 
    *   **403 Forbidden:** Sé quién sos, pero no tenés permiso (rol insuficiente).
*   **Hash vs Cifrado:** El Hash (bcrypt) es **irreversible** (para contraseñas). El Cifrado es reversible con clave.
*   **JWT (JSON Web Token):** Está **firmado, no encriptado**. Cualquiera puede leer el payload (que está en base64), por lo que NUNCA debe llevar contraseñas.
*   **Inyección SQL:** Se previene **parametrizando** las consultas (separando la lógica del string). Prisma lo hace por defecto.

### 4. Testing
*   **Pirámide de Testing:** Base de Unitarios (rápidos, prueban funciones aisladas con mocks). Medio de Integración (prueban varias piezas encajando, API+DB). Punta de E2E (flujo de usuario en navegador real, caros y lentos).
*   **TDD (Test-Driven Development):** Ciclo **Rojo** (falla porque no hay código) → **Verde** (código mínimo para pasar) → **Refactor**.
*   **Testing Library (`getBy` vs `queryBy`):** `getBy` corta el test con error si no encuentra el elemento. `queryBy` devuelve `null` (ideal para testear que algo NO aparece en pantalla).
*   **Mocks (`vi.fn()`):** Versión falsa de una función que registra si fue llamada (sirve para probar el controller aislando a la BD real).
*   **Coverage (100%):** Solo significa que el código se ejecutó en los tests, **no garantiza que no haya bugs** si los `expect()` (asserts) son malos.
