(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pay-main"],{"356c":function(t,e,r){"use strict";var n=r("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(r("a4bb")),o=n(r("bd86")),a=n(r("cebc"));r("96cf");var s=n(r("3b8d"));r("ac6a");var c={data:function(){return{address:wx.getStorageSync("address")||{},goodsList:[]}},onLoad:function(t){this.goodsId=t.goodsId,this.queryGoodsList()},computed:{totalPrice:function(){return this.goodsList.reduce(function(t,e){return t+e.num*e.goods_price},0)},detailAddr:function(){var t=this.address,e=t.provinceName,r=t.cityName,n=t.countyName,i=t.detailInfo;return e+r+n+i},filterGoodsList:function(){var t=[];return this.goodsList.forEach(function(e){t.push({goods_id:e.goods_id,goods_number:e.num,goods_price:e.goods_price})}),t}},methods:{pay:function(){this.goodsList.length?this.address.userName?this.createOrder():wx.showToast({title:"请填写收货地址",icon:"none"}):wx.showToast({title:"请选择要购买的商品",icon:"none"})},createOrder:function(){var t=(0,s.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:"/api/public/v1/my/orders/create",isAuth:!0,method:"POST",data:{order_price:this.totalPrice,consignee_addr:this.detailAddr,goods:this.filterGoodsList}});case 2:e=t.sent,this.orderNumber=e.order_number,this.doPay(),!this.goodsId&&this.arrangeCart();case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),arrangeCart:function(){this.$store.commit("arrangeCart")},doPay:function(){var t=(0,s.default)(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:"/api/public/v1/my/orders/req_unifiedorder",isAuth:!0,method:"POST",data:{order_number:this.orderNumber}});case 2:e=t.sent,wx.requestPayment((0,a.default)({},e.pay,{success:function(t){wx.navigateTo({url:"/pages/order_result/main"})},fail:function(){wx.navigateTo({url:"/pages/order_result/main?orderNumber="+r.orderNumber})}}));case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),queryGoodsList:function(){var t=(0,s.default)(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$store.getters.getCart,e=this.filterCart(e),this.goodsId&&(e=(0,o.default)({},this.goodsId,{num:1,checked:!0})),r=(0,i.default)(e).join(","),t.next=6,this.$request({url:"/api/public/v1/goods/goodslist?goods_ids="+r});case 6:n=t.sent,n.forEach(function(t){t.num=e[t.goods_id].num,t.checked=e[t.goods_id].checked}),this.goodsList=n;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),filterCart:function(t){var e=(0,a.default)({},t);for(var r in e)e[r].checked||delete e[r];return e},getAddr:function(){var t=this;wx.getSetting({success:function(e){!1===e.authSetting["scope.address"]?wx.showModal({title:"提示",content:"请在设置中允许通讯地址",success:function(t){t.confirm&&wx.openSetting()}}):wx.authorize({scope:"scope.address",success:function(){wx.chooseAddress({success:function(e){t.address=e,wx.setStorageSync("address",e)}})}})}})}}};e.default=c},"3b8d":function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return a});var n=r("795b"),i=r.n(n);function o(t,e,r,n,o,a,s){try{var c=t[a](s),u=c.value}catch(d){return void r(d)}c.done?e(u):i.a.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new i.a(function(n,i){var a=t.apply(e,r);function s(t){o(a,n,i,s,c,"next",t)}function c(t){o(a,n,i,s,c,"throw",t)}s(void 0)})}}},7644:function(t,e,r){e=t.exports=r("2350")(!1),e.push([t.i,".address-wrapper[data-v-0428b3f6]{background-color:#fff}.address[data-v-0428b3f6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:%?44?% %?30?% %?48?% %?20?%}.address .receiver[data-v-0428b3f6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:%?50?%;position:relative}.address .receiver .phone-num[data-v-0428b3f6]{margin-right:%?40?%}.address .receiver .icon-arrow-right[data-v-0428b3f6]{position:absolute;top:%?8?%;right:0;color:#999}.choose-address[data-v-0428b3f6]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?44?% %?30?% %?48?% %?20?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.choose-address .icon-arrow-right[data-v-0428b3f6]{color:#999}.flower img[data-v-0428b3f6]{height:%?16?%;width:100%;display:block}.goods-item[data-v-0428b3f6]{height:%?206?%;background-color:#fff;border-top:%?1?% solid #ddd;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.goods-item img[data-v-0428b3f6]{width:%?160?%;height:%?160?%;margin-left:%?30?%}.goods-item .right[data-v-0428b3f6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:0 %?20?% 0 %?18?%}.goods-item .right .btm[data-v-0428b3f6]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?40?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.goods-item .right .btm .price[data-v-0428b3f6]{color:#eb4450}.goods-item .right .btm .price>span[data-v-0428b3f6]{font-size:24px}.goods-item .right .btm .goods-num[data-v-0428b3f6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.goods-item .right .btm .goods-num uni-button[data-v-0428b3f6]{width:%?60?%;height:%?50?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border:%?4?% solid #666}.goods-item .right .btm .goods-num span[data-v-0428b3f6]{margin:0 %?30?%}.goods-list[data-v-0428b3f6]{position:absolute;bottom:%?98?%;top:%?243?%;width:100%;overflow:auto;padding-bottom:%?60?%;background-color:#f4f4f4}.bottom-fixed[data-v-0428b3f6]{position:absolute;height:%?98?%;left:0;right:0;bottom:0;background-color:#1aad19;color:#fff;line-height:%?98?%;text-align:center}",""])},"7e6a":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"address-wrapper"},[t.address.userName?r("div",{staticClass:"address"},[r("div",{staticClass:"receiver"},[r("p",{staticClass:"name"},[t._v("收货人："+t._s(t.address.userName))]),r("p",{staticClass:"phone-num"},[t._v(t._s(t.address.telNumber))]),r("span",{staticClass:"iconfont icon-arrow-right"})]),r("p",{staticClass:"address-txt"},[t._v("收货地址："+t._s(t.detailAddr))])]):r("div",{staticClass:"choose-address",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getAddr.apply(void 0,arguments)}}},[r("p",[t._v("请选择地址")]),r("span",{staticClass:"iconfont icon-arrow-right"})]),t._m(0)]),r("v-uni-view",{staticClass:"goods-list"},t._l(t.goodsList,function(e){return r("v-uni-view",{key:e.goods_id,staticClass:"goods-item"},[r("img",{attrs:{src:e.goods_small_logo,alt:""}}),r("div",{staticClass:"right"},[r("p",{staticClass:"text-line2"},[t._v(t._s(e.goods_name))]),r("div",{staticClass:"btm"},[r("span",{staticClass:"price"},[t._v("￥"),r("span",[t._v(t._s(e.goods_price))]),t._v(".00")]),r("div",{staticClass:"goods-num"},[r("span",[t._v(t._s(e.num))])])])])])}),1),r("div",{staticClass:"bottom-fixed",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pay.apply(void 0,arguments)}}},[t._v("微信支付("+t._s(t.totalPrice)+".00)")])],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flower"},[r("img",{attrs:{src:"/static/images/cart_border@2x.png"}})])}];r.d(e,"a",function(){return n}),r.d(e,"b",function(){return i})},"8de3":function(t,e,r){"use strict";r.r(e);var n=r("7e6a"),i=r("dc25");for(var o in i)"default"!==o&&function(t){r.d(e,t,function(){return i[t]})}(o);r("de97");var a=r("2877"),s=Object(a["a"])(i["default"],n["a"],n["b"],!1,null,"0428b3f6",null);e["default"]=s.exports},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"===typeof t,d=e.regeneratorRuntime;if(d)u&&(t.exports=d);else{d=e.regeneratorRuntime=u?t.exports:{},d.wrap=w;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",g={},v={};v[a]=function(){return this};var b=Object.getPrototypeOf,m=b&&b(b(G([])));m&&m!==n&&i.call(m,a)&&(v=m);var y=L.prototype=k.prototype=Object.create(v);_.prototype=y.constructor=L,L.constructor=_,L[c]=_.displayName="GeneratorFunction",d.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},d.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},d.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[s]=function(){return this},d.AsyncIterator=j,d.async=function(t,e,r,n){var i=new j(w(t,e,r,n));return d.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(y),y[c]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},d.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},d.values=G,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return s.type="throw",s.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}}}function w(t,e,r,n){var i=e&&e.prototype instanceof k?e:k,o=Object.create(i.prototype),a=new S(n||[]);return o._invoke=C(t,r,a),o}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function k(){}function _(){}function L(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){function e(r,n,o,a){var s=x(t[r],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},function(t){return e("throw",t,o,a)})}a(s.arg)}var r;function n(t,n){function i(){return new Promise(function(r,i){e(t,n,r,i)})}return r=r?r.then(i,i):i()}this._invoke=n}function C(t,e,r){var n=l;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return T()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var s=N(a,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=x(t,e,r);if("normal"===c.type){if(n=r.done?p:f,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function N(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,N(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=x(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function G(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){while(++n<t.length)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},bd86:function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return o});var n=r("85f2"),i=r.n(n);function o(t,e,r){return e in t?i()(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},cebc:function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return d});var n=r("268f"),i=r.n(n),o=r("e265"),a=r.n(o),s=r("a4bb"),c=r.n(s),u=r("bd86");function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=c()(r);"function"===typeof a.a&&(n=n.concat(a()(r).filter(function(t){return i()(r,t).enumerable}))),n.forEach(function(e){Object(u["default"])(t,e,r[e])})}return t}},dc25:function(t,e,r){"use strict";r.r(e);var n=r("356c"),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},de97:function(t,e,r){"use strict";var n=r("f68c"),i=r.n(n);i.a},f68c:function(t,e,r){var n=r("7644");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("4f06").default;i("ca7ccba8",n,!0,{sourceMap:!1,shadowMode:!1})}}]);