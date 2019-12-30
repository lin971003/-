// pages/review/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'这是一个寂寞的天',
    songList:[
      {
        name:'两只蝴蝶',
        id:111
      },
      {
        name: '两只蝴蝶2',
        id: 222
      },
      {
        name: '两只蝴蝶3',
        id: 333
      },
      {
        name: '两只蝴蝶4',
        id: 444
      }
    ],
    num:0
  },
  tapHandler(){
    wx.showToast({
      title: '隔壁老王',
    })
  },
  add(){
    // this.num++
    this.setData({
      num:++this.data.num
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