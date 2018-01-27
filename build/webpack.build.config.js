const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin') //webpack插件，用于清除目录文件
const ExtractTextPlugin = require('extract-text-webpack-plugin') //css提取工具
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin') //css压缩工具
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const vueLoaderConfig = require('./vue-loader.config.js')
module.exports = merge(baseWebpackConfig, {
    entry: {
        app: path.resolve(__dirname, '../src/main.js'),
        vendor: ['vue', 'vue-router', 'vuex', 'axios']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js',
        publicPath: ''
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: vueLoaderConfig
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true //css压缩
                        }
                    }]
                })
            },
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
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
            isDebug: JSON.stringify(process.env.NODE_ENV) //暴露全局变量。判断当前环境是否为dev/build环境
        }),
        new CleanPlugin(['dist'], {
            root: path.join(__dirname, '../')
        }),
        //分离css样式
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash:8].css',
            allChunks: true
        }),
        //js文件压缩插件
        new UglifyJSPlugin({
            cache: true, // 启用缓存
            parallel: true, // 启用多进程并行运行
            uglifyOptions: {
                // 删除所有的注释
                comments: false,
                compress: {
                    // 在UglifyJs删除没有用到的代码时不输出警告  
                    warnings: false,
                    // 删除所有的 `console.log` 语句
                    pure_funcs: ['console.log'],
                    // 内嵌定义了但是只用到一次的变量
                    collapse_vars: true,
                    // 提取出出现多次但是没有定义成变量去引用的静态值
                    reduce_vars: true,
                }
            }
        }),
        //css 压缩
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.NoEmitOnErrorsPlugin(), //不触发错误,即编译后运行的包正常运行
        new HtmlWebpackPlugin({
            title: "",
            //favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
            filename: 'index.html', //生成的html存放路径，相对于path
            template: path.resolve(__dirname, '../src/index.html'), //html模板路径
            inject: true, //允许插件修改哪些内容，包括head与body
            //hash: true, //为静态资源生成hash值
            cache: false, //是否缓存
            //chunks: ['main'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: { //压缩HTML文件
                removeComments: true, //删除html中的注释代码
                collapseWhitespace: true, //删除html中的空白符
                removeAttributeQuotes: true //删除html元素中属性的引号
            }
        }),
        // //分离公共js到vendor中
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module, count) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        //将运行时代码提取到单独的manifest文件中，防止其影响vendor.js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'mainifest',
            chunks: ['vendor']
        })
    ],
    devtool: false
})