// cpmponents/Lonlat/Lonlat.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        init(){
        }
    },
    lifetimes: {
        // 组件的生命周期函数，用于声明组件的生命周期
        attached: function () {
            console.log(1)
        },
        ready: function () {
            this.init()
        },
        moved: function () {
            console.log(3)
        },
        detached: function () {
            console.log(4)
        },
    }
})