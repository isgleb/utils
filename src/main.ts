import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
// import {router} from "./router/router";
import {createMemoryHistory, createRouter, RouteRecordRaw} from "vue-router";


export const routes: RouteRecordRaw[] = [
    // {
    //     // name: 'main-page',
    //     path: '',
    //     // params: { cocktailType: ['margarita'] },
    //     component: InputsForm,
    // },
]
const pinia = createPinia()
const router = createRouter({history: createMemoryHistory(), routes });

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
