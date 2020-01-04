// pages/storage_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  saveName(){
    wx.setStorage({
      key: 'name',
      data: 'Joven',
      success(){
        console.log('存成功了')
      }
    })
    console.log('下一句')
  },

  saveAge(){
    wx.setStorageSync('age', 24)
    console.log('下一句')
  },

  getName(){
    wx.getStorage({
      key: 'name',
      success: function(res) {
        console.log(res.data)
      },
    })
  },

  getAge(){
    let age = wx.getStorageSync('age')
    console.log(age)
  },

  getInfo(){
    console.log(wx.getStorageInfoSync())
  },
  removeName(){
    wx.removeStorageSync('name')
  },
  clearAll(){
    wx.clearStorageSync()
  },

  saveObj(){
    wx.setStorageSync('person', {
      name:'joven',
      age:30
    })
  },
  getObj(){
    console.log(wx.getStorageSync('person'))
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