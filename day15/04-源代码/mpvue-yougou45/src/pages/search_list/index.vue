<template>
  <view>
    <div class="header-wrapper">
      <!-- 头部 -->
      <SearchBar @search="searchHandler" :keyword="keyword" />

      <!-- 过滤菜单 -->
      <view class="filter-menu">
        <view
          :class="{ active: activeIndex === index }"
          @click="changeIndex(index)"
          v-for="(item, index) in menuList"
          :key="index"
          >{{ item }}</view
        >
      </view>
    </div>

    <!-- 商品列表 -->
    <view class="goods-list">
      <view
        class="goods"
        v-for="(item, index) in goodsList"
        :key="index"
        @click="toItem(item.goods_id)"
      >
        <image :src="item.goods_big_logo" alt="" />
        <view class="right">
          <view class="goods-name text-line2">{{ item.goods_name }}</view>
          <view class="price">
            ￥
            <text>{{ item.goods_price }}</text>
            .00
          </view>
        </view>
      </view>
    </view>
    <view class="btm-line" v-show="isLastPage">--我是有底线--</view>
  </view>
</template>

<script>
import SearchBar from '@/components/SearchBar'

// 每页条数
const PAGE_SIZE = 6

export default {
  components: {
    SearchBar
  },
  data () {
    return {
      menuList: ['综合', '销量', '价格'],
      // 记住当时选中的过滤栏的菜单
      activeIndex: 0,
      keyword: '',
      // 商品列表
      goodsList: [],
      isLastPage: false
    }
  },
  onLoad (options) {
    // 声明
    this.pageNum = 1
    this.isRequesting = false
    // 小程序页面销毁时，对应的Vue实例并没有销毁，所以goodsList的数据还在，需要重置
    this.goodsList = []

    console.log(options)
    this.keyword = options.catName || ''
    // 根据这个关键字去搜索
    this.queryGoods()
  },
  // 下拉刷新触发
  onPullDownRefresh () {
    // 加载第一页的数据
    this.reload()
  },
  // 触发上拉
  onReachBottom () {
    // 加载下一页
    this.pageNum++
    this.queryGoods()
  },
  created () {
    console.log('created')
  },
  destroyed () {
    console.log('destoryed')
  },
  methods: {
    // 输入框的搜索
    searchHandler (inputVal) {
      this.keyword = inputVal
      this.reload()
    },
    // 商品详情
    toItem (goodsId) {
      wx.navigateTo({ url: '/pages/item/main?goodsId=' + goodsId })
    },
    reload () {
      // 加载第一页的数据
      this.pageNum = 1
      this.isLastPage = false
      // 清空搜索结果
      this.goodsList = []
      this.queryGoods()
    },
    changeIndex (index) {
      this.activeIndex = index
    },
    async queryGoods () {
      // 请求前,如果请求中或者如果是最后一页，就返回
      if (this.isRequesting || this.isLastPage) {
        return
      }
      // 请求前,锁住
      this.isRequesting = true

      let data = await this.$request({
        url: '/api/public/v1/goods/search',
        showLoading: false,
        data: {
          query: this.keyword,
          pagenum: this.pageNum,
          pagesize: PAGE_SIZE
        }
      })
      // 请求结束后,主动下拉动画
      wx.stopPullDownRefresh()

      this.goodsList = [...this.goodsList, ...data.goods]
      // 每一次请求完后,我可以判断是否是最后一页
      if (this.goodsList.length === data.total) {
        this.isLastPage = true
      }
      // 请求后,释放
      this.isRequesting = false
    }
  }
}
</script>

<style lang="less">
.header-wrapper {
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 100;
}
.header {
  height: 120rpx;
  padding: 30rpx 16rpx;
  box-sizing: border-box;
  background-color: #eee;
  position: relative;

  icon {
    position: absolute;
    top: 48rpx;
    left: 44rpx;
  }

  input {
    height: 60rpx;
    width: 100%;
    border-radius: 4rpx;
    background-color: #fff;
    padding-left: 80rpx;
    box-sizing: border-box;
  }
}

.top-header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
}

.header {
  height: 120rpx;
  padding: 30rpx 16rpx;
  box-sizing: border-box;
  background-color: #eee;
  position: relative;

  icon {
    position: absolute;
    top: 48rpx;
    left: 44rpx;
  }

  input {
    height: 60rpx;
    width: 100%;
    border-radius: 4rpx;
    background-color: #fff;
    padding-left: 80rpx;
    box-sizing: border-box;
  }
}

.filter-menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100rpx;

  view.active {
    color: #eb4450;
  }
}

.goods {
  border-top: 1rpx solid #ddd;
  height: 260rpx;
  box-sizing: border-box;
  padding: 0 20rpx;
  display: flex;
  align-items: center;

  image {
    width: 200rpx;
    height: 200rpx;
  }

  .right {
    flex: 1;
    margin-left: 26rpx;

    .price {
      color: #eb4450;
      font-size: 24rpx;
      margin-top: 80rpx;

      text {
        font-size: 36rpx;
      }
    }
  }
}

.btm-line {
  text-align: center;
}
</style>
