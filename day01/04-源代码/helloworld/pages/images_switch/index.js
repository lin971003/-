// pages/images_switch/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [
      '/images/boy.png',
      '/images/girl.png',
      '/images/left.gif',
      '/images/right.png'
    ],
    index: 0
  },
  // 上一张
  prev() {
    // 如果当前是第一张，直接到最后一张
    if(!this.data.index){
      this.setData({
        index: this.data.imgList.length - 1
      })
      return
    }
    this.setData({
      index: this.data.index - 1
    })
  },
  // 下一张
  next() {
    // 当前为最后一张，点下一张时，显示第一张
    // if(this.data.index===this.data.imgList.length-1){
    //   this.setData({
    //     index:0
    //   })
    //   return
    // }
    let index = this.data.index
    index++

    if (index > this.data.imgList.length - 1) {
      index = 0
    }
    this.setData({
      index: index
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