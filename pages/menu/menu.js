var API = require('../../utils/api.js')
// 还要.json引入 .wxml 引入标签
import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog';
Page({
    data: {
        activecode: -1,
        show: false,
        menuList: [{
                code: 1,
                name: "用户信息"
            },
            {
                code: 2,
                name: "拨号"
            },
            {
                code: 3,
                name: "通用蓝牙"
            },
            {
                code: 4,
                name: "扫码"
            },
            {
                code: 5,
                name: "生物认证"
            },
            {
                code: 6,
                name: "经纬度"
            },
            {
                code: 7,
                name: "1"
            },
            {
                code: 8,
                name: "1"
            },
            {
                code: 9,
                name: "1"
            },
        ],
    },
    onLoad: function () {

    },
    showPopup() {
        this.setData({
            show: true
        });
    },

    onClose() {
        this.setData({
            show: false
        });
    },
    callPhone() {
        wx.makePhoneCall({
            phoneNumber: '18060849356', //仅为示例，并非真实的电话号码
            success: (res) => {
                console.log(res)
            },
            fail: (err) => {
                console.log(err)
            }
        })
    },
    scanCode() {
        wx.scanCode({
            // onlyFromCamera: true, // 只允许从相机扫码
            success: (res) => {
                console.log(res.result)
                Dialog.alert({
                    message: res.result,
                }).then(() => {});
            },
            fail: (err) => {
                console.log(err)
            }
        })
    },
    execCmd(event) {
        this.setData({
            activecode: event.currentTarget.dataset.code,
            show: true
        })
        switch (event.currentTarget.dataset.code) {
            case 2:
                this.callPhone()
                break;
            case 4:
                this.scanCode()
                break;
            default:
                console.log(event.currentTarget.dataset)
                break;
        }
    },
})