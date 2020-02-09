
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart: wx.getStorageSync('cart') || {}
  },
  mutations: {
    add2Cart (state, goodsId) {
      let cart = state.cart
      // 更新
      // 无论首次还是第N次添加，checked:true;第一次添加num:1,后续num++
      cart[goodsId] = {
        num: cart[goodsId] ? ++cart[goodsId].num : 1,
        checked: true
      }
    },
    // app切后台时，vuex state同步到store里面
    storeCart (state) {
      wx.setStorageSync('cart', state.cart)
    },
    // 购物车tab切换时，把goodsList数据同步给cart
    updateCart (state, goodsList) {
      let cart = {}
      goodsList.forEach(v => {
        cart[v.goods_id] = {
          num: v.num,
          checked: v.checked
        }
      })

      state.cart = cart
    },
    // 创建订单成功，把勾选的商品去掉
    arrangeCart (state) {
      // 取，改，存
      let cart = state.cart
      // 遍历cart,删除掉checked商品、
      for (let key in cart) {
        if (cart[key].checked) {
          delete cart[key]
        }
      }
    }
  },
  getters: {
    getCart (state) {
      return state.cart
    }
  },
  plugins: [createLogger()]
})

export default store
