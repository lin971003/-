// pages/this_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isRed:true,
    message:'hello'
  },
  changeColor(){
    // this.isRed = !this.isRed
    // console.log(this.data.isRed)
    // console.log(this.data.message)
    // console.log(this.print())
    this.setData({
      isRed:!this.data.isRed
    })
  },

  print(){
    console.log('55555')
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