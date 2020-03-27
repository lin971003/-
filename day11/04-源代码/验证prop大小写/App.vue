<template>
  <div>
    <h2>我是子组件</h2>
    <Child msg="不要早恋" parentMsg="还是吃得太饱"/>
  </div>
</template>

<script>
import Child from './Child'
export default {
  components:{
    Child
  }
}
</script>

<style></style>
