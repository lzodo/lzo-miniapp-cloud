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
            {code: 4,name: "scroll-view"}
        ],
        chooseUrl:'',
    },
    lifetimes: {
        
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onShareAppMessage(){ // Page的方法， 组件中这样好像无效
            console.log('111111111');
            return {
                title:"xxxxxxx",
                path:"/pages/home/home",
                imageUrl:"/static/images/about.png"
            }
        },
        toBottomOrRight(){
            console.log('到最低部或右边了')
        },
        toTopOrLeft(){
            console.log('到最顶部或左边了');
        },
        onScroll(event){
            // console.log('发生了滚动')
        },
        getUserInfo1(event){
            console.log(event) // 信息不忘在
        },
        getUserInfo2(event){
            // 调用api 获取用户信息,需要用户授权
            // wx.getUserProfile({
            //   desc: 'desc',
            //   success:(res)=>{
            //       console.log(res)
            //   }
            // })
            wx.getUserProfile({
              desc: 'desc',
            }).then((res)=>{
                console.log(res)
            })
        },
        selectImage(){
            // 上传图片 视频等媒体文件
            wx.chooseMedia({
              camera: 'image',
            }).then((res)=>{
                console.log(res);
                this.setData({
                    chooseUrl:res.tempFiles[0].tempFilePath
                })
            })
        },
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
       
    },
})
