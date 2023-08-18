<script setup></script>

<template>
  <SisdaiNavegacionPrincipal
    :nav-informacion="`Sección: <b>${$route.name}</b>`"
  >
    <ul class="nav-menu">
      <li>
        <a
          class="nav-hipervinculo"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir a ENI
        </a>
      </li>
    </ul>
  </SisdaiNavegacionPrincipal>
</template>
