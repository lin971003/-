// pages/data_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'这是一个寂寞的天',
    goodsWeather:true,
    movieList:[
      '我和我的祖国',
      '误杀',
      '叶问4'
    ]
  },
  tapHandler(){
    console.log('5555')
    console.log(this.data.goodsWeather)
    this.setData({
      message:'还吃得太饱'
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