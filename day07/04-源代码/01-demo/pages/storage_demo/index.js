// pages/storage_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 

  },
  saveObj(){
    wx.setStorageSync('iphone', {
      name:'iphone11',
      color:'green'
    })
  },
  getObj(){
    let obj= wx.getStorageSync('iphone')
    console.log(obj)
  },
  saveName(){
    let start = Date.now()

    wx.setStorage({
      key: 'name',
      data: 'joven',
      success(res){
        let end = Date.now()

        console.log('异步API耗时:' + (end - start))
        console.log('存储成功了')
      }
    })
    console.log('下一个语句')

    //fs.readFile(fuction(){
      
      //},err=>{

   // })
  },

  saveAge(){
    let start = Date.now()
    wx.setStorageSync('age', 30)
    let end = Date.now()

    console.log('同步API耗时:'+(end-start))

    console.log('等存储完了，后会执行')
    // fs.readFileSync
  },
  getNameAge(){
    wx.getStorage({
      key: 'name',
      success: function(res) {
        console.log(res.data)
      },
    })

    let age= wx.getStorageSync('age')
    console.log(age)

    let info = wx.getStorageInfoSync()
    console.log(info)
  },

  removeName(){
    // 移除指定kEY值的存储
    wx.removeStorageSync('name')
  },
  clearAll(){
    wx.clearStorageSync()
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