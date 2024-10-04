<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const nombre = computed(() => route.name)
</script>

<template>
  <SisdaiNavegacionPrincipal :nav-informacion="nombre">
    <ul class="nav-menu">
      <li>
        <RouterLink
          class="nav-hipervinculo"
          exact
          to="/"
        >
          Inicio
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="nav-hipervinculo"
          exact
          to="/otra-vista"
        >
          Otra Vista
        </RouterLink>
      </li>
    </ul>
  </SisdaiNavegacionPrincipal>
</template>
