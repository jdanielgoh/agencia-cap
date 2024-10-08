<script setup>
const cdn_achivos = import.meta.env.VITE_CDN_ARCHIVOS
</script>

<template>
  <main id="principal">
    <div class="portada">
      <img
        class="portada-imagen"
        :src="`${cdn_achivos}sisdai/sisdai-proyecto-base/inicio/pekihermosa.png`"
        alt="portada de ejemplo: gato cálico mirando al frente"
      />
      <div class="portada-degradado">
        <div class="portada-cuerpo">
          <h1 class="portada-titulo">Título</h1>
        </div>
      </div>
    </div>
    <div class="contenedor ancho-lectura m-y-10">
      <h2>Presentación</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quis quasi
        deleniti autem. Nesciunt, dolore dolores modi eos quisquam, ab voluptas
        error perspiciatis, laudantium rerum veritatis inventore! Facere, quam
        incidunt.
      </p>
    </div>
  </main>
</template>
