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

<script setup></script>

<template>
  <SisdaiNavegacionPrincipal
    :nav-informacion="`Sección: <b>${$route.name}</b>`"
  >
    <template #complementario>
      <a
        href="#"
        class="nav-hipervinculo"
        target="_blank"
      >
        <b>IR A ENLACE EXTERNO</b>
      </a>
    </template>
    <ul class="nav-menu">
      <li>
        <a
          href="#"
          class="nav-hipervinculo"
        >
          Inicio
        </a>
      </li>
    </ul>
  </SisdaiNavegacionPrincipal>
</template>
