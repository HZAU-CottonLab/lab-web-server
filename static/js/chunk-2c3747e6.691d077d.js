(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c3747e6"],{"119a":function(e,t,n){"use strict";n("67ae")},"177c":function(e,t,n){},"1c08":function(e,t,n){},"221d":function(e,t,n){"use strict";n("674a")},"227f":function(e,t,n){"use strict";n("177c")},"2ca0":function(e,t,n){"use strict";var c=n("23e7"),r=n("06cf").f,o=n("50c4"),a=n("577e"),i=n("5a34"),l=n("1d80"),u=n("ab13"),s=n("c430"),b="".startsWith,d=Math.min,f=u("startsWith"),O=!s&&!f&&!!function(){var e=r(String.prototype,"startsWith");return e&&!e.writable}();c({target:"String",proto:!0,forced:!O&&!f},{startsWith:function(e){var t=a(l(this));i(e);var n=o(d(arguments.length>1?arguments[1]:void 0,t.length)),c=a(e);return b?b.call(t,c,n):t.slice(n,n+c.length)===c}})},"312b":function(e,t,n){},"3fe8":function(e,t,n){"use strict";n("6292")},6292:function(e,t,n){},"674a":function(e,t,n){},"67ae":function(e,t,n){},"788f":function(e,t,n){"use strict";n("1c08")},"9a26":function(e,t,n){},"9ee5":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=(e,t)=>{const n=e.__vccOpts||e;for(const[c,r]of t)n[c]=r;return n}},"9fd3":function(e,t,n){"use strict";n("312b")},b3f4:function(e,t,n){"use strict";n("dd2c")},bd11:function(e,t){e.exports=c;var n=/\((?!\?)/g;function c(e,t,r){r=r||{},t=t||[];var o,a=r.strict,i=!1!==r.end,l=r.sensitive?"":"i",u=0,s=t.length,b=0,d=0;if(e instanceof RegExp){while(o=n.exec(e.source))t.push({name:d++,optional:!1,offset:o.index});return e}if(Array.isArray(e))return e=e.map((function(e){return c(e,t,r).source})),new RegExp("(?:"+e.join("|")+")",l);e=("^"+e+(a?"":"/"===e[e.length-1]?"?":"/?")).replace(/\/\(/g,"/(?:").replace(/([\/\.])/g,"\\$1").replace(/(\\\/)?(\\\.)?:(\w+)(\(.*?\))?(\*)?(\?)?/g,(function(e,n,c,r,o,a,i,l){n=n||"",c=c||"",o=o||"([^\\/"+c+"]+?)",i=i||"",t.push({name:r,optional:!!i,offset:l+u});var s=(i?"":n)+"(?:"+c+(i?n:"")+o+(a?"((?:[\\/"+c+"].+?)?)":"")+")"+i;return u+=s.length-e.length,s})).replace(/\*/g,(function(e,n){var c=t.length;while(c-- >s&&t[c].offset>n)t[c].offset+=3;return"(.*)"}));while(o=n.exec(e)){var f=0,O=o.index;while("\\"===e.charAt(--O))f++;f%2!==1&&((s+b===t.length||t[s+b].offset>o.index)&&t.splice(s+b,0,{name:d++,optional:!1,offset:o.index}),b++)}return e+=i?"$":"/"===e[e.length-1]?"":"(?=\\/|$)",new RegExp(e,l)}},c4bc:function(e,t,n){"use strict";n("e908")},ca2d:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=n("6c02");function o(e,t,n,r,o,a){var i=Object(c["resolveComponent"])("SiderbarItem"),l=Object(c["resolveComponent"])("el-menu"),u=Object(c["resolveComponent"])("el-scrollbar");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])({"has-logo":a.showLogo})},[Object(c["createVNode"])(u,{"wrap-class":"scrollbar-wrapper"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{collapse:o.isCollapse,"unique-opened":!0,"default-active":o.activeMenu,"background-color":"#152d3d","text-color":"#C0C4CC","active-text-color":"#fff",mode:"vertical"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.routes,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(i,{key:e.key,item:e,"base-path":e.path,"is-collapse":o.isCollapse},null,8,["item","base-path","is-collapse"])})),128))]})),_:1},8,["collapse","default-active"])]})),_:1})],2)}var a=n("5530"),i=n("5502");n("b0c0");Object(c["pushScopeId"])("data-v-5c459d51");var l={key:1};function u(e,t,n,r,o,a){var i=Object(c["resolveComponent"])("svg-icon"),u=Object(c["resolveComponent"])("el-menu-item"),s=Object(c["resolveComponent"])("SidebarItemLink"),b=Object(c["resolveComponent"])("siderbar-item"),d=Object(c["resolveComponent"])("el-sub-menu");return n.item.meta&&n.item.meta.hidden?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:0,class:Object(c["normalizeClass"])({"simple-mode":n.isCollapse,"first-level":n.isFirstLevel})},[a.alwaysShowRootMenu||!a.theOnlyOneChild||a.theOnlyOneChild.child?(Object(c["openBlock"])(),Object(c["createBlock"])(d,{key:1,index:a.resolvePath(n.item.path),"popper-append-to-body":""},{title:Object(c["withCtx"])((function(){return[n.item.meta&&n.item.meta.icon?(Object(c["openBlock"])(),Object(c["createBlock"])(i,{key:0,name:n.item.meta.icon},null,8,["name"])):Object(c["createCommentVNode"])("",!0),n.item.meta&&n.item.meta.title?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",l,Object(c["toDisplayString"])(n.item.meta.title),1)):Object(c["createCommentVNode"])("",!0)]})),default:Object(c["withCtx"])((function(){return[n.item.children?(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],{key:0},Object(c["renderList"])(n.item.children,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(b,{key:e.name,item:e,"is-collapse":n.isCollapse,"base-path":a.resolvePath(e.path)},null,8,["item","is-collapse","base-path"])})),128)):Object(c["createCommentVNode"])("",!0)]})),_:1},8,["index"])):(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],{key:0},[a.theOnlyOneChild.meta?(Object(c["openBlock"])(),Object(c["createBlock"])(s,{key:0,to:a.resolvePath(a.theOnlyOneChild.path)},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{index:a.resolvePath(a.theOnlyOneChild.path)},Object(c["createSlots"])({default:Object(c["withCtx"])((function(){return[a.theOnlyOneChild.meta.icon?(Object(c["openBlock"])(),Object(c["createBlock"])(i,{key:0,name:a.theOnlyOneChild.meta.icon},null,8,["name"])):Object(c["createCommentVNode"])("",!0)]})),_:2},[a.theOnlyOneChild.meta.title?{name:"title",fn:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(a.theOnlyOneChild.meta.title),1)]}))}:void 0]),1032,["index"])]})),_:1},8,["to"])):Object(c["createCommentVNode"])("",!0)],64))],2))}Object(c["popScopeId"])();var s=n("b85c"),b=(n("4de4"),n("df7c")),d=n.n(b),f=(n("d3b7"),function(e){return/^(https?:|mailto:|tel:)/.test(e)}),O=["href"];function m(e,t,n,r,o,a){return a.isExternal(n.to)?(Object(c["openBlock"])(),Object(c["createElementBlock"])("a",{key:0,href:n.to,target:"_blank",rel:"noopener"},[Object(c["renderSlot"])(e.$slots,"default")],8,O)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:1,onClick:t[0]||(t[0]=function(){return a.push&&a.push.apply(a,arguments)})},[Object(c["renderSlot"])(e.$slots,"default")]))}var j={props:{to:{type:String,required:!0}},data:function(){var e=Object(r["d"])();return{router:e}},methods:{push:function(){this.router.push(this.to).catch((function(e){console.warn(e)}))},isExternal:f}},p=n("d959"),h=n.n(p);const v=h()(j,[["render",m]]);var g=v,k={name:"SiderbarItem",props:{item:{type:Object,required:!0},isCollapse:{type:Boolean,required:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{type:String,required:!0}},components:{SidebarItemLink:g},computed:{alwaysShowRootMenu:function(){return!(!this.item.meta||!this.item.meta.alwaysShow)},showingChildNumber:function(){if(this.item.children){var e=this.item.children.filter((function(e){return!(e.meta&&e.meta.hidden)}));return e.length}return 0},theOnlyOneChild:function(){if(this.showingChildNumber>1)return null;if(this.item.children){var e,t=Object(s["a"])(this.item.children);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(!n.meta||!n.meta.hidden)return n}}catch(c){t.e(c)}finally{t.f()}}return Object(a["a"])(Object(a["a"])({},this.item),{},{path:""})}},methods:{isExternal:f,resolvePath:function(e){return this.isExternal(e)?e:f(this.basePath)?this.basePath:d.a.resolve(this.basePath,e)}}};n("e2e7");const w=h()(k,[["render",u],["__scopeId","data-v-5c459d51"]]);var C=w,V={name:"sider-bar",data:function(){return{isCollapse:!1,activeMenu:"0"}},components:{SiderbarItem:C},computed:Object(a["a"])({showLogo:function(){return!1}},Object(i["f"])({routes:function(e){return e.permission.routes},roles:function(e){return e.user}})),beforeMount:function(){}};n("788f"),n("b3f4");const B=h()(V,[["render",o],["__scopeId","data-v-eaa33bf4"]]);var x=B,y=n("9ee5");const E=Object(c["defineComponent"])({name:"Fold"}),S={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},N=Object(c["createElementVNode"])("path",{fill:"currentColor",d:"M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"},null,-1),_=[N];function T(e,t,n,r,o,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("svg",S,_)}var z=Object(y["a"])(E,[["render",T]]);const M=Object(c["defineComponent"])({name:"Expand"}),F={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},P=Object(c["createElementVNode"])("path",{fill:"currentColor",d:"M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"},null,-1),L=[P];function A(e,t,n,r,o,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("svg",F,L)}var I=Object(y["a"])(M,[["render",A]]),R={props:{isActive:{type:Boolean,default:!1}},emits:["toggle-click"],setup:function(e,t){var n=t.emit,r=function(){n("toggle-click")};return function(t,n){var o=Object(c["resolveComponent"])("el-icon");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{onClick:r},[Object(c["createVNode"])(o,{size:20,class:"icon"},{default:Object(c["withCtx"])((function(){return[e.isActive?(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["unref"])(z),{key:0})):(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["unref"])(I),{key:1}))]})),_:1})])}}};n("221d");const q=h()(R,[["__scopeId","data-v-114c9953"]]);var D=q;const H=Object(c["defineComponent"])({name:"FullScreen"}),$={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},W=Object(c["createElementVNode"])("path",{fill:"currentColor",d:"m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"},null,-1),G=[W];function J(e,t,n,r,o,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("svg",$,G)}var U=Object(y["a"])(H,[["render",J]]),X=n("4995"),Y=n("3835"),K=(n("ddb0"),[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]]),Q=function(){var e,t=K[0],n={},c=Object(s["a"])(K);try{for(c.s();!(e=c.n()).done;){var r=e.value,o=null===r||void 0===r?void 0:r[1];if(o in document){var a,i=Object(s["a"])(r.entries());try{for(i.s();!(a=i.n()).done;){var l=Object(Y["a"])(a.value,2),u=l[0],b=l[1];n[t[u]]=b}}catch(d){i.e(d)}finally{i.f()}return n}}}catch(d){c.e(d)}finally{c.f()}return!1}(),Z={change:Q.fullscreenchange,error:Q.fullscreenerror},ee={request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.documentElement,t=arguments.length>1?arguments[1]:void 0;return new Promise((function(n,c){var r=function e(){ee.off("change",e),n()};ee.on("change",r);var o=e[Q.requestFullscreen](t);o instanceof Promise&&o.then(r).catch(c)}))},exit:function(){return new Promise((function(e,t){if(ee.isFullscreen){var n=function t(){ee.off("change",t),e()};ee.on("change",n);var c=document[Q.exitFullscreen]();c instanceof Promise&&c.then(n).catch(t)}else e()}))},toggle:function(e,t){return ee.isFullscreen?ee.exit():ee.request(e,t)},onchange:function(e){ee.on("change",e)},onerror:function(e){ee.on("error",e)},on:function(e,t){var n=Z[e];n&&document.addEventListener(n,t,!1)},off:function(e,t){var n=Z[e];n&&document.removeEventListener(n,t,!1)},raw:Q};Object.defineProperties(ee,{isFullscreen:{get:function(){return Boolean(document[Q.fullscreenElement])}},element:{enumerable:!0,get:function(){var e;return null!==(e=document[Q.fullscreenElement])&&void 0!==e?e:void 0}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[Q.fullscreenEnabled])}}}),Q||(ee={isEnabled:!1});var te=ee,ne={setup:function(e){var t=function(){console.log(te),te.isEnabled?te.toggle():X["a"].warning("您的浏览器无法工作")};return function(e,n){var r=Object(c["resolveComponent"])("el-icon"),o=Object(c["resolveComponent"])("el-tooltip");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{onClick:t},[Object(c["createVNode"])(o,{effect:"dark",content:"全屏",placement:"bottom"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(r,{size:20},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(U))]})),_:1})]})),_:1})])}}};const ce=ne;var re=ce,oe=(n("2ca0"),n("bd11"));Object(c["pushScopeId"])("data-v-4ba0a8a0");var ae={key:0,class:"no-redirect"},ie=["onClick"];Object(c["popScopeId"])();var le={setup:function(e){var t=Object(r["c"])(),n=Object(r["d"])(),o=function(e){var n=t.params,c=Object(oe["compile"])(e);return c(n)},a=Object(c["reactive"])({breadcrumbs:[],getBreadcrumb:function(){var e=t.matched.filter((function(e){return e.meta&&e.meta.title}));a.breadcrumbs=e.filter((function(e){return e.meta&&e.meta.title&&!1!==e.meta.breadcrumb}))},handleLink:function(e){var t=e.redirect,c=e.path;t?n.push(t).catch((function(e){console.warn(e)})):n.push(o(c)).catch((function(e){console.warn(e)}))}});return Object(c["watch"])((function(){return t.path}),(function(e){e.startsWith("/redirect/")||a.getBreadcrumb()})),Object(c["onBeforeMount"])((function(){a.getBreadcrumb()})),function(e,t){var n=Object(c["resolveComponent"])("el-breadcrumb-item"),r=Object(c["resolveComponent"])("el-breadcrumb");return Object(c["openBlock"])(),Object(c["createBlock"])(r,{class:"app-breadcrumb"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(c["TransitionGroup"],{name:"breadcrumb"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(a).breadcrumbs,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(n,{key:e.path},{default:Object(c["withCtx"])((function(){return["noRedirect"===e.redirect||t===Object(c["unref"])(a).breadcrumbs.length-1?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",ae,Object(c["toDisplayString"])(e.meta.title),1)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("a",{key:1,onClick:Object(c["withModifiers"])((function(t){return Object(c["unref"])(a).handleLink(e)}),["prevent"])},Object(c["toDisplayString"])(e.meta.title),9,ie))]})),_:2},1024)})),128))]})),_:1})]})),_:1})}}};n("227f");const ue=h()(le,[["__scopeId","data-v-4ba0a8a0"]]);var se=ue,be=(n("159b"),n("b64b"),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(i["g"])(),o=t(e),a={};return Object.keys(o).forEach((function(e){var t=o[e].bind({$store:r});a[e]=n?t:Object(c["computed"])(t)})),a}),de=function(e,t){var n=i["f"];return"string"===typeof e&&e.length>0?n=Object(i["a"])(e).mapState:t=e,be(t,n)},fe=function(e,t){var n=i["e"];return"string"===typeof e&&e.length>0?n=Object(i["a"])(e).mapMutations:t=e,be(t,n,!0)},Oe=function(e,t){var n=i["c"];return"string"===typeof e&&e.length>0?n=Object(i["a"])(e).mapActions:t=e,be(t,n,!0)};Object(c["pushScopeId"])("data-v-c866c6d6");var me={class:"navbar"},je={class:"right-menu"},pe={target:"_blank",href:"https://juejin.cn/post/6963876125428678693"},he=Object(c["createTextVNode"])("中文文档"),ve={target:"_blank",href:"https://github.com/un-pany/v3-admin/blob/master/README.en.md"},ge=Object(c["createTextVNode"])("English Docs"),ke={target:"_blank",href:"https://github.com/un-pany/v3-admin"},we=Object(c["createTextVNode"])("GitHub"),Ce={target:"_blank",href:"https://gitee.com/un-pany/v3-admin"},Ve=Object(c["createTextVNode"])("Gitee"),Be=Object(c["createElementVNode"])("span",{style:{display:"block"}},"退出登录",-1);Object(c["popScopeId"])();var xe={setup:function(e){var t=de("app",["sidebar"]),n=Oe("app",["toggleSidebar"]),o=n.toggleSidebar,a=fe("user",["logout"]),i=a.logout,l=Object(c["ref"])(!0),u=Object(r["d"])(),s=Object(c["reactive"])({user_logout:function(){i(),u.push("/login").catch((function(e){console.warn(e)}))},app_toggleSidebar:function(){o(!1)}});return Object(c["onBeforeMount"])((function(){})),function(e,n){var r=Object(c["resolveComponent"])("el-avatar"),o=Object(c["resolveComponent"])("el-dropdown-item"),a=Object(c["resolveComponent"])("el-dropdown-menu"),i=Object(c["resolveComponent"])("el-dropdown");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",me,[Object(c["createVNode"])(D,{"is-active":Object(c["unref"])(t).opened,class:"hamburger",onToggleClick:Object(c["unref"])(s).app_toggleSidebar},null,8,["is-active","onToggleClick"]),Object(c["createVNode"])(se,{class:"breadcrumb"}),Object(c["createElementVNode"])("div",je,[l.value?(Object(c["openBlock"])(),Object(c["createBlock"])(re,{key:0,class:"right-menu-item"})):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(i,{class:"right-menu-item"},{dropdown:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(a,null,{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("a",pe,[Object(c["createVNode"])(o,null,{default:Object(c["withCtx"])((function(){return[he]})),_:1})]),Object(c["createElementVNode"])("a",ve,[Object(c["createVNode"])(o,null,{default:Object(c["withCtx"])((function(){return[ge]})),_:1})]),Object(c["createElementVNode"])("a",ke,[Object(c["createVNode"])(o,null,{default:Object(c["withCtx"])((function(){return[we]})),_:1})]),Object(c["createElementVNode"])("a",Ce,[Object(c["createVNode"])(o,null,{default:Object(c["withCtx"])((function(){return[Ve]})),_:1})]),Object(c["createVNode"])(o,{divided:"",onClick:Object(c["unref"])(s).user_logout},{default:Object(c["withCtx"])((function(){return[Be]})),_:1},8,["onClick"])]})),_:1})]})),default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(r,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",size:34})]})),_:1})])])}}};n("3fe8");const ye=h()(xe,[["__scopeId","data-v-c866c6d6"]]);var Ee=ye;n("fb6a"),n("ac1f"),n("5319"),n("99af");function Se(e,t){var n=Object(c["resolveComponent"])("el-scrollbar");return Object(c["openBlock"])(),Object(c["createBlock"])(n,{vertical:!1,class:"scroll-container"},{default:Object(c["withCtx"])((function(){return[Object(c["renderSlot"])(e.$slots,"default",{},void 0,!0)]})),_:3})}n("9fd3");const Ne={},_e=h()(Ne,[["render",Se],["__scopeId","data-v-3f08fd9c"]]);var Te=_e;const ze=Object(c["defineComponent"])({name:"Close"}),Me={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Fe=Object(c["createElementVNode"])("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"},null,-1),Pe=[Fe];function Le(e,t,n,r,o,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("svg",Me,Pe)}var Ae=Object(y["a"])(ze,[["render",Le]]);Object(c["pushScopeId"])("data-v-e4af724c");var Ie={class:"tags-view-container"};Object(c["popScopeId"])();var Re={setup:function(e){var t=de("tagsView",["visitedViews"]),n=t.visitedViews,o=de("permission",["routes"]),i=o.routes,l=Oe("tagsView",["addVisitedView","delVisitedView","delOtherVisitedViews","delAllVisitedViews","updateVisitedView"]),u=l.addVisitedView,b=l.delVisitedView,f=l.delOtherVisitedViews,O=l.delAllVisitedViews,m=l.updateVisitedView,j=Object(r["d"])(),p=Object(r["c"])(),h=Object(c["getCurrentInstance"])(),v=h.proxy,g=function(e,t){var n=e.slice(-1)[0];void 0!==n&&void 0!==n.fullPath?j.push(n.fullPath).catch((function(e){console.warn(e)})):"Dashboard"===t.name?j.push({path:"/redirect"+t.fullPath}).catch((function(e){console.warn(e)})):j.push("/").catch((function(e){console.warn(e)}))},k=Object(c["reactive"])({visible:!1,top:0,left:0,selectedTag:{},affixTags:[],isActive:function(e){return e.path===p.path},isAffix:function(e){return e.meta&&e.meta.affix},refreshSelectedTag:function(e){var t=e.fullPath;Object(c["nextTick"])((function(){j.replace({path:"/redirect"+t}).catch((function(e){console.warn(e)}))}))},closeSelectedTag:function(e){b(e),k.isActive(e)&&g(n,e)},closeOthersTags:function(){k.selectedTag.fullPath!==p.path&&void 0!==k.selectedTag.fullPath&&j.push(k.selectedTag.fullPath).catch((function(e){console.warn(e)})),f(k.selectedTag)},closeAllTags:function(e){O(),k.affixTags.some((function(e){return e.path===p.path}))||g(n,e)},openMenu:function(e,t){var n=105,c=v.$el.getBoundingClientRect().left,r=v.$el.offsetWidth,o=r-n,a=t.clientX-c+15;k.left=a>o?o:a,k.top=t.clientY,k.visible=!0,k.selectedTag=e},closeMenu:function(){k.visible=!1}}),w=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",c=[];return t.forEach((function(t){if(t.meta&&t.meta.affix){var r=d.a.resolve(n,t.path);c.push({fullPath:r,path:r,name:t.name,meta:Object(a["a"])({},t.meta)})}if(t.children){var o=e(t.children,t.path);o.length>=1&&(c=c.concat(o))}})),c},C=function(){k.affixTags=w(i.value);var e,t=Object(s["a"])(k.affixTags);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.name&&u(n)}}catch(c){t.e(c)}finally{t.f()}},V=function(){return p.name&&u(p),!1},B=function(){var e=null===h||void 0===h?void 0:h.refs.tag;if(null!==e&&void 0!==e&&Array.isArray(e)){var t,n=Object(s["a"])(e);try{for(n.s();!(t=n.n()).done;){var c=t.value;c.to.path===p.path&&c.to.fullPath!==p.fullPath&&m(p)}}catch(r){n.e(r)}finally{n.f()}}};return Object(c["watch"])((function(){return p.name}),(function(){V(),B()})),Object(c["watch"])((function(){return k.visible}),(function(e){e?document.body.addEventListener("click",k.closeMenu):document.body.removeEventListener("click",k.closeMenu)})),Object(c["onBeforeMount"])((function(){C(),V()})),function(e,t){var r=Object(c["resolveComponent"])("el-icon"),o=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",Ie,[Object(c["createVNode"])(Te,{class:"tags-view-wrapper"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(n),(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(o,{ref:function(e,t){t["tag"]=e},key:e.path,class:Object(c["normalizeClass"])([Object(c["unref"])(k).isActive(e)?"active":"","tags-view-item"]),to:{path:e.path,query:e.query,fullPath:e.fullPath},onMouseup:Object(c["withModifiers"])((function(t){return Object(c["unref"])(k).isAffix(e)?"":Object(c["unref"])(k).closeSelectedTag(e)}),["middle"]),onContextmenu:Object(c["withModifiers"])((function(t){return Object(c["unref"])(k).openMenu(e,t)}),["prevent"])},{default:Object(c["withCtx"])((function(){var t;return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(null===(t=e.meta)||void 0===t?void 0:t.title)+" ",1),Object(c["unref"])(k).isAffix(e)?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])(r,{key:0,size:12,onClick:Object(c["withModifiers"])((function(t){return Object(c["unref"])(k).closeSelectedTag(e)}),["prevent","stop"])},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(Ae))]})),_:2},1032,["onClick"]))]})),_:2},1032,["class","to","onMouseup","onContextmenu"])})),128))]})),_:1}),Object(c["withDirectives"])(Object(c["createElementVNode"])("ul",{style:Object(c["normalizeStyle"])({left:Object(c["unref"])(k).left+"px",top:Object(c["unref"])(k).top+"px"}),class:"contextmenu"},[Object(c["createElementVNode"])("li",{onClick:t[0]||(t[0]=function(e){return Object(c["unref"])(k).refreshSelectedTag(Object(c["unref"])(k).selectedTag)})},"刷新"),Object(c["unref"])(k).isAffix(Object(c["unref"])(k).selectedTag)?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:0,onClick:t[1]||(t[1]=function(e){return Object(c["unref"])(k).closeSelectedTag(Object(c["unref"])(k).selectedTag)})}," 关闭 ")),Object(c["createElementVNode"])("li",{onClick:t[2]||(t[2]=function(){var e;return Object(c["unref"])(k).closeOthersTags&&(e=Object(c["unref"])(k)).closeOthersTags.apply(e,arguments)})},"关闭其它"),Object(c["createElementVNode"])("li",{onClick:t[3]||(t[3]=function(e){return Object(c["unref"])(k).closeAllTags(Object(c["unref"])(k).selectedTag)})},"关闭所有")],4),[[c["vShow"],Object(c["unref"])(k).visible]])])}}};n("c4bc");const qe=h()(Re,[["__scopeId","data-v-e4af724c"]]);var De=qe,He=n("d9cd"),$e=992,We=function(){var e=de("app",["device","sidebar"]),t=e.device,n=e.sidebar,o=Oe("app",["closeSidebar","toggleDevice"]),a=o.closeSidebar,i=o.toggleDevice,l=Object(r["c"])(),u=Object(c["watch"])((function(){return l.name}),(function(){t===He["a"].Mobile&&n.opened&&a(!1)})),s=function(){var e=document.body.getBoundingClientRect();return e.width-1<$e},b=function(){s()&&(i(He["a"].Mobile),a(!0))},d=function(){document.hidden||(i(s()?He["a"].Mobile:He["a"].Desktop),s()&&a(!0))},f=function(){window.addEventListener("resize",d)},O=function(){window.removeEventListener("resize",d)};return{device:t,sidebar:n,resizeMounted:b,addEventListenerOnResize:f,removeEventListenerResize:O,watchRouter:u}},Ge={setup:function(e){var t=We(),n=t.sidebar,o=t.device,a=t.addEventListenerOnResize,i=t.resizeMounted,l=t.removeEventListenerResize,u=t.watchRouter,s=Object(r["c"])(),b=Object(c["computed"])((function(){return s.path})),d=de("setting",["fixedHeader","showSettings","showTagsView"]),f=d.fixedHeader,O=(d.showSettings,d.showTagsView),m=Oe("app",["closeSidebar"]),j=m.closeSidebar,p=Object(c["reactive"])({handleClickOutSide:function(){j(!1)}}),h=Object(c["computed"])((function(){return{hideSidebar:!n.value.opened,openSidebar:n.value.opened,withoutAnimation:n.value.withoutAnimation,mobile:o.value===He["a"].Mobile}}));return u(),Object(c["onBeforeMount"])((function(){a()})),Object(c["onMounted"])((function(){i()})),Object(c["onBeforeUnmount"])((function(){l()})),function(e,t){var r=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])([Object(c["unref"])(h),"app-wrapper"])},[Object(c["unref"])(h).mobile&&Object(c["unref"])(n).opened?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:0,class:"drawer-bg",onClick:t[0]||(t[0]=function(){var e;return Object(c["unref"])(p).handleClickOutSide&&(e=Object(c["unref"])(p)).handleClickOutSide.apply(e,arguments)})})):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(Object(c["unref"])(x),{class:"sidebar-container"}),Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])([{hasTagsView:Object(c["unref"])(O)},"main-container"])},[Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])({"fixed-header":Object(c["unref"])(f)})},[Object(c["createVNode"])(Object(c["unref"])(Ee)),Object(c["unref"])(O)?(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["unref"])(De),{key:0})):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(r,null,{default:Object(c["withCtx"])((function(e){var t=e.Component;return[Object(c["createVNode"])(c["Transition"],{name:"fade-transform",mode:"out-in"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["resolveDynamicComponent"])(t),{key:Object(c["unref"])(b)}))]})),_:2},1024)]})),_:1})],2)],2)],2)}}};n("119a");const Je=h()(Ge,[["__scopeId","data-v-116116fa"]]);t["default"]=Je},dd2c:function(e,t,n){},e2e7:function(e,t,n){"use strict";n("9a26")},e908:function(e,t,n){}}]);