// pages/auth_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getWeRun() {
    wx.authorize({
      scope: 'scope.werun',
    })
  },

  getInfo(res){
    console.log(res)
  },

  getAddr() {
    wx.getSetting({
      success(res) {
        console.log(res)
        if (res.authSetting['scope.address'] === false) {
          //拒绝：提示打开授权弹窗
          wx.showModal({
            title: '提示',
            content: '请在打开的设置里面允许通讯地址',
            success(result) {
              if (result.confirm) {
                // 打开设置
                wx.openSetting({
                })
              }
            }
          })
        } else {
          // 第一次请求授权或者已经允许授权，以下代码都可以调接口拿到数据
          wx.authorize({
            scope: 'scope.address',
            success() {
              // 用户允许scope
              wx.chooseAddress({
                success(result) {
                  console.log(result)
                }
              })
            }
          })
        }
      }
    })


  },

  openSetting() {
    wx.openSetting({

    })
  },
  getAuthStatus() {
    wx.getSetting({
      success(res) {
        console.log(res)
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