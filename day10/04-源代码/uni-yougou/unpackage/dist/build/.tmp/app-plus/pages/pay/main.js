(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pay/main"],{"1d53":function(t,e,r){"use strict";(function(t){r("ac6c"),r("921b");n(r("66fd"));var e=n(r("8de3"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("6e42")["createPage"])},"33be":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(r("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){i(t,e,r[e])})}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e,r,n,o,s,i){try{var u=t[s](i),a=u.value}catch(c){return void r(c)}u.done?e(a):Promise.resolve(a).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var s=t.apply(e,r);function i(t){u(s,n,o,i,a,"next",t)}function a(t){u(s,n,o,i,a,"throw",t)}i(void 0)})}}var c={data:function(){return{address:wx.getStorageSync("address")||{},goodsList:[]}},onLoad:function(t){this.goodsId=t.goodsId,this.queryGoodsList()},computed:{totalPrice:function(){return this.goodsList.reduce(function(t,e){return t+e.num*e.goods_price},0)},detailAddr:function(){var t=this.address,e=t.provinceName,r=t.cityName,n=t.countyName,o=t.detailInfo;return e+r+n+o},filterGoodsList:function(){var t=[];return this.goodsList.forEach(function(e){t.push({goods_id:e.goods_id,goods_number:e.num,goods_price:e.goods_price})}),t}},methods:{pay:function(){this.goodsList.length?this.address.userName?this.createOrder():wx.showToast({title:"请填写收货地址",icon:"none"}):wx.showToast({title:"请选择要购买的商品",icon:"none"})},createOrder:function(){var t=a(n.default.mark(function t(){var e;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:"/api/public/v1/my/orders/create",isAuth:!0,method:"POST",data:{order_price:this.totalPrice,consignee_addr:this.detailAddr,goods:this.filterGoodsList}});case 2:e=t.sent,this.orderNumber=e.order_number,this.doPay(),!this.goodsId&&this.arrangeCart();case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),arrangeCart:function(){this.$store.commit("arrangeCart")},doPay:function(){var t=a(n.default.mark(function t(){var e,r=this;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:"/api/public/v1/my/orders/req_unifiedorder",isAuth:!0,method:"POST",data:{order_number:this.orderNumber}});case 2:e=t.sent,wx.requestPayment(s({},e.pay,{success:function(t){wx.navigateTo({url:"/pages/order_result/main"})},fail:function(){wx.navigateTo({url:"/pages/order_result/main?orderNumber="+r.orderNumber})}}));case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),queryGoodsList:function(){var t=a(n.default.mark(function t(){var e,r,o;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$store.getters.getCart,e=this.filterCart(e),this.goodsId&&(e=i({},this.goodsId,{num:1,checked:!0})),r=Object.keys(e).join(","),t.next=6,this.$request({url:"/api/public/v1/goods/goodslist?goods_ids="+r});case 6:o=t.sent,o.forEach(function(t){t.num=e[t.goods_id].num,t.checked=e[t.goods_id].checked}),this.goodsList=o;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),filterCart:function(t){var e=s({},t);for(var r in e)e[r].checked||delete e[r];return e},getAddr:function(){var t=this;wx.getSetting({success:function(e){!1===e.authSetting["scope.address"]?wx.showModal({title:"提示",content:"请在设置中允许通讯地址",success:function(t){t.confirm&&wx.openSetting()}}):wx.authorize({scope:"scope.address",success:function(){wx.chooseAddress({success:function(e){t.address=e,wx.setStorageSync("address",e)}})}})}})}}};e.default=c},"64b6":function(t,e,r){},"6c3f":function(t,e,r){"use strict";var n=r("64b6"),o=r.n(n);o.a},"8de3":function(t,e,r){"use strict";r.r(e);var n=r("b0b5"),o=r("dc25");for(var s in o)"default"!==s&&function(t){r.d(e,t,function(){return o[t]})}(s);r("6c3f");var i=r("2877"),u=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},b0b5:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];r.d(e,"a",function(){return n}),r.d(e,"b",function(){return o})},dc25:function(t,e,r){"use strict";r.r(e);var n=r("33be"),o=r.n(n);for(var s in n)"default"!==s&&function(t){r.d(e,t,function(){return n[t]})}(s);e["default"]=o.a}},[["1d53","common/runtime","common/vendor"]]]);