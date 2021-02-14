wx.cloud.init()
const db = wx.cloud.database()
Page({
    data: {
        videoSrc:"https://6c7a-lzx-student-71zol-1302071657.tcb.qcloud.la/jv.mp4?sign=a67c44ff4ccaecbf9057ce6674398962&t=1613280059",
        src: 'xxx',
    },
    queryCloudData() {
        //查询users所有记录
        db.collection('users').get().then(res => {
            console.log(res.data)
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
    addCloudData() {
        db.collection('users').add({
            // data 字段表示需新增的 JSON 数据
            data: {
                // name: "用户"+ Math(Math.random()*100).toFixed(2),
                // age: Math(Math.random()*29).floor(2),
                name: "111",
                age: 22,
            }
        }).then(res => {
            console.log(res)
        })
    },
    editCloudData() {
        db.collection('users').where({ name: "111" }).update({
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
        db.collection('users').where({ name: "111" }).remove({
            success: function (res) {
                console.log(res.data)
            }
        })
    },
    uploadFile() {
        wx.chooseImage({// 目的拿到地址
            success(res) {
                console.log(res)
                const tempFilePaths = res.tempFilePaths
                //wx.uploadFile({}) //文档提供的是传到自己服务器上的方法
                wx.cloud.uploadFile({
                    cloudPath: 'image/example.png', // 上传至云端的路径
                    filePath: tempFilePaths[0], // 小程序临时文件路径
                    success: res => {
                        // 返回文件 ID
                        console.log(res.fileID)
                    },
                    fail: console.error
                })


            }
        })
    },
    queryDataToCloud(){
        wx.cloud.callFunction({
            name:'query',
            data:{
                "data_name":"张",
            }
        }).then(res=>{
            console.log(res)
        })
    }
})