<template>
  <view class="wrapper" v-if="goodsDetail.goods_name">
    <swiper
      class="swiper"
      indicator-dots
      autoplay
      circular
      indicator-color="#ccc"
      indicator-active-color="#fff"
    >
      <block v-for="(item, index) in goodsDetail.pics" :key="index">
        <swiper-item @click="prevImage(index)">
          <image class="swiper-img" :src="item.pics_big"></image>
        </swiper-item>
      </block>
    </swiper>
    <!-- 商品信息 -->
    <view class="goods-info">
      <view class="price">￥{{ goodsDetail.goods_price }}</view>
      <view class="name-favo">
        <view class="name">{{ goodsDetail.goods_name }}</view>
        <view class="favo">
          <text class="iconfont icon-share"></text>
          <text>分享</text>
          <button open-type="share">分享</button>
        </view>
      </view>
      <view class="express">快递: 免运费</view>
    </view>
    <view class="promote">
      <view>
        <text class="name">促销</text>
        <text class="detail">满300减30元</text>
      </view>
      <view class="brother">
        <text class="name">已选</text>
        <text class="detail gray">黑色/S/1件</text>
      </view>
    </view>
    <!-- 图文介绍 -->
    <view class="goods-detail">
      <view class="tabs">
        <text
          :class="{ active: activeIndex === index }"
          v-for="(item, index) in tabList"
          :key="index"
          @click="changeIndex(index)"
          >{{ item }}</text
        >
      </view>
      <view class="main">
        <view v-show="!activeIndex" v-html="goodsDetail.goods_introduce"></view>
        <view v-show="activeIndex">商品参数</view>
      </view>
    </view>
    <view class="fixed-bottom">
      <view class="icon-text">
        <text class="iconfont icon-kefu"></text>
        <text>联系客服</text>
        <button open-type="contact">客服</button>
      </view>
      <view class="icon-text" @click="toCart">
        <text class="iconfont icon-cart"></text>
        <text>购物车</text>
      </view>
      <view class="btn add-cart-btn" @click="add2Cart">加入购物车</view>
      <view class="btn buy-btn" @click="toBuy">立即购买</view>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      tabList: ['图文介绍', '规格参数'],
      activeIndex: 0,
      goodsDetail: {}
    }
  },
  onLoad (options) {
    this.goodsId = options.goodsId
    // 获取商品详情
    this.queryGoodsDetail()
  },
  // 定制分享的弹窗
  onShareAppMessage () {
    return {
      title: this.goodsDetail.goods_name,
      imageUrl: this.goodsDetail.pics[0].pics_big
    }
  },
  methods: {
    // 跳转支付
    toBuy () {
      wx.navigateTo({
        url: '/pages/pay/main?goodsId=' + this.goodsDetail.goods_id
      })
    },
    // 把当前的商品加入购物车
    add2Cart () {
      // 更新cart
      let curGoodsId = this.goodsDetail.goods_id
      // 提示用户
      wx.showToast({
        title: '添加成功,在购物车等亲~',
        icon: 'none'
      })
      // 提交一个事件名为'add2Cart',其实就是调用store.mutations.add2Cart方法
      this.$store.commit('add2Cart', curGoodsId)
    },
    toCart () {
      wx.switchTab({ url: '/pages/cart/main' })
    },
    changeIndex (index) {
      this.activeIndex = index
    },
    // 预览图片
    prevImage (index) {
      let urls = []
      this.goodsDetail.pics.forEach(v => {
        urls.push(v.pics_big)
      })
      wx.previewImage({
        current: index, // 当前显示图片索引值
        urls // 需要预览图片链接
      })
    },
    async queryGoodsDetail () {
      this.goodsDetail = await this.$request({
        url: '/api/public/v1/goods/detail?goods_id=' + this.goodsId
      })
    }
  }
}
</script>
<style lang="less">
.iconfont {
  font-size: 40rpx;
}
.wrapper {
  background-color: #f4f4f4;
  padding-bottom: 98rpx;
}

.swiper {
  height: 720rpx;
}

.swiper-img {
  width: 100%;
  height: 720rpx;
}

.goods-info {
  padding: 40rpx 0 30rpx 20rpx;
  background-color: #fff;

  .price {
    color: #eb4450;
    font-size: 40rpx;
  }

  .name-favo {
    display: flex;
    height: 78rpx;
    margin-top: 14rpx;

    .name {
      color: #333;
      flex: 1;
      font-size: 28rpx;
      padding-right: 78rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; // 控制多行的行数
      -webkit-box-orient: vertical;
    }

    .favo {
      border-left: 1px solid #ddd;
      width: 144rpx;
      color: #999;
      font-size: 24rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      button {
        position: absolute;
        opacity: 0;
      }
    }
  }

  .express {
    color: #999;
    font-size: 24rpx;
    margin-top: 20rpx;
  }
}

.promote {
  margin-top: 20rpx;

  view {
    background-color: #fff;
    height: 96rpx;
    line-height: 96rpx;
    font-size: 28rpx;
    margin-top: 20rpx;
    padding-left: 20rpx;

    &.brother {
      margin-top: 0;
    }

    .name {
      color: #404040;
    }

    .detail {
      color: #ff4055;
      margin-left: 40rpx;

      &.gray {
        color: #dfdfdf;
      }
    }
  }
}

.goods-detail {
  margin-top: 20rpx;
  background-color: #fff;

  .tabs {
    display: flex;

    text {
      flex: 1;
      text-align: center;
      color: #404040;
      font-size: 22rpx;
      height: 100rpx;
      line-height: 100rpx;
      box-sizing: border-box;

      &.active {
        color: #ff4055;
        border-bottom: 10rpx solid #ff2644;
      }
    }
  }
}

.fixed-bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 98rpx;
  display: flex;
  background-color: #fff;

  .icon-text {
    flex: 2;
    font-size: 20rpx;
    color: #404040;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    button {
      position: absolute;
      opacity: 0;
    }
  }

  .btn {
    flex: 3;
    color: #fff;
    text-align: center;
    line-height: 98rpx;

    &.add-cart-btn {
      background-color: #ffb400;
    }

    &.buy-btn {
      background-color: #ff2d4a;
    }
  }
}
</style>
