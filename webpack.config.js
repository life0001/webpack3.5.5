/**
 * Created by pengweifeng on 2017/8/28.
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const staticsPath = path.join(__dirname, './static');
module.exports = function (par) {
    return {
        entry: {
            app: __dirname + "/app/main.js",  // 唯一入口文件 __dirname代表本地计算机路径 如D:\xx\
        },
        /**
         * devtool
         * 模式，用来构建代码
         * 构建速度、是否支持生产
         * 开发环境推荐cheap-module-eval-source-map
         * 生产环境推荐 cheap-module-source-map
         */
        devtool: "cheap-module-eval-source-map",
        output: {
            path: __dirname + "/public", // 执行webpack命令打包后文件存放路径
            publicPath: '/', // 告诉webpack从该路径下寻找文件
            filename: "bundle-[hash:5].js" // 项目输出的唯一文件
        },
        // 本地服务器所加载的页面配置
        devServer: {
            contentBase: "./public", // 本地服务器所加载页面的目录
            historyApiFallback: { // 如果URL网址是hash值
                index: './public/404.html' // 如果#public路径下没有找到url路由指定文件，就跳转到这里
            },
            port: 8083,
            compress: true, // 是否开启gzip压缩
            inline: true, // 实时刷新
        },
        module: {
            rules: [
                {
                    test: /(\.jsx|\.js)$/,
                    use: {
                        loader: "babel-loader"  // 把jsx语法转义成浏览器能识别的语句
                    },
                    exclude: /node_modules/
                },
                {
                    test:/\.css$/,
                    use: [
                        // 请注意这里对同一个文件引入多个loader的方法。
                        // 必须按顺序先style-loader后css-loader
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader"
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    // 把scss$语法转义成浏览器能识别的语句
                    loader: ['style-loader','css-loader','postcss-loader','sass-loader']
                }
            ]
        },
        plugins: [
            new webpack.BannerPlugin('版权所有'),
            // HtmlWebpackPlugin作用是依据一个简单的index.html模板，生成一个自动引用你打包后的JS文件的新index.html
            new HtmlWebpackPlugin({
                template: './index.html', // html模板所在目录，打包后的文件名不变，也存放在public目录下
            })
        ]
    }
};
