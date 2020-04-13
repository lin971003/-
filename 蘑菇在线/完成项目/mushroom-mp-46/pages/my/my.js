import request from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 我的信息
    myInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  async getMyInfo(){
    let token = wx.getStorageSync('token')
    let data = await request({
      url:'/api/my/info',
      header:{
        Authorization:token
      }
    })
    // console.log(data)
    this.setData({
      myInfo:data.message
    })
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
    let token = wx.getStorageSync('token')
    if (!token) {
      // 如果没有token，说明没有登陆态，跳转登陆页
      wx.navigateTo({
        url: '/pages/login/login',
      })
      return
    }
    // 发请求渲染我的页面
    this.getMyInfo()
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