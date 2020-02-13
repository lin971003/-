<template>
  <div class="child">
    <h3>我是子组件</h3>
    <h4>{{phone.name}}</h4>
    <input type="text" v-model="phone.name">
    <h4>父对子说：{{parentMsg}}</h4>
  </div>
</template>

<script>
export default {
  props:['mobile','parentMsg'],
  data(){
    return{
      phone:Object.assign({},this.mobile)
      // phone:this.mobile
    }
  },
  watch:{
     mobile:{
       deep:true,
       handler(newValue){
         this.phone=Object.assign({},newValue)
       }
     }
  }
}
</script>

<style>
.child{
  border:1px solid green;
}
</style>