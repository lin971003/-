<template>
  <view>
    <view class="address-wrapper">
      <view class="address" v-if="address.userName">
        <view class="receiver">
          <view class="name">收货人：{{ address.userName }}</view>
          <view class="phone-num">{{ address.telNumber }}</view>
          <text class="iconfont icon-arrow-right"></text>
        </view>
        <view class="address-txt"
          >收货地址：{{
            address.provinceName +
              address.cityName +
              address.countyName +
              address.detailInfo
          }}</view
        >
      </view>
      <!-- 选择地址 -->
      <view class="choose-address" @click="getAddr" v-else>
        <view>请选择地址</view>
        <text class="iconfont icon-arrow-right"></text>
      </view>
      <view class="flower">
        <image src="/static/images/cart_border@2x.png" />
      </view>
    </view>

    <!-- 商品列表 -->
    <view class="goods-list">
      <view class="goods-item" v-for="(item, index) in goodsList" :key="index">
        <image :src="item.goods_small_logo" alt="" />
        <view class="right">
          <text class="text-line2">{{ item.goods_name }}</text>
          <view class="btm">
            <text class="price"
              >￥<text>{{ item.goods_price }}</text
              >.00</text
            >
            <view class="goods-num">
              <text>{{ item.num }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="bottom-fixed" @click="pay">
      微信支付({{ totalPrice }}.00)
    </view>
  </view>
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
    // 先拿到goodsId，然后发请求
    this.goodsId = options.goodsId
    this.queryGoodsList()
  },
  computed: {
    // 总价
    totalPrice () {
      return this.goodsList.reduce((sum, item) => {
        return sum + item.num * item.goods_price
      }, 0)
    },
    //  详细的收货地址
    consigeeAddr () {
      let {
        provinceName,
        cityName,
        countyName,
        detailInfo,
        userName,
        telNumber
      } = this.address
      return (
        provinceName +
        cityName +
        countyName +
        detailInfo +
        ' ' +
        userName +
        ' ' +
        telNumber
      )
    }
  },
  methods: {
    pay () {
      // 如果未选择地址，提示
      if (!this.address.userName) {
        wx.showToast({
          title: '请选择收货地址', // 提示的内容,
          icon: 'none'
        })
        return
      }
      // // 如果未登录提示
      // this.token = wx.getStorageSync('token');
      // if (!this.token) {
      //   wx.navigateTo({ url: '/pages/login/login' });
      //   return
      // }
      // 否则创建订单
      this.createOrder()
    },
    // 创建订单
    async createOrder () {
      let data = await this.$request({
        url: '/api/public/v1/my/orders/create',
        method: 'POST',
        isAuth: true,
        data: {
          order_price: this.totalPrice,
          consignee_addr: this.consigeeAddr,
          goods: this.filterGoods()
        }
      })
      this.orderNumber = data.order_number
      this.doPay()
      // 订单创建成功,把购物车里面勾选的商品去掉
      !this.goodsId && this.arrangeCart()
    },
    // 订单创建成功,把购物车里面勾选的商品去掉
    arrangeCart () {
      this.$store.commit('arrangeCart')
    },
    async doPay () {
      let data = await this.$request({
        url: '/api/public/v1/my/orders/req_unifiedorder',
        method: 'POST',
        isAuth: true,
        data: {
          order_number: this.orderNumber
        }
      })
      wx.requestPayment({
        ...data.pay,
        success (res) {
          wx.showToast({
            title: '支付成功',
            icon: 'success',
            success () {
              wx.navigateTo({ url: '/pages/order_result/order_result' })
            }
          })
        },
        fail: () => {
          wx.showToast({
            title: '支付失败',
            icon: 'success',
            success: () => {
              wx.navigateTo({
                url:
                  '/pages/order_result/main?orderNumber=' +
                  this.orderNumber
              })
            }
          })
        }
      })
    },
    filterGoods () {
      return this.goodsList.map(item => {
        return {
          goods_id: item.goods_id,
          goods_number: item.num,
          goods_price: item.goods_price
        }
      })
    },
    // 过滤掉购物车中未选中的商品
    filterCart (cart) {
      return cart.filter(item => {
        return item.checked
      })
    },
    async queryGoodsList () {
      // 根据购物车数据（goodsId）去发请求
      let cart = this.$store.state.cart
      // 过滤掉购物车中未选中的商品
      cart = this.filterCart(cart)

      // 当我有goodsId传参的时候，我就构造一个cart,下边逻辑不用改
      if (this.goodsId) {
        cart = [
          {
            goodsId: parseInt(this.goodsId),
            num: 1,
            checked: true
          }
        ]
      }

      if (!cart.length) {
        return
      }

      let idsArr = cart.map(item => {
        return item.goodsId
      })
      let idsStr = idsArr.join(',')

      let _goodsList = await this.$request({
        url: `/api/public/v1/goods/goodslist?goods_ids=${idsStr}`
      })

      // goodsList和cart数据合并
      this.goodsList = cart.map(item => {
        // 从goodlist找到goods_id为item.goodsId的对象
        let goods = _goodsList.find(v => {
          return v.goods_id === item.goodsId
        })
        return { ...item, ...goods }
      })
    },
    // 发起通讯地址授权
    getAddr () {
      /*
      判断是否拒绝
        1.非拒绝，发起授权，调接口
        2.拒绝的话，弹框提示允许权限
        3.如何判断是否拒绝 wx.getSetting()
      */
      // 如何判断是否拒绝 wx.getSetting()
      wx.getSetting({
        success: settingRes => {
          console.log(settingRes)
          if (settingRes.authSetting['scope.address'] === false) {
            // 拒绝的话，弹框提示允许权限
            wx.showModal({
              title: '授权',
              content: '请允许通讯地址权限',
              success: res => {
                if (res.confirm) {
                  wx.openSetting()
                }
              }
            })
          } else {
            // 非拒绝，发起授权，调接口
            wx.authorize({
              scope: 'scope.address',
              success: () => {
                wx.chooseAddress({
                  success: res => {
                    // console.log(res)
                    this.address = res
                    wx.setStorageSync('address', res)
                  }
                })
              }
            })
          }
        }
      })
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
  image {
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
  image {
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
        > text {
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
        text {
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
