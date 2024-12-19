# Proyecto E-commerce para Curso de Backend II de Coderhouse

## Descripción

Este proyecto es un e-commerce de venta de productos de tecnología, desarrollado como parte del curso de Backend II de Coderhouse. El objetivo es proporcionar una plataforma completa para la gestión de productos, carritos de compra y usuarios, utilizando tecnologías modernas y buenas prácticas de desarrollo.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para aplicaciones web en Node.js.
- **Handlebars**: Motor de plantillas para generar vistas dinámicas.
- **MongoDB**: Base de datos NoSQL orientada a documentos.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB y Node.js.
- **Passport**: Middleware de autenticación para Node.js.
- **JWT**: JSON Web Tokens para autenticación basada en tokens.
- **Socket.io**: Biblioteca para aplicaciones en tiempo real.

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio**
   ```sh
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio

2. **Instalar las dependencias**

npm install

3. **Configurar las variables de entorno Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:**

PORT=3000
MONGO_URL=mongodb://localhost:27017/tu-base-de-datos
SECRET_KEY=tu-clave-secreta
JWT_KEY=tu-clave-jwt
GOOGLE_CLIENT_ID=tu-google-client-id
GOOGLE_CLIENT_SECRET=tu-google-client-secret

4. **Iniciar el servidor**

npm run dev

5. **USO**

You can copy the content directly into your 

README.md

 file by following these steps:

1. Open the 

README.md

 file in Visual Studio Code.
2. Select all the current content (if any) and delete it.
3. Copy the new content provided below.
4. Paste it into the 

README.md

 file.
5. Save the file.

Here is the content to copy:

```markdown
# Proyecto E-commerce para Curso de Backend II de Coderhouse

## Descripción

Este proyecto es un e-commerce de venta de productos de tecnología, desarrollado como parte del curso de Backend II de Coderhouse. El objetivo es proporcionar una plataforma completa para la gestión de productos, carritos de compra y usuarios, utilizando tecnologías modernas y buenas prácticas de desarrollo.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para aplicaciones web en Node.js.
- **Handlebars**: Motor de plantillas para generar vistas dinámicas.
- **MongoDB**: Base de datos NoSQL orientada a documentos.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB y Node.js.
- **Passport**: Middleware de autenticación para Node.js.
- **JWT**: JSON Web Tokens para autenticación basada en tokens.
- **Socket.io**: Biblioteca para aplicaciones en tiempo real.

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio**
   ```sh
   git clone https://github.com/CodernameJT/backend2-final
   cd tu-repositorio
   ```

2. **Instalar las dependencias**
   ```sh
   npm install
   ```

3. **Configurar las variables de entorno**
   Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
   ```env
   PORT=3000
   MONGO_URL=mongodb://localhost:27017/tu-base-de

-d

atos
   SECRET_KEY=tu-clave-secreta
   JWT_KEY=tu-clave-jwt
   GOOGLE_CLIENT_ID=tu-google-client-id
   GOOGLE_CLIENT_SECRET=tu-google-client-secret
   ```

4. **Iniciar el servidor**
   ```sh
   npm run dev
   ```

## Uso

Una vez que el servidor esté en funcionamiento, puedes acceder a la aplicación en `http://localhost:3000`. La API estará disponible en `http://localhost:3000/api`.

## Funcionalidades

- **Gestión de Productos**: Crear, leer, actualizar y eliminar productos.
- **Gestión de Carritos**: Añadir productos al carrito, actualizar cantidades, eliminar productos y realizar compras.
- **Autenticación y Autorización**: Registro, inicio de sesión, autenticación con Google y manejo de roles (usuario y administrador).
- **Tiempo Real**: Notificaciones y actualizaciones en tiempo real con Socket.io.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.


