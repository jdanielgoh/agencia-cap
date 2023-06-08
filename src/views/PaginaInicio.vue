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
</script>

<template>
  <div>
    <div class="contenedor-portada">
      <img
        class="portada"
        src="http://placekitten.com/1280/980"
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
      <p class="titulo-pagina">Inicio</p>
    </div>
  </div>
</template>
