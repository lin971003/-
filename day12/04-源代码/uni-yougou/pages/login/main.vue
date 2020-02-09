<template>
  <div>
    <button open-type="getUserInfo"
            @getuserinfo="getInfo">点我登录</button>
  </div>
</template>

<script>
export default{
  methods: {
    getInfo (res) {
      let detail = res.mp.detail
      console.log(detail)
      // 获取用户登录凭证
      wx.login({
        success: async loginRes => {
          // console.log(loginRes)
          // 调用登录接口
          let data = await this.$request({
            url: '/api/public/v1/users/wxlogin',
            data: {
              code: loginRes.code,
              encryptedData: detail.encryptedData,
              iv: detail.iv,
              rawData: detail.rawData,
              signature: detail.signature
            },
            method: 'post'
          })
          // console.log(data)
          // 存储token
          wx.setStorageSync('token', data.token)
          wx.setStorageSync('userInfo', detail.userInfo)

          wx.navigateBack()
        }
      })
    }
  }
}
</script>

<style>
</style>