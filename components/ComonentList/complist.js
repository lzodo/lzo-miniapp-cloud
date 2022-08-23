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
                name: "button"
            },
            {code: 2,name: "rich-text"},
            {code: 3,name: "image"},
        ],
    },
    lifetimes: {

    },
    /**
     * 组件的方法列表
     */
    methods: {
        handleContact(e){
            console.log(e,'handleContact')
        },
        handleGetPhoneNumber(e){
            console.log(e,'handleGetPhoneNumber')
        },
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
