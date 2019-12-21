<template>
  <div>
    <h2>这里是爷组件</h2>
    <Baba msg1="传给爸爸的消息" msg2="传给孙子的消息"  msg3="爷爷又说" @event1="eventHandler"/>
  </div>
</template>

<script>
import Baba from './Baba'
export default {
  components:{
    Baba
  },
  methods: {
    eventHandler(msg){
      /* eslint-disable */
      console.log(msg)
    }
  },
}
</script>

<style>

</style>