import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicio from '@/views/PaginaInicio.vue'

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return {
        top: 0,
        behavior: 'smooth',
      }
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: PaginaInicio,
    },
    {
      path: '/otra-vista',
      name: 'Otra Vista',
      component: () => import('@/views/OtraVista.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Página no encontrada',
      component: () => import('@/views/ErrorPaginaNoEncontrada.vue'),
    },
  ],
})

router.beforeEach(to => {
  const title = `${to.name} | ${import.meta.env.VITE_TITULO}`
  if (title) {
    document.title = title
  }
})

export default router
