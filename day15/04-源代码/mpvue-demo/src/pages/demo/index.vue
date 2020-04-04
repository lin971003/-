<template>
  <div>
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg" />
    <ul>
      <li v-for="(item, index) in songList" :key="index">
        {{ item }}--{{ index }}
      </li>
    </ul>
    <button @click="sayHello('点疼我了')">点我呀</button>
    <div class="box" :class="{ red: isRed }" @click="isRed = !isRed"></div>
    <div class="rbox"></div>
    <swiper indicator-dots autoplay circular>
      <block v-for="(item, index) in 10" :key="index">
        <swiper-item>
          <image
            mode="aspectFill"
            src="https://img10.360buyimg.com/da/s1180x940_jfs/t1/101836/33/17159/75981/5e819938E8d75f22c/d67a1168eca3d905.jpg.webp"
          ></image>
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg:  '还是吃太少了，已经饿了',
      songList: [
        '洋葱',
        '你不是真正的快乐',
        'just the way you are',
        '在那遥远的地方'
      ],
      isRed: true
    }
  },
  methods: {
    sayHello (msg) {
      wx.showToast({
        title: msg, // 提示的内容,
        icon: 'success', // 图标,
        duration: 2000, // 延迟时间,
        mask: true, // 显示透明蒙层，防止触摸穿透,
        success: res => {}
      })
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
.rbox {
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
  border: 1px solid #ccc;
}
.red {
  background-color: red;
}
</style>
