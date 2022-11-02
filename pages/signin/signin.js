// pages/signin/signin.js
// wx.cloud.init()
// const db = wx.cloud.database()
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
    onLoad() {
        // 绑定分享参数
        wx.onCopyUrl(() => {
            return { query: 'a=1&b=2' }
        })
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

        // wx.cloud.callFunction({
        //     name: 'cloudLogin',
        //     data: {
        //         "action": "signin",
        //         "username":this.data.username,
        //         "pwd":this.data.pwd,
        //     }
        // }).then(res => {
        //     console.log(res)
        //     if(res.result.data.length>0){
        //         wx.setStorageSync('userInfo',JSON.stringify(res.result.data[0]));
        //         wx.switchTab({
        //             url: '/pages/home/home',
        //             success: function () {   // 有时跳转不加载钩子函数，获取到页面后收到加载
        //                 // console.log(getCurrentPages(),555555)
        //                 // console.log(getCurrentPages().pop(),4444)
        //                 var page = getCurrentPages().pop();
        //                 if (page == undefined || page == null) return;
        //                 page.onLoad();
        //             }
        //         });
        //     }
        // })
    },
    userSignUp() {
        wx.redirectTo({
            url: '/pages/signup/signup',
        })
    },
})