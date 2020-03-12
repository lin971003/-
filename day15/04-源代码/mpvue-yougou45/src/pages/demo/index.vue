<template>
  <div>
    <h3>{{ msg }}</h3>
    <input type="text" v-model="msg" />
    <ul>
      <li v-for="(item, index) in virusCountry" :key="index">
        {{ item }}--{{ index }}
      </li>
    </ul>
    <button @click="sayHello">点我</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是一个寂寞的天',
      virusCountry: ['中国', '意大利', '伊朗', '韩国']
    }
  },
  methods: {
    sayHello () {
      wx.showToast({
        title: '今天天气不错哦', // 提示的内容,
        icon: 'success'
      })

      let arr = [1, 2, 3, 4]
      arr.map(item => {
        return item === 1
      })
    }
  }
}
</script>

<style></style>
