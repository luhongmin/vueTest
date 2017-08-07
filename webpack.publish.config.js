
const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    //entry:path.resolve(__dirname,'./src/main.js'),
    entry: {
        app:path.resolve(__dirname,'./src/main.js'),
        vendors:["vue"]
    },
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
                test: /\.(png|jpg|gif)$/,
                use:'url-loader?limit=25000000&name=images/[name].[ext]'
            }
            //


        ]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({name:'vendors',filename:'vendors.js'}),
        new HtmlWebpackPlugin({
            title:'myapp',
            filename:'index.html',
            template:'src/index.html'
        })
    ]



}

