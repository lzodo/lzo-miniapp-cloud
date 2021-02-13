
var app = getApp()
var API = require('../../utils/api.js')

Component({ //差异 1
    /**
   * 组件的属性列表
   */
    properties: {
        swiperArr: {
            type: Array,
            value: [] //默认值
        }
    },
    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500
    },
    methods: { //差异2 方法写在methods中
        test() {
            console.log(this.data.duration)
        }
    },
    lifetimes: {
        // 组件的生命周期函数，用于声明组件的生命周期
        attached: function () {
            console.log(1)
        },
        ready: function () {
            console.log(2)
            this.test()
            this.setData({
                autoplay: true
            })
        },
        moved: function () {
            console.log(3)
        },
        detached: function () {
            console.log(4)
        },
    },
    pageLifetimes: {
        // 组件所在页面的生命周期函数
        show: function () {
        },
        hide: function () {}
    },
})

