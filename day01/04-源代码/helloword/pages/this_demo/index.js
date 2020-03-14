// pages/this_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 是否给.box添加.red样式
    isRed:true
  },
  print(){
    console.log('打印。。。。')
  },
  // 改变isRed
  toggleColor(){
    // this.isRed = !this.isRed
    console.log(this.print())
    // 改变data属性,借鉴了react
    this.setData({
      isRed:!this.data.isRed
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