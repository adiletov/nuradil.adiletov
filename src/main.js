import { createApp } from 'vue'
import App from './App.vue'
import './style/style.scss';
import {router} from "./router";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App);

app.use(router).component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
