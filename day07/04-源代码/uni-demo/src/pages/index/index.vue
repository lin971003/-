<template>
  <view>
    <text>{{message}}</text>
    <input type="text" v-model="message">
    <navigator url="/pages/login/login">去登录</navigator>
    <image :src="imgUrl"></image>
    <button @click="sayHello">点我呀</button>
    <swiper indicator-dots autoplay circular>
        <block v-for="(item, index) in 10" :key="index">
            <swiper-item>
                <image mode="aspectFill" src="https://img11.360buyimg.com/babel/s1180x940_jfs/t1/85181/13/13474/83838/5e58bb88E92e4deab/e9294fb119255a30.jpg.webp"></image>
            </swiper-item>
        </block>
    </swiper>

    <view class="rbox" :class="{red:isRed}" @click="isRed=!isRed"></view>
    <ul>
      <li>放学别走</li>
      <li>爱我别走</li>
    </ul>
  </view>
</template>

<script>
export default {
  data(){
    return{
      isRed:true,
      message:'这是一个寂寞的天',
      imgUrl:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/uniapp4@2x.png'
    }
  },
  methods: {
    sayHello(){
      uni.showToast({
        title:'点疼我了'
      })
    }
  },
}
</script>

<style>
image{
  width: 100px;
  height: 100px;
  border:1px solid green;
}
swiper image{
  width:100%;
}
.rbox{
  width: 200rpx;
  height: 200rpx;
  border:1px solid green;
  border-radius: 50%;
}
.red{
  background-color: red;
}
</style>