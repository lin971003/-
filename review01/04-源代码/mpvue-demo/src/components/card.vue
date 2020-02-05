<template>
  <div>
    <p class="card">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {

    }
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
