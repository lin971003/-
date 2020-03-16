import heroDetailList from '../../data/lol_details_duowan.js'
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
    console.log(options.id)
    console.log(heroDetailList)
    // 在detail数组里面找一个id为传参的对象
    // for(let i=0;i<heroDetailList.length;i++){
    //   let hero =heroDetailList[i]
    //   // 如果这个对象里面的id等于options.id，就对了
    //   if(hero.id===options.id){
    //     // console.log(hero)
    //     this.setData({
    //       hero:hero
    //     })
    //     return
    //   }
    // }
  // 注意这里是全等,不是赋值
   let hero = heroDetailList.find(item=>{
      return item.id===options.id
    })
    this.setData({
      hero
    })
    // 动态设置标题
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