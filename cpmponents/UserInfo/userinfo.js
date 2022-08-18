// cpmponents/UserInfo/userinfo.js
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
        },
        getUserInfo(){
             // 查看是否授权
             wx.getSetting({
                success(res) {
                    console.log(res,'getSetting')
                    if (res.authSetting['scope.userInfo']) {
                        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，其他信息基本不让获取了
                        // wx.getUserInfo({ // 获取到的信息是空的 换 getUserProfile
                        wx.getUserProfile({ 
                            desc: '用于完善会员资料',
                            success: function (res) {
                                console.log(res.userInfo)
                            },
                            fail(err){
                                console.log(err,'getUserProfile err');
                            }
                        })
                    }
                },
                fail(err){
                    console.log(err,333)
                }
            })
        }
    }
})