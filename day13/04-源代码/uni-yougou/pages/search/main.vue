<template>
  <div class="wrapper">
    <SearchBar @query="toSearchList" :query="keyword"/>
    <div class="history-search">
      <div class="title">
        <span class="title">历史搜索</span>
        <icon type="clear"
              size="18" @click="clearAll">
        </icon>
      </div>
      <view>
        <view @click="toSearchList(item)" v-for="(item, index) in keywordList" :key="index">{{item}}</view>
      </view>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
const KEYWORD_LIST = 'keyword_list'
export default {
  components: {
    SearchBar
  },
  data () {
    return {
      keyword: '',
      keywordList: []
    }
  },
  onShow () {
    // 页面初始化或者返回时，从storage里面取keywordList
    this.keywordList = wx.getStorageSync(KEYWORD_LIST) || []
    this.keyword = ''
  },
  methods: {
    // 清除历史搜索列表
    clearAll () {
      wx.showModal({
        title: '提示',
        content: '你确定要删除所有历史记录吗？',
        success: (res) => {
          if (res.confirm) {
            // 清空storage KEYWORD_LIST
            wx.removeStorageSync(KEYWORD_LIST)
            this.keywordList = []
          }
        }
      })
    },
    // 跳转搜索页面
    toSearchList (kw) {
      this.keyword = kw
      // 在keywordList的头部添加关键字
      let _keywordList = [...this.keywordList]
      _keywordList.unshift(kw)
      // 去重
      let set = new Set(_keywordList)
      // 而且要存在storage里面
      wx.setStorageSync(KEYWORD_LIST, [...set])

      wx.navigateTo({ url: '/pages/search_list/main?keyword=' + kw })
    }
  }
}
</script>

<style lang="less">
.search {
  background-color: #eee;
  padding: 30rpx 15rpx;
  display: flex;
  justify-content: space-between;
  font-size: 28rpx;
  position: relative;
  icon {
    position: absolute;
    top: 50rpx;
    left: 38rpx;
  }
  input {
    height: 60rpx;
    flex: 1;
    background-color: #fff;
    padding-left: 70rpx;
    box-sizing: border-box;
    border-radius: 4rpx;
  }
  button {
    width: 160rpx;
    height: 60rpx;
    line-height: 60rpx;
    border-radius: 8rpx;
    font-size: 28rpx;
    border: 1rpx solid #bfbfbf;
    background-color: #eee;
    margin-left: 20rpx;
  }
}

.history-search {
  color: #333;
  font-size: 28rpx;
  padding: 30rpx 30rpx 30rpx 15rpx;
  .title {
    display: flex;
    justify-content: space-between;
  }

  view {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30rpx;
    view {
      height: 64rpx;
      line-height: 64rpx;
      padding: 0 26rpx;
      background-color: #ddd;
      margin: 0 30rpx 16rpx 0;
    }
  }
}
</style>