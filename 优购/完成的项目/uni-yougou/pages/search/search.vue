<template>
  <view class="wrapper">
    <SearchBar @search="toSearchList" />
    <view class="history-search">
      <view class="title">
        <text class="title">历史搜索</text>
        <icon type="clear"
              size="18" @click="clearAll">
        </icon>
      </view>
      <view>
        <view v-for="(item, index) in keywordList"
              :key="index" @click="toSearchList(item)">{{item}}</view>
      </view>
    </view>
  </view>
</template>

<script>
import SearchBar from '../../components/SearchBar'

const KEYWORD_LIST_KEY = 'keyword_list'

export default {
  data () {
    return {
      keywordList: uni.getStorageSync(KEYWORD_LIST_KEY) || []
    }
  },
  components: {
    SearchBar
  },
  onHide(){
    // 跳转到搜索列表后，更新历史搜索列表
    this.keywordList = uni.getStorageSync(KEYWORD_LIST_KEY)
  },
  methods: {
    // 清空历史搜索
    clearAll(){
      // 弹窗提示
     uni.showModal({
       title: '提示', 
       content: '你确认要清空历史搜索吗？',
       success: res => {
         if (res.confirm) {
          //  界面清空
           this.keywordList =[]
          //  存储清空
           uni.removeStorageSync(KEYWORD_LIST_KEY)
         }
       }
     });
    },
    // 跳转到搜索列表页
    toSearchList (inputVal) {
      // 复制一份keywordList
      let _keywordList = [...this.keywordList]
      // 把inputval插入到keywordList的头部
      _keywordList.unshift(inputVal)
      //数组去重
      _keywordList = [...new Set(_keywordList)]
      // 存到storage
      uni.setStorageSync(KEYWORD_LIST_KEY, _keywordList)

      uni.navigateTo({ url: '/pages/search_list/search_list?catName=' + inputVal });
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