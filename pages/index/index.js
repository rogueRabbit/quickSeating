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
      { "name": "唐杰", "location": { "x": 63, "y": 136 } },
      { "name": "杨雪明", "location": { "x": 120, "y": 136 } },
      { "name": "李旭东", "location": { "x": 170, "y": 136 } },
      { "name": "杜明", "location": { "x": 230, "y": 136 } },
      { "name": "王毅", "location": { "x": 280, "y": 136 } },
      { "name": "王志涛", "location": { "x": 338, "y": 136 } },
      { "name": "金道伦", "location": { "x": 393, "y": 136 } },
      { "name": "张文华", "location": { "x": 458, "y": 136 } },
      { "name": "耿慧喆", "location": { "x": 505, "y": 136 } },
      { "name": "祝丽静", "location": { "x": 556, "y": 136 } },
      { "name": "卜海萌", "location": { "x": 618, "y": 136 } },
      { "name": "服务器2", "location": { "x": 669, "y": 136 } },
      { "name": "沈丹蕾", "location": { "x": 725, "y": 136 } },
      { "name": "服务器3", "location": { "x": 790, "y": 136 } },
      { "name": "14", "location": { "x": 818, "y": 136 } },
      { "name": "15", "location": { "x": 885, "y": 136 } },
      { "name": "16", "location": { "x": 933, "y": 136 } },
      { "name": "17", "location": { "x": 1000, "y": 136 } },
      { "name": "18", "location": { "x": 1048, "y": 136 } },
      { "name": "19", "location": { "x": 1110, "y": 136 } },
      { "name": "20", "location": { "x": 1168, "y": 136 } },
      { "name": "侯军", "location": { "x": 118, "y": 178 } },
      { "name": "程俊", "location": { "x": 170, "y": 178 } },
      { "name": "蔡晓宇", "location": { "x": 230, "y": 178 } },
      { "name": "肖子行", "location": { "x": 285, "y": 178 } },
      { "name": "黄琎晶", "location": { "x": 338, "y": 178 } },
      { "name": "费靓囡", "location": { "x": 400, "y": 178 } },
      { "name": "李闻", "location": { "x": 450, "y": 178 } },
      { "name": "马胜因", "location": { "x": 505, "y": 178 } },
      { "name": "赵鑫", "location": { "x": 556, "y": 178 } },
      { "name": "卢庆", "location": { "x": 615, "y": 178 } },
      { "name": "王顺", "location": { "x": 669, "y": 178 } },
      { "name": "张超", "location": { "x": 729, "y": 178 } },
      { "name": "臧超", "location": { "x": 780, "y": 178 } },
      { "name": "于婧文", "location": { "x": 190, "y": 240 } },
      { "name": "郑晓燕", "location": { "x": 250, "y": 240 } },
      { "name": "任琴", "location": { "x": 310, "y": 240 } },
      { "name": "未知1", "location": { "x": 310, "y": 240 } },
      { "name": "江涛", "location": { "x": 420, "y": 240 } },
      // { "name": "空白1", "location": { "x": 480, "y": 225 } },
      { "name": "刘洁", "location": { "x": 540, "y": 240 } },
      { "name": "刘卿", "location": { "x": 600, "y": 240 } },
      { "name": "洪璐", "location": { "x": 660, "y": 240 } },
      { "name": "李克粉", "location": { "x": 717, "y": 240 } },
      { "name": "朱飞", "location": { "x": 777, "y": 240 } },
      { "name": "殷云", "location": { "x": 163, "y": 290 } },
      { "name": "王翔", "location": { "x": 220, "y": 290 } },
      { "name": "郑佳男", "location": { "x": 277, "y": 290 } },
      { "name": "何世玮", "location": { "x": 334, "y": 290 } },
      { "name": "刘旭航", "location": { "x": 391, "y": 290 } },
      { "name": "邹巍", "location": { "x": 512, "y": 290 } },
      { "name": "苏祥涛", "location": { "x": 569, "y": 290 } },
      { "name": "时伟轩", "location": { "x": 626, "y": 290 } },
      { "name": "齐春宝", "location": { "x": 683, "y": 290 } },
      { "name": "管海龙", "location": { "x": 252, "y": 330 } },
      { "name": "任文涛", "location": { "x": 309, "y": 330 } },
      { "name": "张伟", "location": { "x": 366, "y": 330 } },
      { "name": "刘文权", "location": { "x": 423, "y": 330 } },
      { "name": "张立春", "location": { "x": 480, "y": 330 } },
      { "name": "吴超超", "location": { "x": 570, "y": 330 } },
      { "name": "李学森", "location": { "x": 631, "y": 330 } },
      { "name": "郝飞雄", "location": { "x": 682, "y": 330 } },
      { "name": "王攀", "location": { "x": 742, "y": 330 } },
      { "name": "赵振华", "location": { "x": 280, "y": 380 } },
      { "name": "李志亮", "location": { "x": 335, "y": 380 } },
      { "name": "程钦辉", "location": { "x": 390, "y": 380 } },
      { "name": "肖婷", "location": { "x": 540, "y": 380 } },
      { "name": "刘鑫刚", "location": { "x": 595, "y": 380 } },
      { "name": "潘登", "location": { "x": 715, "y": 380 } },
      { "name": "高亚平", "location": { "x": 770, "y": 380 } },
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
      windowH: windowW * (474 / 1218),
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
     src: 'https://img-blog.csdnimg.cn/20190311135503210.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pKMTEwNTgwNTI4MQ==,size_16,color_FFFFFF,t_70',
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
          title: '找到他啦',
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
      let locationX = location.x / 1332 * windowW;
      let locationY = location.y / 518 * windowH;
      let imageW = windowW * (40 / 1332);
      context.drawImage('./resources/images/xiaorenN.png', locationX, locationY, imageW, imageW);
    }
    context.stroke();
    context.draw();
  }
})
