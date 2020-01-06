// pages/auth/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getInfo(res){
    console.log(res)
  },

  getAddr() {
    wx.getSetting({
      success(setting) {
        if (setting.authSetting['scope.address'] === false) {
          // 拒绝
          wx.showModal({
            title: '提示',
            content: '请在设置中允许通讯址',
            success(status) {
              if (status.confirm) {
                wx.openSetting({

                })
              }
            }
          })

        } else {
          // 未发起授权或者授权允许
          // 发起授权
          wx.authorize({
            scope: 'scope.address',
            success() {
              // 调接口拿数据
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

  openSetting() {
    wx.openSetting({

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