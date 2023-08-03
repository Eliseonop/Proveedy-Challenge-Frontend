# Yachai Frontend 

## Descripción
Yachai frontend  es la interfaz de Figma del proyecto yachai, al cual le falta funcionalidad y que se agregará en el futuro. Este proyecto está desarrollado utilizando React y Vite.

# Notas:
El login es simulado asi que cual quier valor es aceptado:
![image](https://github.com/Eliseonop/Proveedy-Challenge-Frontend-Falcon-Edu/assets/59000093/279eed06-82cc-49f7-9818-1f85727baa9f)

 > El boton crear quiz les lleva al apartado de crear quiz.

![image](https://github.com/Eliseonop/Proveedy-Challenge-Frontend-Falcon-Edu/assets/59000093/61aebf4f-ab2c-4144-9a5d-22e0a70b5a0d)

 > Apartado de crear quiz:

![image](https://github.com/Eliseonop/Proveedy-Challenge-Frontend-Falcon-Edu/assets/59000093/ec393eb6-09ee-4b24-a999-c1f3a3270948)





## Instalación
Para instalar y ejecutar el proyecto, sigue estos pasos:

1. Asegúrate de tener Node.js instalado (versión 16 o superior).
2. Ejecuta el siguiente comando para instalar las dependencias:

> npm install

Luego, inicia el servidor de desarrollo con el siguiente comando:

> npm run dev
Esto iniciará la aplicación y estará disponible en http://localhost:3000.

## Requisitos del Sistema
- Node.js (versión 16 o superior).

## Estado del Proyecto
El proyecto se encuentra en construcción, y aún faltan pulir muchas cosas. Tu contribución es bienvenida para mejorar y añadir nuevas funcionalidades.

## Contribución
Autor principal:
- Edu Falcon

Si deseas contribuir al proyecto, sigue los siguientes pasos:
1. Haz un fork de este repositorio y clona el fork en tu máquina local.
2. Crea una nueva rama para trabajar en tu mejora o corrección.
3. Realiza los cambios necesarios y asegúrate de que las pruebas pasen correctamente.
4. Envía una solicitud de extracción (Pull Request) explicando los cambios realizados.

## Contacto
Si tienes alguna pregunta o comentario sobre el proyecto, no dudes en contactarme a través de mi correo electrónico: elisenop@gmail.com

¡Gracias por tu interés en el proyecto yachai frontend !


 



## Esta aplicacion fue construido con  React + TypeScript + Vite

Esta plantilla proporciona una configuración mínima para hacer funcionar React en Vite con HMR (Hot Module Replacement) y algunas reglas de ESLint.

Actualmente, hay dos complementos oficiales disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) utiliza [Babel](https://babeljs.io/) para Fast Refresh (recarga rápida).
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) utiliza [SWC](https://swc.rs/) para Fast Refresh (recarga rápida).

## Ampliación de la configuración de ESLint

Si estás desarrollando una aplicación para producción, te recomendamos actualizar la configuración para habilitar reglas de lint (análisis estático) que sean conscientes de los tipos:

- Configura la propiedad `parserOptions` a nivel superior de esta manera:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },

