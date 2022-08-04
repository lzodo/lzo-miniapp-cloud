var API = require('../../utils/api.js')
// Page({
//     data: {
//         swiperArr: [1,2,3]
//     },
//     onLoad: function () {
//         var that = this
//         API.ajax({count:3}, function (res) {
//             console.log(res)
//             that.setData({
//                 swiperArr: res.data
//             })
//         });

//         console.log(this.data.swiperArr)
//     }
// })
Component({
  data: {
    fee: 1,             // 支付金额，单位为分
    paymentArgs: 'A', // 将传递到功能页函数的自定义参数
    currencyType: 'USD', // 货币符号，页面显示货币简写 US$ 
    version: 'develop', // 上线时，version 应改为 "release"，并确保插件所有者小程序已经发布
  },
  methods: {
    handlePay() {
        const { fee, paymentArgs, currencyType, version } = this.data
        wx.requestPluginPayment({
            fee,
            paymentArgs,
            currencyType,
            version,
            success(r) {
                console.log(r)
            },
            fail(e) {
                console.error(e)
            }
        })
    }
  }
})