import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "../views/notFound.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('@/views/home.vue'),

    },
    
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/notFound.vue')},

  ]
})

export default router
