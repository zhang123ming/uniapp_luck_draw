(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0838":function(t,e,n){"use strict";n.r(e);var a=n("3719"),i=n("7ac7");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var r,o=n("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=c.exports},"0de9":function(t,e,n){"use strict";function a(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){return"string"===typeof __channelId__&&__channelId__}function s(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];console[t].apply(console,n)}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var s=e.shift();if(i())return e.push(e.pop().replace("at ","uni-app:///")),console[s].apply(console,e);var r=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(i){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=a(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),o="";if(r.length>1){var c=r.pop();o=r.join("---COMMA---"),0===c.indexOf(" at ")?o+=c:o+="---COMMA---"+c}else o=r[0];console[s](o)}n.r(e),n.d(e,"log",(function(){return s})),n.d(e,"default",(function(){return r}))},"1be1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},"2af0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{awardsConfig:{chance:!0,awards:[{index:0,name:"10元红包",type:0},{index:1,name:"谢谢参与",type:1},{index:2,name:"50元红包",type:0},{index:3,name:"谢谢参与",type:1},{index:4,name:"100元话费",type:0},{index:5,name:"谢谢参与",type:1},{index:6,name:"20元红包",type:0},{index:7,name:"谢谢参与",type:1}]},awardsList:{},animationData:{},btnDisabled:"",chishu:2}},onPullDownRefresh:function(){var t=this;setTimeout((function(){uni.stopPullDownRefresh(),t.chishu=2}),1e3)},onLoad:function(){uni.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#A83FDB",animation:{duration:400,timingFunc:"easeIn"}})},onReady:function(t){this.drawAwardRoundel(),uni.showShareMenu({withShareTicket:!0})},methods:{drawAwardRoundel:function(){for(var t=this.awardsConfig.awards,e=[],n=1/t.length*360,a=0;a<t.length;a++)e.push({turn:a*n+"deg",lineTurn:a*n+n/2+"deg",award:t[a].name});this.btnDisabled=this.awardsConfig.chance?"":"disabled",this.awardsList=e},playReward:function(){if(0!=this.chishu){var t=this.awardsConfig.awards,e=Math.round(Math.random()*(t.length-1)),n=8,a=4e3;this.runDeg=this.runDeg||0,this.runDeg=this.runDeg+(360-this.runDeg%360)+(360*n-e*(360/t.length));var i=uni.createAnimation({duration:a,timingFunction:"ease"});i.rotate(this.runDeg).step(),this.animationData=i.export(),this.btnDisabled="disabled";var s=this.awardsConfig,r=s.awards[e].type;this.chishu=this.chishu-1,0==r?setTimeout(function(){uni.showModal({title:"恭喜",content:"获得"+s.awards[e].name,showCancel:!1}),this.btnDisabled=""}.bind(this),a):setTimeout(function(){uni.showModal({title:"很遗憾",content:"没中奖 "+s.awards[e].name,showCancel:!1}),this.btnDisabled=""}.bind(this),a)}else uni.showToast({title:"抽奖次数已经用完",icon:"none"})}}};e.default=a},3719:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:t._$s(0,"sc","container"),attrs:{_i:0}},[a("view",{staticClass:t._$s(1,"sc","header"),attrs:{_i:1}},[a("view",{staticClass:t._$s(2,"sc","header-title"),attrs:{_i:2}})]),a("view",{staticClass:t._$s(3,"sc","main"),attrs:{_i:3}},[a("view",{staticClass:t._$s(4,"sc","canvas-container"),attrs:{_i:4}},[a("view",{staticClass:t._$s(5,"sc","canvas-content"),attrs:{animation:t._$s(5,"a-animation",t.animationData),_i:5}},[a("view",{staticClass:t._$s(6,"sc","canvas-line"),attrs:{_i:6}},t._l(t._$s(7,"f",{forItems:t.awardsList}),(function(e,n,i,s){return a("view",{key:t._$s(7,"f",{forIndex:i,key:n}),staticClass:t._$s("7-"+s,"sc","canvas-litem"),style:t._$s("7-"+s,"s",[{transform:"rotate("+e.lineTurn+")"}]),attrs:{_i:"7-"+s}})})),0),a("view",{staticClass:t._$s(8,"sc","canvas-list"),attrs:{_i:8}},t._l(t._$s(9,"f",{forItems:t.awardsList}),(function(e,i,s,r){return a("view",{key:t._$s(9,"f",{forIndex:s,key:i}),staticClass:t._$s("9-"+r,"sc","canvas-item"),attrs:{_i:"9-"+r}},[a("view",{staticClass:t._$s("10-"+r,"sc","canvas-item-text"),style:t._$s("10-"+r,"s",[{transform:"rotate("+e.turn+")"}]),attrs:{_i:"10-"+r}},[a("text",[t._v(t._$s("11-"+r,"t0-0",t._s(e.award)))]),a("image",{staticClass:t._$s("12-"+r,"sc","canvas-item-text-img"),attrs:{src:t._$s("12-"+r,"a-src","/"+n("f3a6")),_i:"12-"+r}})])])})),0)]),a("view",{staticClass:t._$s(13,"sc","canvas-btn"),class:t._$s(13,"c",t.btnDisabled),attrs:{_i:13},on:{click:t.playReward}}),a("view",{staticClass:t._$s(14,"sc","canvas-btn-table"),attrs:{_i:14}},[t._v(t._$s(14,"t0-0",t._s(t.chishu)))])])])])},s=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}))},"3bb1":function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("0838").default)}))},"7ac7":function(t,e,n){"use strict";n.r(e);var a=n("2af0"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},8293:function(t,e,n){"use strict";n.r(e);var a=n("d174");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var s,r,o,c,u=n("f0c5"),f=Object(u["a"])(a["default"],s,r,!1,null,null,null,!1,o,c);e["default"]=f.exports},"8bbf":function(t,e){t.exports=Vue},d174:function(t,e,n){"use strict";n.r(e);var a=n("1be1"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},f0c5:function(t,e,n){"use strict";function a(t,e,n,a,i,s,r,o,c,u){var f,l="function"===typeof t?t.options:t;if(c){l.components||(l.components={});var d=Object.prototype.hasOwnProperty;for(var p in c)d.call(c,p)&&!d.call(l.components,p)&&(l.components[p]=c[p])}if(u&&((u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(l.mixins||(l.mixins=[])).push(u)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),a&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),r?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=f):i&&(f=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),f)if(l.functional){l._injectStyles=f;var h=l.render;l.render=function(t,e){return f.call(e),h(t,e)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,f):[f]}return{exports:t,options:l}}n.d(e,"a",(function(){return a}))},f3a6:function(t,e){t.exports="static/gift.png"},f699:function(t,e,n){"use strict";n("3bb1");var a=s(n("8bbf")),i=s(n("8293"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}a.default.config.productionTip=!1,i.default.mpType="app";var u=new a.default(o({},i.default));u.$mount()}},[["f699","app-config"]]]);