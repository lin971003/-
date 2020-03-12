<template>
  <view>
    <button open-type="getUserInfo" @getuserinfo="getInfo">点我登录</button>
  </view>
</template>

<script>
export default {
  methods: {
    // 获取用户信息
    getInfo (userInfoRes) {
      // console.log(userInfoRes)
      // 在mpvue中，获取用户信息，需要mp.detail
      let { encryptedData, rawData, iv, signature } = userInfoRes.mp.detail
      // 获取微信用户登录的唯一标识
      wx.login({
        success: async loginRes => {
          console.log(loginRes)
          let data = await this.$request({
            url: '/api/public/v1/users/wxlogin',
            method: 'POST',
            data: {
              encryptedData,
              rawData,
              iv,
              signature,
              code: loginRes.code
            }
          })

          wx.setStorageSync('userInfo', userInfoRes.mp.detail.userInfo)
          // 存token，方便后面发请求
          wx.setStorageSync('token', data.token)
          // 并返回
          wx.navigateBack()
        }
      })
    }
  }
}
</script>

<style></style>
