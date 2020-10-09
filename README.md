# Marketplace Frontend

React app del marketplace online de prendas

## Requerimientos

Es necesario tener instalado Node js para inciar el proyecto, en caso de no tenerlo puede descargar desde [aquí](https://nodejs.org/en/)

## Clonando el repositorio

```bash
$ git clone https://github.com/ocfranz/marketplace-frontend.git
$ cd marketplace-frontend
```

## Instalando dependencias

Para instalar las dependencias del proyecto necesita ejecutar el siguiente comando:

```bash
$ npm install
```

## Corriendo la aplicación

Antes de todo comenzar, tiene que configurar el archivo **.env**, puede duplicar el archivo **.env.example** y renombrarlo a **.env**, o simplemente puede utilizar. Este archivo contiene el puerto donde la aplicación se ejecuta en producción, se puede cambiar a 80 u 8080.

### En un ambiente de desarrollo

Puede utilizar:

```bash
$ npm run client:start
```

Ejecuta la aplicación en modo de desarrollo.
Abra [http://localhost:3000]([http://localhost:3000]) para verlo en el navegador.

La página se volverá a cargar si realiza modificaciones.
También verá cualquier error en la consola.

### En un ambiente de producción

Antes de lanzar la aplicación en un ambiente de producción es necesario generar los archivos de producción. Puede utilizar:

```bash
$ npm run build
```

Para ejecutar la aplicación en producción, es necesario ejecutar:

```bash
$ npm start
```

Abra [http://localhost:3000]([http://localhost:3000]) para la aplicacion en producción

## Modificando la aplicación

### Agregando categorias de productos

Para agregar una nueva categoria debe modificar el archivo **config.js** que se encuentra en la siguente ruta:

```bash
/src/config/config.js
```

Pero necesita agregar un icono, como un componente de react (en un nuevo archivo) para agregar la nueva categoría en siguiente ruta **/src/assets/icons**. Como es el que se muestra a continuación.

```javascript
import React from  "react";
const DressIcon = ({ color = "#231F20", size = 30 }) => {
return (
	<svg width={size} height={size} ...>
	</svg>
	);
};
export  default  DressIcon;
```

Puede ver los iconos actuales que estan en la ruta para tener una referencia. Luego agregue la nueva categoria en el campo **categories**.

```javascript
import DressIcon from  "../assets/icons/DressIcon";
import ShirtIcon from  "../assets/icons/ShirtIcon";
import TShirtIcon from  "../assets/icons/TShirtIcon";

export const config = {
	name: "Marketplace",
	categories: [
		{name: "vestidos", icon: DressIcon,},
		{name: "polos", icon: TShirtIcon,},
		{name: "blusas",icon: ShirtIcon,},

		{name: "nueva categoria",icon: Icono nuevo,},
	],
};
```

Además, en el campo **name** puede cambiar el nombre del marketplace.
