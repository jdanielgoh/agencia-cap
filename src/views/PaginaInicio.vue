<script setup>
const cdn_achivos = import.meta.env.VITE_CDN_ARCHIVOS
import datos_consorcio from '@/assets/data/consorcio_variantes_todas.json'
import { ref } from 'vue'
const data = ref(datos_consorcio)
const variables = ref([
  { id: 'Omicron', color: '#ffce00', nombre: 'Omicron' },
  { id: 'Delta', color: '#fa5600', nombre: 'Delta' },
  { id: 'Gamma', color: 'blue', nombre: 'Gamma' },
])
</script>

<template>
  <main id="principal">
    <div class="portada">
      <video
        class="portada-imagen"
        autoplay="true"
        loop="loop"
        muted="muted"
        alt="Portada: Animación de mapas"
      >
        <source
          src="https://s3-figma-videos-production-sig.figma.com/video/1304756278650061083/TEAM/1bc9/b360/-e73e-4514-b28b-060a8703e711?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fu6LKnRbsKqD5cJmX-il7cA1zvlAp6IgJqLVfVFGshhSMMjYn0LzEFTEPrQFVm33Sxz2ovhmyuMXnPIqByiQGLiYqQ79KQnqhbEWi2MLJjjaYcOGF-hxdaBH565OrBsT9Oq-jgOyW6ABACJoO1tft2D6HPTTmU0cjw~2j8yCLDLOmjd79vVujjBccPQx4S~rz-~ehuD5Fi52vQZ4Jo4d9wyFh96TSKeP8IYR~9T98mMrm8bj-wkQapThhp3Fce5~OjIUku3hsKy4nHSRsV~mD3mOm139KIH~p3mFa9Th7dywtEfS9DgxfNQ9YWE7ASr5iNKtpk1ctFR6JBDfNumpeQ__"
        />
      </video>

      <div class="portada-degradado">
        <div class="portada-cuerpo">
          <h1 class="portada-titulo">Gestor de Mapas (GEMA)</h1>
        </div>
      </div>
    </div>
    <div class="contenedor ancho-lectura m-y-10">
      <p class="texto-centrado">
        Gema permite integrar información estructurada de las humanidades,
        ciencias y tecnologías a través de una infraestructura de conocimiento
        geoespacial con estándares abiertos.
      </p>
    </div>
    <div class="contenedor ancho-fijo">
      <div class="flex">
        <div class="columna-8">
          <div class="tarjeta">
            <div class="tarjeta-cuerpo">
              <p class="tarjeta-titulo">Visualiza capas</p>
              <p>
                Explora y descarga las capas de información espacial de Gema,
                estos insumos están alineados a las necesidades temáticas de los
                <a href=""> Programas Nacionales Estratégicos</a> (Pronaces) del
                Conahcyt.
              </p>
            </div>
            <div class="tarjeta-pie">
              <a
                href=""
                class="boton boton-primario boton-chico"
              >
                Ir al visualizador
              </a>
            </div>
          </div>
        </div>
        <div class="columna-8">
          <div class="tarjeta">
            <div class="tarjeta-cuerpo">
              <p class="tarjeta-titulo">Visualiza capas</p>
              <p>
                Explora y descarga las capas de información espacial de Gema,
                estos insumos están alineados a las necesidades temáticas de los
                <a href=""> Programas Nacionales Estratégicos</a> (Pronaces) del
                Conahcyt.
              </p>
            </div>
            <div class="tarjeta-pie">
              <a
                href=""
                class="boton boton-primario boton-chico"
              >
                Ir al visualizador
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contenedor ancho-fijo">
      <h2 class="texto-centrado m-t-5 m-b-4">Lo más reciente en Gema</h2>
      <div class="flex">
        <div class="columna-4">
          <div class="tarjeta">
            <div class="tarjeta-cuerpo">
              <p class="tarjeta-etiqueta">Fecha de publicación: 8/11/2024</p>
              <p>Depósitos de desechos 2023</p>
            </div>
            <div class="tarjeta-pie">
              <a
                href=""
                class="boton boton-primario boton-chico"
                aria-label="Enlace a depósito de desechos"
              >
                Explorar capa
              </a>
            </div>
          </div>
        </div>
        <div class="columna-4">
          <div class="tarjeta">
            <div class="tarjeta-cuerpo">
              <p class="tarjeta-etiqueta">Fecha de publicación: 8/11/2024</p>
              <p>Depósitos de desechos 2023</p>
            </div>
            <div class="tarjeta-pie">
              <a
                href=""
                class="boton boton-primario boton-chico"
              >
                Explorar capa
              </a>
            </div>
          </div>
        </div>
        <div class="columna-4">
          <div class="tarjeta">
            <div class="tarjeta-cuerpo">
              <p class="tarjeta-etiqueta">Fecha de publicación: 8/11/2024</p>
              <p>Depósitos de desechos 2023</p>
            </div>
            <div class="tarjeta-pie">
              <a
                href=""
                class="boton boton-primario boton-chico"
              >
                Explorar capa
              </a>
            </div>
          </div>
        </div>
        <div class="columna-4">
          <div class="tarjeta">
            <div class="tarjeta-cuerpo">
              <p class="tarjeta-etiqueta">Fecha de publicación: 8/11/2024</p>
              <p>Depósitos de desechos 2023</p>
            </div>
            <div class="tarjeta-pie">
              <a
                href=""
                class="boton boton-primario boton-chico"
              >
                Explorar capa
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contenedor fondo-color-acento p-y-9">
      <h2 class="texto-centrado p-y-3">Lo más reciente en Gema</h2>
      <div class="flex contenedor ancho-fijo">
        <div class="columna-8 flex-vertical-centrado">
          <h3 class="texto-color-acento">
            Descargar capas en formatos abiertos
          </h3>
          <p>
            Todas las capas de Gema están disponibles en
            <SisdaiEnlaceExterno
              :texto="'CSV'"
              :enlace="'https://es.wikipedia.org/wiki/Valores_separados_por_comas'"
            />,
            <SisdaiEnlaceExterno
              :texto="'Geojson'"
              :enlace="'https://es.wikipedia.org/wiki/Valores_separados_por_comas'"
            />, Geopackage y con sus metadatos en TXT. También puedes descargar
            mapas en PNG.
          </p>
        </div>
        <div class="columna-8">
          <img
            src="https://s3-alpha-sig.figma.com/img/2ba7/e32f/beb767db620a1ec42a6b11103ac30d85?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ChCbf0O5ErDORMRLZoE8zpSE-8kKOHpUwdpKNIBVbiHRlL6cIQLaINa3x1ZDTNyEnEosAsvg5-Wlvx0LJjgc0Ae605tIdltqWhPVDka4NY~Nnc57fmpanNgz70fL5uaWZfw8M9beoQJAk50DSI7AKL~OE5WgHvYRtvweBd~WGbhmw-HdauVoltDCBUDsBGFMOjj22Wo8jiydXsdfq3QP-My~9FAGS0~XVMXtWyAiIkmRWI4lXNsHXZ8WOZThZjF-4uueNMSJ2M~cWeQzyLnFgoyirvruJFrX4CRWtVjiW6cIBekB1FgB~oGAO13dUk0IIAoffcpa9K-JipgyLjvx4A__"
            alt=""
            class="borde-redondeado-20"
          />
        </div>
        <div class="columna-8">
          <img
            src="https://s3-alpha-sig.figma.com/img/2ba7/e32f/beb767db620a1ec42a6b11103ac30d85?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ChCbf0O5ErDORMRLZoE8zpSE-8kKOHpUwdpKNIBVbiHRlL6cIQLaINa3x1ZDTNyEnEosAsvg5-Wlvx0LJjgc0Ae605tIdltqWhPVDka4NY~Nnc57fmpanNgz70fL5uaWZfw8M9beoQJAk50DSI7AKL~OE5WgHvYRtvweBd~WGbhmw-HdauVoltDCBUDsBGFMOjj22Wo8jiydXsdfq3QP-My~9FAGS0~XVMXtWyAiIkmRWI4lXNsHXZ8WOZThZjF-4uueNMSJ2M~cWeQzyLnFgoyirvruJFrX4CRWtVjiW6cIBekB1FgB~oGAO13dUk0IIAoffcpa9K-JipgyLjvx4A__"
            alt=""
            class="borde-redondeado-20"
          />
        </div>
        <div class="columna-8 flex-vertical-centrado">
          <h3 class="texto-color-acento">
            Descargar capas en formatos abiertos
          </h3>
          <p>
            Todas las capas de Gema están disponibles en
            <SisdaiEnlaceExterno
              :texto="'CSV external'"
              :enlace="'https://es.wikipedia.org/wiki/Valores_separados_por_comas'"
            />
            Geojson, Geopackage y con sus metadatos en TXT. También puedes
            descargar mapas en PNG.
          </p>
        </div>
      </div>
    </div>
    <div class="contenedor">
      <div class="contenedor ancho-lectura">
        <h2 class="texto-centrado">
          Ejemplos de mapas que utilizan capas de Gema
        </h2>
        <p class="texto-centrado">
          Explora los ejemplos de mapas en los Ecosistemas Nacionales
          Informáticos (ENI) o analiza capas geográficas en el visualizador.
        </p>
      </div>

      <div class="contenedor ancho-fijo">
        <div class="flex">
          <div class="columna-4">
            <div class="tarjeta">
              <img
                src="https://s3-alpha-sig.figma.com/img/3374/3d4e/fb102a05d8271e9a1cf13b950676bdec?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eMjZebEL9KRDEjspcpd6PSsp3k6C1iWXbgk-B7jwALSRjBZ~L75X~U29IjlmunhDExtyhQgqOpm2~2gD9bkkmkBpzBGj-vm22rx64psb5j5JpVGl89Hrlpm9DKd83ld6DQLZKAV1~pmvSW3M~bHbcrnrcbDVeXNE8kTpp9jhdftqiBhIIzPFYkwHXe3jhVe0PPUk7zU4drWj0Yni4kphSklMqk85iA2IJQJY7EHhS7UArkt-PHPPuGR26n9guUG7K4hHrfmnJbDJR7mK0L7fX~AV8VY99Ks87dmXk--QV7SF2Cj34ETXHOKiU-q2iluKRNoOZZQSgDni2o1rzsNadw__"
                alt=""
                class="tarjeta-imagen"
              />
              <div class="tarjeta-cuerpo">
                <p class="tarjeta-etiqueta">Etiqueta o texto secundario</p>
                <p>
                  Mapa interactivo: Rescate del Lago de Texcoco, diagnóstico
                </p>
              </div>
              <div class="tarjeta-pie flex">
                <a
                  href=""
                  class="boton boton-primario boton-chico"
                  aria-label="Enlace a depósito de desechos"
                >
                  Ver ejemplo del mapa
                  <span class="pictograma-enlace-externo"></span>
                </a>
                <a
                  href=""
                  class="boton boton-secundario boton-chico"
                >
                  Abrir capas en el visualizador</a
                >
              </div>
            </div>
          </div>
          <div class="columna-4">
            <div class="tarjeta">
              <img
                src="https://s3-alpha-sig.figma.com/img/3374/3d4e/fb102a05d8271e9a1cf13b950676bdec?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eMjZebEL9KRDEjspcpd6PSsp3k6C1iWXbgk-B7jwALSRjBZ~L75X~U29IjlmunhDExtyhQgqOpm2~2gD9bkkmkBpzBGj-vm22rx64psb5j5JpVGl89Hrlpm9DKd83ld6DQLZKAV1~pmvSW3M~bHbcrnrcbDVeXNE8kTpp9jhdftqiBhIIzPFYkwHXe3jhVe0PPUk7zU4drWj0Yni4kphSklMqk85iA2IJQJY7EHhS7UArkt-PHPPuGR26n9guUG7K4hHrfmnJbDJR7mK0L7fX~AV8VY99Ks87dmXk--QV7SF2Cj34ETXHOKiU-q2iluKRNoOZZQSgDni2o1rzsNadw__"
                alt=""
                class="tarjeta-imagen"
              />
              <div class="tarjeta-cuerpo">
                <p class="tarjeta-etiqueta">Etiqueta o texto secundario</p>
                <p>
                  Mapa interactivo: Rescate del Lago de Texcoco, diagnóstico
                </p>
              </div>
              <div class="tarjeta-pie flex">
                <a
                  href=""
                  class="boton boton-primario boton-chico"
                  aria-label="Enlace a depósito de desechos"
                >
                  Ver ejemplo del mapa
                  <span class="pictograma-enlace-externo"></span>
                </a>
                <a
                  href=""
                  class="boton boton-secundario boton-chico"
                >
                  Abrir capas en el visualizador</a
                >
              </div>
            </div>
          </div>
          <div class="columna-4">
            <div class="tarjeta">
              <img
                src="https://s3-alpha-sig.figma.com/img/3374/3d4e/fb102a05d8271e9a1cf13b950676bdec?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eMjZebEL9KRDEjspcpd6PSsp3k6C1iWXbgk-B7jwALSRjBZ~L75X~U29IjlmunhDExtyhQgqOpm2~2gD9bkkmkBpzBGj-vm22rx64psb5j5JpVGl89Hrlpm9DKd83ld6DQLZKAV1~pmvSW3M~bHbcrnrcbDVeXNE8kTpp9jhdftqiBhIIzPFYkwHXe3jhVe0PPUk7zU4drWj0Yni4kphSklMqk85iA2IJQJY7EHhS7UArkt-PHPPuGR26n9guUG7K4hHrfmnJbDJR7mK0L7fX~AV8VY99Ks87dmXk--QV7SF2Cj34ETXHOKiU-q2iluKRNoOZZQSgDni2o1rzsNadw__"
                alt=""
                class="tarjeta-imagen"
              />
              <div class="tarjeta-cuerpo">
                <p class="tarjeta-etiqueta">Etiqueta o texto secundario</p>
                <p>
                  Mapa interactivo: Rescate del Lago de Texcoco, diagnóstico
                </p>
              </div>
              <div class="tarjeta-pie flex">
                <a
                  href=""
                  class="boton boton-primario boton-chico"
                  aria-label="Enlace a depósito de desechos"
                >
                  Ver ejemplo del mapa
                  <span class="pictograma-enlace-externo"></span>
                </a>
                <a
                  href=""
                  class="boton boton-secundario boton-chico"
                >
                  Abrir capas en el visualizador</a
                >
              </div>
            </div>
          </div>
          <div class="columna-4">
            <div class="tarjeta">
              <img
                src="https://s3-alpha-sig.figma.com/img/3374/3d4e/fb102a05d8271e9a1cf13b950676bdec?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eMjZebEL9KRDEjspcpd6PSsp3k6C1iWXbgk-B7jwALSRjBZ~L75X~U29IjlmunhDExtyhQgqOpm2~2gD9bkkmkBpzBGj-vm22rx64psb5j5JpVGl89Hrlpm9DKd83ld6DQLZKAV1~pmvSW3M~bHbcrnrcbDVeXNE8kTpp9jhdftqiBhIIzPFYkwHXe3jhVe0PPUk7zU4drWj0Yni4kphSklMqk85iA2IJQJY7EHhS7UArkt-PHPPuGR26n9guUG7K4hHrfmnJbDJR7mK0L7fX~AV8VY99Ks87dmXk--QV7SF2Cj34ETXHOKiU-q2iluKRNoOZZQSgDni2o1rzsNadw__"
                alt=""
                class="tarjeta-imagen"
              />
              <div class="tarjeta-cuerpo">
                <p class="tarjeta-etiqueta">Etiqueta o texto secundario</p>
                <p>
                  Mapa interactivo: Rescate del Lago de Texcoco, diagnóstico
                </p>
              </div>
              <div class="tarjeta-pie flex">
                <a
                  href=""
                  class="boton boton-primario boton-chico"
                  aria-label="Enlace a depósito de desechos"
                >
                  Ver ejemplo del mapa
                  <span class="pictograma-enlace-externo"></span>
                </a>
                <a
                  href=""
                  class="boton boton-secundario boton-chico"
                >
                  Abrir capas en el visualizador</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contenedor ancho-lectura m-y-5">
        <SisdaiGraficas>
          <template #panel-encabezado-vis>
            <div>
              <p class="vis-titulo-visualizacion">Título de visualizacion</p>
            </div>
          </template>
          <SisdaiSeriesTiempo
            :datos="data"
            :variables="variables"
            :nombre_indice="'fecha_1'"
            :formato_temporal="'%d/%m/%Y'"
          ></SisdaiSeriesTiempo>
          <template #panel-pie-vis>
            <div>
              <SisdaiNomenclatura :variables="variables"></SisdaiNomenclatura>
            </div>
          </template>
        </SisdaiGraficas>
      </div>
    </div>
  </main>
</template>
