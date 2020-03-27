<template>
  <div class="child">
    <h2>我是子组件</h2>
    <h3>父对子说:{{msg}}</h3>
    <h3>父对子说:{{parentMsg}}</h3>
  </div>
</template>

<script>
export default {
  props:['msg','parentMsg']
}
</script>

<style>
.child{
  border:1px solid green;
}
</style>