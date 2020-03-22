<template>
	<view class="">
		<text>{{message}}</text>
		<input type="text" value="" v-model="message" />
		<navigator url="/pages/login/login">登录页</navigator>
		<image src="https://img10.360buyimg.com/mobilecms/s500x500_jfs/t3466/361/979171756/322681/7179b171/5818cfc9N1c2b9814.jpg"
		 mode=""></image>
		<!-- 不推荐的标签不要使用 -->
		<!-- <ul>
			<li>百度</li>
			<li>bing</li>
			<li>google</li>
		</ul> -->
		<!-- 日期选择 -->
		<picker mode="date">
			<view class="uni-input">2020-3-22</view>
		</picker>
		<!-- v-for语法 -->
		<view class="" v-for="(item,index) in songList" :key="item">
			{{item}}--{{index}}
		</view>
		
		<view class="box" :class="{red:isRed}" @click="isRed=!isRed">
		</view>
		<view class="rbox">
			
		</view>
		
		<button type="primary" @click="sayHello">点我呀</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message: '这是一个寂寞的天',
				songList:[
					'等我下课',
					'分手快乐',
					'爱我别走'
				],
				isRed:true
			}
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
	.box{
		width: 100px;
		height: 100px;
		border-radius: 50%;
		border: 1px solid #ccc;
	}
	.red{
		background-color: red;
	}
	
	.rbox{
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
		border: 1px solid #ccc;
		background-color: red;
	}
</style>
