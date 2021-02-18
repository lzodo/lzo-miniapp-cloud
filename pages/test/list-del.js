// pages/list/list.js
Page({
    data: {
        msg:'列表',
        flag:false,
        value:"",
        length:3,
        array:[1,2,3,4],
        showHide:true
    },
    onClickBtn(){ //小程序直接写方法名
        //修改数据必须使用setData方法，与react类似
        this.setData({
            msg:'修改列表',
            value:"",
        })
    },

    onClickBtn2(){
        console.log(this.data.msg)
        this.setData({
            flag:!this.data.flag
        })
    },
    goNotTabBat:function(){
        // wx.navigateTo({
        //     url: '/pages/new/new'
        // });
        wx.redirectTo({ //替换到新页面 无返回键
            url: '/pages/new/new'
        });
    },
    goTabBat:function(){
        wx.switchTab({
            url: '/pages/menu/menu'
        });
    },
    
})