<template>
  <div>
      <!-- 头部 -->
      <div class="header">
        <icon type="search"
              size="16"
              color="#bbb">
        </icon>
        <input type="text" value="小米">
      </div>

      <!-- 过滤菜单 -->
      <ul class="filter-menu">
        <li :class="{active:activeIndex===index}"
            @click="activeIndex=index"
            v-for="(item, index) in tabList"
            :key="index">{{item}}</li>
      </ul>

    <!-- 商品列表 -->
    <ul class="goods-list">
      <li class="goods" v-for="(item, index) in 10" :key="index">
        <img src="http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_400x400.jpg"
             alt="">
        <div class="right">
          <p class="goods-name text-line2">创维（Skyworth）42X6 42英寸10核智能酷开网络平板液晶电视（黑色）</p>
          <p class="price">￥<span>1000</span>.00</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabList: [
        '销量',
        '综合',
        '价格'
      ],
      activeIndex: 0
    }
  }
}
</script>

<style lang="less">
.header {
  height: 120rpx;
  padding: 30rpx 16rpx;
  box-sizing: border-box;
  background-color: #eee;
  position: relative;
  icon {
    position: absolute;
    top: 48rpx;
    left: 44rpx;
  }
  input {
    height: 60rpx;
    width: 100%;
    border-radius: 4rpx;
    background-color: #fff;
    padding-left: 80rpx;
    box-sizing: border-box;
  }
}

.filter-menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100rpx;
  li.active {
    color: #eb4450;
  }
}
.goods {
  border-top: 1rpx solid #ddd;
  height: 260rpx;
  box-sizing: border-box;
  padding: 0 20rpx;
  display: flex;
  align-items: center;
  img {
    width: 200rpx;
    height: 200rpx;
  }
  .right {
    flex: 1;
    margin-left: 26rpx;
    .price {
      color: #eb4450;
      font-size: 24rpx;
      margin-top: 80rpx;
      span {
        font-size: 36rpx;
      }
    }
  }
}
.btm-line {
  text-align: center;
}
</style>