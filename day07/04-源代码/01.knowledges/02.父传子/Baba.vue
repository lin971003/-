<template>
  <div>
    <h2>这里是父组件</h2>
    <Son parentMsg="不要早恋"/>
  </div>
</template>

<script>
import Son from './Son'
export default {
  components:{
    Son
  }
}
</script>

<style>

</style>