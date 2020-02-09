<template>
  <div>
    <!-- 头部 -->
    <SearchLink></SearchLink>
    <!-- 主体 -->
    <div class="content"
         v-if="categories.length">
      <view class="left">
        <view :class="{active:index===activeIndex}"
            @click="changeIndex(index)"
            v-for="(cate1,index) in categories"
            :key="cate1.cat_id">{{cate1.cat_name}}</view>
      </view>
      <div class="right">
        <img src="/static/images/titleImage.png"
             alt="">
        <view>
          <view class="cate2"
              v-for="cate2 in categories[activeIndex].children"
              :key="cate2.cat_id">
            <p class="title">/<span>{{cate2.cat_name}}</span>/</p>
            <view>
              <view @click="toSearchList(cate3.cat_name)"
                  class="cate3"
                  v-for="(cate3, index3) in cate2.children"
                  :key="cate3.cat_id">
                <img :src="cate3.cat_icon"
                     alt="">
                <p>{{cate3.cat_name}}</p>
              </view>
            </view>
          </view>
        </view>
      </div>
    </div>
  </div>
</template>

<script>
import SearchLink from '../../components/SearchLink'
export default {
  components: {
    SearchLink
  },
  data () {
    return {
      // 默认选中一级分类里面的第一个
      activeIndex: 0,
      categories: []
    }
  },
  created () {
    this.getCategories()
  },
  methods: {
		changeIndex(index){
			this.activeIndex=index
		},
    // 跳转到搜索列表
    toSearchList (catName) {
      wx.navigateTo({ url: '/pages/search_list/main?keyword=' + catName })
    },
    async getCategories () {
      this.categories = await this.$request({
        url: '/api/public/v1/categories'
      })
    }
  }
}
</script>

<style lang="less">
.content {
  display: flex;
  position: absolute;
  top: 100rpx;
  left: 0;
  right: 0;
  bottom: 0;
  .left {
    width: 198rpx;
    overflow: auto;
    view {
      background-color: #f4f4f4;
      border-bottom: 1rpx solid #eee;
      height: 100rpx;
      box-sizing: border-box;
      line-height: 100rpx;
      text-align: center;
      &.active {
        color: #eb4450;
        background-color: #fff;
        position: relative;
        &::before {
          position: absolute;
          content: "";
          width: 8rpx;
          height: 60rpx;
          background-color: #eb4450;
          top: 20rpx;
          left: 0;
        }
      }
    }
  }
  .right {
    flex: 1;
    overflow: auto;
    padding: 20rpx 16rpx 0;
    > img {
      width: 520rpx;
      height: 180rpx;
    }
  }

  .cate2 {
    margin-bottom: 40rpx;
    .title {
      color: #e0e0e0;
      height: 110rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        color: #333;
        margin: 0 30rpx;
      }
    }
    view {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .cate3 {
    display: flex;
    width: 33.33%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20rpx;
    p {
      font-size: 28rpx;
    }
    img {
      width: 120rpx;
      height: 120rpx;
    }
  }
}
</style>