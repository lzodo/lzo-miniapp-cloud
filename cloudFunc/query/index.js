// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
//客户端调用需要需要加wx. ,这边不要加wx.

// 云函数入口函数
exports.main = async (event, context) => {
    // 所以云函数都必须有返回值
    return db.collection('users').where({name:new RegExp(event.data_name)}).get().then(res => {
        return res
    })


    // const wxContext = cloud.getWXContext()
    // return {
    //     event,
    //     openid: wxContext.OPENID,
    //     appid: wxContext.APPID,
    //     unionid: wxContext.UNIONID,
    // }
}