// pages/signin/signin.js
wx.cloud.init()
import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        username: "",
        pwd: ""
    },
    userSignIn() {
        if (!this.data.username || !this.data.pwd) {
            Dialog.alert({
                message: '请输入用户名或密码',
            }).then(() => {
                // on close
            });
        }

        wx.cloud.callFunction({
            name: 'cloudLogin',
            data: {
                "action": "signin",
            }
        }).then(res => {
            console.log(res.result.event)
        })
    },
    userSignUp() {
        wx.redirectTo({
          url: '/pages/signup/signup',
        })
    },
})