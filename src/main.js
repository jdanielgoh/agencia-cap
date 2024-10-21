//   eni-capitulo-demo is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   eni-capitulo-demo is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with eni-capitulo-demo. If not, see <https://www.gnu.org/licenses/>.

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueMatomo from 'vue-matomo'

import 'sisdai-css/dist/sisdai.min.css'
import SisdaiComponentes from 'sisdai-componentes'

import {
  SisdaiGraficas,
  SisdaiGraficasGloboInfo,
  SisdaiBarras,
} from 'sisdai-graficas/src/componentes'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(SisdaiComponentes)
app.use(SisdaiGraficas)
app.use(SisdaiGraficasGloboInfo)
app.use(SisdaiBarras)

if (parseInt(import.meta.env.VITE_MATOMO_ID) !== 0) {
  app.use(VueMatomo, {
    host: 'https://retru.conacyt.mx/',
    siteId: parseInt(import.meta.env.VITE_MATOMO_ID),
    trackerFileName: 'matomo',
    router: router,
    enableLinkTracking: true,
    requireConsent: false,
    trackInitialView: true,
    debug: true,
    trackInteraction: (to, from) => {
      if (!from) {
        return true
      }
      return to.path !== from.path || to.hash !== from.hash
    },
  })
}

app.mount('#app')
