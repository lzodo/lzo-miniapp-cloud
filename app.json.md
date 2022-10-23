[全局配置文档]("https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html")
```javascript
let json = {
    // 普通编译模式，最上面的为首页
    // 测试新页面，没在tabbar的，手动添加编译模式，设置位调试页面
    "pages": [ 
        "pages/menu/menu",
        "pages/home/home"
    ],
    "window": {
        "navigationBarBackgroundColor": "#fa6803", // 16进制，设置导航栏(包顶部)背景色 
        "navigationBarTitleText": "微信小程序",  // 设置导航栏标题 
        "navigationBarTextStyle": "white", // 设置导航栏标题颜色(white/black)
        // 全局下拉刷新，页面 Page,onPullDownRefresh(){} 调用接口 ， wx.stopPullDownRefresh({success:()=>{成功回调可以有可无}}) 关闭 
        "enablePullDownRefresh":true, 
        "backgroundColor":"#123", // 设置下拉刷新的窗口背景
        "backgroundTextStyle": "light", //  下拉 loading 的样式，仅支持 dark / light
        // 全局上拉触底, 默认就有的，页面 Page.onReachBottom 监听是否滚动到底部
        "onReachBottomDistance":50, // 页面上拉触底事件触发时距页面底部距离，单位为px。
    },
    "tabBar": { // 顶部 tabbar 不会有ico
        "color": "#bfbfbf",
        "selectedColor": "#fa6803",
        "list": [ // 2 - 5 项
            {
                "pagePath": "pages/home/home",
                "text": "首页",
                "iconPath": "/static/images/main.png",
                "selectedIconPath": "/static/images/main-active.png"
            },
        ]
    },
    "usingComponents": { //引入vnat ui 成功构建npm后产生 miniprogram_npm
        "van-button": "miniprogram_npm/vant-weapp/button/index",
        "van-dialog": "miniprogram_npm/vant-weapp/dialog/index"
    },
    "style":"v2", // 基础组件库样式
    "sitemapLocation": "sitemap.json" // 指定 sitemap.json 文件位置
}
```
//页面内
```javascript
{ // 属性与全局的大致相同
	"usingComponents": { //引入组件
		"my-banner":"/components/banner/banner"
	},
	"navigationStyle": "custom", //去掉头部导航栏
	"component":true, //设置当前页面为组件,不作为组件就不需要 
}
```


// package-lock作用
其实用一句话来概括很简单，就是锁定安装时的包的版本号，并且需要上传到git，以保证其他人在npm install时大家的依赖能保证一致
https://www.bilibili.com/video/BV19r4y1N7Br?p=37&spm_id_from=pageDriver 跳了

https://www.bilibili.com/video/BV19r4y1N7Br?p=69&spm_id_from=pageDriver

https://www.jisuapi.com/
```