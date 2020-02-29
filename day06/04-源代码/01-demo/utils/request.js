function request(options) {

  return new Promise((resolve, reject) => {
    // 完成时resolve,错误reject
    // 一个异步的操作
    wx.request({
      url: options.url,
      header: options.header,
      success(res) {
        // console.log(res)
        resolve(res)
      }
    })
  })

}

export default request