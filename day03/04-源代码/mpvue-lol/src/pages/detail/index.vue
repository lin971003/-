<template>
  <div>
    <swiper indicator-dots autoplay circular>
  <block v-for="(item, index) in hero.bgs" :key="index">
    <swiper-item>
      <image :src="item"></image>
    </swiper-item>
  </block>
</swiper>

<view class="content">
  <view class="left">
    <view class="title">{{hero.title}}</view>
    <view class="name">{{hero.name}}</view>

    <!-- 标签 -->
    <view class="tags">
      <text v-for="(item, index) in hero.tags" :key="index">{{item}}</text>
    </view>

    <!-- 能力 -->
    <view class="ability">
      <view class="item">
        <text>生存能力</text>
        <progress :percent="hero.Ability.life" stroke-width="12" activeColor="#1ec76b" active duration="10" backgroundColor="#363636"></progress>
      </view>
      <view class="item">
        <text>物理攻击</text>
         <progress :percent="hero.Ability.physical" stroke-width="12" activeColor="#f2c40c" active duration="10" backgroundColor="#363636"></progress>
      </view>
      <view class="item">
        <text>魔法攻击</text>
         <progress :percent="hero.Ability.magic" stroke-width="12" activeColor="#f2a709" active duration="10" backgroundColor="#363636"></progress>
      </view>
      <view class="item">
        <text>操作难度</text>
         <progress :percent="hero.Ability.difficulty" stroke-width="12" activeColor="#cb8eff" active duration="10" backgroundColor="#363636"></progress>
      </view>
    </view>
  </view>
  <view class="right">
  {{hero.story}}
  </view>
</view>
  </div>
</template>

<script>
import heroDetailArr from '../../data/lol_details_duowan'
export default {
  data () {
    return {
      hero: {}
    }
  },
  onLoad (options) {
    this.hero = heroDetailArr.find(v => {
      // false==undefined
      return v.id === options.id
    })
    // 动态设置导航栏文案
    wx.setNavigationBarTitle({ title: `${this.hero.title}-${this.hero.name}` })
  }
}
</script>

<style>
page{
  background-color: #363636;
}
swiper image{
  width: 100%;
}

.content{
  display: flex;
  color: #fff;
  font-size: 12px;
  padding:12px 10px;
}

.left{
  width: 191px;
}
.right{
  flex:1;
}

.title{
  font-size: 14px;
}
.name{
  font-size: 20px;
}

.tags{
  margin:12px 0 18px;
}
.tags text{
  width: 30px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  background-color: #029b7f;
  border-radius: 4px;
  margin-left:4px;
  display: inline-block;
}

.ability .item{
  display: flex;
  margin-bottom: 2px;
}

.ability .item progress{
  width: 100px;
  margin-left: 6px;
}
</style>