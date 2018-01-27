import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import router from './router/index'
import { routes } from './router/config'
import './assets/scss/common'

Vue.config.devtools = true

Vue.config.debug = true // 开启错误提示


const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

window.Router = router