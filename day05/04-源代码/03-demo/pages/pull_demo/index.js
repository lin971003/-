// pages/pull_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[1,2,3,4,5,6,7,8,9,10]
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
    // 清空arr,加载第一页
    setTimeout(()=>{
      this.setData({
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      })
      wx.stopPullDownRefresh()
    },1000)
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let list = this.data.arr
    setTimeout(()=>{
      // 加载下一页
      for(let i=0;i<10;i++){
        list.push(list.length+1)
      }
      this.setData({
        arr:list
      })
    },1000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})