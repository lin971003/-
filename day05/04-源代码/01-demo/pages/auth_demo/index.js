// pages/auth_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getInfo(res){
   console.log(res)
  },
  // 获取微信运动步数
  getWeRun(){
    // 发起授权
    wx.authorize({
      scope: 'scope.werun',
      success(){
        console.log('授权被允许')
        //调接口拿数据
        wx.getWeRunData({
          success(res){
            console.log(res)
          }
        })
      }
    })
  },
  getAddr(){
    // 发起授权，弹窗
    wx.authorize({
      scope: 'scope.address',
      success(){
        console.log('用户允许了')
      // 调接口
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