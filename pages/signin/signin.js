// pages/signin/signin.js
// wx.cloud.init()
const db = wx.cloud.database()
import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog'
import {
    getPicFromCenavm
} from '../../utils/tools'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        username: "",
        pwd: ""
    },
    userFaceSignIn() {
        let ctx = wx.createCameraContext();
        getPicFromCenavm(ctx).then((data) => {
            console.log(data)
            db.collection('faceusers').where({
                openId: wx.getStorageSync('openId')
            }).get({
                success: function (res) {
                    console.log(res);
                    //把注册的照片与刚拍的进行通过第三方接口进行对比
                    //返回一个相似度，如果相似度大于你设置的值代表成功
                    //https://www.bilibili.com/video/BV1V7411Q7tf?t=13
                }
            })

        })
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