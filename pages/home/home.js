var app = getApp()
var API = require('../../utils/api.js')
Page({

    data: {
        swiperArr: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    },
    
    onLoad: function () {
        var that = this
        // 使用 Mock
        API.ajax({count:5}, function (res) {
            //这里既可以获取模拟的res
            console.log(res)
            that.setData({
                swiperArr: res.data
            })
        });

        console.log(this.data.swiperArr)
    }
})