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


## Media 媒体查询
为了解决百分比布局带来的宽屏视觉上的缺点，引入了media的方案，将设备按分辨率分成几个标准化的区间，视觉根据区间设计出2-3个方案(方案数量决定了精细化的程度)，前端根据media来区分在某个分辨率区间读取相应的css方案。

缺点是需要设计和前端同时多出多个方案。

![Alt text](/image/auto-02.png)

代码模式：
``` bash
html{font-size:10px}
@media screen and (min-width:320px) and (max-width:480px){html{font-size:12px}}
@media screen and (min-width:480px) and (max-width:640px){html{font-size:14px}}
@media screen and (min-width:640px){html{font-size:16px}}
```


## rem布局（主流解决方案Flexible）

根据标准视觉稿，先作出一套以rem为单位的页面，然后通过在不同分辨率的情况下，用js或media去改变根html的font-size的值，从而到达页面的自适应效果。

Flexible作为比较知名的成熟方案，也已经出现很久了，技术原理主要就是为了能让页面更好的适配各种不同的终端，通过Hack手段来根据设备的dpr值相应改变<meta>标签中viewport的值，从而让页面达么缩放的效果，也变相的实现页面的适配功能。

``` js
<!-- dpr = 1--> <meta name="viewport" content="initial-scale=scale,maximum-scale=scale,minimum-scale=scale,user-scalable=no">
<!-- dpr = 2--> <meta name="viewport" content="initial-scale=0.5,maximum-scale=0.5,minimum-scale=0.5,user-scalable=no">
<!-- dpr = 3--> <meta name="viewport" content="initial-scale=0.3333333333,maximum-scale=0.3333333333,minimum-scale=0.3333333333,user-scalable=no">
```

Flexible技术原理：

- 根据dpr的值来修改viewport实现1px的线

- 根据dpr的值来修改html的font-size，从而使用rem实现等比缩

- 使用Hack手段用rem模拟vw特性

（效果图见Viewport）


## Viewport
Viewport相关的单位有四个，分别为vw、vh、vmin和vmax。

vw：是Viewport's width的简写,1vw等于window.innerWidth的1%。

vh：和vw类似，是Viewport's height的简写，1vh等于window.innerHeihgt的1%。

vmin：vmin的值是当前vw和vh中较小的值。

vmax：vmax的值是当前vw和vh中较大的值。

在这个方案中，我们用vw来代替rem的缩放方案，就可以将页面做到任意环境下的同等自适应缩放。

![Alt text](/image/auto-03.png)


## 总结
最后想要说的是，以上几个方案并非唯一绝对的方案，而是可以根据自身业务产品需求，进行有效组合取舍，找到适合自己项目的才是真正的最佳实践。

本文Demo使用了Viewport的方式来进行布局，并且通过media来实现web端在2k，4k物理像素屏（例如大屏电视）下的自适应兼容，利用高度来区分电脑屏和电视屏（高度仅测试，无实际意义）。为实现一套代码多端兼容的简单Demo。





