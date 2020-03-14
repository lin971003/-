// pages/event_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 事件处理方法和data平级,不需要放在methods
  sayHello(){
    // console.log('555.。。')
    // alert在小程序里面用不了
    // alert('点疼我了')
    wx.showToast({
      title: '成功',//提示的内容
      icon: 'loading',//图标
      duration: 4000, //提示显示的时间
      mask:true
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