// components/OtherGroup/othergroup.js
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
        activecode: -1,
        menuList: [
            {
                code: 1,
                name: "长按复制"
            },
        ],
    },
    lifetimes: {

    },
    /**
     * 组件的方法列表
     */
    methods: {
        execCmd(event) {
            this.setData({
                activecode: event.currentTarget.dataset.code,
            })
            switch (event.currentTarget.dataset.code) {
                default:
                    console.log(event.currentTarget.dataset)
                    break;
            }
        },
    }
})
