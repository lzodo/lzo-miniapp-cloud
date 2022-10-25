// pages/coderwhy/coderwhy.js

// 实例化页面实例
Page({
    // data 直接对象储存数据（一般页面固定数据） ，调试器 AppData可以时时监控数据变化 
    data: {
        msg: 'message',
        list: ['1', '2', '3'],
        count: 0,
    },

    // 什么周期函数，页面什么周期监听页面加载
    onLoad() { console.log('Page 的 onload 页面加载') },
    onShow() { console.log('Page 的 onShow 页面展示') },
    onReady() { console.log('Page 的 onReady webview线程拿到onload的数据后第一次渲染完成') },
    onHide() { console.log('Page 的 onHide 页面切换到后台') },
    onShow() { console.log('Page 的 onShow 页面展示') },
    onUnload() { console.log('Page 的 onUnload 页面卸载') },

    // 页面方法直接写，组件中才要写到methods中
    addevent() {
        // this.data.count++; 可以改，当无法同步到页面上
        this.setData({
            count: this.data.count + 1
        })
    },
    // 普通事件监听
    pageEventFunction() {

    },

    // 下拉监听
    onPullDownRefresh() {
        console.log("用户下拉操作")
        setTimeout(() => {
            wx.stopPullDownRefresh({
                success: (res) => {
                    console.log("下拉操作完成")
                }
            })
        }, 1000)
    },

    // 上拉到底
    onReachBottom() {
        console.log('到底了')
    },

    // 页面滚动
    onPageScroll(event) {
        console.log(event)
    },

    // bind 事件联系
    bindEvent(event) {
        /**
         * event.type 
         * event.timeStamp 事件生成事件
         * event.target 触发事件的组件的一些属性集合
         * event.currentTarget 绑定事件的  组件的一些属性集合 
         *      event.currentTarget.dataset.name 获取参数
         *      如果 绑定点击事件的组件 就是点击的组件，两个属性没区别
         *      如果 点击的组件，是绑定事件组件 内部的组件，那么 event.target 的属性就是内部盒子的信息
         * 
         * event.changedTouches （改变的触摸点信息）
         * event.touches （存在的触摸点信息）
         *      这两个属性一般是一样的
         *          在多指操作时不同(一开始两个手指触摸，这时是一样的，不放开又来三个手指触摸，这时changedTouches只有后面的三个手指信息)
         *                         (一开始两个手指，离开了一个手指，这时changedTouches)
         *     
         * mark 数据标记对象 
         */
        console.log(event);
    },

    // 获取组件中传出的数据
    cpntitleclick(event) {
        console.log("监听到组件标题点击事件，并传出数据" + event.detail)
    }
})