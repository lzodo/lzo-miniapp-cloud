/**
 * 只能请求https类型的接口
 * 必须将接口的域名添加到信任列表中
 *  配置:后台 -> 开发 -> 开发设置 -> 服务器域名 -> 修改合法域名
 *  查看:工具 -> 详情 -> 项目配置可以看
 *  开发:工具 -> 详情 -> 本地设置，勾选不校验域名，开发时可以随便调用 
 *  小程序宿主环境不是浏览器，所有不存在跨域问题
 *  小程序没有 XMLHttpRequire 对象，小程序的网络请求并不是ajax实现的
 */
let API_HOST = "http://xxx.com/xxx";
let DEBUG = true;//切换数据入口
var Mock = require('mock-min.js')
function ajax(data = '', fn, method = "get", header = {}) {
    if (!DEBUG) {
        wx.request({
            url: API_HOST + data,
            method: method ? method : 'get',
            data: {},
            header: header ? header : { "Content-Type": "application/json" },
            timeout: 10000, // 超时事件默认600000
            // dataType:"", // 希望服务器返回数据的格式
            // responseType:"", // 实际服务器响应数据的类型
            success: function (res) {
                fn(res);
            },
            fail: function (err) { },
        });
    } else {
        // 模拟数据
        var Random = Mock.Random;
        var res = Mock.mock({
            'error_code': '200',
            'error_msg': 'ok',
            'data|10': [{
                'id|+1': 1,
                'img': "@image(1080x720)",
            }]
        })
        // 输出结果
        // console.log(JSON.stringify(res, null, 2))
        fn(res);
    }
}

// promise封装
const PRRequire = (options) => {
    return new Promise((resolve, reject) => {
        wx.require({
            ...options,
            success: (res) => {
                resolve(res);
            },
            fail: (err) => {
                reject(err);
            }
        })
    })
}

// 类
class HYRequest {
    request(options){
        return new Promise((resolve,reject)=>{
            
        })
    }
}

const hyReqInstance = new HYRequest();
module.exports = {
    ajax: ajax,
    PRRequire:PRRequire,
    hyReqInstance: hyReqInstance
}


