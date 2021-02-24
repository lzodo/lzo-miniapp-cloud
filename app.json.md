ctrl+r 刷新
```javascript
//全局
{
    "pages": [
    	"pages/index/index",
    	"pages/logs/logs",
    	"pages/list/list"
  	],
    "window": { //沉浸式导航（手机上信号栏颜色会跟着变化）
    	"backgroundTextStyle": "light",
      	"navigationBarBackgroundColor": "#cff",
        "navigationBarTitleText": "Weixin",
        "navigationBarTextStyle": "black" //文字颜色只能是black|white
	},
	"tabBar": {
		"color":"#bfbfbf",
    	"selectedColor":"#0faeff",
		"list": [ //3-5个
			{
				"pagePath": "pages/home/home",
				"text": "首页",
				"iconPath": "/static/images/home.png",
				"selectedIconPath": "/static/images/home-active.png"
			},
			{
				"pagePath": "pages/menu/menu",
				"text": "菜单",
				"iconPath": "/static/images/collect.png",
				"selectedIconPath": "/static/images/collect-active.png"
			}
	    ]
	},
	"usingComponents": { //引入vnat ui 成功构建npm后产生 miniprogram_npm 
		"van-button": "miniprogram_npm/vant-weapp/button/index"
	},
  	"style": "v1", //weui版本
    "sitemapLocation": "sitemap.json"
}


//页面内
{
	"usingComponents": { //引入组件
		"my-banner":"/cpmponents/banner/banner"
	},
	"navigationStyle": "custom", //去掉头部导航栏
	"component":true, //设置当前页面为组件,不作为组件就不需要
}


// package-lock作用
其实用一句话来概括很简单，就是锁定安装时的包的版本号，并且需要上传到git，以保证其他人在npm install时大家的依赖能保证一致
https://www.bilibili.com/video/BV19r4y1N7Br?p=37&spm_id_from=pageDriver 跳了

https://www.bilibili.com/video/BV19r4y1N7Br?p=69&spm_id_from=pageDriver

https://www.jisuapi.com/
```
