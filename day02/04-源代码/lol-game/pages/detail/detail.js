import heroDetailArr  from '../../data/lol_details_duowan.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hero:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    console.log(heroDetailArr)
    // 需要从array找一个id===options.id的对象

    let hero = heroDetailArr.find(v=>{
      return v.id===id
    })
    this.setData({
      hero
    })
    // for(let key in heroDetailArr){
    //   let item = heroDetailArr[key]
    //   if(item.id===id){
    //     this.setData({
    //       hero:item
    //     })
    //     return
    //   }
    // }

    // for (let item of heroDetailArr) {
    //   if (item.id === id) {1
    //     this.setData({
    //       hero: item
    //     })
    //     return
    //   }
    // }



    // heroDetailArr.forEach(hero=>{
    //   if (hero.id === id) {
    //     this.setData({
    //       hero
    //     })
    //     return
    //   }
    // })
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