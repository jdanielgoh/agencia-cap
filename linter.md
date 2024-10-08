# Linter de código

Permite definir ciertas reglas para que todos los desarrolladores de este proyecto las cumplan y las apliquen en el código.

El siguiente comando sirve para dar formato y correcciones de las reglas definidas para el código:

```sh
npm run format-lint
```

> Es posible automatizar la corrección de errores en _Visual Studio Code_, al guardar archivos, con la configuración definida en la carpeta `.vscode` en la raíz del proyecto.

## Prettier

Es un formateador de código que admite muchos lenguajes y se integra con la mayoría de los editores.

Permite configurarse para formatear al guardar cambios ahorrando tiempo y energía.

### Configuración Prettier

- Se instaló cómo dependencia de desarrollo con:

```sh
npm install --save-dev --save-exact prettier
```

- Se agregó el archivo [prettier.config.js](./prettier.config.js).
- Para habilitar el formateo al guardar en VS Code, se añadío la configuración en [.vscode/settings.json](./.vscode/settings.json).
- Se agregó el script `prettier . --write` en el package.json para hacer la magia (en caso de que no funcione al guardar) ejecutando:

```sh
npm run format
```

## ESlint

Encuentra y soluciona problemas en tu código JavaScript.

ESLint analiza estáticamente su código para encontrar problemas rápidamente. Está integrado en la mayoría de los editores de texto y puede ejecutar ESLint como parte de su proceso de integración continua.

- Se instaló como dependencia de desarrollo con:

```sh
npm init @eslint/config@latest
```

Visita [eslint.org](https://eslint.org) para más información

### Configuración ESlint

- Se ejecutó el siguiente comando para instalar las dependencias necesarias para la cinfiguración de eslint con formateo de prettier:

```sh
npm install --save-dev eslint-config-prettier
```

Visita [prettier/eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation) para más información

- El comando preparado para ejecutar el linter en este proyecto con es:

```sh
npm run lint
```

### LintStaged y Husky

Se hailitó una tarea de verificación que sucede al momento de hacer un `commit`.

- Se instalaron las bibliotecas requeridas con:

```sh
npm install --save-dev husky lint-staged
```

- Se inicializó la tarea con:

```sh
npx husky init
```

- Se configuró el archivo `.husky/pre-commit` para que corra el comando `format-lint` del proyecto
