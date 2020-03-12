<template>
  <view class="category">
    <!-- 头部 -->
    <SearchLink />

    <view class="content" v-if="categories.length">
      <view class="left">
        <view
          :class="{ active: activeIndex === index }"
          class="li"
          v-for="(cate1, index) in categories"
          :key="index"
          @click="changeIndex(index)"
        >
          {{ cate1.cat_name }}
        </view>
      </view>
      <view class="right">
        <image src="../../static/images/titleImage.png" mode=""></image>
        <!-- 二级分类 -->
        <view
          class="cate2"
          v-for="(cate2, index2) in categories[activeIndex].children"
          :key="index2"
        >
          <view class="title">
            /
            <text>{{ cate2.cat_name }}</text>
            /
          </view>
          <view class="cate3-wrapper">
            <view
              class="cate3"
              v-for="(cate3, index3) in cate2.children"
              :key="index3"
              @click="toSearchList(cate3.cat_name)"
            >
              <image :src="cate3.cat_icon" mode=""></image>
              <text>{{ cate3.cat_name }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import SearchLink from '../../components/SearchLink.vue'

export default {
  components: {
    SearchLink
  },
  data () {
    return {
      activeIndex: 0,
      categories: []
    }
  },
  onLoad () {
    this.getCategories()
  },
  methods: {
    changeIndex (index) {
      this.activeIndex = index
    },
    // 获取分类数据
    async getCategories () {
      this.categories = await this.$request({
        url: '/api/public/v1/categories'
      })
    },
    // 跳转search_list页面
    toSearchList (catName) {
      wx.navigateTo({
        url: '/pages/search_list/main?catName=' + catName
      })
    }
  }
}
</script>

<style lang="less">
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 100rpx;
}

.left {
  width: 198rpx;
  overflow: scroll;
  .li {
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    border: 1rpx solid #eee;
    background-color: #f4f4f4;
    color: #333;
    &.active {
      color: #eb4450;
      background-color: #fff;
      position: relative;
      &::before {
        position: absolute;
        content: '';
        height: 60rpx;
        width: 8rpx;
        background-color: #eb4450;
        left: 0;
        top: 20rpx;
      }
    }
  }
}

.right {
  flex: 1;
  overflow: scroll;
  > image {
    width: 520rpx;
    height: 180rpx;
    padding: 20rpx 16rpx;
  }
}

.cate2 {
  margin-bottom: 60rpx;
  .title {
    height: 110rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e0e0e0;
    text {
      margin: 0 30rpx;
      color: #333;
    }
  }
}

.cate3-wrapper {
  display: flex;
  flex-wrap: wrap;
  .cate3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.33%;
    margin-bottom: 10rpx;
    image {
      width: 120rpx;
      height: 120rpx;
    }
  }
}
</style>
