<script setup>
import { RouterView } from 'vue-router'
import NavegacionPrincipalBase from '@/components/navegacion/NavegacionPrincipalBase.vue'

const ambiente = import.meta.env

/*global __FECHA_CONSTRUCCION__, __VERSION__*/
/*eslint no-undef: "error"*/
const fecha_construccion = __FECHA_CONSTRUCCION__
const version_proyecto = __VERSION__
</script>

<template>
  <div>
    <a
      href="#principal"
      class="ir-contenido-principal"
    >
      Ir a contenido principal
    </a>
    <SisdaiMenuAccesibilidad perfilColor="gema" />
    <SisdaiNavegacionGobMx />
    <NavegacionPrincipalBase />
    <RouterView />

    <SisdaiInfoDeDespliegue
      v-if="ambiente.DEV"
      :versionProyecto="version_proyecto"
      :entornoProyecto="ambiente.MODE"
      :actualizacionProyecto="fecha_construccion"
    />
    <SisdaiPiePaginaConahcyt />
    <SisdaiPiePaginaGobMx />
  </div>
</template>
