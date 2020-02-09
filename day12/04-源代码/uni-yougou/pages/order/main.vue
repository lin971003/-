<template>
  <div class="container">
    <div class="header">
      <view>
        <view @click="clickSearch(index)"
            :class="{active:activeIndex===index}"
            v-for="(item, index) in menuList"
            :key="index">{{item}}</view>
      </view>
    </div>

    <div class="content">
      <view>
        <view v-for="order in orderList" :key="order.order_id">
          <div class="goods-info" v-for="(item, i) in order.goods" :key="item.goods_id">
            <img :src="item.goods_small_logo"
                 alt="">
            <div class="right">
              <p>{{item.goods_name}}</p>
              <div class="price-num">
                <span class="price">￥{{item.goods_price}}</span>
                <span class="num">x{{item.goods_number}}</span>
              </div>
            </div>
          </div>
          <p class="total-price">
            共{{order.total_count}}件商品 总计：&yen;{{order.total_price}}(含运费0.00)
          </p>
          <div class="order">
            <span>订单号:{{order.order_number}}</span>
            <button type="primary" v-show="!order.pay_status">
              支付
            </button>
          </div>

        </view>
      </view>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        '全部',
        '待付款',
        '待收货',
        '退款/退货'
      ],
      activeIndex: 0,
      orderList: []
    }
  },
  onLoad (options) {
    this.activeIndex = parseInt(options.index)
    this.queryOrderList()
  },
  methods: {
    clickSearch (index) {
      this.activeIndex = index
      this.queryOrderList()
    },
    async queryOrderList () {
      let data = await this.$request({
        url: '/api/public/v1/my/orders/all?type=' + (this.activeIndex + 1),
        isAuth: true
      })

      this.orderList = data.orders
    }
  }
}
</script>

<style lang="less">
.container {
  background-color: #f4f4f4;
}
.header {
  background-color: #fff;
  view {
    display: flex;
    align-items: center;
    view {
      flex: 1;
      text-align: center;
      height: 100rpx;
      line-height: 100rpx;
      box-sizing: border-box;
      &.active {
        border-bottom: 12rpx solid #eb4450;
      }
    }
  }
}
.content {
  view {
    background-color: #fff;
    margin-top: 30rpx;
    padding: 0 20rpx;
    .goods-info {
      height: 260rpx;
      border-bottom: 1rpx solid #ddd;
      display: flex;
      align-items: center;

      img {
        width: 200rpx;
        height: 200rpx;
        margin-right: 26rpx;
        flex-shrink: 0;
      }
      .right {
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2; // 控制多行的行数
          -webkit-box-orient: vertical;
        }
        .price-num {
          margin-top: 84rpx;
          display: flex;
          justify-content: space-between;
          .price {
            color: #eb4450;
          }
        }
      }
    }
    .total-price {
      height: 90rpx;
      line-height: 90rpx;
      border-bottom: 1rpx solid #ddd;
      text-align: right;
      color: #999;
    }
    .order {
      height: 88rpx;
      color: #999;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        flex: 1;
        font-size: 14px;
      }
      button {
        width: 160rpx;
        height: 60rpx;
        line-height: 60rpx;
      }
    }
  }
}
</style>