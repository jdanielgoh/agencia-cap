# sisdai-proyecto-base

Este repositorio contiene la base para levantar un dominio con los requerimientos mínimos para un proyecto que utilice
el Sistema de Diseño y Accesibilidad para la Investigación (Sisdai).

> **_Limitación de responsabilidad_**
>
> El presente es un proyecto en construcción, por tanto ni el equipo del Sisdai
> ni el de Salsa son responsables del uso y contenido del presente recurso,
> toda vez que se trata de una versión en su modalidad prueba, y no de una
> versión pública, por lo que una vez que sea lanzada la versión final,
> se invita a la persona usuaria a consultarla y validar sus requisitos.

## Uso local

- clonar el repo

  ```bash
  git clone --single-branch --no-tags <URL_DEL_REPOSITORIO>
  ```

- actualizar en el package el nombre del proyecto y reiniciar la versión

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

## Para desarrollo

- crear el `.env.desarrollo` en base al `.env.desarrollo.example`
- compilar el código
  ```bash
  npm run build:dev
  ```
- montar el codigo de la carpeta `dist` en el ambiente de pruebas
- configurar las rutas en el servidor de pruebas [guia vue router](https://router.vuejs.org/guide/essentials/history-mode.html#apache)

## Para producción

- crear el `.env.production` en base al `.env.production.example`
- compilar y minificar el código
  ```bash
  npm run build
  ```
- montar el codigo de la carpeta `dist` en el ambiente de producción
- configurar las rutas en el servidor de producción [guia vue router](https://router.vuejs.org/guide/essentials/history-mode.html#apache)

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

Sisdai está alineado a las disposiciones establecidas por la Coordinación de Estrategia Digital Nacional (DOF: 06/09/2021) en donde se estipula que las "políticas y disposiciones tienen como objetivo fortalecer el uso del software libre y los estándares abiertos, fomentar el desarrollo de aplicaciones institucionales con utilidad pública, lograr la autonomía, soberanía e independencia tecnológicas dentro de la APF". En el artículo 63 se explicita que "cuando se trate de desarrollos basados en software libre, se respetarán las condiciones de su licenciamiento original [...]", en este sentido este proyecto está alineado a lo que se define desde [SALSA](https://salsa.crip.conacyt.mx/).

## Contribuir

Para contribuir al proyecto, se pide que se haga por medio de los lineamientos de contribución de SALSA que se
pueden consultar [aquí](https://salsa.crip.conacyt.mx/guidelines/contribute/).

\*En los lineamientos de contribución se lista la rama _master_ como principal, sin embargo en este proyecto, dicha
rama es _main_.
