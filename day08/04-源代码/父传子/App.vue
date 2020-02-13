<template>
  <div>
    <h3>我是父组件</h3>
    <h4>{{iphone.name}}</h4>
    <input type="text" v-model="iphone.name">
    <Child :mobile="iphone" parentMsg="不要早恋"/>
  </div>
</template>

<script>
import Child from './Child'
export default {
  components:{
    Child
  },
  data(){
    return{
      iphone:{
        color:'red',
        name:'iphone 11'
      }
    }
  }
}
</script>

<style>

</style>