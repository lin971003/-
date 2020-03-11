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

  testAddr(){
    //首次发起或者已经授权
    // 发起授权
    wx.authorize({
      scope: 'scope.address',
      success() {
        wx.chooseAddress({
          success(res) {
            console.log(res)
          }
        })
      },
      fail(){
        console.log('ok')
        wx.showModal({
          title: '授权',
          content: '请允许通讯地址权限',
          success(modelRes) {
            if (modelRes.confirm) {
              // 打开界面
              wx.openSetting({
              })
            }
          }
        })
      }
    })
  },

  getAddr() {
    wx.getSetting({
      success(settingRes) {
        // console.log(res)
        if (settingRes.authSetting['scope.address'] === false) {
          //拒绝的
          wx.showModal({
            title: '授权',
            content: '请允许通讯地址权限',
            success(modelRes) {
              if (modelRes.confirm) {
                // 打开界面
                wx.openSetting({
                })
              }
            }
          })
        } else {
          //首次发起或者已经授权
          // 发起授权
          wx.authorize({
            scope: 'scope.address',
            success() {
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
  // 获取授权数据
  getAuthData() {
    wx.getSetting({
      success(res) {
        console.log(res)
      }
    })
  },
  // 打开授权设置
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