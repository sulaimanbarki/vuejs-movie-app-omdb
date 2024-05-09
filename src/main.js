
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('./views/Home.vue'), name: 'home' },
    { path: '/movies/:id', component: () => import('./views/Movies.vue'), name: 'movies' },
  ],
});

const app = createApp(App)
app.use(router)

app.mount('#app')
