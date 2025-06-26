# Calculadora de 3 Números

Esta es una aplicación web construida con **React 18** y **Vite** que permite capturar tres números, enviarlos a una API y mostrar el resultado devuelto por el backend. Si ocurre un error, se muestra el mensaje de error proporcionado por la API.

## Características
- Formulario interactivo para ingresar tres números.
- Botón "Calcular" que realiza una petición GET a una API definida en el archivo `.env`.
- Muestra el resultado numérico si la respuesta es exitosa.
- Muestra el mensaje de error si la API responde con error.
- Diseño simple, moderno y responsivo.

## Requisitos previos
- Node.js >= 16.x
- npm >= 8.x

## Instalación y despliegue local

1. **Clona el repositorio o descarga el código fuente.**

2. **Instala las dependencias:**
   ```sh
   npm install
   ```

3. **Configura la URL de la API:**
   - Edita el archivo `.env` en la raíz del proyecto y asegúrate de que la variable `VITE_API_BASE_URL` apunte a tu endpoint, por ejemplo:
     ```env
     VITE_API_BASE_URL=http://localhost:8080/calculate
     ```

4. **Inicia la aplicación en modo desarrollo:**
   ```sh
   npm run dev
   ```
   Esto abrirá la app en `http://localhost:5173`.

## Descripción técnica
- El formulario envía los tres números como parámetros de consulta (GET) a la API.
- La URL base de la API se configura mediante variables de entorno (`.env`).
- Si la API responde con éxito, se muestra el resultado numérico.
- Si ocurre un error, se muestra el mensaje de error devuelto por la API.

## Notas sobre CORS
Si ves un error relacionado con CORS al hacer la petición a la API, asegúrate de que el backend permita solicitudes desde el origen de la app (`http://localhost:5173`).

## Estructura del proyecto
```
calculate/
├── public/
├── src/
│   ├── components/
│   │   └── CalculateForm.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
├── vite.config.js
└── README.md
```

## Licencia
MIT
