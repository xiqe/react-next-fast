# Next.js快速使用的小Demo
Next.js是提供基于React的SSR框架。解决SPA的一些缺点。

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


## 使用Demo

``` bash
git clone git@github.com:xiqe/react-next-fast.git
npm install
npm run dev     #访问本地localhost:3000
npm run build   #创建静态页面
```






