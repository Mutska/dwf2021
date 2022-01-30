# Dwfmarket

Para correr el proyecto necesitamos instalar ciertos programas.
Damos el orden de instalación de los programas y configuración del proyecto

## 1. Instalar Java
En mi caso para el sistema operativo windows podemos conseguirlo en el siguinte link de [java](https://download.oracle.com/java/17/latest/jdk-17_windows-x64_bin.exe)


## 2. Instalar Spring Tools

Lo conseguimos en la siguiente liga de [Spring Tools](https://download.springsource.com/release/STS4/4.13.0.RELEASE/dist/e4.22/spring-tool-suite-4-4.13.0.RELEASE-e4.22.0-win32.win32.x86_64.self-extracting.jar)

Se descarga un archivo de tipo jar, el cual ejecutaremos con el comando
`java -jar file.jar` donde *file* es el archivo descargado, esto creara una carpeta, y dentro estará el ejecutable de Spring Tools

## 3. Instalar Node.js

Lo conseguimos en la liga de [Node.js](https://nodejs.org/dist/v16.13.2/node-v16.13.2-x64.msi)

## 4. Instalar MySQL Server

Aqui damos la liga directa a [MySQL Server](https://dev.mysql.com/get/Downloads/MySQLInstaller/mysql-installer-web-community-8.0.27.1.msi)
en su versión ligera de comunidad, a la hora de instalar no necesitamos todo, solo seleccionar el server.
Configurar el `root password`  como *root* para facilitar las cosas.

## 5. Instalar MySQL Workbench

Aqui damos la liga directa a [MySQL Workbench](https://dev.mysql.com/get/Downloads/MySQLGUITools/mysql-workbench-community-8.0.27-winx64.msi)
Lo abrimos y creamos una conexión hacia nuestra base de datos, con user `root` y password `root` que fue configurada anteriormente.
Creamos una nueva base de datos llamada `market` y vamos a ejecutar los scripts que vienen en la carpeta `db` proporcionada por el maestro
en su [API](https://github.com/ivansaavedra/dwf20221-api). Estos scripts se ocupan para crear las tablas dentro del server de mysql, el orden
de ejecución de los scripts para evitar conflictos es el siguiente:

1. region.sql
2. category.sql
3. customer_image.sql
4. customer.sql
5. product.sql
6. product_images.sql
7. cart.sql
8. invoice.sql
9. item.sql

## 6. Abrir Spring Tools e importar como `Existing maven projects` la carpeta de la [API](https://github.com/ivansaavedra/dwf20221-api)

## 7. Configurar el nombre de la base de datos en el archivo `application.properties` asi como la contraseña y la base de datos.

## 8. Ejecutar la API como `Run as Spring Boot App`, detener e ir a `Run Configurations` en la sección de enviroment, agregar la variable `producto.img.path`
con la ruta de la carpeta donde se guardarán las imágenes.

## 9. Ejecutar de nuevo la API.

## 10. Descargar este repositorio y ejecutar el comando `npm ci` en terminal para  instalar las dependencias necesarias, si hay un problema ejecutar el siguiente comando `npm install -g @angular/cli`

## 11. Finalmente ejecutar `ng serve` para levantar la pagina en `http://localhost:4200/`
      







