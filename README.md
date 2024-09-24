# sisdai-proyecto-base

Este repositorio contiene el proyecto base para levantar una página web con los
requerimientos mínimos para un proyecto que utilice
el Sistema de Diseño y Accesibilidad para la
Investigación ([Sisdai](https://sisdai.conahcyt.mx/)). En el marco del Sisdai
también puedes consultar los [sisdai-anexos](https://codigo.conahcyt.mx/sisdai/sisdai-anexos)
para encontrar lineamientos y recomendaciones de como documentar y/o construir un
proyecto.

Cualquier persona puede hacer uso de esta biblioteca al clonarla e instalarla
en su equipo a través del **protocolo HTTPS**.

## Acerca de este proyecto

### ¿Qué utilidades contiene este proyecto?

- Homologa los estilos utilizando el sistema de
  diseño [Sisdai](https://sisdai.conahcyt.mx/)
- Mejora la accesibilidad mediante el uso de html semántico y aplicando las
  reglas establecidas en Sisdai
- Facilita la actualización de elementos institucionales requeridos como
  cabeceras y pies de páginas del Gobierno de México y Conahcyt
- Hace visible en ambientes de desarrollo las versiones actuales para mejorar la
  comunicación en revisiones
- Agrega de base un menú de accesibilidad con funciones adaptadas y conectadas
  con el sistema de diseño [Sisdai](https://sisdai.conahcyt.mx/).

### Contenido del proyecto

| Elemento                    | Ubicación                  | Descripción                                                                                                                                                             |
| --------------------------- |----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| main.js                     | src/                       | Archivo en donde estan precargados sisdai-css y sisdai-componentes y se configura matomo                                                                                |
| App.vue                     | src/                       | Archivo con la estructura básica de un proyecto, como cabeceras, pies de página, barra de navegación, menú de accesibilidad y componente con información de despliegue  |
| PaginaInicio.vue            | src/views/                 | Vista en Vue con un ejemplo de portada para iniciar el contenido de un nuevo capítulo ENI                                                                               |
| NavegacionPrincipalBase.vue | src/components/navegacion/ | Usa como base el componente de navegación de Sisdai y se edita para con las vistas que conformarán el sitio web                                                         |

#### Ubicación de los archivos

```bash
sisdai-proyecto-base/
└── src/
    ├── main.js
    ├── App.vue
    ├── components/
    │   └── navegacion
    │       └── NavegacionPrincipalBase.vue
    ├── store/
    │   └── index.js #variables de accesibilidad
    └── views/
        └── PaginaInicio.vue
```

## Instalación y uso

### Pasos previos recomendados

Para desarrollar este proyecto se usa [node.js](https://nodejs.org/en) como
entorno de ejecución de JavaScript. La opción recomendada para instalarlo es
[vía nvm](https://github.com/nvm-sh/nvm) que es el manejador de versiones de
node. Siguiendo este camino, también se instalará el manejador de paquetes
[npm](https://www.npmjs.com/). Las instrucciones de instalación
y dependencias del proyecto se muestran aquí usando tanto npm, como nvm.

### Dependencias

- [node.js (^20)](https://nodejs.org/en/download/)
- [npm (^10)](https://www.npmjs.com/get-npm)
- [Vue.js (v2.7.14)](https://vuejs.org/)

### Instalación y vinculación con tu proyecto

Si tienes un repositorio de código vacío y quieres iniciar con el proyecto
base, sigue estas instrucciones. Si ya tienes contenido en tu proyecto y
quieres integrar el proyecto base, ve al paso 4.

1. Crea una carpeta en tu local con el nombre de tu proyecto.

   ```bash
   mkdir mi-proyecto
   ```

2. Sigue las instrucciones del repositorio de código donde alojarás tu proyecto. Inicia tu proyecto con `git`.

   ```bash
   cd mi-proyecto
   git init --initial-branch=main
   ```

3. Agrega el _remote_ del repositorio de código donde alojarás tu proyecto. Es
   importante que se llame `origin` para que sea el _remote_ por defecto.

   ```bash
   git remote add origin https://scm.crip.conacyt.mx/mi-proyecto.git
   ```

4. Agrega el remoto del proyecto base.

   ```bash
   git remote add sisdai-proyecto-base https://codigo.conahcyt.mx/sisdai/sisdai-proyecto-base.git
   ```

   Si tecleas el comando `git remote -v` podrás ver todas las url de los _remote_ y
   sus nombres.


5. Configura el _remote_ del repositorio del Sisdai para no bajar los _tags_ ni _heads_.

   ```bash
   git config remote.sisdai-proyecto-base.fetch '+refs/heads/*:refs/heads/*'
   git config remote.sisdai-proyecto-base.tagopt --no-tags
   ```

6. Baja los últimos cambios del sisdai-proyecto-base.

   ```bash
   git pull --no-rebase sisdai-proyecto-base main --allow-unrelated-histories
   ```

   **En caso de que tengas contenido en tu proyecto, resuelve los conflictos que
   te marque git en tu terminal.**


7. Establece la versión adecuada de npm y nvm (previamente instaladas en tu equipo).

    ```bash
    nvm use 20
    ```

8. Instala las dependencias de la biblioteca.

    ```bash
    npm install
    ```

Ahora ya puedes integrar tus cambios a otras ramas o subirlos al repositorio
original. Puedes borrar el _remote_ del proyecto base y conservar solamente
el de tu repositorio original. Estos pasos también te funcionarán para
obtener cambios del proyecto base si los necesitas.

### Configuración

9. Actualiza el nombre y reinicia la version en el `package.json`.

    ```js
    // nombre-del-proyecto-nuevo/packaje.json
    "name": "nombre-del-proyecto-nuevo",
    "version": "0.1.0",
    ```
   En este punto ya puedes subir la rama _main_ a tu repositorio de código (_origin_).
   A partir de aquí te recomendamos seguir el [versionamiento semántico y flujo
   entre ramas](https://codigo.conahcyt.mx/sisdai/sisdai-anexos/-/blob/main/03_versionamiento-semantico.md?ref_type=heads) que puedes encontrar en [sisdai-anexos](https://codigo.conahcyt.mx/sisdai/sisdai-anexos).

10. Modifica el archivo de variables de ambiente `.env` de acuerdo a las
   necesidades del
   proyecto.
   Para cada ambiente es necesario modificar el archivo de ambiente
   correspondiente, el `.env` es para el entorno local, `.env.desarrollo` para
   un ambiente de desarrollo, `.env.preproduccion` para un ambiente de
   preproducción, y `.env.production` para un ambiente de
   producción. Se dejan por defecto estos cuatro archivos en el proyecto, pero
   pueden crearse o eliminarse de acuerdo al mismo. También se conservan las variables de ambiente por defecto que se usan en este proyecto base
   y
   que son propias de los capítulos de los ENI, sin embargo se deben agregar o
   quitar de acuerdo al proyecto a desarrollar.
   Ejemplo de archivo de ambiente local `.env`.

    ```js
    // modo del ambiente en el que se levanta el proyecto
    NODE_ENV = local

    // título del proyecto, éste aparecerá en la pestaña del navegador
    VUE_APP_TITLE = local | sisdai-proyecto-base

    // descripción del proyecto, se utiliza para agregar metadatos en el navegador
    VUE_APP_DESCRIPTION = local | descripcion

    // el dominio en el que se verá tu proyecto,
    // en un entorno local es localhost:seguido-del-puerto
    // para el ambiente de pruebas y producción debes agregar el nombre del dominio ej. https://energia.conahcyt.mx
    VUE_APP_ENI_DOMAIN = https://localhost:8080

    // carpeta o subcarpeta en donde se hospeda el código,
    // se agrega la / cuando el proyecto está en raíz, pero si tiene un subfolder como pasa en todos los capitulos ENI se debe agregar el nombre del capítulo en formato corto
    // ejemplo: para https://energia.conahcyt.mx/planeas/ el VUE_APP_BASE_ROUTE = /planeas/
    VUE_APP_BASE_ROUTE = /

    // es una variable que utiliza en su configuración Vue, normalmente es true
    VUE_APP_HASH = true

    // variable para matomo (si cuentas con esta tecnología),
    // se mantiene en 0 cuando no se ha asignado un ID específico para el proyecto,
    // se cambia únicamente para el ambiente de producción
    VUE_APP_MATOMO_SITEID = 0

    // url de la carpeta de archivos estáticos (imágenes, documentos, etc) donde se alojan tus insumos si no los guardas en el front-end,
    // ej. en desarrollo: https://dev-dadsig-cdn.crip.conahcyt.mx/enis/energia/planeas/
    // ej. en produccion: https://cdn.conahcyt.mx/enis/energia/planeas/
    VUE_APP_CDN_ARCHIVOS = https://dev-dadsig-cdn.crip.conahcyt.mx/
    ```

11. Actualiza este README.md con la información que requiera tu proyecto.

### Correr y compilar

12. Para levantar el proyecto en un servidor local.

   ```bash
   npm run dev
   ```

13. Para compilar el proyecto en un ambiente de desarrollo.

   ```bash
   npm run build:dev
   ```

14. Para compilar el proyecto en un ambiente de producción.

   ```bash
   npm run build
   ```

En el `package.json` por defecto se incluyen otras instrucciones que te pueden
ayudar a revisar el proyecto.

La licencia incluída aquí es únicamente para sisdai-proyecto-base. Una vez
que tengas tu propio proyecto deberás modificar la licencia de acuerdo con
los lineamientos del proyecto [GNU](https://www.gnu.org/licenses/licenses.html).

## Linter del código

Para garantizar el buen funcionamiento y cumplimiento de buenas prácticas de
código se implementó un linter en este proyecto base. La documentación del mismo
la puedes encontrar en el archivo `linter.md`.

## Licencia

**SOFTWARE LIBRE Y ESTÁNDARES ABIERTOS**

Sisdai y sisdai-proyecto-base están alineadas a las disposiciones establecidas
por
la Coordinación de Estrategia Digital Nacional (
DOF:06/09/2021) en donde se estipula que las "políticas y disposiciones tienen
como objetivo fortalecer el uso del software
libre y los estándares abiertos, fomentar el desarrollo de aplicaciones
institucionales con utilidad pública, lograr la
autonomía, soberanía e independencia tecnológicas dentro de la APF". En el
artículo 63 se explicita que "cuando se trate
de desarrollos basados en software libre, se respetarán las condiciones de su
licenciamiento original [...]".

Considerando lo anterior, sisdai-proyecto-base se publica bajo la licencia
[LGPLv3](https://www.gnu.org/licenses/lgpl-3.0.html). Dicha licencia se puede
consultar en el archivo _LICENSE_ de este repositorio.
Esta licencia se encuentra disponible en inglés porque aunque el Sisdai
privilegia
el idioma español se respeta la versión original de acuerdo al proyecto
[GNU](https://www.gnu.org/licenses/licenses.html).

## Contribuir

Por el momento sólo quienes sean
parte de un equipo de investigación del capítulo de
un [ENI](https://eni.conahcyt.mx)
podrán levantar issues en este repositorio. El equipo del [Sisdai](https://sisdai.conahcyt.mx/acerca-de) se encargará de
mantenerlo.
