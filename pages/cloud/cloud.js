// wx.cloud.init()
let {
    formatTime
} = require("../../utils/util")
const db = wx.cloud.database()
Page({
    data: {
        videoSrc: "https://6c7a-lzx-student-71zol-1302071657.tcb.qcloud.la/jv.mp4?sign=a67c44ff4ccaecbf9057ce6674398962&t=1613280059",
        src: 'xxx',
        userList:[],
    },
    onLoad(){},
    onShow(){},
    queryCloudData() {
        //查询users所有记录
        db.collection('users').get().then(res => {
            console.log(res.data);
            this.setData({
                userList:res.data
            })
            // 通过 this.data.userList 获取数据
        })

        //doc通过ID查找
        // db.collection('users').doc("28ee4e3e6027d30a050a411017eaba25").get().then(res => {
        //     console.log(res.data)
        // })

        //根据条件查询
        // db.collection('users').where({ name: /^张/ }).get().then(res => {
        //     console.log(res.data)
        // })
    },
    addCloudData(event) {
        // event 接收页面传递的参数
        console.log(event)
        console.log(event.currentTarget.dataset.index)
        db.collection('users').add({
            // data 字段表示需新增的 JSON 数据
            data: {
                // name: "用户"+ Math(Math.random()*100).toFixed(2),
                // age: Math(Math.random()*29).floor(2),
                name: "111",
                age: 22,
            }
        }).then(res => {
            console.log(res);
            wx.showToast({
                title:"添加成功"
            })
        })
    },
    editCloudData() {
        db.collection('users').where({
            name: "111"
        }).update({
            // data 传入需要局部更新的数据
            data: {
                name: "222",
                age: 25
            },
            success: function (res) {
                console.log(res.data)
            }
        })
    },
    delCloudData() {
        console.log("del")
        db.collection('users').where({
            name: "111"
        }).remove({
            success: function (res) {
                console.log(res.data)
            }
        })
    },
    uploadFile() {
        let that = this
        wx.chooseImage({ // 目的拿到地址
            success(res) {
                console.log(res)
                const tempFilePaths = res.tempFilePaths

                tempFilePaths.forEach((item, index) => {
                    //从最后一个 . 的索引开始截取字符串
                    let ext = item.substring(item.lastIndexOf("."))

                    //wx.uploadFile({}) //文档提供的是传到自己服务器上的方法
                    let newName = `${formatTime(new Date())}-${index}${ext}`
                    wx.cloud.uploadFile({
                        cloudPath: newName, // 上传至云端的路径
                        filePath: item, // 小程序临时文件路径
                        success: res => {
                            // 返回文件 ID
                            that.addCloudImage(res.fileID,newName)
                        },
                        fail: console.error
                    })
                })
            }
        })
    },
    addCloudImage(url,name) {
        console.log(url,name)
        db.collection('photo').add({
            data: {
                name: name,
                url: url,
            }
        }).then(res => {
            console.log(res)
        })
    },
    queryDataToCloud() {
        wx.cloud.callFunction({
            name: 'query',
            data: {
                "data_name": "张",
            }
        }).then(res => {
            console.log(res)
        })
    }
})