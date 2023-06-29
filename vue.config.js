const { defineConfig } = require('@vue/cli-service')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const fs = require('fs')

const packageJson = fs.readFileSync('./package.json')
const version = JSON.parse(packageJson).version || 0

const now = new Date()

/**
 * Configuración de compilación de vue
 * @see https://cli.vuejs.org/config/
 */
module.exports = defineConfig({
  /**
   * @property {Function}
   * Permite modificar la configuración interna del webpack. En este caso, si los hints en el
   * performance se colocan en falso, se apagan y deja de mandar error o warning cuando los
   * assets creados al compilar exceden de 250kb.
   *
   * @see https://webpack.js.org/configuration/performance/
   * @see https://cli.vuejs.org/guide/webpack.html#chaining-advanced
   */
  chainWebpack: config => {
    config.performance.set('hints', false)
  },

  /**
   * @property {boolean} [productionSourceMap=true] Establecer esto en falso puede acelerar las
   * compilaciones de producción si no necesita source maps para la producción.
   *
   * @see https://cli.vuejs.org/config/#productionsourcemap
   */
  productionSourceMap: true,

  /**
   * El directorio donde se generarán los archivos de compilación de producción cuando se ejecute
   * `vue-cli-service build`. Tenga en cuenta que el contenido del directorio de destino se
   * eliminará antes de la compilación (este comportamiento se puede deshabilitar pasando
   * `--no-clean` al compilar).
   *
   * @see https://cli.vuejs.org/config/#outputdir
   */
  outputDir: 'dist',

  /**
   * La URL base en la que se implementará su paquete de aplicaciones (conocido como `baseUrl`
   * antes de Vue CLI 3.3). Este es el equivalente de `output.publicPath` de webpack, pero Vue
   * CLI también necesita este valor para otros fines, por lo que **siempre debe usar `publicPath`
   * en lugar de modificar webpack `output.publicPath`**.
   *
   * De forma predeterminada, Vue CLI asume que su aplicación se implementará en la raíz de un
   * dominio, p. `https://www.mi-aplicacion.com/`. Si su aplicación se implementa en una subruta,
   * deberá especificar esa subruta con esta opción. Por ejemplo, si su aplicación se implementa
   * en `https://www.foobar.com/my-app/`, establezca publicPath en `'/my-app/'`.
   *
   * El valor también se puede establecer en una cadena vacía (`''`) o una ruta relativa (`./`)
   * para que todos los activos se vinculen mediante rutas relativas. Esto permite que el paquete
   * creado se implemente en cualquier ruta pública o se use en un entorno basado en un sistema
   * de archivos como una aplicación híbrida de Cordova.
   *
   * > Limitaciones de publicPath relativa
   * > Relative `publicPath` tiene algunas limitaciones y debe evitarse cuando:
   * > - Está utilizando el enrutamiento HTML5 `history.pushState`;
   * > - Está utilizando la opción de `pages` para crear una aplicación de varias páginas.
   */
  publicPath: process.env.VUE_APP_BASE_ROUTE || '/',

  /**
   * De forma predeterminada, los activos estáticos generados contienen hashes en sus nombres de
   * archivo para un mejor control del almacenamiento en caché. Sin embargo, esto requiere que
   * Vue CLI genere automáticamente el índice HTML. Si no puede utilizar el índice HTML generado
   * por Vue CLI, puede deshabilitar el hash de nombre de archivo configurando esta opción en
   * `falso`.
   *
   * @see https://cli.vuejs.org/config/#filenamehashing
   */
  filenameHashing: process.env.VUE_APP_HASH || false,

  /**
   * @see https://cli.vuejs.org/config/#css-extract
   */
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import 'sisdai-css/src/_variables.scss'; @import 'sisdai-css/src/_mixins.scss';`,
      },
    },
  },

  /**
   * @property {object} [] Si el valor es un Objeto, se fusionará en la configuración final usando
   * webpack-merge.
   *
   * @see https://cli.vuejs.org/config/#configurewebpack
   */
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.PACKAGE_VERSION': `"${version}"`,
        'process.env.DATE_DEPLOY': `"${now.toLocaleString('es-MX', {
          timeZone: 'America/Mexico_City',
        })}"`,
        'process.env.ENV_DEPLOY': `"${process.env.NODE_ENV}"`,
      }),
      new CopyPlugin({
        patterns: [{ from: 'src/assets/data/', to: 'data/' }],
      }),
    ],
  },
})
