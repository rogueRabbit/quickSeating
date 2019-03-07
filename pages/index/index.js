//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    windowW: 0,
    windowH: 750,
    canvasimgbg: '',
    inputValue: '',
    scale: 1,
    personnel: [
      { "name": "1", "location": { "x": 76, "y": 83} },
      { "name": "2", "location": "" },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let that = this;
    that.sys();
  },
  sys: function () {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowW: res.windowWidth,
          windowH: res.windowHeight,
        });
       that.bginfo();
      },
    })
  },
  bginfo: function () {
    let that = this;
    // wx.downloadFile({
    //   url: 'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=19030416',
    //   // url: 'https://img-blog.csdnimg.cn/20190306134613846.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pKMTEwNTgwNTI4MQ==,size_16,color_FFFFFF,t_70',
    //   success: function (res) {
    //     that.setData({
    //       canvasimgbg: res.tempFilePath
    //     })
    //     const context = wx.createCanvasContext('firstCanvas');
    //     that.canvasdraw(context);
    //   }
    // })

    wx.getImageInfo({
      src: 'https://img-blog.csdnimg.cn/20190306134613846.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pKMTEwNTgwNTI4MQ==,size_16,color_FFFFFF,t_70',
      success: function (res) {
        //res.path是网络图片的本地地址
        let qrCodePath = res.path;
        that.setData({
          canvasimgbg: qrCodePath
        })
        console.log(qrCodePath);
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
    let windowH = that.data.windowH;
    let canvasimgbg = that.data.canvasimgbg;
    let newWidth = this.remSize(windowW);
    let newHeight = this.remSize(windowH);
    canvas.drawImage(canvasimgbg, 0, 0, newHeight, newWidth);
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
        console.log(res)
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
  onReady(e) {
    // // 使用 wx.createContext 获取绘图上下文 context
    // const context = wx.createCanvasContext('secondCanvas');
    // let width = wx.getSystemInfoSync().windowWidth;
    // let height = width*(750/1334);
    // context.drawImage('https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=19030416', 0, 0, 320, 300);
    
    // context.beginPath();
    // // 矩形
    // context.strokeStyle = "red";
    // context.rect(26, 150, 10, 10);
    // context.stroke();

    
   
    // context.strokeStyle = "yellow"; // 蓝色路径
    // context.moveTo(35, 120);
    // context.lineTo(200, 120);
    // context.stroke();

    // context.strokeStyle = "blue"; // 蓝色路径
    // context.moveTo(35, 120);
    // context.lineTo(35, 150);
    // context.stroke();

    // context.draw();
    // console.log(context)
  },
  remSize(num) {
    let scale = this.data.scale;
    return num * scale
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
      this.data.personnel.map((item) => {
        if (item.name == value) {
          isExist = true;
        }
      })

      if (!isExist) {
        wx.showModal({
          title: '提示',
          content: '未找到您要搜索的同事！',
          showCancel: false
        })
      } else {
        this.drawLine();
      }
    }
  },
  wathInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  drawLine() {
    const context = wx.createCanvasContext('firstCanvas');
    let windowW = this.data.windowW;
    let windowH = this.data.windowH;
    let canvasimgbg = this.data.canvasimgbg;
    let newWidth = this.remSize(windowW);
    let newHeight = this.remSize(windowH);
    context.drawImage(canvasimgbg, 0, 0, newHeight, newWidth);
    context.beginPath();
    
    // 矩形
    context.setLineWidth(3);
    context.strokeStyle = "yellow";
    let locationX = this.remSize(66);
    let locationY = this.remSize(108);
    console.log(locationX);
    context.rect(locationX, locationY, 10, 10);
    context.stroke();

    // context.setLineWidth(3);
    // context.moveTo(490, 30);
    // context.lineTo(80, 83)
    // context.stroke()

    // context.strokeStyle = "yellow"; // 蓝色路径
    // context.setLineWidth(3);
    // context.moveTo(35, 120);
    // context.lineTo(200, 120);
    // context.stroke();

    // context.strokeStyle = "blue"; // 蓝色路径
    // context.moveTo(35, 120);
    // context.lineTo(35, 150);
    // context.stroke();

    context.draw();
  }
})
