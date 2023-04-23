App({
  onHide() {
    getApp().globalData.webShowed = false;
  },
  onLaunch: function () {
  },
  globalData: {
    userInfo: null,
    webShowed: false,
    //appDomin: "https://32904.preview.c.wudaima.com/"  /*预发*/
     //appDomin: "https://xq.prod.wudaima.com/"    /*正式*/
    appDomin: "https://xqstage.wudaima.com/"    /*预发*/
  }
})
