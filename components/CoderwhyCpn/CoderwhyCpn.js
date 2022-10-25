// components/CoderwhyCpn/CoderwhyCpn.js
Component({
    /**
     * 组件的属性列表(类似于vue的prop，是外部传递进来的数据)
     */
    properties: { 
        title:{
            type:String, //null 不限制类型 
            value:"默认标题"
        }
    },

     /**
     * 接收外部的class
     */
    externalClasses:['info'], // 接收外面传进来的累

    /**
     * 组件的初始数据，组件自己的数据
     */
    data: {
        // title: " ----组件标题---",
    },

    /**
     * 组件的方法列表
     */
    methods: {
        cpmClick(){
            console.log("传出数据到外部")
            this.triggerEvent("titleclick",'datastrval')
        },
    }
})
