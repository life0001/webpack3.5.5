# webpack3.5.5
webpack3.5.5使用说明

<h2>什么是webpack，为什么要使用它？</h2>
<p>WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（ES6、JSX、Scss、TypeScript等），并将其转换和打包为合适的格式供浏览器使用。</p>
<p>Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：main.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。</p>
<p>Webpack的处理速度更快更直接，能打包更多不同类型的文件。</p>

<pre>
"scripts": {
    "server": "webpack-dev-server --devtool eval --progress --colors"
}
</pre>
<p>上述配置项的意义：</p>
<pre>
1、webpack-dev-server - 在 localhost:xx 建立一个 Web 服务器
2、devtool eval - 为你的代码创建源地址。当有任何报错的时候可以让你更加精确地定位到文件和行号，在浏览器可见
3、progress - 显示合并代码进度，在运行npm run 的时候可见
4、colors - 命令行中显示颜色！
</pre>
<h5>.babelrc文件配置如下：</h5>
<pre>
{
    "presets": [
        "react",
        "es2015"
    ],
    "plugins": [
        ["import", { "style": "css", "libraryName": "antd-mobile" }]
    ]
}
</pre>
<h3>react-router4及以上配置</h3>
<pre>
// bundle-loader模型用来异步加载组件
import Bundle from '@/bundle.js';
// 异步引入，react-router4.0以上版本必须
// 不然webpack.config文件配置内chunkFilename配置项不会起作用，不会生成文件。
例：
<code>
import home from 'bundle-loader?lazy&name=[name]!@/components/Home/Home';
const Home = () => (
    《Bundle load={home}》
        {(Home) => <Home />}
    《/Bundle》
)
</code>
最后输出模块Home
export const xxx= {Home}
</pre>
