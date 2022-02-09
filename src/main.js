import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/index'
import VueAxios from 'vue-axios'
import filter from './filter/filter'
import mitt from 'mitt'
import vClickOutside from "click-outside-vue3"

const emitter = mitt();

const app = createApp(App)

app.config.globalProperties.$filters = filter
app.config.globalProperties.emitter = emitter;

app.use(store)
   .use(router)
   .use(VueAxios)
   .use(vClickOutside)
   .mount('#app')

    
