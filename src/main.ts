import { createApp } from 'vue'
import 'virtual:uno.css'
import App from './App.vue'
import { usePinia } from './store'
import { useRouter } from './router'

const app = createApp(App)
usePinia(app)
useRouter(app)
app.mount('#app')
