
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
    lifetimes: { // lifetimes 外面的 created 会被里面的覆盖
        // 组件的生命周期函数，用于声明组件的生命周期
        created: function(){
            console.log("在组件实例刚刚被创建时执行")
        },
        attached: function () {
            console.log("在组件实例进入页面节点树时执行")
        },
        ready: function () {
            console.log("在组件在视图层布局完成后执行")
            this.test()
            this.setData({
                autoplay: true
            })
        },
        moved: function () {
            console.log("在组件实例被移动到节点树另一个位置时执行")
        },
        detached: function () {
            console.log("在组件实例被从页面节点树移除时执行")
        },
    },
    pageLifetimes: {
        // 组件所在页面的生命周期函数
        show: function () {
            console.log('组件中，页面展示')
        },
        hide: function () {
            console.log('组件中，页面隐藏')
        },
        resize: function () { },
    },
})

