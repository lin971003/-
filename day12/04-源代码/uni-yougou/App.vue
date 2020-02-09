
<script>
export default {
  onHide () {
    // app切后台时，vuex state同步到store里面
    this.$store.commit('storeCart')
  }
}
</script>

<style>
@import url('./css/iconfont.css');
page {
  color: #333;
}
.text-line2 {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>