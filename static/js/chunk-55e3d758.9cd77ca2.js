(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55e3d758"],{"0d66":function(e,t,n){"use strict";n("b0c0");var c=n("d9cd"),r=n("1f776"),o=n("7a23"),a=n("6c02"),i=992;t["a"]=function(){var e=Object(r["c"])("app",["device","sidebar"]),t=e.device,n=e.sidebar,u=Object(r["a"])("app",["closeSidebar","toggleDevice"]),l=u.closeSidebar,b=u.toggleDevice,d=Object(a["c"])(),s=Object(o["watch"])((function(){return d.name}),(function(){t===c["a"].Mobile&&n.opened&&l(!1)})),f=function(){var e=document.body.getBoundingClientRect();return e.width-1<i},m=function(){f()&&(b(c["a"].Mobile),l(!0))},O=function(){document.hidden||(b(f()?c["a"].Mobile:c["a"].Desktop),f()&&l(!0))},j=function(){window.addEventListener("resize",O)},p=function(){window.removeEventListener("resize",O)};return{device:t,sidebar:n,resizeMounted:m,addEventListenerOnResize:j,removeEventListenerResize:p,watchRouter:s}}},"13f5":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n("7a23"),r=n("9ee5");const o=Object(c["defineComponent"])({name:"Expand"}),a={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},i=Object(c["createElementVNode"])("path",{fill:"currentColor",d:"M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"},null,-1),u=[i];function l(e,t,n,r,o,i){return Object(c["openBlock"])(),Object(c["createElementBlock"])("svg",a,u)}var b=Object(r["a"])(o,[["render",l]])},"1f776":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));n("159b"),n("b64b");var c=n("7a23"),r=n("5502"),o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=Object(r["g"])(),a=t(e),i={};return Object.keys(a).forEach((function(e){var t=a[e].bind({$store:o});i[e]=n?t:Object(c["computed"])(t)})),i},a=function(e,t){var n=r["f"];return"string"===typeof e&&e.length>0?n=Object(r["a"])(e).mapState:t=e,o(t,n)},i=function(e,t){var n=r["e"];return"string"===typeof e&&e.length>0?n=Object(r["a"])(e).mapMutations:t=e,o(t,n,!0)},u=function(e,t){var n=r["c"];return"string"===typeof e&&e.length>0?n=Object(r["a"])(e).mapActions:t=e,o(t,n,!0)}},"526b":function(e,t,n){"use strict";var c=n("7a23"),r=["href"];function o(e,t,n,o,a,i){return i.isExternal(n.to)?(Object(c["openBlock"])(),Object(c["createElementBlock"])("a",{key:0,href:n.to,target:"_blank",rel:"noopener"},[Object(c["renderSlot"])(e.$slots,"default")],8,r)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:1,onClick:t[0]||(t[0]=function(){return i.push&&i.push.apply(i,arguments)})},[Object(c["renderSlot"])(e.$slots,"default")]))}var a=n("61f7"),i=n("6c02"),u={name:"SidebarItemLink",props:{to:{type:String,required:!0}},data:function(){var e=Object(i["d"])();return{router:e}},methods:{push:function(){this.router.push(this.to).catch((function(e){console.warn(e)}))},isExternal:a["a"]}},l=n("d959"),b=n.n(l);const d=b()(u,[["render",o]]);t["a"]=d},"61f7":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("d3b7");var c=function(e){return/^(https?:|mailto:|tel:)/.test(e)}},7989:function(e,t,n){},"9ee5":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=(e,t)=>{const n=e.__vccOpts||e;for(const[c,r]of t)n[c]=r;return n}},c22d:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=n("c467"),o=Object(c["createElementVNode"])("h5",null,"测试,跨设备性",-1),a={setup:function(e){return function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[o,Object(c["createVNode"])(r["a"])],64)}}};const i=a;t["default"]=i},c467:function(e,t,n){"use strict";var c=n("7a23"),r=(n("159b"),n("b28b")),o=n("5530"),a=n("b85c"),i=(n("4de4"),n("61f7")),u=n("df7c"),l=n.n(u),b=n("526b"),d={key:0},s={key:0},f={props:{item:{type:Object,required:!0},isCollapse:{type:Boolean,required:!1},basePath:{type:String,required:!0}},setup:function(e){var t=e,n=Object(c["computed"])((function(){return!(!t.item.meta||!t.item.meta.alwaysShow)})),r=Object(c["computed"])((function(){if(t.item.children){var e=t.item.children.filter((function(e){return!(e.meta&&e.meta.hidden)}));return e.length}return 0})),u=Object(c["computed"])((function(){if(r.value>1)return null;if(t.item.children){var e,n=Object(a["a"])(t.item.children);try{for(n.s();!(e=n.n()).done;){var c=e.value;if(!c.meta||!c.meta.hidden)return c}}catch(i){n.e(i)}finally{n.f()}}return Object(o["a"])(Object(o["a"])({},t.item),{},{path:""})})),f=function(e){return Object(i["a"])(e)?e:Object(i["a"])(t.basePath)?t.basePath:l.a.resolve(t.basePath,e)};return function(t,r){var o=Object(c["resolveComponent"])("el-menu-item"),a=Object(c["resolveComponent"])("menu-item",!0),i=Object(c["resolveComponent"])("el-sub-menu");return e.item.meta&&e.item.meta.hidden?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",d,[Object(c["unref"])(n)||!Object(c["unref"])(u)||Object(c["unref"])(u).children?(Object(c["openBlock"])(),Object(c["createBlock"])(i,{key:1,index:f(e.item.path),"popper-append-to-body":""},{title:Object(c["withCtx"])((function(){return[e.item.meta&&e.item.meta.title?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",s,Object(c["toDisplayString"])(e.item.meta.title),1)):Object(c["createCommentVNode"])("",!0)]})),default:Object(c["withCtx"])((function(){return[e.item.children?(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],{key:0},Object(c["renderList"])(e.item.children,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])(a,{key:t.path,item:t,"is-collapse":e.isCollapse,"base-path":f(t.path)},null,8,["item","is-collapse","base-path"])})),128)):Object(c["createCommentVNode"])("",!0)]})),_:1},8,["index"])):(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],{key:0},[Object(c["unref"])(u).meta?(Object(c["openBlock"])(),Object(c["createBlock"])(b["a"],{key:0,to:f(Object(c["unref"])(u).path)},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(o,{index:f(Object(c["unref"])(u).path)},Object(c["createSlots"])({_:2},[Object(c["unref"])(u).meta.title?{name:"title",fn:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(Object(c["unref"])(u).meta.title),1)]}))}:void 0]),1032,["index"])]})),_:1},8,["to"])):Object(c["createCommentVNode"])("",!0)],64))]))}}};const m=f;var O=m,j={props:{mobile:{type:Boolean,required:!0},activeIndex:{type:String,default:"1"}},setup:function(e){var t=e,n=function(e){var t=[];return e.forEach((function(e){e.meta&&e.meta.header&&t.push(e)})),t},o=n(r["a"]),a=Object(c["ref"])(!0);return Object(c["onBeforeMount"])((function(){})),function(n,r){var i=Object(c["resolveComponent"])("el-menu");return Object(c["openBlock"])(),Object(c["createBlock"])(i,{"default-active":e.activeIndex,class:"el-menu-demo",mode:t.mobile?"vertical":"horizontal"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(o),(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(O,{key:e.path,item:e,"base-path":e.path,"is-collapse":a.value},null,8,["item","base-path","is-collapse"])})),128))]})),_:1},8,["default-active","mode"])}}};const p=j;var v=p,h=n("d9cd"),k=(n("1f776"),n("0d66")),B=n("13f5");Object(c["pushScopeId"])("data-v-34a73514");var w={class:"header-wrap"},y={key:1,class:"toggle-menu"};Object(c["popScopeId"])();var g={setup:function(e){var t=Object(k["a"])(),n=t.sidebar,r=t.device,o=t.addEventListenerOnResize,a=t.resizeMounted,i=t.removeEventListenerResize,u=t.watchRouter,l=Object(c["reactive"])({drawer:!1}),b=Object(c["computed"])((function(){return{hideSidebar:!n.value.opened,openSidebar:n.value.opened,withoutAnimation:n.value.withoutAnimation,isMobile:r.value===h["a"].Mobile}})),d=function(){l.drawer=!0};return u(),Object(c["onBeforeMount"])((function(){o()})),Object(c["onMounted"])((function(){a()})),Object(c["onBeforeUnmount"])((function(){i()})),function(e,t){var n=Object(c["resolveComponent"])("el-icon"),r=Object(c["resolveComponent"])("el-drawer");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",w,[Object(c["unref"])(b).isMobile?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",y,[Object(c["createVNode"])(n,{size:30,onClick:d},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(B["a"]))]})),_:1})])):(Object(c["openBlock"])(),Object(c["createBlock"])(v,{mobile:Object(c["unref"])(b).isMobile,key:"desktop"},null,8,["mobile"])),Object(c["createVNode"])(r,{modelValue:Object(c["unref"])(l).drawer,"onUpdate:modelValue":t[0]||(t[0]=function(e){return Object(c["unref"])(l).drawer=e}),direction:"rtl","show-close":!1,size:"45%"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(v,{mobile:Object(c["unref"])(b).isMobile,key:"mobile",class:"mobile-header"},null,8,["mobile"])]})),_:1},8,["modelValue"])])}}},C=(n("f607"),n("d959")),E=n.n(C);const V=E()(g,[["__scopeId","data-v-34a73514"]]);t["a"]=V},f607:function(e,t,n){"use strict";n("7989")}}]);