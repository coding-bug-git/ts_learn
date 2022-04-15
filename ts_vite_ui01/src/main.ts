import { createApp } from 'vue'
import { store, key } from './store'
import App from './App.vue'
import router from './router'

import '@/assets/styles/global.scss'

import elementIcons from '@/components/SvgIcon/elementIcons'

const app = createApp(App)
app
  .use(router)
  .use(store, key)
  .use(elementIcons)
  .mount('#app')
