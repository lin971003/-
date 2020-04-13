// 引入request.js
import request from '../../utils/request.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数据
    swiperList: [],
    // 课程数组
    courseList: [],
    // 热门视频数组
    videoList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取轮播图数据
    this.getSwiperList()
    this.getCourseList()
    this.getVideoList()
  },
  // 获取轮播图数据
  async getSwiperList() {
    // wx.request({
    //   url: 'http://localhost:3000/api/home/swipers',
    //   // success:function(){
    //   // success(){//这个其实是上面的简写
    //   //前面两者会把this绑定为wx.request对象
    //   success: res => {
    //     // console.log(res)
    //     // 判断status，如果为0，取message
    //     // let status = res.data.status
    //     // let message = res.data.message
    //     let { status, message } = res.data
    //     if (status === 0) {
    //       this.setData({
    //         swiperList: message
    //       })
    //     }
    //   }
    // })

    let data = await request({
      url: '/api/home/swipers'
    })
    this.setData({
      swiperList: data.message
    })
  },
  // 获取推荐课程数据
  async getCourseList() {
    // wx.request({
    //   url: 'http://localhost:3000/api/home/course',
    //   success: res => {
    //     let { status, message } = res.data
    //     if (status === 0) {
    //       this.setData({
    //         courseList: message
    //       })
    //     }
    //   }
    // })


    let data = await request({
      url: '/api/home/course'
    })
    this.setData({
      courseList: data.message
    })
  },
  async getVideoList() {
    // await修饰一个promise对象，可以获取promise对象的.then里面数据
    let data = await request({
      url: '/api/home/video'
    })
    this.setData({
      videoList: data.message
    })

    // wx.request({
    //   url: 'http://localhost:3000/api/home/video',
    //   success: res => {
    //     let { status, message } = res.data
    //     if (status === 0) {
    //       this.setData({
    //         videoList: message
    //       })
    //     }
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