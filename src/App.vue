<script setup>
import { RouterView } from 'vue-router'
import NavegacionPrincipalBase from '@/components/navegacion/NavegacionPrincipalBase.vue'
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
      versionProyecto="?.?.?"
      entornoProyecto="?"
      actualizacionProyecto="?"
    />
    <SisdaiPiePaginaConahcyt />
    <SisdaiPiePaginaGobMx />
  </div>
</template>
