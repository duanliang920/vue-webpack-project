import Vue from "vue"
import VueRouter from "vue-router"

import App from './App'
import { routes } from './router/routerConfig'

require('./assets/scss/common') //加载公共样式

Vue.config.debug = true; //开启错误提示

Vue.use(VueRouter) //加载路由

//记录滚动条的高度
const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition
    } else {
        const position = {}
        if (to.hash) {
            position.selector = to.hash
        }

        if (to.matched.some(m => m.meta.scrollToTop)) { //路由中存在scrollToTop字段，则默认滚动条为0
            position.x = 0
            position.y = 0
        }
        return position
    }
}

// 实例化路由
const router = new VueRouter({
    routes,
    scrollBehavior: scrollBehavior
})

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

window.Router = router