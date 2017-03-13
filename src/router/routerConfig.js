//首页
const index = resolve => {
    require.ensure(['Views/index/index'], () => {
        resolve(require('Views/index/index'))
    })
}

//产品列表
const productList = resolve => {
    require.ensure(['Views/product-list/product-list'], () => {
        resolve(require('Views/product-list/product-list'))
    })
}

//产品详情
const productDetail = resolve => {
    require.ensure(['Views/product-detail/product-detail'], () => {
        resolve(require('Views/product-detail/product-detail'))
    })
}


//关于我们
const about = resolve => {
    require.ensure(['Views/about/about'], () => {
        resolve(require('Views/about/about'))
    })
}

//404错误页面
const error = resolve => {
    require.ensure(['Views/error/error'], () => {
        resolve(require('Views/error/error'))
    })
}

export const routes = [

    {
        path: '/',
        component: index,
        meta: {
            title: '这是用Webpack+Vue的项目首页',
            path: 'index'
        }
    },
    {
        path: '/list',
        name: 'productlist',
        component: productList,
        meta: {
            title: '产品列表',
            path: 'productlist'
        }
    },
    {
        path: '/detail/:id',
        name: 'productDetail',
        component: productDetail,
        meta: {
            title: '产品详情',
            path: 'productdetail',
            scrollToTop: true
        }
    },
    {
        path: '/about',
        name: 'about',
        component: about,
        meta: {
            title: '关于我们',
            path: 'about',
            scrollToTop: true
        }
    },
    {
        path: '/error',
        name: 'error',
        component: error,
        meta: {
            title: '404错误！'
        }
    },
    {
        path: '*',
        redirect: '/error'
    }
]

module.exports = {
    routes
}