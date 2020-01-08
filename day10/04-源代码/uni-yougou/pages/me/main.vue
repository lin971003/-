<template>
  <div class="container">
    <div class="header">
      <div class="portrait-wrapper">
        <div class="portrait">
          <img :src="userInfo.avatarUrl?userInfo.avatarUrl:defaultImgUrl"
               alt="">
        </div>
      </div>
      <p v-if="userInfo.nickName">{{userInfo.nickName}}</p>
      <p v-else @click="toLogin">登录</p>
    </div>
    <!-- 主要内容部分 -->
    <div class="content">
      <view class="favo">
        <view>
          <span class="num">0</span>
          <span>收藏的店铺</span>
        </view>
        <view>
          <span class="num">0</span>
          <span>收藏的商品</span>
        </view>
        <view>
          <span class="num">0</span>
          <span>关注的商品</span>
        </view>
        <view>
          <span class="num">0</span>
          <span>我的足迹</span>
        </view>
      </view>
      <div class="order-detail">
        <p class="title">我的订单</p>
        <view>
          <view v-for="(item, index) in menuList" :key="index"
          @click="toOrder(item.index)">
            <span class="iconfont" :class="item.iconClass"></span>
            <span>{{item.name}}</span>
          </view>
        </view>
      </div>
      <div class="address">
        <p>收货地址管理</p>
      </div>

      <div class="others">
        <view>
          <view>
            <span>联系客服</span>
            <span class="right" @click="makeCall('400-618-4000')">400-618-4000</span>
          </view>
          <view>
            <span>意见反馈</span>
          </view>
        </view>
      </div>
    </div>
  </div>
</template>

<script>
const DEFAULT_IMG_URL = 'http://www.sucaijishi.com/uploadfile/2018/0508/20180508023717621.png'
export default {
  data () {
    return {
      userInfo: {},
      defaultImgUrl: DEFAULT_IMG_URL,
      menuList: [
        {
          name: '待付款',
          index: 1,
          iconClass: 'icon-pre-pay'
        },
        {
          name: '待收货',
          index: 2,
          iconClass: 'icon-pre-receive'
        },
        {
          name: '退款/退货',
          index: 3,
          iconClass: 'icon-goods-reject'
        },
        {
          name: '全部订单',
          index: 0,
          iconClass: 'icon-all-order'
        }
      ]
    }
  },
  onShow () {
    this.userInfo = wx.getStorageSync('userInfo')
  },
  methods: {
    toOrder (index) {
      wx.navigateTo({ url: '/pages/order/main?index=' + index })
    },
    toLogin () {
      wx.navigateTo({ url: '/pages/login/main' })
    },
    // 拨打电话
    makeCall (numStr) {
      wx.makePhoneCall({
        phoneNumber: numStr
      })
    }
  }
}
</script>


<style lang="less">
.container {
  background-color: #f4f4f4;
  padding-bottom: 40rpx;
  font-size: 14px;
}
.header {
  height: 410rpx;
  background-color: #eb4450;
  padding-top: 110rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  .portrait {
    width: 140rpx;
    height: 140rpx;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 68rpx;
    img {
      width: 130rpx;
      height: 130rpx;
      border-radius: 50%;
    }
  }
  p {
    color: #fff;
    margin-top: 20rpx;
  }
}
.content {
  margin: -28rpx 18rpx 0;
  color: #333;
  .favo {
    display: flex;
    color: #666;
    background-color: #fff;
    height: 120rpx;
    padding: 0 32rpx;
    align-items: center;
    justify-content: space-evenly;

    view {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .num {
      color: #999;
      margin-bottom: 4rpx;
    }
  }
  .order-detail {
    margin-top: 20rpx;
    background-color: #fff;
    .title {
      height: 88rpx;
      line-height: 88rpx;
      padding-left: 30rpx;
      border-bottom: 1rpx solid #ddd;
      font-size: 20px;
    }
    view {
      display: flex;
      justify-content: space-evenly;
      height: 166rpx;
      align-items: center;
      view {
        display: flex;
        flex-direction: column;
        align-items: center;
        .iconfont {
          color: #eb4450;
          margin-bottom: 20rpx;
          font-size: 48rpx;
        }
      }
    }
  }
  .address {
    margin-top: 20rpx;
    background-color: #fff;
    padding-left: 30rpx;
    height: 88rpx;
    line-height: 88rpx;
  }
  .others {
    margin-top: 20rpx;
    background-color: #fff;
    view {
      view {
        height: 86rpx;
        line-height: 86rpx;
        border-bottom: 1rpx solid #ddd;
        margin: 0 30rpx;
        display: flex;
        justify-content: space-between;
        .right {
          color: #999;
        }
        &:last-child {
          border: none;
        }
      }
    }
  }
}
</style>