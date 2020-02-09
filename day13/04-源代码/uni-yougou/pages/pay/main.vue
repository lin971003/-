'<template>
  <div>
    <div class="address-wrapper">
      <div class="address"
           v-if="address.userName">
        <div class="receiver">
          <p class="name">收货人：{{address.userName}}</p>
          <p class="phone-num">{{address.telNumber}}</p>
          <span class="iconfont icon-arrow-right"></span>
        </div>
        <p class="address-txt">收货地址：{{detailAddr}}</p>
      </div>
      <!-- 选择地址 -->
      <div class="choose-address"
           v-else
           @click="getAddr">
        <p>请选择地址</p>
        <span class="iconfont icon-arrow-right"></span>
      </div>
      <div class="flower">
        <img src="/static/images/cart_border@2x.png">
      </div>
    </div>

    <!-- 商品列表 -->
    <view class="goods-list">
      <view class="goods-item"
          v-for="item in goodsList"
          :key="item.goods_id">
        <img :src="item.goods_small_logo"
             alt="">
        <div class="right">
          <p class="text-line2">{{item.goods_name}}</p>
          <div class="btm">
            <span class="price">￥<span>{{item.goods_price}}</span>.00</span>
            <div class="goods-num">
              <span>{{item.num}}</span>
            </div>
          </div>
        </div>
      </view>
    </view>

    <div class="bottom-fixed"
         @click="pay">
      微信支付({{totalPrice}}.00)
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      address: wx.getStorageSync('address') || {},
      goodsList: []
    }
  },
  onLoad (options) {
    this.goodsId = options.goodsId
    this.queryGoodsList()
  },
  computed: {
    totalPrice () {
      // 所有被选中商品的数量*价格的和
      return this.goodsList.reduce((sum, v) => {
        return sum + v.num * v.goods_price
      }, 0)
    },
    detailAddr () {
      let { provinceName, cityName, countyName, detailInfo } = this.address
      return provinceName + cityName + countyName + detailInfo
    },
    filterGoodsList () {
      let arr = []
      this.goodsList.forEach(v => {
        arr.push({
          goods_id: v.goods_id,
          goods_number: v.num,
          goods_price: v.goods_price
        })
      })
      return arr
    }
  },
  methods: {
    pay () {
      // 如果用户未选择商品，提示
      if (!this.goodsList.length) {
        wx.showToast({
          title: '请选择要购买的商品',
          icon: 'none'
        })
        return
      }
      // 如果用户未选择地址，提示
      if (!this.address.userName) {
        wx.showToast({
          title: '请填写收货地址',
          icon: 'none'
        })
        return
      }
      this.createOrder()
    },
    // 创建订单
    async createOrder () {
      let data = await this.$request({
        url: '/api/public/v1/my/orders/create',
        isAuth: true,
        method: 'POST',
        data: {
          order_price: this.totalPrice,
          consignee_addr: this.detailAddr,
          goods: this.filterGoodsList
        }
      })
      this.orderNumber = data.order_number
      this.doPay()
      // 创建订单，无论支付成功还是失败，都应该在购物车里面删掉创建订单的商品
      !this.goodsId && this.arrangeCart()
    },
    arrangeCart () {
      this.$store.commit('arrangeCart')
    },
    async doPay () {
      let data = await this.$request({
        url: '/api/public/v1/my/orders/req_unifiedorder',
        isAuth: true,
        method: 'POST',
        data: {
          order_number: this.orderNumber
        }
      })
      wx.requestPayment({
        ...data.pay,
        success: res => {
          wx.navigateTo({ url: '/pages/order_result/main' })
        },
        fail: () => {
          wx.navigateTo({ url: '/pages/order_result/main?orderNumber=' + this.orderNumber })
        }
      })
    },
    async queryGoodsList () {
      let cart = this.$store.getters.getCart
      // 过滤掉未checked的商品
      cart = this.filterCart(cart)
      if (this.goodsId) {
        cart = {
          [this.goodsId]: {
            num: 1,
            checked: true
          }
        }
      }

      let ids = Object.keys(cart).join(',')
      let goodsList = await this.$request({
        url: '/api/public/v1/goods/goodslist?goods_ids=' + ids
      })
      // 合并数据源
      goodsList.forEach(v => {
        v.num = cart[v.goods_id].num
        v.checked = cart[v.goods_id].checked
      })

      this.goodsList = goodsList
    },
    // 过滤掉未checked的商品
    filterCart (cart) {
      let _cart = {...cart}
      for (let key in _cart) {
        if (!_cart[key].checked) {
          delete _cart[key]
        }
      }
      return _cart
    },
    // 从微信同步通讯地址
    getAddr () {
      wx.getSetting({ success: setRes => {
        if (setRes.authSetting['scope.address'] === false) {
          // 用户拒绝
          wx.showModal({
            title: '提示',
            content: '请在设置中允许通讯地址',
            success: res => {
              if (res.confirm) {
                //  打开设置
                wx.openSetting()
              }
            }
          })
        } else {
          // 用户未授权，授权允许
          // 发起授权，调API获取数据
          wx.authorize({
            scope:
                'scope.address',
            success: () => {
              wx.chooseAddress({
                success: (data) => {
                  this.address = data
                  wx.setStorageSync('address', data)
                }
              })
            }
          })
        }
      } })
    }
  }
}
</script>

<style lang="less">
.address-wrapper {
  background-color: #fff;
}

.address {
  display: flex;
  flex-direction: column;
  padding: 44rpx 30rpx 48rpx 20rpx;
  .receiver {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50rpx;
    position: relative;
    .phone-num {
      margin-right: 40rpx;
    }
    .icon-arrow-right {
      position: absolute;
      top: 8rpx;
      right: 0;
      color: #999;
    }
  }
}

.choose-address {
  display: flex;
  padding: 44rpx 30rpx 48rpx 20rpx;
  justify-content: space-between;
  .icon-arrow-right {
    color: #999;
  }
}

.flower {
  img {
    height: 16rpx;
    width: 100%;
    display: block;
  }
}

.goods-item {
  height: 206rpx;
  background-color: #fff;
  border-top: 1rpx solid #ddd;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  img {
    width: 160rpx;
    height: 160rpx;
    margin-left: 30rpx;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0 20rpx 0 18rpx;
    .btm {
      display: flex;
      margin-top: 40rpx;
      justify-content: space-between;
      .price {
        color: #eb4450;
        > span {
          font-size: 24px;
        }
      }
      .goods-num {
        display: flex;
        align-items: center;
        button {
          width: 60rpx;
          height: 50rpx;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 4rpx solid #666;
        }
        span {
          margin: 0 30rpx;
        }
      }
    }
  }
}
.goods-list {
  position: absolute;
  bottom: 98rpx;
  top: 243rpx;
  width: 100%;
  overflow: auto;
  padding-bottom: 60rpx;
  background-color: #f4f4f4;
}

.bottom-fixed {
  position: absolute;
  height: 98rpx;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1aad19;
  color: #fff;
  line-height: 98rpx;
  text-align: center;
}
</style>