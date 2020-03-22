// const BASE_URL = 'https://api-hmugo-web.itheima.net'
const BASE_URL = 'https://www.uinav.com'

function request({
  url,
  method = 'GET',
  isAuth = false,
  data,
  showLoading = true
}) {
  return new Promise((resolve, reject) => {
    let header = {}

    if (isAuth) {
      let token = wx.getStorageSync('token')
      if (!token) {
        // 可能这个token不存在
        wx.showToast({
          title: '请先登录',
          icon: 'none',
          mask: true,
          success() {
            wx.navigateTo({ url: '/pages/login/login' })
            return reject(new Error('未登录'))
          }
        })
      }
      header.Authorization = token
    }

    // 请求前开启Loading
    if (showLoading) {
      uni.showToast({
        title: '加载中...',
        icon: 'loading',
        mask: true //loading中,底下不允许点击
      })
    }

    uni.request({
      url: BASE_URL + url,
      method,
      header,
      data,
      success: res => {
        let { meta, message } = res.data
        if (meta.status === 200) {
          // 数据是正确
          resolve(message)
        } else {
          // 如果status不为200的话,弹框提示
          uni.showToast({
            title: meta.message,
            icon: 'none'
          })
          reject(new Error(meta.message))
        }
      },
      fail(){
        uni.showToast({
          title: '网络超时',
          icon: 'none'
        })
        reject(new Error('网络超时'))
      },
      complete() {
        // 请求结束后,关闭loading
        if (showLoading) {
          uni.hideLoading()
        }
      }
    })
  })
}

export default request
