var webpack = require("webpack");
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //webpack html模板插件
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //css提取插件
var CleanPlugin = require('clean-webpack-plugin') //webpack插件，用于清除目录文件
var production = process.env.NODE_ENV;
console.log(production)
module.exports = {
    // 入口文件地址
    entry: {
        index: ['./src/main.js'],
        vendor: ['vue', 'vue-router', 'axios']
    },
    // 输出
    output: {
        path: path.resolve(__dirname, './dist'), //入口文件的输出地址
        filename: production ? 'js/[name].[hash:8].js' : '[name].js',
        publicPath: "", //模板、样式、脚本、图片等资源对应的server上的路径
        chunkFilename: 'js/[name].chunk.[hash:8].js'
    },
    resolve: {
        //设置require或import的时候可以不需要带后缀
        extensions: ['', '.js', '.vue', '.scss', '.less', '.css'],
        alias: {
            'vue': 'vue/dist/vue.min.js',
            'vue-router': 'vue-router/dist/vue-router.min.js',
            'Views': path.resolve(__dirname, './src/views')
        }
    },
    // 服务器配置相关，自动刷新!
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: {
            colors: true // 用颜色标识
        },
        grogress: true,
        //host: '127.0.0.1', // 用于手机调试测试。链接电脑本地IP
        port: 8188
    },
    module: {
        loaders: [{
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css!sass")
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url',
                query: {
                    limit: 8000,
                    name: 'images/[name].[ext]?[hash:4]'
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({ //全局配置加载
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery"
        }),
        new CleanPlugin(['dist', 'images']),
        new ExtractTextPlugin(production ? "./css/[name].[hash:8].css" : "./css/[name].css"),
        new HtmlWebpackPlugin({
            title: 'Vue+webpack实战',
            //favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
            filename: './index.html', //生成的html存放路径，相对于path
            template: './src/index.html', //html模板路径
            inject: true, //允许插件修改哪些内容，包括head与body
            cache: false, //是否缓存
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    //添加了此项，则表明从外部引入，内部不会打包合并进去.
    //jquery如需从外部加载，则可选择此项
    externals: {
        // jquery: 'window.jQuery',
    },
    devtool: '#eval-source-map'
};

//判断为生产模式，压缩js
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = ''
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ])
}