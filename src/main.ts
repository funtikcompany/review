import { createApp } from 'vue';
import "bootstrap/dist/css/bootstrap.min.css";
import router from './router';
import "bootstrap"; 
import './assets/style.scss'; 
import App from './App.vue';
import i18n from './translate';

createApp(App).use(router).use(i18n).mount('#app')
