import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import icon from './components/shared/icon.vue';

const app = createApp(App)

app.component('icon', icon);
app.use(router)

app.mount('#app')
