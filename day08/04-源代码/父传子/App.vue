<template>
  <div>
    <h2>父组件</h2>
    <h3>我说的：{{info}}</h3>
    <input type="text" v-model="person.name">
    <input type="text" v-model="info">
    <Child :msg="info" parentMsg="牙膏不要从中间挤" :person="person"/>
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
      info:'不要早恋',
      person:{
        name:'joven',
        age:19
      }
    }
  }
}
</script>

<style>

</style>