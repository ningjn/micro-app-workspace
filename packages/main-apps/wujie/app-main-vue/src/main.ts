import { createApp } from 'vue'
import { createPinia } from 'pinia'
import WujieVue from "wujie-vue3";

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(WujieVue)
app.use(createPinia())
app.use(router)

app.mount('#app-main')
