<script>
	export default {
		onHide: function() {
			wx.setStorageSync('cart',this.$store.state.cart)
		}
	}
</script>

<style>
@import url('./css/iconfont.css');

	page {
		color: #333;
	}

	.text-line2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
