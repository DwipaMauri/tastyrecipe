import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

import { createApp } from "vue";
import App from "./App.vue";
import { store } from './store/index';

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
