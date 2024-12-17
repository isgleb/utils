import {createMemoryHistory, createRouter, RouteRecordRaw} from "vue-router";
import InputsForm from "../pages/InputsForm.vue";

export const cockTailRoutes: RouteRecordRaw[] = [
    {
        path: '',
        component: InputsForm,
    },
]