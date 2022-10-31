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
        info:{
            name:"123"
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        cpmClick(){
            console.log("传出数据到外部")
            this.triggerEvent("titleclick",'datastrval')
        },
        CpnFunc(){
            console.log("被人外面调用了")
        },
    },

     /**
     * 组件定义一下额外选项
     */
    options:{

    },

    /**
     * 组件的生命周期
     */
    lifetimes:{
        created() {},
        attached() {},
        ready() {},
        detached() {},
        moved(){}, // 组件实例被移动到家节点树的其他位置
        error(){} // 组件方法排除错误时候  v2.4.1
    },
     /**
     * 引入组件的页面的生命周期
     */
    pageLifetimes:{
        show(){}
    },

    /**
     * 监听器，监听某个属性的改变
     */
    observers:{
        "info.name":function(newVal,oldVal){
            console.log(newVal)
        }
    }
})
