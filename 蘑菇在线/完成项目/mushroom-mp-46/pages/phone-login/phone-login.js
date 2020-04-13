import request from '../../utils/request.js'

let timer = null //定时器
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber: '15727664424',
    // 是否开启倒计时
    isCountDown: false,
    // 倒计时的数字
    countNum: 60,
    // 用户输入的验证码
    vcode: ''
  },

  getVcode(event) {
    this.setData({
      vcode: event.detail.value
    })
  },
  // 获取手机号码
  getPhoneNumber(event) {
    this.setData({
      phoneNumber: event.detail.value
    })
  },
  // 获取验证码
  async queryVcode() {
    // 如果正在倒计时中，就不响应的
    if (this.data.isCountDown) {
      return
    }

    // TODO 检查手机号码是否合法

    // 把按钮的获取验证码，改为60s
    this.setData({
      isCountDown: true
    })

    // 开启倒计时
    timer = setInterval(() => {
      let countNum = this.data.countNum
      //每一秒，对countNum--
      countNum--
      // countNum不能为0以下
      if (countNum < 0) {
        // 倒计时停止,倒计时数字也得重置,需要清除定时器
        clearInterval(timer)
        this.setData({
          isCountDown: false,
          countNum: 60
        })
      } else {
        this.setData({
          countNum: countNum
        })
      }
    }, 1000)

    // 发请求获取验证码
    let data = await request({
      url: '/api/user/vcode',
      data: {
        phone: this.data.phoneNumber
      }
    })
    // 验证码提示
    wx.showToast({
      title: data.vcode + '',
      icon: 'none',
      duration: 3000
    })
  },
  // 手机号登陆
  async phoneLogin() {
    try {
      // 发请求
      let data = await request({
        url: '/api/user/login',
        method: 'post',
        data: {
          phone: this.data.phoneNumber,
          vcode: this.data.vcode
        }
      })

      console.log(data)
      wx.showToast({
        title: '微信授权登录成功！',
      })
      // 存token
      wx.setStorageSync('token', data.token)
      // 跳转到我的页面
      wx.switchTab({
        url: '/pages/my/my',
      })
    } catch (err) {
      wx.showToast({
        title: err.message,
        icon: 'none'
      })
    }

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