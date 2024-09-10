import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import { createWebHashHistory, createRouter } from 'vue-router'

import MainPage from './pages/MainPage.vue'


const routes = [
  { path: '/', component: MainPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
