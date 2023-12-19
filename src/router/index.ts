import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import AppPage from '@/App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [

    {
      path: '/',
      component: AppPage,
    },

  ],
})

function useRouter(app: App): void {
  app.use(router)
}
export default router
export { useRouter }
