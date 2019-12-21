<template>
  <div class="sun">
    <h2>这里是孙子组件</h2>
    <h3>爷传给孙:{{msg2}}</h3>
    <h3>爷传给孙:{{msg3}}</h3>
  </div>
</template>

<script>
export default {
  props:['msg2','msg3'],
  mounted() {
    this.$emit('event1','少抽烟')
  },
}
</script>

<style>

.sun{

  border:1px solid green;
}

</style>