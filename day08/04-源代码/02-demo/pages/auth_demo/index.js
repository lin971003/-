// pages/auth_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getAddr() {
    wx.getSetting({
      success(res) {
        console.log(res.authSetting)
        if (res.authSetting['scope.address'] === false) {
          // 已拒绝
          // 提示，允许
          wx.showModal({
            title: '提示',
            content: '请在设置中允许通讯地址',
            success(res) {
              if (res.confirm) {
                wx.openSetting({
                })
              }
            }
          })

        } else {
          // 请求授权
          wx.authorize({
            scope: 'scope.address',
            success() {
              // 用户已经同意后
              //调用方法，获取地址
              console.log('用户同意')
              wx.chooseAddress({
                success(res) {
                  console.log(res)
                }
              })
            }
          })

        }
      }
    })

  },
  getInfo(res){
    console.log(res)
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