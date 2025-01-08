import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// Tooltips requires popper. bootstrap.js does not include popper
    //Bootstrap.bundle DOES include the popper library
        //If we want to use the bundled dependencies, we must use the bundle version.
    //min minifies the javascript

createApp(App).use(router).mount('#app')