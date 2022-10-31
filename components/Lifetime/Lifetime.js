// components/Lifetime/Lifetime.js
Component({
    lifetimes:{
        created() { // created
            console.log("组件被创建created")
        },
        attached() { // mounted
            console.log("组件被添加到组件树种attached")
        },
        ready() {
            console.log("在组件视图层布局完成 ready")
        },
        detached() { 
            console.log("组件从组件树种被移除detached")
        },
        moved(){}, // 组件实例被移动到家节点树的其他位置
        error(){} // 组件方法排除错误时候  v2.4.1
    },

    /**
     * 引入组件的页面的生命周期
     */
    pageLifetimes:{
        show(){}
    },

})
