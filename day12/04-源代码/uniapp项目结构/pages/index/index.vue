<template>
	<view class="">
		<text>{{message}}</text>
		<input type="text" v-model="message" />
		<navigator url="/pages/login/index">点我去登录</navigator>
		<image src="../../static/logo.png" mode=""></image>
		<picker mode="date">
			<view class="uni-input">今天的日期</view>
		</picker>
		<view>
			<view v-for="(item,index) in songList" :key="index">
				{{item}}--{{index}}
			</view>
		</view>
		<button type="primary" @click="sayHello">点我呀</button>
		<view class="box">
			
		</view>
		<view class="rbox">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message: '这是一个寂寞的天',
				songList:[
					'两只蝴蝶',
					'两只蝴蝶2',
					'两只蝴蝶3'
				]
			}
		},
		created() {
			console.log('创建')
		},
		onLoad() {
			console.log('加载')
		},
		methods:{
			sayHello(){
				uni.showToast({
					title:'点疼我了'
				})
			}
		}
	}
</script>

<style scoped>
	image {
		width: 100px;
		height: 100px;
	}
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
