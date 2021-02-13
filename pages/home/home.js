var app = getApp()
var API = require('../../utils/api.js')
Page({

    data: {
        background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500
    },
    onLoad: function () {
        var that = this
        // 使用 Mock
        API.ajax('', function (res) {
            //这里既可以获取模拟的res
            console.log(res)
            that.setData({
                background: res.data
            })
        });

        console.log(this.data.background)
    }
})