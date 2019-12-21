<template>
  <div class="baba">
    <h2>这里是父组件</h2>
    <h3>爷传给爸爸的消息:{{msg1}}</h3>
    <h4>爷传给孙的消息:{{$attrs}}</h4>
    <Sun v-bind="$attrs" v-on="$listeners"/>
  </div>
</template>

<script>
import Sun from './Sun'
export default {
  components:{
    Sun
  },
  props:['msg1']
}
</script>

<style>

.baba{
  border:1px solid blanchedalmond;
}

</style>