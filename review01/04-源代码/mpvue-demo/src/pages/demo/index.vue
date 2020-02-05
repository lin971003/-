<template>
  <div>
    <h2>{{msg}}</h2>
    <input type="text"
           v-model="msg">
    <!-- <view wx:for="{{}}"></view> -->
    <ul>
      <li v-for="(item, index) in cityList"
          :key="index">{{item}}--{{index}}</li>
    </ul>
    <button @click="clickHandler">点我呀</button>
    <view class="box"
          :class="{red:isRed}"
          @click="toggleColor">
    </view>
    <swiper indicator-dots
            autoplay
            circular>
      <block v-for="(item, index) in 10"
             :key="index">
        <swiper-item>
          <image mode="aspectFill"
                 src="https://m.360buyimg.com/babel/jfs/t1/101393/34/11153/22564/5e253f8cE0f36f90c/85f494efa54f84b9.png"></image>
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '别浪，猥琐发育！',
      cityList: [
        '武汉',
        '黄冈',
        '孝感',
        '深圳',
        '温州'
      ],
      isRed: true
    }
  },
  onLoad () {
    this.$request({
      url: '/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a'
    }).then(res => {
      console.log(res)
    })
  },
  methods: {
    clickHandler () {
      // console.log('点疼我了')
      wx.showToast({
        title: '点疼我了', // 提示的内容,
        icon: 'none', // 图标,
        duration: 2000, // 延迟时间,
        mask: true
      })
    },
    toggleColor () {
      this.isRed = !this.isRed
    }
  }
}
</script>

<style>
.box {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #ccc;
}

.red {
  background-color: red;
}
</style>