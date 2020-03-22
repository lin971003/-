<template>
	<view class="header" @click="toSearch">
		<view class="inner">
			<icon type="search" color="#bbb" size="16"></icon>
			<text>搜索</text>
		</view>
	</view>
</template>

<script>
export default {
	methods:{
		// 跳转到搜索页面
		toSearch(){
			uni.navigateTo({ url: '/pages/search/search' });
		}
	}
}
</script>

<style lang="less" scoped>
	.header {
		height: 100rpx;
		padding: 20rpx 16rpx;
		box-sizing: border-box;
		background-color: #eb4450;
	
		.inner {
			height: 60rpx;
			width: 100%;
			background-color: #fff;
			border-radius: 4rpx;
			display: flex;
			justify-content: center;
			align-items: center;
	
			text {
				color: #bbb;
				margin-left: 16rpx;
			}
	
			icon {
				margin-top: 4rpx;
			}
		}
	}
</style>
