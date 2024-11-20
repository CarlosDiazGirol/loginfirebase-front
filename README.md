# LOGIN FRONT

En este proyecto añadimos el login con Firebase desde Front. Podemos crear diferentes usuarios y a su vez estos usuarios pueden crear entradas propias diferenciadas por usuario. Este repositorio estaría asociado a https://github.com/CarlosDiazGirol/loginfirebase-back

## Inicializando el proyecto
Tenemos que instalar todas las dependencias con `npm i` y después inicializaremos con `npm run dev`
Crea un archivo .env e introduce tus variables de entorno de Firebase y la URL de tu backend. En el apartado de Variables de entorno verás el ejemplo.

## Componentes
- Login: Lógica e inputs del login
- LoutOutButton: Lógica y botón de log out
- Post: Los post por usuario
- Profile: Datos del usuario
- ProtectedRoute: Ruta que navega si no está el usuario registrado hacia el login
- Register: Lógica e inputs de registro

## Config
Aquí estará la configuración de firebase. Es tu clave pública que tendrás que añadir a .env. En el apartado de variables de entorno hay un ejemplo de como debería estar configuradas.

## Contexts
Aquí está el contexto del usuario para mantener el token activo y que una vez logado no pierda la conexión del usuario.

## Pages
Tenemos 2 páginas `feed` con todos los posts del usuario y para poder crearlos y `Profile` con los datos del usuario

## App.jsx
Todo lo necesario para el inicio de la aplicación con sus rutas

## AxiosConfig.js
Configuración de peticiones a la API

## VARIABLES DE ENTORNO
En el .env tenemos 2 tipos de variables. La primera es la URL a nuestra API y el resto son las de configuración de Firebase. Tendrá un aspecto similar a este:

```js
VITE_BACKEND_URL=http://localhost:3000

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Esta configuración viene en el dashboard de Firebase dentro de nuestro proyecto:
configuración de proyecto -> General -> Si bajamos aparecerán esos datos
