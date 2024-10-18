import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import { version } from './package.json'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), '')
  const url_base = `${env.VITE_URL_BASE ?? '/'}`
  const ahorita = new Date()
  const fecha_localizada = new Date(ahorita).toLocaleString('es-MX', {
    timeZone: 'America/Mexico_City',
  })

  return {
    base: url_base,
    define: {
      __FECHA_CONSTRUCCION__: JSON.stringify(fecha_localizada),
      __VERSION__: JSON.stringify(version),
    },
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  }
})
