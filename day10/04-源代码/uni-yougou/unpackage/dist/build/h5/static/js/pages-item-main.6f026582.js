(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-item-main"],{2827:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".iconfont[data-v-1e591962]{font-size:%?40?%}.wrapper[data-v-1e591962]{background-color:#f4f4f4;padding-bottom:%?98?%}.swiper[data-v-1e591962]{height:%?720?%}.swiper-img[data-v-1e591962]{width:100%;height:%?720?%}.goods-info[data-v-1e591962]{padding:%?40?% 0 %?30?% %?20?%;background-color:#fff}.goods-info .price[data-v-1e591962]{color:#eb4450;font-size:%?40?%}.goods-info .name-favo[data-v-1e591962]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:%?78?%;margin-top:%?14?%}.goods-info .name-favo .name[data-v-1e591962]{color:#333;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?28?%;padding-right:%?78?%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.goods-info .name-favo .favo[data-v-1e591962]{border-left:1px solid #ddd;width:%?144?%;color:#999;font-size:%?24?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative}.goods-info .name-favo .favo uni-button[data-v-1e591962]{position:absolute;opacity:0\n}.goods-info .express[data-v-1e591962]{color:#999;font-size:%?24?%;margin-top:%?20?%}.promote[data-v-1e591962]{margin-top:%?20?%}.promote uni-view[data-v-1e591962]{background-color:#fff;height:%?96?%;line-height:%?96?%;font-size:%?28?%;margin-top:%?20?%;padding-left:%?20?%}.promote uni-view.brother[data-v-1e591962]{margin-top:0}.promote uni-view .name[data-v-1e591962]{color:#404040}.promote uni-view .detail[data-v-1e591962]{color:#ff4055;margin-left:%?40?%}.promote uni-view .detail.gray[data-v-1e591962]{color:#dfdfdf}.goods-detail[data-v-1e591962]{margin-top:%?20?%;background-color:#fff}.goods-detail .tabs[data-v-1e591962]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.goods-detail .tabs span[data-v-1e591962]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;color:#404040;font-size:%?22?%;height:%?100?%;line-height:%?100?%;-webkit-box-sizing:border-box;box-sizing:border-box}.goods-detail .tabs span.active[data-v-1e591962]{color:#ff4055;border-bottom:%?10?% solid #ff2644}.fixed-bottom[data-v-1e591962]{position:fixed;left:0;right:0;bottom:0;height:%?98?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#fff}.fixed-bottom .icon-text[data-v-1e591962]{-webkit-box-flex:2;-webkit-flex:2;-ms-flex:2;flex:2;font-size:%?20?%;color:#404040;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative}.fixed-bottom .icon-text uni-button[data-v-1e591962]{position:absolute;opacity:0}.fixed-bottom .btn[data-v-1e591962]{-webkit-box-flex:3;-webkit-flex:3;-ms-flex:3;flex:3;color:#fff;text-align:center;line-height:%?98?%}.fixed-bottom .btn.add-cart-btn[data-v-1e591962]{background-color:#ffb400}.fixed-bottom .btn.buy-btn[data-v-1e591962]{background-color:#ff2d4a}",""])},"3b8d":function(t,e,o){"use strict";o.r(e),o.d(e,"default",function(){return a});var n=o("795b"),i=o.n(n);function r(t,e,o,n,r,a,s){try{var c=t[a](s),l=c.value}catch(f){return void o(f)}c.done?e(l):i.a.resolve(l).then(n,r)}function a(t){return function(){var e=this,o=arguments;return new i.a(function(n,i){var a=t.apply(e,o);function s(t){r(a,n,i,s,c,"next",t)}function c(t){r(a,n,i,s,c,"throw",t)}s(void 0)})}}},"60d5":function(t,e,o){var n=o("2827");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("1d67afb3",n,!0,{sourceMap:!1,shadowMode:!1})},"7a5b":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":"",autoplay:"",circular:"","indicator-color":"#ccc","indicator-active-color":"#fff"}},[t._l(t.goods.pics,function(e,n){return[o("v-uni-swiper-item",{key:n+"_0",on:{click:function(e){e=t.$handleEvent(e),t.prevImg(n)}}},[o("v-uni-image",{staticClass:"swiper-img",attrs:{src:e.pics_big}})],1)]})],2),o("div",{staticClass:"goods-info"},[o("p",{staticClass:"price"},[t._v("￥"+t._s(t.goods.goods_price))]),o("div",{staticClass:"name-favo"},[o("p",{staticClass:"name"},[t._v(t._s(t.goods.goods_name))]),o("div",{staticClass:"favo"},[o("span",{staticClass:"iconfont icon-share"}),o("span",[t._v("分享")]),o("v-uni-button",{attrs:{"open-type":"share"}},[t._v("分享")])],1)]),o("p",{staticClass:"express"},[t._v("快递: 免运费")])]),o("div",{staticClass:"promote"},[o("v-uni-view",[o("v-uni-view",[o("span",{staticClass:"name"},[t._v("促销")]),o("span",{staticClass:"detail"},[t._v("满300减30元")])]),o("v-uni-view",{staticClass:"brother"},[o("span",{staticClass:"name"},[t._v("已选")]),o("span",{staticClass:"detail gray"},[t._v("黑色/S/1件")])])],1)],1),o("div",{staticClass:"goods-detail"},[o("div",{staticClass:"tabs"},t._l(t.tabList,function(e,n){return o("span",{key:n,class:{active:t.activeIndex===n},on:{click:function(e){e=t.$handleEvent(e),t.activeIndex=n}}},[t._v(t._s(e))])}),0),o("div",{staticClass:"main"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.activeIndex,expression:"!activeIndex"}],domProps:{innerHTML:t._s(t.goods.goods_introduce)}}),o("div",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex,expression:"activeIndex"}]},[t._v("商品参数")])])]),o("div",{staticClass:"fixed-bottom"},[o("div",{staticClass:"icon-text"},[o("span",{staticClass:"iconfont icon-kefu"}),o("span",[t._v("联系客服")]),o("v-uni-button",{attrs:{"open-type":"contact"}},[t._v("客服")])],1),o("div",{staticClass:"icon-text",on:{click:function(e){e=t.$handleEvent(e),t.toCart(e)}}},[o("span",{staticClass:"iconfont icon-cart"}),o("span",[t._v("购物车")])]),o("div",{staticClass:"btn add-cart-btn",on:{click:function(e){e=t.$handleEvent(e),t.add2Cart(e)}}},[t._v("加入购物车")]),o("div",{staticClass:"btn buy-btn",on:{click:function(e){e=t.$handleEvent(e),t.toBuy(e)}}},[t._v("立即购买")])])],1)},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},"7d5b":function(t,e,o){"use strict";var n=o("60d5"),i=o.n(n);i.a},"96cf":function(t,e){!function(e){"use strict";var o,n=Object.prototype,i=n.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag",l="object"===typeof t,f=e.regeneratorRuntime;if(f)l&&(t.exports=f);else{f=e.regeneratorRuntime=l?t.exports:{},f.wrap=y;var u="suspendedStart",d="suspendedYield",p="executing",v="completed",h={},g={};g[a]=function(){return this};var b=Object.getPrototypeOf,m=b&&b(b(N([])));m&&m!==n&&i.call(m,a)&&(g=m);var x=L.prototype=k.prototype=Object.create(g);_.prototype=x.constructor=L,L.constructor=_,L[c]=_.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},f.awrap=function(t){return{__await:t}},C(E.prototype),E.prototype[s]=function(){return this},f.AsyncIterator=E,f.async=function(t,e,o,n){var i=new E(y(t,e,o,n));return f.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},C(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var o in t)e.push(o);return e.reverse(),function o(){while(e.length){var n=e.pop();if(n in t)return o.value=n,o.done=!1,o}return o.done=!0,o}},f.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=o,this.done=!1,this.delegate=null,this.method="next",this.arg=o,this.tryEntries.forEach(z),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=o)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return s.type="throw",s.arg=t,e.next=n,i&&(e.method="next",e.arg=o),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),z(o),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var n=o.completion;if("throw"===n.type){var i=n.arg;z(o)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=o),h}}}function y(t,e,o,n){var i=e&&e.prototype instanceof k?e:k,r=Object.create(i.prototype),a=new G(n||[]);return r._invoke=j(t,o,a),r}function w(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(n){return{type:"throw",arg:n}}}function k(){}function _(){}function L(){}function C(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){function e(o,n,r,a){var s=w(t[o],t,n);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&i.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,r,a)},function(t){e("throw",t,r,a)}):Promise.resolve(l).then(function(t){c.value=t,r(c)},function(t){return e("throw",t,r,a)})}a(s.arg)}var o;function n(t,n){function i(){return new Promise(function(o,i){e(t,n,o,i)})}return o=o?o.then(i,i):i()}this._invoke=n}function j(t,e,o){var n=u;return function(i,r){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===i)throw r;return P()}o.method=i,o.arg=r;while(1){var a=o.delegate;if(a){var s=I(a,o);if(s){if(s===h)continue;return s}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(n===u)throw n=v,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n=p;var c=w(t,e,o);if("normal"===c.type){if(n=o.done?v:d,c.arg===h)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(n=v,o.method="throw",o.arg=c.arg)}}}function I(t,e){var n=t.iterator[e.method];if(n===o){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=o,I(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var i=w(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var r=i.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=o),e.delegate=null,h):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){while(++n<t.length)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=o,e.done=!0,e};return r.next=r}}return{next:P}}function P(){return{value:o,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a16b:function(t,e,o){"use strict";var n=o("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("96cf");var i=n(o("3b8d"));o("ac6a");var r={data:function(){return{goods:{},activeIndex:0,tabList:["图文介绍","规格参数"]}},onLoad:function(t){var e=t.goodsId;this.queryGoods(e)},onShareAppMessage:function(){return{title:this.goods.goods_name,imageUrl:this.goods.pics[0].pics_big}},methods:{toBuy:function(){wx.navigateTo({url:"/pages/pay/main?goodsId="+this.goods.goods_id})},add2Cart:function(){this.$store.commit("add2Cart",this.goods.goods_id)},toCart:function(){wx.switchTab({url:"/pages/cart/main"})},prevImg:function(t){var e=[];this.goods.pics.forEach(function(t){e.push(t.pics_big)}),wx.previewImage({current:e[t],urls:e})},queryGoods:function(){var t=(0,i.default)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:"/api/public/v1/goods/detail",data:{goods_id:e}});case 2:this.goods=t.sent;case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}};e.default=r},bfab:function(t,e,o){"use strict";o.r(e);var n=o("7a5b"),i=o("fcc0");for(var r in i)"default"!==r&&function(t){o.d(e,t,function(){return i[t]})}(r);o("7d5b");var a=o("2877"),s=Object(a["a"])(i["default"],n["a"],n["b"],!1,null,"1e591962",null);e["default"]=s.exports},fcc0:function(t,e,o){"use strict";o.r(e);var n=o("a16b"),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e["default"]=i.a}}]);