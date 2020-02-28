// pages/storage-demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  saveName(){
    // 在小程序里面，存数据本质上是异步的
    wx.setStorage({
      key: 'name',
      data: 'Joven',
      success(){
        console.log('存姓名成功')
      }
    })
    console.log('下一句话')
  },
  saveAge(){
    // 这个本质是也是异步的，只不过是同步的API
    wx.setStorageSync('age', 32)
  },

  getAgeName(){
    //事件循环
    wx.getStorage({
      key: 'name',
      success: function(res) {
        console.log(res.data)
      },
    })
    console.log(wx.getStorageSync('age'))

//获取当前storage里面一些存储信息
    let info = wx.getStorageInfoSync()
    console.log(info)
  },

  removeName(){
    wx.removeStorageSync('name')
  },

  clearAll(){
    wx.clearStorageSync()
  },

  // 存储api,存和取都可以是对象
  savePhoneBill(){
    console.log(localStorage)//undefined
    wx.setStorageSync('phone', {
      phoneNumber:'15361819220',
      cost:100
    })
    console.log(wx.getStorageSync('phone'))
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