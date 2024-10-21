<script setup>
import { ref } from 'vue'
import creditosInstituciones from '@/assets/data/creditos-instituciones.json'
import creditosInvestigadoras from '@/assets/data/creditos-investigadoras.json'

const cdn_archivos = import.meta.env.VITE_CDN_ARCHIVOS
const instituciones = ref(creditosInstituciones)
const investigadoras = ref(creditosInvestigadoras)
</script>

<template>
  <main
    class="contenedor m-y-maximo"
    id="principal"
  >
    <h1>Créditos</h1>
    <div class="flex">
      <div class="columna-8">
        <h2 class="h4 borde-b borde-color-secundario p-b-2">
          Instituciones y organizaciones
        </h2>
        <ul class="lista-compuesta lista-logotipo">
          <li
            v-for="institucion in instituciones"
            :key="institucion.id"
          >
            <a
              :href="institucion.web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="lista-logotipo-imagen">
                <img
                  class="a11y-oscura-filtro-blanco ally-simplificada-mantener-imagen"
                  :src="`${cdn_archivos}enis/capitulo-demo/creditos/${institucion.logo}`"
                />
              </div>
              <div class="lista-compuesta-cuerpo">
                <p class="lista-compuesta-texto-primario">
                  {{ institucion.nombre }}
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="columna-8">
        <h2 class="h4 borde-b borde-color-secundario p-b-2">
          Personas investigadoras
        </h2>
        <ul class="lista-compuesta lista-avatar">
          <li
            v-for="investigadora in investigadoras"
            :key="investigadora.id"
          >
            <router-link
              :to="{
                name: 'Créditos / Investigadora',
                params: { id: `${investigadora.id}` },
              }"
            >
              <div class="lista-avatar-imagen avatar-filtro">
                <img
                  :src="`${cdn_archivos}enis/capitulo-demo/creditos/${investigadora.foto}`"
                  alt=""
                />
              </div>
              <div class="lista.compuesta-cuerpo">
                <p class="lista-compuesta-titulo">
                  {{ investigadora.nombre }}
                </p>
                <p class="lista-compuesta-texto-primario">
                  {{ investigadora.rol }}
                </p>
                <p class="lista-compuesta-texto-secundario">
                  {{ investigadora.institucion }}
                </p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.avatar-filtro {
  filter: grayscale(1);
}
</style>
