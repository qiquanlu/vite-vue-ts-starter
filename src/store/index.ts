import { createPinia } from 'pinia'
import type { App } from 'vue'

const pinia = createPinia()

function usePinia(app: App): void {
  app.use(pinia)
}
export default pinia
export { usePinia }
