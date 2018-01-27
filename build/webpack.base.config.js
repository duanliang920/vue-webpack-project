const path = require('path')
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader?cacheDirectory' } //开启 babel-loader 缓存 ?cacheDirectory
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 30000,
                            name: './images/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                            name: '/fonts/[name].[hash:7].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        // 该项配置能够在加载资源的时候省略后缀名
        extensions: ['.js', '.vue', '.json', '.css', '.scss'],
        // 配置路径别名
        alias: {
            '@src': path.resolve(__dirname, '../src'),
            '@components': path.resolve(__dirname, '../src/components/'),
            '@services': path.resolve(__dirname, '../src/services/'),
            '@views': path.resolve(__dirname, '../src/views/'),
            'vue': 'vue/dist/vue.min.js',
            'vue-router': 'vue-router/dist/vue-router.min.js',
            'vuex': 'vuex/dist/vuex.min.js'
        }
    }
}