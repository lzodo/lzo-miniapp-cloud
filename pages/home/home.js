var app = getApp()
var API = require('../../utils/api.js')
Page({

    data: {
        swiperArr: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        hasOpenId: false,
        count:0
    },
    onShow(){},
    onHide(){},
    onUnload(){},
    onReady(){},
    onLoad: function () {
        var that = this;
        let userInfo = wx.getStorageSync('userInfo');
        console.log(userInfo,234444)
        if (userInfo) {
            let openId = JSON.parse(userInfo).openId

            that.setData({ // 给数据赋值
                hasOpenId: true,
                count:this.data.count+1
            })
        }
        // 使用 Mock
        API.ajax({
            count: 5
        }, function (res) {
            //这里既可以获取模拟的res
            console.log(res)
            that.setData({
                swiperArr: res.data
            })
        });

        console.log(this.data.swiperArr)
    }
})