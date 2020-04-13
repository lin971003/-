import request from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 微信登录
  wxLogin(userInfoRes) {
    console.log(userInfoRes)
    // 获取到用户信息
    let { avatarUrl, nickName } = userInfoRes.detail.userInfo
    // 获取微信登陆的唯一凭证
    wx.login({
      success: async loginRes => {
        console.log(loginRes)
        //调接口
        let data = await request({
          url: '/api/user/wxlogin',
          method: 'POST',
          data: {
            code: loginRes.code,
            nickname: nickName,
            avatar: avatarUrl
          }
        })
        console.log(data)
        wx.showToast({
          title: '微信授权登录成功！',
        })
        // 存token
        wx.setStorageSync('token', data.token)
        // 跳转到我的页面
        wx.switchTab({
          url: '/pages/my/my',
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