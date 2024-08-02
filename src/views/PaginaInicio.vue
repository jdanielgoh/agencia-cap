<!--This file is part of sisdai-proyecto-base.-->

<!--sisdai-proyecto-base is free software: you can redistribute it and/or modify-->
<!--it under the terms of the GNU Lesser General Public License as published by the-->
<!--Free Software Foundation, either version 3 of the License, or-->
<!--(at your option) any later version.-->

<!--sisdai-proyecto-base is distributed in the hope that it will be useful,-->
<!--but WITHOUT ANY WARRANTY; without even the implied warranty of-->
<!--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General-->
<!--Public License for more details.-->

<!--You should have received a copy of the GNU Lesser General Public License along-->
<!--with sisdai-proyecto-base. If not, see <https://www.gnu.org/licenses/>.-->

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
    <div class="portada">
      <img
        class="portada-imagen"
        :src="`${cdn_archivos_dominio}sisdai/sisdai-proyecto-base/inicio/pekihermosa.png`"
        alt="portada de ejemplo gato cálico mirando al frente"
      />
      <div class="portada-degradado">
        <div class="portada-cuerpo">
          <p class="portada-titulo">Título de ENI</p>
        </div>
      </div>
    </div>
    <div class="contenedor ancho-lectura m-y-10">
      <h2 class="texto-centrado m-y-8-esc m-y-4-mov m-x-auto">Inicio</h2>
    </div>
  </main>
</template>
