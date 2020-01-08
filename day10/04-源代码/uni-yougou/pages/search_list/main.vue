<template>
  <div>
    <div class="top-header" :style="{position:isFixed?'fixed':'static'}">
      <!-- 头部 -->
      <!-- <div class="header">
        <icon type="search"
              size="16"
              color="#bbb">
        </icon>
        <input type="text"
               v-model="keyword"
               @confirm="reload">
      </div> -->
      <SearchBar @query="queryHandler" :query="keyword"/>
      
      <!-- 过滤菜单 -->
      <view class="filter-menu">
        <view :class="{active:activeIndex===index}"
            @click="changeIndex(index)"
            v-for="(item, index) in tabList"
            :key="index">{{item}}</view>
      </view>
    </div>

    <!-- 商品列表 -->
    <view class="goods-list" :style="{marginTop:isFixed?'220rpx':'0'}">
      <view class="goods"
          v-for="item in goodsList"
          :key="item.goods_id" @click="toItem(item.goods_id)">
        <img :src="item.goods_small_logo"
             alt="">
        <div class="right">
          <p class="goods-name text-line2">{{item.goods_name}}</p>
          <p class="price">￥<span>{{item.goods_price}}</span>.00</p>
        </div>
      </view>
    </view>
    <p class="btm-line"
       v-show="isLastPage">--我是有底线的--</p>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
const PAGE_SIZE = 6
export default {
  components: {
    SearchBar
  },
  data () {
    return {
      tabList: [
        '综合',
        '销量',
        '价格'
      ],
      activeIndex: 0,
      // 搜索关键字
      keyword: '',
      // 商品列表
      goodsList: [],
      // 默认不是最后一页
      isLastPage: false,
      isFixed: false
    }
  },
  onLoad (options) {
    // 是否在请求中，默认还没开始发请求
    this.keyword = options.keyword
    // vue实例并不会销毁,goodsList需要重置
    this.reload()
  },
  onPullDownRefresh () {
    this.isFixed = false
    this.reload()
  },
  // 相当于onScroll
  onPageScroll () {
    this.isFixed = true
  },
  // 上拉加载下一页
  onReachBottom () {
    if (!this.isLastPage) {
      this.pageNum++
    }
    this.queryGoodsList()
  },
  methods: {
		changeIndex(index){
			this.activeIndex=index
		},
    queryHandler (keyword) {
      this.keyword = keyword
      this.reload()
    },
    // 跳转商品详情
    toItem (goodsId) {
      wx.navigateTo({ url: '/pages/item/main?goodsId=' + goodsId })
    },
    reload () {
      this.pageNum = 1
      this.isLastPage = false
      this.isRequest = false
      // 清空
      this.goodsList = []
      this.queryGoodsList()
    },
    async queryGoodsList () {
      // 如果请求中，不再发请求了
      if (this.isRequest || this.isLastPage) {
        return
      }
      // 请求前，把isRequest:true
      this.isRequest = true
      let data = await this.$request({
        url: '/api/public/v1/goods/search',
        data: {
          query: this.keyword,
          pagenum: this.pageNum,
          pagesize: PAGE_SIZE
        }
      })

      // 请求结束，isRequest为false
      this.isRequest = false
      this.goodsList = [...this.goodsList, ...data.goods]
      if (this.goodsList.length === data.total) {
        this.isLastPage = true
      }
    }
  }

}
</script>

<style lang="less">
  @import url('../../css/base.less');
  @import url('./index.less');
</style>