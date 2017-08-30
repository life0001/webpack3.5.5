# webpack3.5.5
webpack3.5.5使用说明

<h2>什么是webpack，为什么要使用它？</h2>
<p>WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（ES6、Scss、TypeScript等），并将其转换和打包为合适的格式供浏览器使用。</p>
<p>Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：main.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。</p>
<p>Webpack的处理速度更快更直接，能打包更多不同类型的文件。</p>