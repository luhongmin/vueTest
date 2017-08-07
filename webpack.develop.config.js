  
const path = require('path');
const webpack = require('webpack');
module.exports = {

    devtool: 'eval',
    devServer: {
        contentBase: path.resolve(__dirname, './src'), // 当前服务器监听的路径
        hot: true,  // 热更新
        port:1000,  // 定义端口号
        host: 'localhost',
        open:true ,   // 是否自动打开浏览器
        openPage:""   //配置open:true时，必须给一个openPage:""默认配置
    },
    plugins: [
        //  html-webpack-plugin
        new webpack.HotModuleReplacementPlugin(), //热更新插件
    ],

    entry:path.resolve(__dirname,'./src/main.js'),
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundles.js'
    },
    // 新添加的module属性
    module:{
        rules:[
            // babel-loader的加载器信息把es6改成es5
            {
                test: /\.js$/,
                //这里面的文件刨除了，性能会提高一点
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            //vue-loader加载器
            {
                test: /\.vue$/,
               
                use: {
                    loader: 'vue-loader',//vue2.0写-loader 1.0直接写loader
                   
                }
            },
            //css加载器
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            //url-loader
            {
                test: /\.(png|jpg|gif|woff|ttf|eot|svg)$/,
               use:'url-loader'
            }
            //


        ]
    }



}

