var API = require('../../utils/api.js')
Page({
    data: {
        swiperArr: [1,2,3]
    },
    onLoad: function () {
        var that = this
        API.ajax({count:3}, function (res) {
            console.log(res)
            that.setData({
                swiperArr: res.data
            })
        });

        console.log(this.data.swiperArr)
    }
})