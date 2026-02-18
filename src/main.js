import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import './assets/global.css'

const app = createApp(App)

// * register the router
app.use(router)

app.mount('#app')
