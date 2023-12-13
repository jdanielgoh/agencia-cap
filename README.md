# sisdai-proyecto-base

Este repositorio contiene la base para levantar un dominio con los
requerimientos mínimos para un proyecto que utilice
el Sistema de Diseño y Accesibilidad para la
Investigación ([Sisdai](https://sisdai.conahcyt.mx/).).

Cualquier persona puede hacer uso de esta biblioteca al clonarla e instalarla
en su equipo a través del **protocolo HTTPS**.

## Requerimientos

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

### Instalación

Se puede clonar e instalar este proyecto en tu equipo
utilizando **solo el protocolo HTTPS**, es decir:

```bash
git clone https://codigo.conahcyt.mx/sisdai/sisdai-proyecto-base.git
```

Establece la versión adecuada de npm y nvm (previamente instaladas).

```bash
nvm use 18
```

Instala las dependencias de la biblioteca.

```bash
npm install
```

#### Uso local

Una vez teniendo clonado el repositorio en local se debe de adecuar a las necesidades del nuevo proyecto a desarrollar. Actualizar en el `package.json` el nombre del proyecto y reiniciar la versión

  ```bash
  "name": "nombre-del-proyecto-nuevo",
  "version": "0.1.0",
  ```

- crear el `.env` en base al `.env.example`
- instalar las dependencias
  ```bash
  npm install
  ```
- levantar el repo
  ```bash
  npm run dev
  ```

#### Para desarrollo

- crear el `.env.desarrollo` en base al `.env.desarrollo.example`
- compilar el código
  ```bash
  npm run build:dev
  ```
- montar el codigo de la carpeta `dist` en el ambiente de pruebas
- configurar las rutas en el servidor de
  pruebas [guia vue router](https://router.vuejs.org/guide/essentials/history-mode.html#apache)

#### Para producción

- crear el `.env.production` en base al `.env.production.example`
- compilar y minificar el código
  ```bash
  npm run build
  ```
- montar el codigo de la carpeta `dist` en el ambiente de producción
- configurar las rutas en el servidor de
  producción [guia vue router](https://router.vuejs.org/guide/essentials/history-mode.html#apache)

---

## Actualizaciones del sisdai-proyecto-base

1. Agregar el sisdai-proyecto-base repositorio remoto

   ```bash
   git remote add sisdai-proyecto-base <URL_DEL_REPOSITORIO>
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
podrán levantar issues en este repositorio.
