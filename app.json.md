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
  	"style": "v1", //weui版本
    "sitemapLocation": "sitemap.json"
}


//页面内
{
	"usingComponents": {},
    "navigationStyle": "custom" //去掉导航栏
}
https://www.bilibili.com/video/BV19r4y1N7Br?p=22&spm_id_from=pageDriver
```
