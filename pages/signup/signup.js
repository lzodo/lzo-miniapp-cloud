// pages/signup/signup.js
wx.cloud.init()
import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog'

Page({
    data: {
        username: "",
        pwd: ""
    },
    userSignUp() {
        if (!this.data.username || !this.data.pwd) {
            Dialog.alert({
                message: '请输入用户名或密码',
            })
            return
        }

        wx.cloud.callFunction({
            name: 'cloudLogins',
            data: {
                "action": "signup",
                "username":this.data.username,
                "pwd":this.data.pwd,
            }
        }).then(res => {
            console.log(res.result)
        })
    },
})