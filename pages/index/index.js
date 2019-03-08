//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    windowW: 0,
    windowH: 0,
    canvasimgbg: '',
    inputValue: '',
    personnel: [
      { "name": "1", "location": { "x": 115, "y": 125 } },
      { "name": "2", "location": { "x": 157, "y": 125 } },
      { "name": "3", "location": { "x": 220, "y": 125 } },
      { "name": "4", "location": { "x": 267, "y": 125 } },
      { "name": "5", "location": { "x": 328, "y": 125 } },
      { "name": "6", "location": { "x": 383, "y": 125 } },
      { "name": "7", "location": { "x": 438, "y": 125 } },
      { "name": "8", "location": { "x": 495, "y": 125 } },
      { "name": "9", "location": { "x": 546, "y": 125 } },
      { "name": "10", "location": { "x": 603, "y": 125 } },
      { "name": "11", "location": { "x": 659, "y": 125 } },
      { "name": "12", "location": { "x": 710, "y": 125 } },
      { "name": "13", "location": { "x": 770, "y": 125 } },
      { "name": "14", "location": { "x": 818, "y": 125 } },
      { "name": "15", "location": { "x": 885, "y": 125 } },
      { "name": "16", "location": { "x": 933, "y": 125 } },
      { "name": "17", "location": { "x": 1000, "y": 125 } },
      { "name": "18", "location": { "x": 1048, "y": 125 } },
      { "name": "19", "location": { "x": 1110, "y": 125 } },
      { "name": "20", "location": { "x": 1168, "y": 125 } },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady: function () {
    let that = this;
    setTimeout(function(){
      that.sys();
    }, 600)
  },
  sys: function () {
    let that = this;
    const res = wx.getSystemInfoSync();
    let screenWidth = res.screenWidth;
    let screenHeight = res.screenHeight;

    let windowW = 0;
    if (screenWidth > screenHeight) {
      windowW = screenWidth;
    } else {
      windowW = screenHeight;
    }

    that.setData({
      windowW: windowW,
      windowH: windowW * (429 / 1134),
    });
    console.log(res);
    that.bginfo();
  },
  bginfo: function () {
     let that = this;
    //  wx.downloadFile({
    //    //url: 'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=19030416',
    //   url: './resources/images/seat_map.png',
    //   success: function (res) {
    //     that.setData({
    //        canvasimgbg: res.tempFilePath
    //      })
    //      const context = wx.createCanvasContext('firstCanvas');
    //      that.canvasdraw(context);
    //    }
    //  })
   wx.getImageInfo({
      src: 'https://img-blog.csdnimg.cn/20190308102921747.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pKMTEwNTgwNTI4MQ==,size_16,color_FFFFFF,t_70',
      success: function (res) {
        //res.path是网络图片的本地地址
        let qrCodePath = res.path;
        that.setData({
          canvasimgbg: qrCodePath
        })
        const context = wx.createCanvasContext('firstCanvas');
        that.canvasdraw(context);
      },
      fail: function (res) {
        //失败回调
      }
    });
  },
  canvasdraw: function (canvas) {
    let that = this;
    let windowW = that.data.windowW;
    let windowH = that.data.windowH ;
    let canvasimgbg = that.data.canvasimgbg;
    canvas.drawImage(canvasimgbg, 0, 0, windowW, windowH);
    canvas.draw();
    // canvas.draw(true, setTimeout(function () {
    //   // that.daochu()
    // }, 1000));
  },
  daochu: function () {
    let that = this;
    let windowW = that.data.windowW;
    let windowH = that.data.windowH;
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: windowW,
      height: windowH,
      destWidth: windowW,
      destHeight: windowH,
      canvasId: 'secondCanvas',
      success: function (res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
          }
        })
        wx.previewImage({
          urls: [res.tempFilePath],
        })
      }
    })
  },
  search(e) {
    let value = this.data.inputValue;
    if (value == '') {
      wx.showModal({
        title: '提示',
        content: '请输入您要搜索的同事的姓名！',
        showCancel: false
      })
    } else {
      let isExist = false;
      let location = "";
      this.data.personnel.map((item) => {
        if (item.name == value) {
          isExist = true;
          location = item.location;
        }
      })

      if (!isExist) {
        wx.showModal({
          title: '提示',
          content: '未找到您要搜索的同事！',
          showCancel: false
        })
        this.drawLine(location, 0);
      } else {
        this.drawLine(location, 1);
        wx.showToast({
          title: '找到他了',
          icon: 'success',
          duration: 1000
        })
      }
    }
  },
  wathInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  drawLine(location, isFind) {
    const context = wx.createCanvasContext('firstCanvas');
    let windowW = this.data.windowW;
    let windowH = this.data.windowH;
    let canvasimgbg = this.data.canvasimgbg;
    context.drawImage(canvasimgbg, 0, 0, windowW, windowH);
    context.beginPath();
    if (isFind) {
      let locationX = location.x / 1333 * windowW;
      let locationY = location.y / 505 * windowH;
      let imageW = windowW * (40 / 1333);
      context.drawImage('./resources/images/xiaorenN.png', locationX, locationY, imageW, imageW);
    }
    context.stroke();
    context.draw();
  }
})
