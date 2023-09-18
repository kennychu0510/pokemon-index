import './assets/main.css'
import './style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import * as ohVueIcons from 'oh-vue-icons/icons'

const icons = Object.values({ ...ohVueIcons })
addIcons(...icons)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('v-icon', OhVueIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
