<script setup>
import { onBeforeUnmount, onMounted } from 'vue'

function calHeight() {
  const innerheight = window.innerHeight / 100
  document
    .querySelector(':root')
    .style.setProperty('--vh', `${innerheight.toString()}px`)
}

calHeight()

onMounted(() => {
  window.addEventListener('resize', calHeight)
})

onBeforeUnmount(() => {
  window.addEventListener('resize', calHeight)
})

const cdn_archivos_dominio = process.env.VUE_APP_CDN_ARCHIVOS
</script>

<template>
  <main id="principal">
    <div class="contenedor-portada">
      <img
        class="portada"
        :src="`${cdn_archivos_dominio}sisdai/sisdai-proyecto-base/inicio/gatito-muestra.jpg`"
      />
      <div class="degradado-negro-abajo">
        <div class="contenido-abajo">
          <div class="contenedor ancho-lectura">
            <h1 class="titulo-eni texto-centrado texto-color-1">
              Título de ENI
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="contenedor ancho-lectura m-y-10">
      <h2 class="texto-centrado m-y-8-esc m-y-4-mov m-x-auto">Inicio</h2>
    </div>
  </main>
</template>
