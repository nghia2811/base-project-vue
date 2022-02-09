import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/index'
import VueAxios from 'vue-axios'
import filter from './filter/filter'

const app = createApp(App)

app.config.globalProperties.$filters = filter

app.use(store)
   .use(router)
    .use(VueAxios)
    .mount('#app')

    
