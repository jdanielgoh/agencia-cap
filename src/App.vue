<script setup>
import store from '@/store'
import { onMounted, onUpdated } from 'vue'

import NavegacionPrincipalBase from './components/navegacion/NavegacionPrincipalBase.vue'

const infoDespliegue = {
  version_proyecto: process.env.PACKAGE_VERSION,
  actualizacion_proyecto: process.env.DATE_DEPLOY,
  entorno_proyecto: process.env.ENV_DEPLOY,
}

// Agrega aria-hidden al elemento con icono
onMounted(agregandoAriaHidden)
onUpdated(agregandoAriaHidden)
function agregandoAriaHidden() {
  document.querySelectorAll('span.icono-enlace-externo').forEach(el => {
    el.setAttribute('aria-hidden', 'true')
  })
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
    <SisdaiBotonFlotante
      :enlaces="[
        {
          clasesCss: 'icono-resaltado',
          icono: 'icono-documento icono-3',
        },
      ]"
    />
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
