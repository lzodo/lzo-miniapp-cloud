// 小程序的混入 behavior 定义，到组件中  import 导入,behaviors: [counterBehavior] 使用
export const counterBehavior = Behavior({
    data:{
        mixinsCount:0,
    },
    methods:{
        increment(){
            this.setData({
                mixinsCount:this.data.mixinsCount + 1
            })
        }
    }
})