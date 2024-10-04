import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig( ({ mode }) => {
  const env = {...process.env, ...loadEnv(mode, process.cwd())}
  const url_base = `${env.VITE_URL_BASE ?? '/'}`;
  const ahorita = new Date()
  return {
    base: url_base,
    define: {
      __FECHA_CONSTRUCCION__: ahorita,
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
    }
  }
})
