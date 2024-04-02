# sisdai-proyecto-base

Este repositorio contiene la base para levantar una página web con los
requerimientos mínimos para un proyecto que utilice
el Sistema de Diseño y Accesibilidad para la
Investigación ([Sisdai](https://sisdai.conahcyt.mx/)).

Cualquier persona puede hacer uso de esta biblioteca al clonarla e instalarla
en su equipo a través del **protocolo HTTPS**.

## Utilidades

- Homologa los estilos utilizando el sistema de diseño [Sisdai](https://sisdai.conahcyt.mx/).
- Mejora la accesibilidad mediante el uso de html semántico y aplicando las reglas establecidas en Sisdai.
- Facilita la actualización de elementos institucionales requeridos como cabeceras y pies de páginas de Gobierno de México y Conahcyt.
- Hace visible en ambientes de desarrollo las versiones actuales para mejorar la comunicación en revisiones
- Agrega de base un menú de accesibilidad con funciones adaptadas y conectadas con el sistema de diseño [Sisdai](https://sisdai.conahcyt.mx/).

## Contenido del proyecto

| Elemento                    | Ubicacion                  | Descripción                                                                                                                                                            |
| --------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| main.js                     | src/                       | Archivo en donde estan precargados sisdai-css y sisdai-componentes y se configura el matomo                                                                            |
| App.vue                     | src/                       | Archivo con la estructura basica de un proyecto, como cabeceras, pies de página, barra de navegación, menú de accesibilidad y componente con información de despliegue |
| PaginaInicio.vue            | src/views/                 | Vista en Vue con un ejemplo de portada para iniciar el contenido de un nuevo capitulo eni                                                                              |
| NavegacionPrincipalBase.vue | src/components/nagevacion/ | Utilizando la base de componente de navegación, en este componente se pueden actualizar los links del menú del sitio                                                   |

### Ubicacion de los archivos

```bash
sisdai-proyecto-base/
└── src/
    ├── main.js
    ├── App.vue
    ├── components/
    │   └── navegacion
    │       └── NavegacionPrincipalBase.vue
    ├── store/
    │   └── index.js #variables accesibilidad
    └── views/
        └── PaginaInicio.vue
```

## Instalación y uso

### Pasos previos recomendados

Para desarrollar este proyecto se usó [node.js](https://nodejs.org/en) como
entorno de ejecución de JavaScript. La opción recomendada para instalarlo es
[vía nvm](https://github.com/nvm-sh/nvm) que es el manejador de versiones de
node. Siguiendo este camino, también se instalará el manejador de paquetes
[npm](https://www.npmjs.com/). Dado lo anterior las instrucciones de instalación
y dependencias del proyecto se muestran aquí usando tanto npm, como nvm.

### Dependencias

- [node.js (^18)](https://nodejs.org/en/download/)
- [npm (^9)](https://www.npmjs.com/get-npm)
- [Vue.js (v2.7.14)](https://vuejs.org/)

### Descarga

Se puede clonar este proyecto en tu equipo
utilizando **solo el protocolo HTTPS**, es decir:

```bash
git clone https://codigo.conahcyt.mx/sisdai/sisdai-proyecto-base.git
```

### Configuración e instalación

Una vez descargado el proyecto se creará una carpeta llamada `sisdai-proyecto-base` con un proyecto de Vue general que necesita configurarse con la información particular del proyecto.

1.  Cambia el nombre de la carpeta, la cual puedes renombrar con el título de tu proyecto
    (recuerda que es mejor no utilizar espacios ni caracteres especiales).

2.  Establece la versión adecuada de npm y nvm (previamente instaladas).

    ```bash
    nvm use 18
    ```

3.  Instala las dependencias de la biblioteca.

    ```bash
    npm install
    ```

4.  Actualiza el nombre y reinicia la version en el `package.json`

    ```json
    // nombre-del-proyecto-nuevo/packaje.json

    "name": "nombre-del-proyecto-nuevo",
    "version": "0.1.0",
    ```

5.  Modifica el archivo de variables de ambiente `.env` de acuerdo a las necesidades del
    proyecto.
    Para cada ambiente es necesario modificar el archivo de ambiente
    correspondiente, el `.env` es para el entorno local, `.env.desarrollo` para
    un ambiente de desarrollo, y `.env.production` para un ambiente de
    producción. Se dejan por defecto estos tres archivos en el proyecto, pero
    pueden crearse más deacuerdo al proyecto. De la misma manera se dejan en los
    archivos, variables de ambiente por defecto que se usan en este proyecto base y
    que son propias de los capítulos de los ENI, sin embargo se deben agregar o
    quitar de acuerdo al proyecto a desarrollar. Se deja aquí el ejemplo del
    archivo de ambiente local `.env`.

    ```js
    // modo del ambiente en el que se levanta el proyecto
    NODE_ENV = local

    // título del proyecto, este aparecerá en la pestaña del navegador
    VUE_APP_TITLE = local | sisdai-proyecto-base

    // descripción del proyecto, se utiliza para agregar metadatos para el navegador
    VUE_APP_DESCRIPTION = local | descripcion

    // el dominio en el que se verá tu proyecto
    // en un entorno local es localhost:seguido-del-puerto
    // para el ambiente de pruebas y producción
    // debes agregar el nombre del dominio ej. https://energia.conahcyt.mx
    VUE_APP_ENI_DOMAIN = http://localhost:8080

    // carpeta o subcarpeta en donde se hospeda el código
    // se agrega la / cuando el proyecto está en raíz
    // pero si tiene un subfolder como pasa en todos los capitulos ENI se debe agregar
    // ej. para https://energia.conahcyt.mx/planeas/ el es VUE_APP_BASE_ROUTE = /planeas/
    VUE_APP_BASE_ROUTE = /

    // es una variable que utiliza en su configuración Vue, normalmente es true
    VUE_APP_HASH = true

    // variable para el matomo, es para trackear información de uso del sitio
    // se mantiene en 0 cuando no se ha asignado un ID específico para el proyecto
    // normalmente se cambia únicamente para el ambiente de producción
    // se solicita al área de infraestructura y se escribe el ID en este campo
    VUE_APP_MATOMO_SITEID = 0

    // url de la carpeta de archivos estáticos (imágenes, documentos, etc)
    // que el Conahcyt asigno para los ENI
    // la única variante es que para entornos locales, de pruebas o de desarrollo
    // se utiliza la base https://dev-dadsig-cdn.crip.conahcyt.mx/
    // mientras que para el entorno de producción se utliza https://cdn.conahcyt.mx/
    // también se puede utilizar esta variable con el nombre del eni y el capítulo
    // ej. en desarrollo: https://dev-dadsig-cdn.crip.conahcyt.mx/enis/energia/planeas/
    // ej. en produccion: https://cdn.conahcyt.mx/enis/energia/planeas/
    VUE_APP_CDN_ARCHIVOS = https://dev-dadsig-cdn.crip.conahcyt.mx/
    ```

6.  Vincula tu proyecto con su repositorio

    Busca la url que se utilizará para clonar el proyecto nuevo y corre el siguiente comando reemplazando la `<URL_DEL_REPOSITORIO>` por la url de tu proyecto

    ```bash
    git remote set-url origin <URL_DEL_REPOSITORIO>
    ```

7.  Actualiza este README.md con la información que requiera tu proyecto

8.  Para levantar el proyecto en local

    ```bash
    npm run dev
    ```

9.  Para compilar el proyecto en desarrollo

    ```bash
     npm run build:dev
    ```

10. Para compilar el proyecto en producción
    ```bash
    npm run build
    ```

## Actualizaciones del sisdai-proyecto-base

1. Agregar el sisdai-proyecto-base como repositorio remoto

   ```bash
   git remote add sisdai-proyecto-base https://codigo.conahcyt.mx/sisdai/sisdai-proyecto-base.git
   ```

2. Configurar el repositorio remoto para no jalar los tags ni heads

   ```bash
   git config remote.sisdai-proyecto-base.fetch '+refs/heads/*:refs/heads/*'
   git config remote.sisdai-proyecto-base.tagopt --no-tags
   ```

3. Traer los ultimos cambios del sisdai-proyecto-base

   ```bash
   git fetch sisdai-proyecto-base --no-tags
   ```

4. Jalar los últimos cambios del sisdai-proyecto-base

   ```bash
   git pull sisdai-proyecto-base main
   ```

5. Resolver los conflictos que existan en local

6. Probar en local que se levante correctamente todo

## Licencia

**SOFTWARE LIBRE Y ESTÁNDARES ABIERTOS**

Sisdai y sisdai-proyecto-base están alineadas a las disposiciones establecidas por
la Coordinación de Estrategia Digital Nacional (
DOF:06/09/2021) en donde se estipula que las "políticas y disposiciones tienen
como objetivo fortalecer el uso del software
libre y los estándares abiertos, fomentar el desarrollo de aplicaciones
institucionales con utilidad pública, lograr la
autonomía, soberanía e independencia tecnológicas dentro de la APF". En el
artículo 63 se explicita que "cuando se trate
de desarrollos basados en software libre, se respetarán las condiciones de su
licenciamiento original [...]".

Considerando lo anterior sisdai-proyecto-base se publica bajo la licencia
[LGPLv3](https://www.gnu.org/licenses/lgpl-3.0.html). Dicha licencia se puede
consultar en el archivo _LICENSE_ de este repositorio.
Esta licencia se encuentra disponible en inglés porque aunque el Sisdai privilegia
el idioma español se respeta la versión original de acuerdo al proyecto
[GNU](https://www.gnu.org/licenses/licenses.html).

## Contribuir

Por el momento sólo quienes sean
parte de un equipo de investigación del capítulo de un [ENI](https://eni.conahcyt.mx)
podrán levantar issues en este repositorio. Mientras que el equipo del sistema
de diseño [Sisdai](https://sisdai.conahcyt.mx/acerca-de) se encargará de mantenerlo.
