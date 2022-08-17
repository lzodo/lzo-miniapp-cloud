// cpmponents/Bluetooth/bluetooth.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        info: "未初始化蓝牙适配器",
        deviceList: [],
        connectedDeviceId: ""
    },

    lifetimes: {
        attached: function () {
            this.init();
        },
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 1、蓝牙初始化
        init() {
            wx.openBluetoothAdapter({
                success: (res) => {
                    console.log('初始化蓝牙适配器成功');
                    console.log(res);
                    //页面日志显示
                    this.setData({
                        info: '初始化蓝牙适配器成功'
                    })
                    this.getState()
                },
                fail: (res) => {
                    console.log('请打开蓝牙和定位功能')
                    this.setData({
                        info: '请打开蓝牙和定位功能'
                    })
                }
            })
        },
        // 获取蓝牙状态
        getState() {
            wx.getBluetoothAdapterState({
                success: (res) => {
                    //打印相关信息
                    console.log(JSON.stringify(res.errMsg) + "\n蓝牙是否可用：" + res.available);
                    this.setData({
                        info: JSON.stringify(res.errMsg) + "\n蓝牙是否可用：" + res.available
                    })


                    if (!res.available) {
                        console.log("状态不可用")
                    } else {
                        // 如果状态可用
                        this.searchDevice();
                    }

                },
                fail: (res) => {
                    //打印相关信息
                    console.log(JSON.stringify(res.errMsg) + "\n蓝牙是否可用：" + res.available);
                    this.setData({
                        info: JSON.stringify(res.errMsg) + "\n蓝牙是否可用：" + res.available
                    })
                }
            })
        },
        // 3、获取周边设备
        searchDevice() {
            wx.startBluetoothDevicesDiscovery({
                // services: ['FEE7'], //如果填写了此UUID，那么只会搜索出含有这个UUID的设备，建议一开始先不填写或者注释掉这一句
                success: (res) => {
                    this.setData({
                        info: "搜索设备" + JSON.stringify(res),
                    })
                    console.log('搜索设备返回' + JSON.stringify(res))
                    // 一次性获取设备，需要一点时间
                    setTimeout(() => {
                        this.getDeviceAll();
                    }, 1000)

                    // 持续获取
                    // this.getDevice();
                },
                fail(err) {
                    console.log(err)
                }
            })
        },
        // 4-1、获取设备
        getDeviceAll() {
            wx.getBluetoothDevices({
                success: (res) => {
                    this.setData({
                        info: `设备 ${res.devices.length}`,
                        deviceList: res.devices
                    })
                    console.log('搜设备数目：' + res.devices.length)
                    console.log('设备信息：\n' + JSON.stringify(res.devices) + "\n")
                }
            })
        },
        // 4-2、持续获取
        getDevice() {
            var that = this;
            wx.onBluetoothDeviceFound((res) => {
                var deviceList = this.data.deviceList; //数据列表，可以自己定义
                console.log(res.devices);
                res.devices.forEach(item => {
                    // var buff = item.advertisData; //获取蓝牙的广播数据
                    // var arrayBuff = Array.prototype.map.call(new Uint8Array(buff), x => ('00' + x.toString(16)).slice(-2)).join(':');
                    // arrayBuff = arrayBuff.toUpperCase() //将数据处理了获取macId
                    // item.noteName = arrayBuff ? arrayBuff : item.deviceId; //将macId放进列表里面
                    deviceList.push(item);
                })
                that.setData({
                    deviceList: deviceList
                })
            })
        },
        // 5、连接蓝牙
        lanyaconnect(event) {
            wx.createBLEConnection({
                deviceId: event.currentTarget.id,
                success: (res) => {
                    console.log('调试信息：' + res.errMsg);
                    this.setData({
                        connectedDeviceId: event.currentTarget.id,
                        info: "MAC地址：" + event.currentTarget.id + '  调试信息：' + res.errMsg,
                    })
                },
                fail: () => {
                    console.log("连接失败");
                },
            })
        },
        // 关闭搜索
        stopSearch() {
            wx.getBluetoothAdapterState({
                success: function (res) { // 如果适配 状态ok 就关闭
                    wx.stopBluetoothDevicesDiscovery({
                        success: (res) => {
                            console.log("停止搜索" + JSON.stringify(res.errMsg));
                            this.setData({
                                info: "停止搜索" + JSON.stringify(res.errMsg),
                            })
                        }
                    })
                }
            })
        },
    }
})

/**
 * 
 操作蓝牙适配器的共有 4 个，分别是
 * wx.openBluetoothAdapter 初始化蓝牙适配器
 * wx.closeBluetoothAdapter 关闭蓝牙模块
 * wx.getBluetoothAdapterState 获取本机蓝牙适配器状态
 * wx.onBluetoothAdapterStateChange 监听蓝牙适配器状态变化事件
连接前使用的共有 4 个，分别是
 * wx.startBluetoothDevicesDiscovery 开始搜寻附近的蓝牙外围设备
 * wx.stopBluetoothDevicesDiscovery 停止搜寻附近的蓝牙外围设备
 * wx.getBluetoothDevices 获取所有已发现的蓝牙设备
 * wx.onBluetoothDeviceFound 监听寻找到新设备的事件
连接和断开时使用的共有 2 个，分别是
 * wx.createBLEConnection 连接低功耗蓝牙设备
 * wx.closeBLEConnection 断开与低功耗蓝牙设备的连接
连接成功后使用的共有 8 个，分别是
 * wx.getConnectedBluetoothDevices 根据 uuid 获取处于已连接状态的设备
 * wx.getBLEDeviceServices 获取蓝牙设备所有 service（服务）
 * wx.getBLEDeviceCharacteristics 获取蓝牙设备所有 characteristic（特征值）
 * wx.readBLECharacteristicValue 读取低功耗蓝牙设备的特征值的二进制数据值
 * wx.writeBLECharacteristicValue 向低功耗蓝牙设备特征值中写入二进制数据
 * wx.notifyBLECharacteristicValueChange 启用低功耗蓝牙设备特征值变化时的 notify 功能
 * wx.onBLECharacteristicValueChange 监听低功耗蓝牙设备的特征值变化
 * wx.onBLEConnectionStateChange 监听低功耗蓝牙连接的错误事件
 * 
 */


