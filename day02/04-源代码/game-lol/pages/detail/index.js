const heroDetailArr = require('../../data/lol_details_duowan.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hero: {
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    // 去heroDetailArr数组里面查找一个id为options.id的对象
    // for (let item of heroDetailArr){
    //   if(item.id===options.id){
    //     this.setData({
    //       hero:item
    //     })
    //   }
    // }
    let hero =heroDetailArr.find(v=>{
      return v.id === options.id
    })
    this.setData({
      hero
    })
    wx.setNavigationBarTitle({
      title: `${hero.title}-${hero.name}`,
    })
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