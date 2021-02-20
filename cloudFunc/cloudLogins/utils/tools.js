// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const saltRounds = 10;
// const keys = "fdsajfdlasjfdlsajfdlsafjfdlafdsaa";

// //bcrypt 加密
// exports.hash = (ps) => {
//     ps = ps + "";
//     return bcrypt.hash(ps, saltRounds);
// };

// //bcrypt 验证密码
// exports.compare = (ps, pshash) => {
//     return bcrypt.compare(ps, pshash);
// };

// //jwt 对称加密
// exports.jwtSign = (playload) => {
//     return jwt.sign(playload, keys);
// };
// exports.jwtVerify = (token) => {
//     if (token != "null"){
//         return jwt.verify(token, keys);
//     }else{
//         return {}
//     }
// };