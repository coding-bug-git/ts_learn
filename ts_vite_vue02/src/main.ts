import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { store, key } from './store'
import '@/assets/css/index.scss'

// import './permission'

if (import.meta.env.VITE_APP_ISMOCK === 'true') await import('@/mock')

const app = createApp(App)

app.directive('custom', {
  mounted (el) {
    console.log(el.style)
    el.style.display = 'none'
  }
})
app
  .use(router)
  .use(store, key)
  .mount('#app')
