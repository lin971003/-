// pages/switch_img/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList:[
      '/images/boy.png',
      '/images/girl.png',
      '/images/left.gif',
      '/images/right.png'
    ],
    index:0

  },
  next(){
    // 如果当前是最后一张，跳到第一张
    if(this.data.imgList.length-1===this.data.index){
      this.setData({
        index:0
      })
      return
    }

    //下一张
    this.setData({
      index:++this.data.index
    })
  },
  pre() {
    // 如果是第一张，跳到最后一张
    if ( 0=== this.data.index) {
      this.setData({
        index: this.data.imgList.length - 1
      })
      return
    }

    this.setData({
      index: --this.data.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})