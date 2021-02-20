// 云函数入口文件
const cloud = require("wx-server-sdk")
// const bcrypt = require("bcrypt")
// const { compare, hash } = require("./utils/tools")

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
    let result  = ""
    switch (event.action) {
        case "signup":
            // result = _userSignUp(event);
            result = 111
            break;
        case "signin":
            _userSignIn();
            break;
    }
    return result;
}

const _userSignIn = () => { }
const _userSignUp = (event) => {
    console.log('fdsfdsf')
    // let hashpwd = hash(event.pwd);

    // return db.collection("users").add({
    //     data: {
    //         username: event.username,
    //         pwd: hashpwd,
    //     }
    // }).then(res => {
    //     return res
    // })
    return "dd"
}