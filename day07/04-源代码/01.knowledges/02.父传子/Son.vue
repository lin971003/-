<template>
  <div class="child">
    <h2>这里是子组件</h2>
    <h3>父传子的消息:{{parentMsg}}</h3>
  </div>
</template>

<script>
export default {
  props:['parentMsg']
}
</script>

<style>

.child{

  border:1px solid green;
}

</style>