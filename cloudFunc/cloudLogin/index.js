// 云函数入口文件
//npm install --save wx-server-sdk@latest 安装尽量用npm
const cloud = require("wx-server-sdk")
// const bcrypt = require("bcrypt") 云函数不支持
const {
  hash
} = require("./utils/tools")

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.action) {
    case "signup":
      return _userSignUp(event);
      break;
    case "signin":
      _userSignIn();
      break;
  }
}

const _userSignIn = () => { }
const _userSignUp = (event) => {
  let hashpwd = hash(event.pwd);
  return db.collection("users").add({
    data: {
      username: event.username,
      pwd: hashpwd,
    }
  })
}