<script setup>
import SisdaiGraficas from 'sisdai-graficas/src/componentes/sisdai-graficas/SisdaiGraficas.vue'
import SisdaiBarras from 'sisdai-graficas/src/componentes/sisdai-barras/SisdaiBarras.vue'

import { ref } from 'vue'
const lasBarras = ref()
</script>

<template>
  <main
    class="contenedor"
    id="principal"
  >
    <h1>Visualizaciones</h1>
    <div class="contenedor">
      <h2>Gráficas</h2>
      <p>
        Este es un ejemplo de una gráfica de barras usando la biblioteca
        <a
          href="https://codigo.conahcyt.mx/sisdai/sisdai-graficas"
          target="_blank"
          rel="noopener noreferrer"
        >
          sisdai-graficas
          <span
            class="pictograma-enlace-externo"
            aria-hidden="true"
          /> </a
        >. Te invitamos a conocer la biblioteca y su documentación para saber
        como construir gráficas más complejas y/o de otro tipo.
      </p>
      <div class="contenedor ancho-lectura">
        <SisdaiGraficas
          :titulo_eje_y="'Título de eje Y'"
          :titulo_eje_x="'Título de eje X'"
          :margenes="{ arriba: 10, abajo: 30, derecha: 30, izquierda: 40 }"
        >
          <template #panel-encabezado-vis>
            <div>
              <p class="vis-titulo-visualizacion">Título de visualización</p>
              <p class="vis-fecha-actualizacion">
                Ultima actualización: 14/05/2023
              </p>
              <p class="vis-instruccional">
                Descripción o texto instruccional. Pasa el cursor por encima de
                la gráfica para más información.
              </p>
            </div>
          </template>
          <template #globo-informacion>
            <SisdaiGraficasGloboInfo :ancho="240">
              <p>
                {{ lasBarras?.datos_hover?.categoria }} <br />
                <span
                  class="globo-informacion-punto-color"
                  style="background: pink"
                >
                </span>
                Cantidad: {{ lasBarras?.datos_hover?.cantidad }}
                <br />
              </p>
            </SisdaiGraficasGloboInfo>
          </template>
          <SisdaiBarras
            ref="lasBarras"
            :datos="[
              { categoria: 'Variable A', cantidad: 120 },
              { categoria: 'Variable B', cantidad: 150 },
              { categoria: 'Variable C', cantidad: 72 },
            ]"
            :variables="[
              { id: 'cantidad', nombre_colores: 'cantidad', color: '#7fcdbb' },
            ]"
          >
          </SisdaiBarras>
        </SisdaiGraficas>
      </div>
    </div>
  </main>
</template>
