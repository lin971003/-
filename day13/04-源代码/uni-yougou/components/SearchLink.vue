<template>
  <div class="header" @click="toSearch">
    <icon type="search"
          size="16"
          color="#bbb">
    </icon>
    <div class="inner">搜索</div>
  </div>
</template>

<script>
export default {
  methods: {
    toSearch () {
      wx.navigateTo({ url: '/pages/search/main' })
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 100rpx;
  padding: 20rpx 16rpx;
  background-color: #eb4450;
  position: relative;
  box-sizing: border-box;
  icon {
    position: absolute;
    top: 36rpx;
    left: 50%;
    margin-left: -70rpx;
  }
  .inner {
    height: 60rpx;
    background-color: #fff;
    border-radius: 4rpx;
    color: #bbb;
    text-align: center;
    line-height: 60rpx;
  }
}
</style>