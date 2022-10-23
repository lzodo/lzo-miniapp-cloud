// pages/coderwhy/coderwhy.js

// 实例化页面实例
Page({
    // data 直接对象储存数据（一般页面固定数据） ，调试器 AppData可以时时监控数据变化 
    data: { 
        msg:'message',
        list:['1','2','3'],
        count:0,
    },

    // 什么周期函数，页面什么周期监听页面加载
    onLoad(){ console.log('Page 的 onload 页面加载') },
    onShow(){ console.log('Page 的 onShow 页面展示') },
    onReady(){ console.log('Page 的 onReady webview线程拿到onload的数据后第一次渲染完成') },
    onHide(){ console.log('Page 的 onHide 页面切换到后台') },
    onShow(){ console.log('Page 的 onShow 页面展示') },
    onUnload(){ console.log('Page 的 onUnload 页面卸载') },

    // 页面方法直接写，组件中才要写到methods中
    addevent(){ 
        // this.data.count++; 可以改，当无法同步到页面上
        this.setData({
            count: this.data.count + 1
        })
    },
    // 普通事件监听
    pageEventFunction(){

    },

    // 下拉监听
    onPullDownRefresh(){
        console.log("用户下拉操作")
        setTimeout(()=>{
            wx.stopPullDownRefresh({
                success:(res)=>{
                    console.log("下拉操作完成")
                }
            })
        },1000)
    },

    // 上拉到底
    onReachBottom(){
        console.log('到底了')
    },

    // 页面滚动
    onPageScroll(event){
        console.log(event)
    }
})