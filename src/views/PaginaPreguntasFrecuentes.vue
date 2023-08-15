<script setup>
import preguntas from '@/assets/data/preguntas/frecuentes-ejemplo.json'
</script>

<template>
  <main
    class="contenedor ancho-lectura m-y-10"
    id="principal"
  >
    <h1>Preguntas Frecuentes</h1>
    <div
      class="p-y-1"
      v-for="(pregunta, index) in preguntas"
      :key="`pregunta-${index}`"
    >
      <p class="parrafo-texto-alto">{{ index + 1 }}. {{ pregunta.pregunta }}</p>
      <p
        class="parrafo-general"
        v-for="(respuesta, index) in pregunta.respuesta"
        :key="`respuesta-${index}`"
      >
        {{ respuesta }}
      </p>
    </div>
  </main>
</template>
