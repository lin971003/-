// pages/review/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'中分还带波浪，是不是很萌',
    goodWeather:true,
    countries:[
      '中国',
      '意呆利',
      '伊朗',
      '韩国'
    ]
  },

  sayHello(){
    wx.showToast({
      title: '点疼我了',
    })
    console.log(this)
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