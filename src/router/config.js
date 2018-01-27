//首页
const index = resolve => {
    require.ensure(['@views/index/index'], () => {
        resolve(require('@views/index/index'))
    })
}

//about
const about = resolve => {
    require.ensure(['@views/about/about'], () => {
        resolve(require('@views/about/about'))
    })
}

//404错误页面
const error = resolve => {
    require.ensure(['@views/error/error'], () => {
        resolve(require('@views/error/error'))
    })
}

let routes = [

    {
        path: '/',
        component: index,
        meta: {
            title: '',
            path: 'index'
        }
    },
    {
        path: '/about',
        component: about,
        meta: {
            title: '',
            path: 'about'
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