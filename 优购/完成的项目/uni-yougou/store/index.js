import Vue from 'vue'
import Vuex from 'vuex'
// 用于在console里面打印vuex的状态的日志
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const store = new Vuex.Store({
  plugins: [createLogger()],
  state: {
    // 小程序启动时，把数据缓存-->vuex,可以理解成声明为一个全局变量
    cart: wx.getStorageSync('cart') || []
  },
  // 唯一改变state状态的方法
  mutations: {
    // 去掉勾选的商品
    arrangeCart(state){
      let cart = state.cart
      // 取到goods
      state.cart = cart.filter(item => {
        return !item.checked
      })
    },
    // 把购物车商品列表状态的改变同步到state.cart
    updateCart(state, goodsList) {
      state.cart = goodsList.map(item => {
        return {
          goodsId: item.goodsId,
          num: item.num,
          checked: item.checked
        }
      })
    },
    // 怎么调用? this.$store.commit('add2Cart')
    add2Cart(state, curGoodsId) {
      let cart = state.cart

      // 找到购物车里面goodsId为当前商品的id的那个对象
      let goods = cart.find(item => {
        return item.goodsId === curGoodsId
      })

      if (goods) {
        // 非首次添加,商品数量++,总是选中的状态
        goods.num = goods.num + 1
        goods.checked = true
      } else {
        // 第一次添加，数组头部插入一项
        let newGoods = {
          goodsId: curGoodsId,
          num: 1,
          checked: true
        }
        state.cart = [newGoods, ...cart]
      }
    }
  },
  getters:{
    getCartLen(state){
      return state.cart.length
    }
  }
})

export default store
