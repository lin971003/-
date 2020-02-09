<template>
  <div class="child">
    <h2>子组件</h2>
    <h3>父对子说:{{message}}</h3>
    <h3>父对子说:{{parentMsg}}</h3>
    <input type="text"
           v-model="message">
     <h3>{{psn}}</h3>
     <input type="text" v-model="psn.name">
  </div>
</template>

<script>
export default {
  props: ['msg', 'parentMsg','person'],
  data () {
    return {
      message: this.msg,
      // psn:JSON.parse(JSON.stringify(this.person))
      psn:Object.assign({},this.person)
    }
  },
  watch: {
    msg (value) {
      /*eslint-disable*/
      console.log(value)
      this.message = value
    },
    person:{
      deep:true,
      handler(newValue){
        console.log(newValue)
        this.psn = Object.assign({},newValue)
      }
    }
  }
}
</script>

<style>
.child {
  border: 1px solid green;
}
</style>