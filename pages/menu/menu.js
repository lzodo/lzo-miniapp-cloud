var API = require('../../utils/api.js')
Page({
    data: {
        swiperArr: [1, 2, 3],
        activecode: -1,
        show: false,
        menuList: [{
                code: 1,
                name: "经纬度"
            },
            {
                code: 2,
                name: "1"
            },
            {
                code: 3,
                name: "1"
            },
            {
                code: 4,
                name: "1"
            },
            {
                code: 5,
                name: "1"
            },
            {
                code: 6,
                name: "1"
            },
            {
                code: 7,
                name: "1"
            },
            {
                code: 8,
                name: "1"
            },
            {
                code: 9,
                name: "1"
            },
        ],
    },
    onLoad: function () {
        var that = this
        API.ajax({
            count: 3
        }, function (res) {
            console.log(res)
            that.setData({
                swiperArr: res.data
            })
        });

        console.log(this.data.swiperArr)
    },
    showPopup() {
        this.setData({
            show: true
        });
    },

    onClose() {
        this.setData({
            show: false
        });
    },
    getLonLat() {
        console.log('fdsafafdsa')
    },
    execCmd(event) {
        this.setData({
            activecode: event.currentTarget.dataset.code,
            show:true
        })
        switch (event.currentTarget.dataset.code) {
            case 1:
                this.getLonLat()
                break;
            default:
                console.log(event.currentTarget.dataset)
                break;
        }
    },
})