<script setup>
import store from '@/store'
import { onMounted, onUpdated, watch, ref, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router/composables'
const ruta = useRoute()
const router = useRouter()
import NavegacionPrincipalBase from './components/navegacion/NavegacionPrincipalBase.vue'

const infoDespliegue = {
  version_proyecto: process.env.PACKAGE_VERSION,
  actualizacion_proyecto: process.env.DATE_DEPLOY,
  entorno_proyecto: process.env.ENV_DEPLOY,
}
const entradaInicial = ref(true)

// Agrega aria-hidden al elemento con icono
onMounted(async () => {
  await router.onReady(() => {
    ruta.path === '/' ? (entradaInicial.value = false) : null
  })
  agregandoAriaHidden()
})
onUpdated(agregandoAriaHidden)
function agregandoAriaHidden() {
  document.querySelectorAll('span.icono-enlace-externo').forEach(el => {
    el.setAttribute('aria-hidden', 'true')
  })
}
// Con este watch definimos a donde se moverá el focus al cambiar de ruta
watch(
  () => ruta.path,
  () => {
    if (!entradaInicial.value) {
      if (ruta.path) {
        nextTick(() => {
          moviendoFocoNavegacion(ruta.path)
        })
      }
    } else {
      entradaInicial.value = false
    }
  }
)

function moviendoFocoNavegacion(path) {
  path
  //let carpetas = path.split('/').filter(d => d != '')
  const elemento_receptor = document.querySelector('#principal')
  if (elemento_receptor) {
    elemento_receptor.tabIndex = '-1'
    elemento_receptor.focus()
  }
}
</script>

<template>
  <div
    id="app"
    :class="store.getters['accesibilidad/clasesAccesibles']"
  >
    <a
      href="#principal"
      class="ir-contenido-principal"
      >Ir a contenido principal</a
    >
    <SisdaiNavegacionGobMx />
    <NavegacionPrincipalBase />

    <router-view />

    <SisdaiMenuAccesibilidad :objetoStore="store" />
    <SisdaiInfoDeDespliegue
      :versionProyecto="infoDespliegue.version_proyecto"
      :entornoProyecto="infoDespliegue.entorno_proyecto"
      :actualizacionProyecto="infoDespliegue.actualizacion_proyecto"
    />
    <SisdaiPiePaginaConahcyt />
    <SisdaiPiePaginaGobMx />
  </div>
</template>

<style lang="scss">
// Estilos de la biblioteca
@import 'node_modules/sisdai-css/src/eni.scss';

.overflow-hidden {
  overflow: hidden;
}
</style>
