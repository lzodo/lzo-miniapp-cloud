// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV,
})

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext();
    const openid = wxContext.OPENID;
    let {
        resultJSON,
        resultJSONSignature
    } = event;

    try {
        const result = await cloud.openapi.soter.verifySignature({
            openid,
            "jsonString": resultJSON,
            "jsonSignature": resultJSONSignature
        })
        return result
    } catch (err) {
        return err
    }
    // return {
    //     event,
    //     openid: wxContext.OPENID,
    //     appid: wxContext.APPID,
    //     unionid: wxContext.UNIONID,
    // }
}