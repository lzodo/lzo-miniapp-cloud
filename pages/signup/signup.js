// pages/signup/signup.js
// wx.cloud.init()
import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog';
import {
    getPicFromCenavm
} from '../../utils/tools'

Page({
    data: {
        username: "",
        pwd: "",

        sms: "",
        face_username: "",
        phone: "",
        faceSignup: false,
        photoPath: ""
    },
    gitVisCode(option) {
        let temp = Math.floor(Math.random() * 10000) + "";
        for (let i = 0; i < 4 - temp.length; i++) {
            temp = "0" + temp
        }
        console.log(temp);
        /**
         * 短信验证码
         * 1. 生成指定位数随机数，保存
         * 2. 通过各个平台的短信接口(如阿里云、极速数据，等第三方平台) 发送短信
         * 3. 用户收到短信后输入，失去焦点时或提交时判断是否相等
         */
    },
    faceSignupSubmit(option) {
        if (this.data.face_username && this.data.phone && this.data.photoPath) {
            wx.cloud.callFunction({
                name: 'cloudLogin',
                data: {
                    "action": "facesignup",
                    "face_username": this.data.face_username,
                    "phone": this.data.phone,
                    "photoPath": this.data.photoPath,
                    "openId": wx.getStorageSync('openId')
                }
            }).then(res => {
                console.log(res)
                wx.navigateTo({
                  url: '/pages/signin/signin',
                })
            })
        }
    },
    //获取照片
    getPicBase64() {
        let ctx = wx.createCameraContext();
        console.log(ctx);
        getPicFromCenavm(ctx).then((data) => {
            console.log(data)
            this.setData({
                photoPath: data,
                faceSignup: false
            })
        })
    },
    faceSignupChange(e) {
        console.log(e.detail.value)
    },
    userSignUp() {
        if (!this.data.username || !this.data.pwd) {
            Dialog.alert({
                message: '请输入用户名或密码',
            })
            return
        }

        wx.cloud.callFunction({
            name: 'cloudLogin',
            data: {
                "action": "signup",
                "username": this.data.username,
                "pwd": this.data.pwd,
                "openId": wx.getStorageSync('openId')
            }
        }).then(res => {
            console.log(res)
        })
    },
})