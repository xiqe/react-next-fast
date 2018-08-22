# Next.js ------ 从零快速搭建Next框架教程

## 写在前面
Next.js是提供基于React的SSR框架。解决SPA的一些缺点。下文会对SPA应用进行一些简单的介绍，并且会通过拆分本Demo的实现，让大家学会如何从零搭建Next框架。

## SPA的本质以及优缺点
现今前端开发技术，spa（single page application）单页应用的普及度越来越高，react以及vue这类的前端UI框架为spa提供的很好的实现。单页应用的本质其实就是浏览器首先加载必须的HTML、CSS和Javascript，所有的操作都在这张页面上完成，都由JavaScript来控制。

优点：
- 分离前后端关注点，前端负责view，后端负责model，各司其职；
- 服务器只接口提供数据，不用展示逻辑和页面合成，提高性能；
- 同一套后端程序代码，不用修改兼容Web界面、手机；
- 用户体验好、快，内容的改变不需要重新加载整个页面；
- 可以缓存较多数据，减少服务器压力；

缺点：
- SEO问题没有html抓不到什么；
- 刚开始的时候加载可能慢很多；
- 用户操作需要写逻辑，前进、后退等；
- 页面复杂度提高很多，复杂逻辑难度成倍；

因此，当我们既要使用SPA的开发模式，又要去兼容此模式缺点的时候，Next就是一个优秀的方案。

## 从零快速搭建Next框架教程

### 技术栈为当前最新
- next 6.1.1
- react 16.4.2
- react-dom 16.4.2

### 目录结构
``` js
- react-next-fast/         # 项目名称
  - components/             # 组件目录
    Hello.js
    Layout.js
  - pages/                  # 本地静态页面入口
    - about/                # 模块子目录，路由会相应匹配
        index.js            # /about
        contact.js          # /about/contact
    index.js                # 首页
    test.js                 # /test
  - static/                 # 静态资源存放目录
    - css/                  # 样式表目录
        index.less
    + img/                  # 图片目录
  next.config.js            # next配置文件
  package.json              # 项目配置
  README.md                 # 项目说明
```

### init项目
1. Install Next以及React相关
``` bash
npm install --save next
```
并且在package.json添加script如下：
``` bash
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

2. 创建pages目录和index.js文件
根据Next的规范约定，所有的页面都需要放在pages文件夹，因此我们首先先创建一个pages文件夹并在该文件夹下创建第一个页面index。

``` bash
mkdir pages
cd pages
touch index.js
```
编写/pages/index.js
``` js
export default () => (
    <div className="example">
        <h1>Hello Next.js</h1>
    </div>
)
```
运行npm run dev，在浏览器中打开 localhost:3000，就可以看到 Hello Next.js

### Next自带路由的使用
1. 在pages文件夹内再创建一个test.js文件并进行编写
``` js
export default () => (
    <h1>this is test page</h1>
)
```
在浏览器中打开 localhost:3000/test，就可以看到 this is test page

2. 再次打开index.js并且修改为如下内容：
``` js
import Link from 'next/link'

export default () => (
    <div className="example">
        <h1>Hello Next.js</h1>
        <p>Menu</p>
        <ul className="menu">
            <li><Link href="/test"><a>Test</a></Link></li>
        </ul>
    </div>
)
```
打开 localhost:3000，就可以看到页面中多了一个Test的a链接，点击页面就会跳转到 localhost:3000/test

3. 接着我们在pages/下建立about文件夹，并且创建index.js和contact.js两个文件

index.js
``` js
export default () => (
    <div>
        <h1>This is the about page</h1>
    </div>
)
```
contact.js
``` js
export default () => (
    <div>
        <h1>This is the contact page</h1>
    </div>
)
```
分别打开 localhost:3000/about 和 localhost:3000/about/contact 我们会相应的看到两个页面，因此我们会发现，pages文件的目录结构即是页面url的路径，pages本身就是根目录。

### Next如何添加样式
1. 在每一个模块中添加样式：
``` bash
<style jsx>{`
    .red {color:#f00;}
`}</style>
```

2. 如果要想使用'.css','.less','.sass'或者'.styl'文件，Next官网也同样给到了相应的方案：
- [@zeit/next-css](https://github.com/zeit/next-plugins/tree/master/packages/next-css)
- [@zeit/next-sass](https://github.com/zeit/next-plugins/tree/master/packages/next-sass)
- [@zeit/next-less](https://github.com/zeit/next-plugins/tree/master/packages/next-less)
- [@zeit/next-stylus](https://github.com/zeit/next-plugins/tree/master/packages/next-stylus)

本Demo使用的是less的方案，其他方案雷同。

在pages中添加_document.js文件并编辑：
``` js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no minimal-ui" />
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
```

同时创建static目录，并且添加index.less文件进行编辑，最后在pages/index.js中引用
``` js
import Link from 'next/link'
import '../static/index.less'

export default () => (
    <div className="example">
        <h1>Hello Next.js</h1>
        <p>Menu</p>
        <ul className="menu">
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/about/contact"><a>Contact</a></Link></li>
            <li><Link href="/test"><a>Test</a></Link></li>
        </ul>
    </div>
)
```
就可以看到，页面的样式会根据index.less的修改进行改变，这样我们就可以去使用less了。


## 运行本Demo
clone到本地，安装并运行。
``` bash
git clone git@github.com:xiqe/react-next-fast.git
npm install
npm run dev     #访问本地localhost:3000
npm run build   #创建静态页面
```






