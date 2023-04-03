import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import StyleClass from 'primevue/styleclass';

import "primevue/resources/themes/mdc-dark-deeppurple/theme.css";     
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

createApp(App).directive('styleclass', StyleClass).use(PrimeVue).mount('#app')
