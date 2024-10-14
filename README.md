# DE_Firebase1

Este proyecto es una aplicación web que permite gestionar usuarios, proporcionando funcionalidades para crear, leer y eliminar registros. Utiliza Vue.js como framework frontend y Firebase Firestore como base de datos para la persistencia de datos.

## Tecnologías

- **Vue.js**: Framework para construir interfaces de usuario.
- **Firebase**: Plataforma para el desarrollo de aplicaciones web y móviles.
  - **Firestore**: Base de datos NoSQL de Firebase para almacenamiento en tiempo real.
- **Pinia**: Estado global para manejar los datos de los usuarios.

## Estructura del Proyecto

- **/src**
  - **/components**: Componentes Vue de la aplicación.
    - `NewUser.vue`: Componente para agregar nuevos usuarios.
    - `UserList.vue`: Componente que muestra la lista de usuarios registrados.
  - **/stores**: Manejo del estado global de la aplicación con Pinia.
    - `users.js`: Store para manejar la lógica de los usuarios.
  - `App.vue`: Componente principal de la aplicación.
  - `main.js`: Archivo de entrada de la aplicación.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
# DE_Firebase1
