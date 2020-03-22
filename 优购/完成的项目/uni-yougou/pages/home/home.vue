<template>
	<view class="home">
		<!-- 头部 -->
		<SearchLink/>
		<!-- 轮播图 -->
		<swiper indicator-dots autoplay indicator-active-color="#fff" indicator-color="rgba(255,255,255,0.3)" circular>
			<swiper-item v-for="(item,index) in swiperdata" :key="item.goods_id">
				<view class="swiper-item">
					<image :src="item.image_src"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 导航栏 -->
		<view class="nav">
			<image v-for="(item,index) in catitems" :key="index" :src="item.image_src" mode=""></image>
		</view>

		<!-- 楼层 -->
		<view class="floor">
			<view class="floor-item" v-for="(floor,findex) in floordata" :key="findex">
				<image :src="floor.floor_title.image_src"></image>
				<view class="product-list">
					<image :src="floor.product_list[0].image_src" mode=""></image>
					<view class="right">
						<block v-for="(item,index) in floor.product_list" :key="index">
							<image v-if="index" :src="item.image_src" mode=""></image>
						</block>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import SearchLink from '../../components/SearchLink.vue'
	
	export default {
		components:{
			SearchLink
		},
		data() {
			return {
				swiperdata: [],
				catitems: [],
				floordata: []
			}
		},
		onLoad() {
			this.getSwiperdata()
			this.getCatitems()
			this.getFloordata()
		},
		methods: {
			// 获取轮播图片数据
			async getSwiperdata() {
				this.swiperdata = await this.$request({
					url: '/api/public/v1/home/swiperdata'
				})
			},
			// 获取导航栏的数据
			async getCatitems() {
				this.catitems = await this.$request({
					url: '/api/public/v1/home/catitems'
				})
			},
			// 获取楼层的数据
			async getFloordata() {
				this.floordata = await this.$request({
					url: '/api/public/v1/home/floordata'
				})
			}
		}
	}
</script>

<style lang="less">
	swiper {
		height: 340rpx;

		image {
			width: 100%;
			height: 340rpx;
		}
	}

	.nav {
		height: 194rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;

		image {
			height: 140rpx;
			width: 128rpx;
		}
	}

	.floor-item {
		>image {
			height: 88rpx;
			width: 100%;
		}
	}

	.product-list {
		display: flex;
		padding: 20rpx 17rpx;

		>image {
			width: 232rpx;
			height: 386rpx;
		}

		.right {
			flex: 1;
			display: flex;
			flex-wrap: wrap;

			image {
				width: 232rpx;
				height: 188rpx;
				margin: 0 0 10rpx 10rpx;
			}
		}
	}
</style>
