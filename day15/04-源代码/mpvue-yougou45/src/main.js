import Vue from 'vue'
import App from './App'
import request from '@/utils/request'
import store from '@/store'

// 把$request注册为Vue原型的一个属性
Vue.prototype.$request = request

// 把$store注册为Vue原型的一个属性
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'

// 在mpvue中实例化Vue,不支持传store
const app = new Vue(App)
app.$mount()
