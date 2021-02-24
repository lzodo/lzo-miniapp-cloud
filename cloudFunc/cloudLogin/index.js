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
  let result = "";
  switch (event.action) {
    case "signup":
      result = _userSignUp(event);
      break;
    case "facesignup":
      result = _userFaceSignUp(event);
      break;
    case "signin":
      _userSignIn();
      break;
  }
  return result;
}

const _userSignIn = () => {}
const _userFaceSignUp = (event) => {
  return db.collection("faceusers").add({
    data: {
      face_username: event.face_username,
      phone: event.phone,
      photoPath: event.photoPath,
      openId: event.openId
    }
  })
}
const _userSignUp = (event) => {
  let hashpwd = hash(event.pwd);

  return db.collection("users").add({
    data: {
      username: event.username,
      pwd: hashpwd,
      openId: event.openId
    }
  })
}