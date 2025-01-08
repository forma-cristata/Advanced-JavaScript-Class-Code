import {createWebHistory, createRouter} from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Counter from '@/components/Counter.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: HelloWorld, props: true},
        {path: '/Counter', name: 'Counter', component: Counter }
    ]
});

export default(router);