// pages/storage_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  nameStorage() {
    // 设置缓存
    wx.setStorage({
      key: 'name',
      data: 'joven',
      success() {
        console.log('存成功了')
      }
    })

    console.log('下一句')

    // // 获取
    // wx.getStorage({
    //   key: 'name',
    //   success: function (res) {
    //     console.log(res.data)
    //   },
    // })

//清除某一个key的存储
    // wx.removeStorage({
    //   key: 'name',
    //   success: function(res) {},
    // })
    
    // wx.clearStorage()
  },

  ageStorage(){
    //设置缓存
    // wx.setStorageSync('age', 18)
    // let age = wx.getStorageSync('age')
    // console.log(age)
    wx.removeStorageSync('age')
    // wx.clearStorageSync()
  },
// 获取当前storage的相关信息
  getStorageInfo(){
   let info =  wx.getStorageInfoSync()
   console.log(info)
  },
  // 存对象
  objectStorage(){
    wx.setStorageSync('iphone', {
      color:'red',
      price:5000
    })
    console.log(wx.getStorageSync('iphone'))
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