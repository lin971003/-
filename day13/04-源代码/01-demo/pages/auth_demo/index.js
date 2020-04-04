// pages/auth_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getAddr() {
    // 1. 发起授权
    wx.authorize({
      scope: 'scope.address',
      success(authRes) {
        console.log(authRes)
        // 2. 调用对应授权接口
        wx.chooseAddress({
          success:res=>{
            console.log(res)
          }
        })
      },
      fail(authRes){
        // 用户第一次拒绝，或者拒绝后再点击都会进入fail
        // 提示用户，打开
        wx.showModal({
          title: '提示',
          content: '请在设置中允许通讯地址',
          success:res=>{
            if(res.confirm){
              // 打开设置
              wx.openSetting({
                
              })
            }
          }
        })
      }
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