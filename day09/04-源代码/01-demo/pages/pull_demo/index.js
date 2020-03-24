// pages/pull_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
    // 加载第一页的数据
    // 模拟接口请求，让数据加载慢一点
    setTimeout(() => {
      this.setData({
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      })
      // 主动停止动画
      wx.stopPullDownRefresh()
    },500)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 模拟接口请求，让数据加载慢一点
    setTimeout(() => {
      let _arr = this.data.arr
      for (let i = 0; i < 10; i++) {
        _arr.push(_arr.length + 1)
      }
      this.setData({
        arr: _arr
      })
    }, 500)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})