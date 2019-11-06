# AdoptApp
Adoptapp es una aplicación móvil que le permite a los usuarios poder adoptar una mascota de una manera mucho más fácil. Una vez la persona crea una cuenta podrá escoger las características que desea que tenga la mascota, ya sea por tamaño, edad, personalidad, pelo, etc. Una vez haya hecho este proceso AdoptApp le garantizará a la persona que saldrá un catálogo de mascotas que cumplan con las caracterísitcas que haya escogido antes. 

# Propósito
Este proyecto busca simplificar y facilitar la seleccion y adopción de una mascota brindado una plataforma atractiva, fácil de usar e inteligente. Esto se logra por medio de la centralización de la información y personalización a partir de las características escogidas por el usuario.

# Estructura del proyecto
- El proyecto consiste de una aplicacion en donde se puede encontrar informacion sobre mascotas en adopción. Esta plataforma se basa en la mecanica de swiping para brindarle a los usuarios todas las opciones disponibles. El swiping de la aplicacion le permite a los usuarios escoger las mascotas en las que estan interesados.
- La entrada al proyecto se hace por app.js y cada pantalla y sus componentes se encuentran en scr.

# Tecnologías usadas
- React Native
- Json-server

# Cómo correr la aplicación
## Prerrequisitos
Es importante tener las siguientes herramientas instaladas previamente:
- Node.js:
Para verificar si está instalada en el sistema:
```
node --version
```
Para saber cómo instalar esta tecnología se puede ingresar al siguiente link:
https://github.com/nodejs/node
- Expo:
Esta es una aplicación que se puede encontrar en el App Store o en Play Store.

## Para correrla
1. Clonar este repositorio
2. Ingresar dentro de la carpeta con el siguiente comando
```
cd AdoptApp
```
3. Para instalar todas las dependecias del proyecto:
```
npm install
```
4. Para inicializar la aplicación:
```
npm start
```
En este paso podrá notar que en la consola o en una nueva pestaña del navegador aparece un codigo QR. Este código deberá ser escaneado desde la aplicación Expo. Una vez termine de cargar podrá notar la página principal de la aplicación.

## Para desarrollo
1. Clonar este repositorio
2. Ingresar dentro de la carpeta con el siguiente comando
```
cd AdoptApp
```
3. Para instalar todas las dependecias del proyecto:
```
npm install
```
4. Para inicializar la aplicación:
```
npm start
```
En este paso podrá notar que en la consola o en una nueva pestaña del navegador aparece un codigo QR. Este código deberá ser escaneado desde la aplicación Expo. Una vez termine de cargar podrá notar la página principal de la aplicación.

4. Se utilizó json-server para simular un API REST. Para mayor información se puede ingresar al siguiente link: https://github.com/typicode/json-server

5. Para correr json-server:
```
json-server -H <ip de la maquina> --watch data\DB.json
```
También podrá correr json-server desde la siguiente URL: http://localhost:3000/

# Autores
- Sofía Sarmiento: https://github.com/ssarmientob

- Andrea Catalina Beltrán Samudio: https://github.com/acbeltrans

- Juan Esteban Mendez: https://github.com/juanesmendez

- Hector Castellanos: https://github.com/hdcastellanos

- Santiago Serrano: https://github.com/sdserranoa
