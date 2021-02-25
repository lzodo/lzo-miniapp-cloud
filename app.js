// app.js

App({
  onLaunch() {
    //云配置初始化
    if (!wx.cloud) {
      console.log("版本低")
    } else {
      wx.cloud.init({
        env: "lzx-student-71zol",
        traceUser: true
      })
    }


    this.loginVis();

    console.log(2)



    // 登录

    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  loginVis() {
      const db = wx.cloud.database()
      // 判断用户登录情况
      let userInfo = wx.getStorageSync('userInfo');
      let openId = false;
      if (userInfo) {
        openId = JSON.parse(userInfo).openId
      } else {
        openId = false
      }


      if (!openId) {
        wx.cloud.callFunction({
          name: 'getUserInfo',
          data: {}
        }).then(res => {
          wx.setStorageSync('openId', res.result.openid);
          db.collection('users').where({
            openId: res.result.openid
          }).get().then((userdata) => {
            if (userdata.data.length > 0) {
              wx.navigateTo({
                url: '/pages/signin/signin'
              });
              console.log(1)
            } else {
              wx.navigateTo({
                url: '/pages/signup/signup'
              });
              console.log(1)
            }
          })
        })
      }
  },
  globalData: {
    userInfo: null
  }
})