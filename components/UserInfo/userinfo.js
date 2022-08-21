// components/UserInfo/userinfo.js
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
        userName: "",
        photo: ""
    },
    lifetimes: {
        attached: function () {
            this.init();
        },
    },

    /**
     * 组件的方法列表
     */
    methods: {
        init() {
            // wx.pluginLogin({ // 该接口仅在小程序插件中可调用
            //     success: res => {
            //         console.log(res,1);
            //     }
            // })

            // wx.login({
            //     success(res) {
            //         // 开发者需要在开发者服务器后台调用 auth.code2Session，使用 code 换取 openid、unionid、session_key 等信息
            //         console.log(res.code, 'login code'); // 得到code
            //         // 云开发的话 openid、unionid、appid 也可以通过云函数直接得到
            //     }
            // })
            wx.checkSession({
                success: res => {
                    console.log(res, 3);
                }
            })

            // 获取 APPID
            const accountInfo = wx.getAccountInfoSync(); // 正式版才可用
            console.log(accountInfo)
            console.log(accountInfo.miniProgram.appId) // 小程序 appId
            // console.log(accountInfo.plugin.appId) // 插件 appId
            // console.log(accountInfo.plugin.version)
        },
        // 用户信息
        getUserInfo() {
            let that = this;
            // 查看是否授权
            wx.getSetting({
                success(res) {
                    console.log(res, 'getSetting')
                    if (res.authSetting['scope.userInfo']) {
                        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，其他信息基本不让获取了
                        // wx.getUserInfo({ // 获取到的信息是空的 换 getUserProfile
                        wx.getUserProfile({
                            desc: '用于完善会员资料',
                            success: function (res) {
                                console.log(res.userInfo);
                                that.setData({
                                    userName: res.userInfo.nickName,
                                    photo: res.userInfo.avatarUrl
                                })
                            },
                            fail(err) {
                                console.log(err, 'getUserProfile err');
                            }
                        })
                    }
                },
                fail(err) {
                    console.log(err, 333)
                }
            })
        },
        // 授权用户 （如果用户之前已经同意授权，则不会出现弹窗，直接返回成功）
        authorize() {
            // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
            wx.getSetting({
                success(res) {
                    console.log(res)

                    // 如果授权列表没有 scope.record 权限
                    if (!res.authSetting['scope.record']) {
                        wx.authorize({ // 进行手动授权,通过 getSetting 获取
                            scope: 'scope.record',
                            success(res) {
                                // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                                wx.startRecord()
                                console.log(res)
                            },
                            fail(err) {
                                console.log(err);
                                wx.showToast({
                                    title: err,
                                    icon: 'none',
                                })
                            }
                        })
                    } else {
                        wx.showToast({
                            title: "scope.record 已经授权成功",
                            icon: 'none',
                            duration: 5000
                        })
                        console.log(res.authSetting)
                    }
                }
            })
        },
        // 小程序设置界面
        settingGUI() {
            wx.openSetting({
                success(res) {
                    console.log(res)
                    console.log(res.authSetting)
                    // res.authSetting = {
                    //   "scope.userInfo": true,
                    //   "scope.userLocation": true
                    // }
                }
            })
        },
        // 消息订阅
        subscriptionsSetting() {
            wx.getSetting({
                withSubscriptions: true, // 订阅消息设置, 就会有 subscriptionsSetting 属性
                success(res) {
                    // withSubscriptions 为true 
                    // mainSwitch 订阅消息总开关，true为开启，false为关闭
                    console.log(res.subscriptionsSetting);
                    if (res.subscriptionsSetting.mainSwitch) {
                        if (res.subscriptionsSetting.itemSettings) {
                            console.log(JSON.stringify(res.subscriptionsSetting.itemSettings))
                        }
                    } else {
                        console.log("订阅消息未开启")
                    }
                }
            })
        },
        // 用户地址
        getaddress() {
            wx.chooseAddress({
                success(res) {
                    console.log(res.userName)
                    console.log(res.postalCode)
                    console.log(res.provinceName)
                    console.log(res.cityName)
                    console.log(res.countyName)
                    console.log(res.detailInfo)
                    console.log(res.nationalCode)
                    console.log(res.telNumber)
                }
            })
        },
        wechatGroup() { //???
            wx.getGroupEnterInfo({
                success(res) {
                    console.log(res,111)
                    // res
                    // {
                    //     errMsg: 'getGroupEnterInfo:ok',
                    //     encryptedData: '',
                    //     iv: ''
                    // }
                },
                fail(err) {
                    console.log(err,222);
                }
            })
        },
    }
})