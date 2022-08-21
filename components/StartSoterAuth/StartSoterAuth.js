// components/StartSoterAuth/StartSoterAuth.js
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

    },

    /**
     * 组件的方法列表
     */
    methods: {
        visSystem() {
            let that = this;
            // 判断手机支持的生物认证
            wx.checkIsSupportSoterAuthentication({
                success(res) {
                    // wx.showToast({
                    //     title: `设备支持 ${JSON.stringify(res.supportMode)}`,
                    //     icon: 'none'
                    // })
                    console.log(`设备支持 ${JSON.stringify(res.supportMode)}`)
                    if (res.supportMode.includes("fingerPrint")) {
                        console.log("如果支持指纹验证");
                        that.phoneRecord();
                    }
                    // res.supportMode = [] 不具备任何被 SOTER 支持的生物识别方式
                    // res.supportMode = ['fingerPrint'] 只支持指纹识别
                    // res.supportMode = ['fingerPrint', 'facial'] 支持指纹识别和人脸识别
                },
                fail(err) {
                    wx.showToast({
                        title: JSON.stringify(err.errMsg),
                        icon: 'none'
                    })
                }
            })
        },
        // 判断设备是否已有录好的指纹
        phoneRecord() {
            let that = this;
            wx.checkIsSoterEnrolledInDevice({
                checkAuthMode: 'fingerPrint',
                success(res) {
                    if (res.isEnrolled) {
                        console.log("系统存在指纹记录") // 查询是否已经录入信息
                        that.fingerPrint()
                    } else {
                        wx.showToast({
                            title: '系统不存在指纹记录',
                            icon: 'none'
                        })
                    }
                },
                fail(err) {
                    console.log(err)
                }
            })
        },
        fingerPrint() {
            // startSoterAuthentication 得到结果后 云函数 verifySignature 云调用
            // 生物认真，requestAuthModes 认证方式 fingerPrint 代表认证指纹
            let that = this;
            wx.startSoterAuthentication({
                requestAuthModes: ['fingerPrint'],
                challenge: '123456', // 为此次生物鉴权准备的用于签名的字符串关键识别信息
                authContent: '请用指纹解锁',
                success(res) {
                    console.log(res);
                    let {
                        resultJSON,
                        resultJSONSignature
                    } = res;
                    // 通过云函数 SOTER 生物认证秘钥签名验证
                    that.callSoterFunction(resultJSON, resultJSONSignature);
                    // wx.showToast({
                    //     title: JSON.stringify(res),
                    //     icon: 'none'
                    // })
                },
                fail(res) {
                    wx.showToast({
                        title: JSON.stringify(res),
                        icon: 'none',
                        duration: 5000
                    })
                },
            })
        },
        callSoterFunction(resultJSON, resultJSONSignature) {
            // 需要右键云函数 soter 上传并部署所有文件，和 云端安装依赖
            // 如果没有部署选项 ，云函数目录下安装 npm install --save wx-server-sdk@latest
            wx.cloud.callFunction({
                name: 'soter',
                data: {
                    resultJSON,
                    resultJSONSignature
                }
            }).then(res => {
                let {
                    isOk
                } = res.result;
                console.log(res, 333);
                if (isOk) {
                    wx.showToast({
                        title: "云函数 生物认证秘钥签名成功",
                        icon: 'none',
                        duration: 5000
                    })
                }
            })
        }
    }
})