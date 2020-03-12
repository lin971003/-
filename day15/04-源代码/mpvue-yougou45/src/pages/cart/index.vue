<template>
  <view class="content">
    <view class="title">
      <text class="iconfont icon-shop"></text>
      <text>优购生活馆</text>
    </view>
    <!-- 商品列表 -->
    <view class="goods-list">
      <view class="goods-item" v-for="(item, index) in goodsList" :key="index">
        <text
          class="iconfont"
          :class="item.checked ? 'icon-checked' : 'icon-uncheck'"
          @click="toggleCheck(item)"
        ></text>
        <image :src="item.goods_small_logo" alt="" />
        <view class="right">
          <text class="text-line2">{{ item.goods_name }}</text>
          <view class="btm">
            <text class="price"
              >￥<text>{{ item.goods_price }}</text
              >.00</text
            >
            <view class="goods-num">
              <button @click="sub(item)" :disabled="item.num === 1">-</button>
              <text>{{ item.num }}</text>
              <button @click="add(item)">+</button>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="account">
      <view class="select-all">
        <view @click="toggleAll">
          <text
            class="iconfont"
            :class="isAll ? 'icon-checked' : 'icon-uncheck'"
          ></text>
          <text>全选</text>
        </view>
        <view class="price-wrapper">
          <view class="price">
            <text
              >合计:<text class="num">￥({{ totalPrice }}).00</text></text
            >
            <view class="info">包含运费</view>
          </view>
          <view class="account-btn" @click="toPay">结算({{ totalNum }})</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      goodsList: []
    }
  },

  onShow () {
    this.queryGoodsList()
    // 我们把vuex state.cart数组的长度计算放在vuex store
    wx.setTabBarBadge({
      index: 2,
      text: this.$store.getters.getCartLen + ''
    })
  },
  onHide () {
    let cart = this.goodsList.map(item => {
      return {
        goodsId: item.goodsId,
        num: item.num,
        checked: item.checked
      }
    })
    wx.setStorageSync('cart', cart)
  },
  computed: {
    isAll: {
      get () {
        // 所有商品都选中，返回true;也是说为true的个数和goodsLsit长度一致
        //   let len = 0
        //   this.goodsList.forEach(item => {
        //     if (item.checked) {
        //       len = len+1
        //     }
        //   })
        //   console.log(len)
        //   debugger
        //   if (len === this.goodsList.length) {
        //     return true
        //   } else {
        //     return false
        //   }
        // }

        // 只要有一个不选中，就返回false
        // forEach的遍历不会被中断
        // this.goodsList.forEach(item => {
        //   console.log(item)
        //   if (!item.checked) {//没勾选
        //     return false
        //   }
        // })
        // return true

        // for of，可以中断
        // for(let item of this.goodsList){
        //   if(!item.checked){
        //     return false
        //   }
        // }
        // return true
        // 所有的商品都选中，就返回ture
        return this.goodsList.every(item => item.checked)
      },
      set (status) {
        // console.log(status)
        // 商品列表每一个元素的选中状态都应该和全选一致
        this.goodsList.forEach(item => {
          item.checked = status
        })
      }
    },
    //  总数量
    totalNum () {
      // 每一个被选中的商品数量之和
      // let sum =0
      // this.goodsList.forEach(item=>{
      //   if(item.checked){
      //     sum+=item.num
      //   }
      // })
      // return sum
      return this.goodsList.reduce((sum, item) => {
        return sum + (item.checked ? item.num : 0)
      }, 0)
    },
    // 总价
    totalPrice () {
      return this.goodsList.reduce((sum, item) => {
        return sum + (item.checked ? item.num * item.goods_price : 0)
      }, 0)
    }
  },
  watch: {
    goodsList: {
      handler () {
        // 把购物车商品列表状态的改变同步到state.cart
        this.$store.commit('updateCart', this.goodsList)
      },
      deep: true
      // immediate:true //当goodsList刚声明时就触发handler
    }
  },
  methods: {
    toPay () {
      // 如果没有添加商品的话，就提示选择商品
      if (!this.totalNum) {
        wx.showToast({
          title: '请选择需要支付的商品',
          icon: 'none'
        })
        return
      }
      // 如果未登录，跳转登录
      let token = wx.getStorageSync('token')
      if (!token) {
        wx.navigateTo({ url: '/pages/login/main' })
        return
      }
      wx.navigateTo({ url: '/pages/pay/main' })
    },
    // 全选的勾选/不勾选
    toggleAll () {
      this.isAll = !this.isAll
    },
    // 商品勾选/去勾选
    toggleCheck (item) {
      item.checked = !item.checked
    },
    // 商品数量++
    add (item) {
      item.num++
    },
    // 商品数量--
    sub (item) {
      item.num--
    },
    async queryGoodsList () {
      // 根据购物车数据（goodsId）去发请求
      let cart = this.$store.state.cart
      // 遍历cart数组，拿出里面goodsid拼接
      // let idsStr =''
      // cart.forEach(item=>{
      //   idsStr+=item.goodsId+','
      // })
      // idsStr.substr('-1',idsStr.length-1)
      // 如果购物车数据是空的，不必要发请求
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
    }
  }
}
</script>

<style lang="less">
.iconfont {
  font-size: 44rpx;
}

.title {
  height: 88rpx;
  display: flex;
  align-items: center;

  .iconfont {
    color: #999;
    margin: 6rpx 12rpx 0 32rpx;
  }
}

.goods-item {
  height: 206rpx;
  background-color: #fff;
  border-top: 1rpx solid #ddd;
  display: flex;
  box-sizing: border-box;
  align-items: center;

  .iconfont {
    color: #eb4450;
    margin: 0 30rpx;
  }

  image {
    width: 160rpx;
    height: 160rpx;
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
  top: 88rpx;
  width: 100%;
  overflow: auto;
  padding-bottom: 60rpx;
  background-color: #f4f4f4;
}

.account {
  height: 98rpx;
  border-bottom: 1rpx solid #ddd;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;

  .iconfont {
    color: #eb4450;
    margin: 0 30rpx;
  }

  .account-btn {
    width: 230rpx;
    height: 98rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #eb4450;
  }

  .select-all {
    flex: 1;
    display: flex;
    align-items: center;
    .price-wrapper {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      align-items: center;
    }
  }

  .price {
    margin-right: 20rpx;

    .num {
      color: #eb4450;
    }

    .info {
      color: #999;
    }
  }
}
</style>
