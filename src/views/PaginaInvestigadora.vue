<script setup>
import { useRoute } from 'vue-router'
import creditosInvestigadoras from '@/assets/data/creditos-investigadoras.json'

const cdn_archivos = import.meta.env.VITE_CDN_ARCHIVOS
const route = useRoute();
const id = route.params.id;

const investigadora = creditosInvestigadoras.filter(
  d => d.id === id
)[0]
</script>

<template>
  <main id="principal">
    <div class="contenedor ancho-lectura m-y-maximo">
      <div class="lista-compuesta lista-avatar borde-b">
        <div class="flex p-y-3">
          <div class="lista-avatar-imagen avatar-filtro">
            <img
              :src="`${cdn_archivos}sisdai/sisdai-proyecto-base/capitulo-demo/creditos/${investigadora.foto}`"
              alt=""
            />
          </div>
          <div class="lista-compuesta-cuerpo">
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
        </div>
      </div>
      <p
        v-for="(parrafo, index) in investigadora.semblanza"
        :key="`parrafo-${index}`"
      >
        {{ parrafo }}
      </p>
      <p><router-link to="/creditos"> Regresar </router-link></p>
    </div>
  </main>
</template>

<style lang="scss">
.avatar-filtro {
  filter: grayscale(1);
}
</style>
