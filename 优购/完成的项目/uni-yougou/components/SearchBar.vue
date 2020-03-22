<template>
  <view class="header">
    <input type="text"
           confirm-type="search"
           v-model.trim="inputVal"
           @confirm="confirmHandler">
    <icon class="search-icon"
          type="search"
          size="16">
    </icon>
    <icon class="clear-icon"
          type="clear"
          size="16"
          color="#ccc"
          v-show="inputVal"
          @click="clearInput">
    </icon>
  </view>
</template>

<script>
export default {
  props: ['keyword'],
  data () {
    return {
      inputVal: this.keyword
    };
  },
  methods: {
    // 清空输入框
    clearInput () {
      this.inputVal = ''
    },
    confirmHandler () {
      // 如果inputVal不为空，触发父组件搜索
      if (this.inputVal) {
        // 给父组件传一个search事件，然后传当前的输入框的值
        this.$emit('search', this.inputVal)
      }
    }
  },
  watch: {
    keyword (newValue) {
      this.inputVal = newValue
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 120rpx;
  background-color: #eee;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    background-color: #fff;
    height: 60rpx;
    width: 720rpx;
    padding-left: 74rpx;
    box-sizing: border-box;
  }
  .search-icon {
    position: absolute;
    left: 44rpx;
  }

  .clear-icon {
    position: absolute;
    right: 44rpx;
    z-index: 100;
    left: auto;
  }
}
</style>