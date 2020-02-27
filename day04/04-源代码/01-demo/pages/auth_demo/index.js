// pages/auth_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 获取用户通讯地址
  getAddr(){
    wx.authorize({
      scope: 'scope.address',
      success:function(){
        // console.log('成功')
        wx.chooseAddress({
          success(res) {
            console.log(res.userName)
            console.log(res.postalCode)
            console.log(res.provinceName)
            console.log(res.cityName)
            console.log(res.countyName)
            console.log(res.detailInfo)
            console.log(res.nationalCode)
            console.log(res.telNumber)
          }
        })
      }
    })
  },
  getWeRun(){
    wx.authorize({
      scope: 'scope.werun',
      success(){
        wx.getWeRunData({
          success(res){
            console.log(res)
          }
        })
      }
    })
  },
  getUserInfo(res){
    // wx.authorize({
    //   scope: 'scope.userInfo',
    //   success() {
    //   }
    // })

    console.log(res.detail.userInfo.avatarUrl)
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