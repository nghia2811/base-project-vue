import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/index'
import VueAxios from 'vue-axios'

createApp(App)
    .use(store)
    .use(router)
    .use(VueAxios)
    .mount('#app')
