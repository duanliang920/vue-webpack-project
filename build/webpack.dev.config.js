const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        noInfo: true, //隐藏 webpack 包(bundle)信息」的消息
        // proxy: { //启用代理
        //     "*": {
        //         "target": "http://localhost:3000",
        //         pathRewrite: { "^/api": "" } //重写路径
        //         //secure: false // 如需代理到https服务器上，则开启
        //         //more https://doc.webpack-china.org/configuration/dev-server/
        //     }
        // },
        host: '127.0.0.1', // 用于手机调试测试。链接电脑本地IP
        port: 8011 //端口
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',  // 在babel-loader对源码进行编译前进行lint的检查
                include: path.resolve(__dirname, '../src/'),  // src文件夹下的文件需要被lint
                options: {
                    formatter: require('eslint-friendly-formatter') // 编译后错误报告格式
                }
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader'
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader', 'postcss-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader','css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    //添加了此项，则表明从外部引入，内部不会打包合并进去.
    //jquery如需从外部加载，则可选择此项
    // externals: {
    //     jquery: 'jQuery'
    // },
    plugins: [
        new webpack.DefinePlugin({
            isDebug: JSON.stringify(process.env.NODE_ENV) //暴露变量。判断当前环境是否为dev/build环境
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        //分离css样式
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            title: "",
            //favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
            filename: 'index.html', //生成的html存放路径，相对于path
            template: path.resolve(__dirname, '../src/index.html'), //html模板路径
            inject: true, //允许插件修改哪些内容，包括head与body
            cache: false, //是否缓存
        }),
        new FriendlyErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin() //热加载
    ],
    devtool: '#cheap-module-eval-source-map',
})