// pages/coderwhy/coderwhy.js

// 实例化页面实例
Page({
    // data 直接对象储存数据（一般页面固定数据） ，调试器 AppData可以时时监控数据变化 
    data: {
        msg: 'message',
        list: ['1', '2', '3'],
        count: 0
    },

    // 什么周期函数，页面什么周期监听页面加载
    onLoad() { console.log('Page 的 onload 页面加载') },
    onShow() { console.log('Page 的 onShow 页面展示') },
    onReady() { console.log('Page 的 onReady webview线程拿到onload的数据后第一次渲染完成') },
    onHide() { console.log('Page 的 onHide 页面切换到后台') },
    onShow() { console.log('Page 的 onShow 页面展示') },
    onUnload() { console.log('Page 的 onUnload 页面卸载') },

    // 页面方法直接写，组件中才要写到methods中
    addevent() {
        // this.data.count++; 可以改，当无法同步到页面上
        this.setData({
            count: this.data.count + 1
        })
    },
    // 普通事件监听
    pageEventFunction() {

    },

    // 下拉监听
    onPullDownRefresh() {
        console.log("用户下拉操作")
        setTimeout(() => {
            wx.stopPullDownRefresh({
                success: (res) => {
                    console.log("下拉操作完成")
                }
            })
        }, 1000)
    },

    // 上拉到底
    onReachBottom() {
        console.log('到底了')
    },

    // 页面滚动
    onPageScroll(event) {
        console.log(event)
    },

    // bind 事件联系
    bindEvent(event) {
        /**
         * event.type 
         * event.timeStamp 事件生成事件
         * event.target 触发事件的组件的一些属性集合
         * event.currentTarget 绑定事件的  组件的一些属性集合 
         *      event.currentTarget.dataset.name 获取参数
         *      如果 绑定点击事件的组件 就是点击的组件，两个属性没区别
         *      如果 点击的组件，是绑定事件组件 内部的组件，那么 event.target 的属性就是内部盒子的信息
         * 
         * event.changedTouches （改变的触摸点信息）
         * event.touches （存在的触摸点信息）
         *      这两个属性一般是一样的
         *          在多指操作时不同(一开始两个手指触摸，这时是一样的，不放开又来三个手指触摸，这时changedTouches只有后面的三个手指信息)
         *                         (一开始两个手指，离开了一个手指，这时changedTouches)
         *     
         * mark 数据标记对象 
         */
        console.log(event);
    },

    // 获取组件中传出的数据
    cpntitleclick(event) {
        console.log("监听到组件标题点击事件，并传出数据" + event.detail)
    },

    // 调用组件中的方法
    execCpnFunc(){
        const tabControl = this.selectComponent(".codecpn");
        tabControl.CpnFunc(); // 操作组件中的内容
    },

    // 获取设备信息
    onGetSystemInfo(){
        wx.getSystemInfo({
            success:(res)=>{
                console.log(res);
                console.log(res.screenHeight); // 设备高度
                console.log(res.windowHeight); // 不包括状态栏和导航
                // console.log(res);
            }
        })
        // 需要在 app.json permission 授权
        wx.getLocation({
          success:(res)=>{
              console.log(res) //经纬度信息
          }
        })
    },
    // 本地储存信息
    setStorageInfo(){
        wx.setStorage({
            key:"key1",
            data:["数组数据"],
            encrypt:true,// 数据加密
            success:(res)=>{
                console.log("储存成功")
            }
        });

        // 同步方式
        // wx.setStorageSync('key2xxx','1234567');
        // console.log(wx.getStorageSync("key2xxx"));
        // wx.removeStorageSync('key2xxx');
        // wx.clearStorageSync();
    },
    // 页面跳转
    onPageChange(){
        // 跳转tabBar页面 并关闭其他非tabBar页面
        // wx.switchTab({  
        //   url: '/pages/test/test',
        // })

        // 关闭所有页面，打开程序内的某个页面（经过多个页面时，经过的页面都关闭）
        // wx.reLaunch({
        //   url: 'url',
        // })

        // 保留单前页面，跳转到应用某个页面
        wx.navigateTo({
          url: 'url?a=1&b=2', // url 页面 onLoad（options）中获取参数
          events:{//目标url页面 监听 const ec = this.getOpenerEventChannel(); ec.emit("backxxx",{a:1})
              backxxx(data){  
                   // 目标url数据传递到这
                   console.log(data);
              }
          },
          success:()=>{},
          fail:()=>{}
        })

        // 返回上一个页面
        // wx.navigateBack(number); // number 默认 1，最多返回到首页 

        // 给上一个页面传递数据（一般放到onUnload中，系统的返回也能用）
        // 获取到页面列表
        const pages = getCurrentPages(); 
        // 获取上一个页面
        const prePage = pages[pages.length-2];
        // 给上一个页面设置设数据
        prePage.setData({msg:111})
    },
})