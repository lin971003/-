<template>
  <div>
    <!-- 头部 -->
    <SearchLink></SearchLink>
    <!-- 轮播图 -->
    <swiper indicator-dots
            autoplay
            circular
            indicator-active-color="#fff"
            indicator-color="rgba(255,255,255,0.3)">
      <block v-for="(item, index) in swiperdata"
             :key="index">
        <swiper-item>
          <img :src="item.image_src"
               alt="">
        </swiper-item>
      </block>
    </swiper>

    <!-- 分类 -->
    <div class="cates">
      <img v-for="(item, index) in catitems"
           :key="index"
           :src="item.image_src"
           alt="">
    </div>
    <!-- 楼层 -->
    <div class="floor">
      <div class="floor-item"
           v-for="(floor, fi) in floordata"
           :key="fi">
        <img :src="floor.floor_title.image_src"
             alt="">
        <div class="product-list">
          <img :src="floor.product_list[0].image_src"
               alt="">
          <div class="right">
            <block v-for="(item, index) in floor.product_list"
                   :key="index">
              <img v-if="index"
                   :src="item.image_src"
                   alt="">
            </block>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchLink from '../../components/SearchLink'
import {getSwiperdata} from '@/api'

export default {
  components: {
    SearchLink
  },
  data () {
    return {
      // 轮播图片数组
      swiperdata: [],
      // 分类图片
      catitems: [],
      // 楼层图片
      floordata: []
    }
  },
  async onLoad () {
    this.swiperdata = await getSwiperdata()
    this.getCatitems()
    this.getFloordata()
  },
  methods: {
    async getCatitems () {
      this.catitems = await this.$request({
        url: '/api/public/v1/home/catitems'
      })
    },
    async getFloordata () {
      this.floordata = await this.$request({
        url: '/api/public/v1/home/floordata'
      })
    }
  }
}
</script>

<style lang="less">
swiper {
  height: 340rpx;
  img {
    width: 100%;
    height: 100%;
  }
}

.cates {
  display: flex;
  height: 194rpx;
  align-items: center;
  justify-content: space-around;
  img {
    width: 128rpx;
    height: 140rpx;
  }
}
.floor-item {
  > img {
    width: 100%;
    height: 88rpx;
  }
}
.product-list {
  display: flex;
  padding: 20rpx 17rpx;
  > img {
    width: 232rpx;
    height: 386rpx;
  }
  .right {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    img {
      width: 232rpx;
      height: 188rpx;
      margin: 0 0 10rpx 10rpx;
    }
  }
}
</style>