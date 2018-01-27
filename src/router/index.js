import Vue from "vue"
import VueRouter from "vue-router"
import { routes } from './config'

Vue.use(VueRouter) //加载路由

// 记录滚动条的高度
const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition
    } else {
        const position = {}
        if (to.hash) {
            position.selector = to.hash
        }

        if (to.matched.some(m => m.meta.scrollToTop)) { // 路由中存在scrollToTop字段，则默认滚动条为0
            position.x = 0
            position.y = 0
        }
        return position
    }
}
let config = {
    routes,
    scrollBehavior: scrollBehavior
}

// 实例化路由
const router = new VueRouter(config)

export default router