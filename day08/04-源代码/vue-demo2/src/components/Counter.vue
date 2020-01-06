<template>
  <div>
    <h2>{{num}}</h2>
    <button @click="num++">+</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      num:0
    }
  }
}
</script>

<style>
</style>