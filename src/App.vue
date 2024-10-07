<script setup>
import { RouterView } from 'vue-router'
import NavegacionPrincipalBase from '@/components/navegacion/NavegacionPrincipalBase.vue'
import pkg from '../package.json'
const ambiente = import.meta.env

/*global __FECHA_CONSTRUCCION__*/
/*eslint no-undef: "error"*/
const fecha_construccion = __FECHA_CONSTRUCCION__
const fecha_localizada = new Date(fecha_construccion).toLocaleString('es-MX', {
  timeZone: 'America/Mexico_City',
})
</script>

<template>
  <div>
    <a
      href="#principal"
      class="ir-contenido-principal"
    >
      Ir a contenido principal
    </a>
    <SisdaiMenuAccesibilidad perfilColor="eni" />
    <SisdaiNavegacionGobMx />
    <NavegacionPrincipalBase />
    <RouterView />

    <SisdaiInfoDeDespliegue
      v-if="ambiente.DEV"
      :versionProyecto="pkg.version"
      :entornoProyecto="ambiente.MODE"
      :actualizacionProyecto="fecha_localizada"
    />
    <SisdaiPiePaginaConahcyt />
    <SisdaiPiePaginaGobMx />
  </div>
</template>
