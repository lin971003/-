const heroDetails = require('../../data/lol_details_duowan.js')
// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    currentHero: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    let id = options.id
    let currentHero = heroDetails.filter(item => {
      if (item.id === id) {
        return item
      }
    })
    console.log(currentHero)
    currentHero = currentHero[0]
    console.log(currentHero)
    this.setData({
      id,
      currentHero
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})