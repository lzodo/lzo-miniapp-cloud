let json = {
    "pages": [
        "pages/menu/menu",
        "pages/home/home",
        "pages/cloud/cloud",
        "pages/signin/signin",
        "pages/signup/signup",
        "pages/test/test",
        "pages/words/words",
        "components/banner/banner"
    ],
    "window": {
        "navigationBarBackgroundColor": "#fa6803", // 16进制，设置导航栏(包顶部)背景色 
        "navigationBarTitleText": "微信小程序",  // 设置导航栏标题 
        "navigationBarTextStyle": "white", // 设置导航栏标题颜色(white/black)
        // 全局下拉刷新，页面 Page,onPullDownRefresh(){} 调用接口 ， wx.stopPullDownRefresh() 关闭 
        "enablePullDownRefresh":true, 
        "backgroundColor":"#123", // 设置下拉刷新的窗口背景
        "backgroundTextStyle": "light", //  下拉 loading 的样式，仅支持 dark / light
        // 全局上拉触底, 页面 Page.onReachBottom 调用接口
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
            {
                "pagePath": "pages/menu/menu",
                "text": "菜单",
                "iconPath": "/static/images/menu.png",
                "selectedIconPath": "/static/images/menu-active.png"
            },
            {
                "pagePath": "pages/words/words",
                "text": "单词",
                "iconPath": "/static/images/word.png",
                "selectedIconPath": "/static/images/word-active.png"
            },
            {
                "pagePath": "pages/cloud/cloud",
                "text": "云服务",
                "iconPath": "/static/images/cloud.png",
                "selectedIconPath": "/static/images/cloud-active.png"
            }
        ]
    },
    "usingComponents": {
        "van-button": "miniprogram_npm/vant-weapp/button/index",
        "van-dialog": "miniprogram_npm/vant-weapp/dialog/index"
    },
    "style":"v2",
    "sitemapLocation": "sitemap.json"
}