<script setup></script>

<template>
  <SisdaiNavegacionPrincipal
    :nav-informacion="`Sección: <b>${$route.name}</b>`"
  >
    <template #complementario>
      <a
        href="#"
        class="nav-hipervinculo"
        ><b>IR A ENLACE EXTERNO</b></a
      >
    </template>
    <ul class="nav-menu">
      <li>
        <a
          href="#"
          class="nav-hipervinculo"
          >Inicio</a
        >
      </li>
    </ul>
  </SisdaiNavegacionPrincipal>
</template>
