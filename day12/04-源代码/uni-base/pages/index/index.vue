<template>
	<view>
		<text>hello world</text>
		<navigator url="/pages/login/index">带我去登录页</navigator>
		<!-- <image src="../../static/logo.png" mode=""></image> -->
		<picker mode="date" :value="date">
			<view class="uni-input">{{date}}</view>
		</picker>
		<view>
			<view>两只老虎</view>
			<view>两只老虎</view>
			<view>两只老虎</view>
		</view>
		<view class="">
			{{msg}}
		</view>
		<input type="text" v-model="msg" />
		<button type="primary" @click="sayHello">点我呀</button>
		
		<view class="uni-input">
			<view class="box">
				
			</view>
			<view class="rbox">
				
			</view>
		</view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" c circular>
			<swiper-item>

			</swiper-item>
			<swiper-item>
				<image src="https://img30.360buyimg.com/mobilecms/s140x140_jfs/t1/86493/21/8974/88830/5e09c53bEf32a3477/56c14c64371334b5.png.webp"
				 mode=""></image>

			</swiper-item>
			<swiper-item>
				<image src="https://img30.360buyimg.com/mobilecms/s140x140_jfs/t1/86493/21/8974/88830/5e09c53bEf32a3477/56c14c64371334b5.png.webp"
				 mode=""></image>

			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date: '2020-01-08',
				msg: '这是一个寂寞的天'
			}
		},
		methods: {
			sayHello() {
				wx.showToast({
					title: '点疼我了'
				})
			}
		}
	}
</script>

<style lang="less">
	.box{
		width: 100px;
		height: 100px;
		background-color: green;
	}
	.rbox{
		width: 200rpx;
		height: 200rpx;
		background-color: green;
	}
</style>
