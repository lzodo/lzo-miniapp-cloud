// pages/coderwhy/coderwhy.js

// 实例化页面实例
Page({
    data: { // 1、data 直接对象储存属性
        msg:'message',
        list:['1','2','3'],
        count:0,
    },
    addevent(){ // 页面方法直接写，组件中才要写到methods中
        // this.data.count++; 可以改，当无法同步到页面上
        this.setData({
            count: this.data.count + 1
        })
    },
})