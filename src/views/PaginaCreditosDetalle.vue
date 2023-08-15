<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue2-helpers/vue-router'
import personas from '@/assets/data/creditos/personas-ejemplo.json'

const route = useRoute()

const persona = ref({})

onMounted(() => {
  persona.value = personas.filter(d => d.id === route.params.id)[0]
})
</script>

<template>
  <main
    class="contenedor ancho-lectura m-y-10"
    id="principal"
  >
    <div class="tmp-credito-detalle">
      <div class="img">
        <img
          :src="persona.foto"
          :alt="persona.nombre"
        />
      </div>
      <div class="text">
        <p class="nombre">{{ persona.nombre }}</p>
        <p class="cargo">{{ persona.cargo }}</p>
        <p class="institucion">{{ persona.institucion }}</p>
      </div>
    </div>
    <hr />
    <p
      v-for="(parrafo, index) in persona.semblanza"
      :key="`parrafo-${index}`"
    >
      {{ parrafo }}
    </p>
    <router-link to="/creditos">Regresar</router-link>
  </main>
</template>

<style lang="scss">
.tmp-credito-detalle {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.tmp-credito-detalle .img {
  flex: 1 0 120px;
  width: 120px;
}
.tmp-credito-detalle .img img {
  border-radius: 50%;
  width: 120px;
  height: 120px;
}
.tmp-credito-detalle .text {
  flex: 1 1 100%;
  font-size: 16px;
  margin: 0 0 0 16px;
}
.tmp-credito-detalle .text * {
  margin: 8px 0;
  line-height: 1em;
}
.tmp-credito-detalle .nombre {
  font-size: 22px;
  font-weight: 500;
}
.tmp-credito-detalle .institucion {
  color: var(--tipografia-color-2);
}
</style>
