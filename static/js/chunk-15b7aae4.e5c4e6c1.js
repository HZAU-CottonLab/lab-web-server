(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15b7aae4"],{"076e":function(e,t,n){"use strict";var c=n("7a23");Object(c["pushScopeId"])("data-v-c35a31c8");var r=Object(c["createElementVNode"])("div",{class:"contact_info"},[Object(c["createElementVNode"])("h4",null,"Concact:"),Object(c["createElementVNode"])("div",{class:"contact_localtion"}," Norman Borlaug Center for Southern Crop Improvement 2123 TAMU, Rm 112. College Station, TX 77840 "),Object(c["createElementVNode"])("div",{class:"contact_email"},"e-mail: xiuren.zhang@tamu.edu"),Object(c["createElementVNode"])("div",{class:"contact_tel"},"Tel: 979-458-0596")],-1),o=Object(c["createElementVNode"])("strong",null,"Copyright © 2021 | All rights reserved",-1);function a(e,t,n,a,i,u){var l=Object(c["resolveComponent"])("el-col"),b=Object(c["resolveComponent"])("el-row"),d=Object(c["resolveComponent"])("el-container");return Object(c["openBlock"])(),Object(c["createBlock"])(d,{class:"el-footer"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(b,{justify:"center",align:"middle"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{span:8}),Object(c["createVNode"])(l,{span:8},{default:Object(c["withCtx"])((function(){return[r]})),_:1}),Object(c["createVNode"])(l,{span:24},{default:Object(c["withCtx"])((function(){return[o]})),_:1})]})),_:1})]})),_:1})}Object(c["popScopeId"])();var i={name:"footer-main"},u=(n("800d"),n("d959")),l=n.n(u);const b=l()(i,[["render",a],["__scopeId","data-v-c35a31c8"]]);t["a"]=b},"0d66":function(e,t,n){"use strict";n("b0c0");var c=n("d9cd"),r=n("1f776"),o=n("7a23"),a=n("6c02"),i=992;t["a"]=function(){var e=Object(r["c"])("app",["device","sidebar"]),t=e.device,n=e.sidebar,u=Object(r["a"])("app",["closeSidebar","toggleDevice"]),l=u.closeSidebar,b=u.toggleDevice,d=Object(a["c"])(),s=Object(o["watch"])((function(){return d.name}),(function(){t===c["a"].Mobile&&n.opened&&l(!1)})),f=function(){var e=document.body.getBoundingClientRect();return e.width-1<i},p=function(){f()&&(b(c["a"].Mobile),l(!0))},m=function(){document.hidden||(b(f()?c["a"].Mobile:c["a"].Desktop),f()&&l(!0))},O=function(){window.addEventListener("resize",m)},j=function(){window.removeEventListener("resize",m)};return{device:t,sidebar:n,resizeMounted:p,addEventListenerOnResize:O,removeEventListenerResize:j,watchRouter:s}}},"13f5":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n("7a23"),r=n("9ee5");const o=Object(c["defineComponent"])({name:"Expand"}),a={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},i=Object(c["createElementVNode"])("path",{fill:"currentColor",d:"M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"},null,-1),u=[i];function l(e,t,n,r,o,i){return Object(c["openBlock"])(),Object(c["createElementBlock"])("svg",a,u)}var b=Object(r["a"])(o,[["render",l]])},"1f776":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));n("159b"),n("b64b");var c=n("7a23"),r=n("5502"),o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=Object(r["g"])(),a=t(e),i={};return Object.keys(a).forEach((function(e){var t=a[e].bind({$store:o});i[e]=n?t:Object(c["computed"])(t)})),i},a=function(e,t){var n=r["f"];return"string"===typeof e&&e.length>0?n=Object(r["a"])(e).mapState:t=e,o(t,n)},i=function(e,t){var n=r["e"];return"string"===typeof e&&e.length>0?n=Object(r["a"])(e).mapMutations:t=e,o(t,n,!0)},u=function(e,t){var n=r["c"];return"string"===typeof e&&e.length>0?n=Object(r["a"])(e).mapActions:t=e,o(t,n,!0)}},"526b":function(e,t,n){"use strict";var c=n("7a23"),r=["href"];function o(e,t,n,o,a,i){return i.isExternal(n.to)?(Object(c["openBlock"])(),Object(c["createElementBlock"])("a",{key:0,href:n.to,target:"_blank",rel:"noopener"},[Object(c["renderSlot"])(e.$slots,"default")],8,r)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:1,onClick:t[0]||(t[0]=function(){return i.push&&i.push.apply(i,arguments)})},[Object(c["renderSlot"])(e.$slots,"default")]))}var a=n("61f7"),i=n("6c02"),u={name:"SidebarItemLink",props:{to:{type:String,required:!0}},data:function(){var e=Object(i["d"])();return{router:e}},methods:{push:function(){this.router.push(this.to).catch((function(e){console.warn(e)}))},isExternal:a["a"]}},l=n("d959"),b=n.n(l);const d=b()(u,[["render",o]]);t["a"]=d},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var c=n("1d80"),r=n("577e"),o=n("5899"),a="["+o+"]",i=RegExp("^"+a+a+"*"),u=RegExp(a+a+"*$"),l=function(e){return function(t){var n=r(c(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(u,"")),n}};e.exports={start:l(1),end:l(2),trim:l(3)}},"61f7":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("d3b7");var c=function(e){return/^(https?:|mailto:|tel:)/.test(e)}},"697e":function(e,t,n){},7989:function(e,t,n){},"800d":function(e,t,n){"use strict";n("697e")},"9ee5":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=(e,t)=>{const n=e.__vccOpts||e;for(const[c,r]of t)n[c]=r;return n}},a9e3:function(e,t,n){"use strict";var c=n("83ab"),r=n("da84"),o=n("94ca"),a=n("6eeb"),i=n("5135"),u=n("c6b6"),l=n("7156"),b=n("d9b5"),d=n("c04e"),s=n("d039"),f=n("7c73"),p=n("241c").f,m=n("06cf").f,O=n("9bf2").f,j=n("58a8").trim,v="Number",h=r[v],k=h.prototype,g=u(f(k))==v,w=function(e){if(b(e))throw TypeError("Cannot convert a Symbol value to a number");var t,n,c,r,o,a,i,u,l=d(e,"number");if("string"==typeof l&&l.length>2)if(l=j(l),t=l.charCodeAt(0),43===t||45===t){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:c=2,r=49;break;case 79:case 111:c=8,r=55;break;default:return+l}for(o=l.slice(2),a=o.length,i=0;i<a;i++)if(u=o.charCodeAt(i),u<48||u>r)return NaN;return parseInt(o,c)}return+l};if(o(v,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var C,E=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof E&&(g?s((function(){k.valueOf.call(n)})):u(n)!=v)?l(new h(w(t)),n,E):w(t)},N=c?p(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),y=0;N.length>y;y++)i(h,C=N[y])&&!i(E,C)&&O(E,C,m(h,C));E.prototype=k,k.constructor=E,a(r,v,E)}},c467:function(e,t,n){"use strict";var c=n("7a23"),r=(n("159b"),n("b28b")),o=n("5530"),a=n("b85c"),i=(n("4de4"),n("61f7")),u=n("df7c"),l=n.n(u),b=n("526b"),d={key:0},s={key:0},f={props:{item:{type:Object,required:!0},isCollapse:{type:Boolean,required:!1},basePath:{type:String,required:!0}},setup:function(e){var t=e,n=Object(c["computed"])((function(){return!(!t.item.meta||!t.item.meta.alwaysShow)})),r=Object(c["computed"])((function(){if(t.item.children){var e=t.item.children.filter((function(e){return!(e.meta&&e.meta.hidden)}));return e.length}return 0})),u=Object(c["computed"])((function(){if(r.value>1)return null;if(t.item.children){var e,n=Object(a["a"])(t.item.children);try{for(n.s();!(e=n.n()).done;){var c=e.value;if(!c.meta||!c.meta.hidden)return c}}catch(i){n.e(i)}finally{n.f()}}return Object(o["a"])(Object(o["a"])({},t.item),{},{path:""})})),f=function(e){return Object(i["a"])(e)?e:Object(i["a"])(t.basePath)?t.basePath:l.a.resolve(t.basePath,e)};return function(t,r){var o=Object(c["resolveComponent"])("el-menu-item"),a=Object(c["resolveComponent"])("menu-item",!0),i=Object(c["resolveComponent"])("el-sub-menu");return e.item.meta&&e.item.meta.hidden?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",d,[Object(c["unref"])(n)||!Object(c["unref"])(u)||Object(c["unref"])(u).children?(Object(c["openBlock"])(),Object(c["createBlock"])(i,{key:1,index:f(e.item.path),"popper-append-to-body":""},{title:Object(c["withCtx"])((function(){return[e.item.meta&&e.item.meta.title?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",s,Object(c["toDisplayString"])(e.item.meta.title),1)):Object(c["createCommentVNode"])("",!0)]})),default:Object(c["withCtx"])((function(){return[e.item.children?(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],{key:0},Object(c["renderList"])(e.item.children,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])(a,{key:t.path,item:t,"is-collapse":e.isCollapse,"base-path":f(t.path)},null,8,["item","is-collapse","base-path"])})),128)):Object(c["createCommentVNode"])("",!0)]})),_:1},8,["index"])):(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],{key:0},[Object(c["unref"])(u).meta?(Object(c["openBlock"])(),Object(c["createBlock"])(b["a"],{key:0,to:f(Object(c["unref"])(u).path)},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(o,{index:f(Object(c["unref"])(u).path)},Object(c["createSlots"])({_:2},[Object(c["unref"])(u).meta.title?{name:"title",fn:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(Object(c["unref"])(u).meta.title),1)]}))}:void 0]),1032,["index"])]})),_:1},8,["to"])):Object(c["createCommentVNode"])("",!0)],64))]))}}};const p=f;var m=p,O={props:{mobile:{type:Boolean,required:!0},activeIndex:{type:String,default:"1"}},setup:function(e){var t=e,n=function(e){var t=[];return e.forEach((function(e){e.meta&&e.meta.header&&t.push(e)})),t},o=n(r["a"]),a=Object(c["ref"])(!0);return Object(c["onBeforeMount"])((function(){})),function(n,r){var i=Object(c["resolveComponent"])("el-menu");return Object(c["openBlock"])(),Object(c["createBlock"])(i,{"default-active":e.activeIndex,class:"el-menu-demo",mode:t.mobile?"vertical":"horizontal"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(o),(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(m,{key:e.path,item:e,"base-path":e.path,"is-collapse":a.value},null,8,["item","base-path","is-collapse"])})),128))]})),_:1},8,["default-active","mode"])}}};const j=O;var v=j,h=n("d9cd"),k=(n("1f776"),n("0d66")),g=n("13f5");Object(c["pushScopeId"])("data-v-34a73514");var w={class:"header-wrap"},C={key:1,class:"toggle-menu"};Object(c["popScopeId"])();var E={setup:function(e){var t=Object(k["a"])(),n=t.sidebar,r=t.device,o=t.addEventListenerOnResize,a=t.resizeMounted,i=t.removeEventListenerResize,u=t.watchRouter,l=Object(c["reactive"])({drawer:!1}),b=Object(c["computed"])((function(){return{hideSidebar:!n.value.opened,openSidebar:n.value.opened,withoutAnimation:n.value.withoutAnimation,isMobile:r.value===h["a"].Mobile}})),d=function(){l.drawer=!0};return u(),Object(c["onBeforeMount"])((function(){o()})),Object(c["onMounted"])((function(){a()})),Object(c["onBeforeUnmount"])((function(){i()})),function(e,t){var n=Object(c["resolveComponent"])("el-icon"),r=Object(c["resolveComponent"])("el-drawer");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",w,[Object(c["unref"])(b).isMobile?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",C,[Object(c["createVNode"])(n,{size:30,onClick:d},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(g["a"]))]})),_:1})])):(Object(c["openBlock"])(),Object(c["createBlock"])(v,{mobile:Object(c["unref"])(b).isMobile,key:"desktop"},null,8,["mobile"])),Object(c["createVNode"])(r,{modelValue:Object(c["unref"])(l).drawer,"onUpdate:modelValue":t[0]||(t[0]=function(e){return Object(c["unref"])(l).drawer=e}),direction:"rtl","show-close":!1,size:"45%"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(v,{mobile:Object(c["unref"])(b).isMobile,key:"mobile",class:"mobile-header"},null,8,["mobile"])]})),_:1},8,["modelValue"])])}}},N=(n("f607"),n("d959")),y=n.n(N);const B=y()(E,[["__scopeId","data-v-34a73514"]]);t["a"]=B},c67b:function(e,t,n){"use strict";var c=n("7a23");function r(e,t,n,r,o,a){var i=Object(c["resolveComponent"])("svg-icon"),u=Object(c["resolveComponent"])("el-button"),l=Object(c["resolveComponent"])("el-progress"),b=Object(c["resolveComponent"])("el-backtop");return Object(c["openBlock"])(),Object(c["createBlock"])(b,{bottom:100},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{type:"circle",percentage:o.precentage,width:50,"visibility-height":200,style:{"background-color":"transparent"},duration:.5},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{circle:"",style:{"font-size":"30"}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(i,{name:"up"})]})),_:1})]})),_:1},8,["percentage","duration"])]})),_:1})}n("a9e3");var o={name:"back_up",data:function(){return{precentage:0}},methods:{handleScrollx:function(){var e=document.body.scrollHeight,t=document.documentElement.scrollTop+document.body.clientHeight;this.precentage=Number(t/e*100)}},mounted:function(){window.addEventListener("scroll",this.handleScrollx,!0)}},a=n("d959"),i=n.n(a);const u=i()(o,[["render",r]]);t["a"]=u},f607:function(e,t,n){"use strict";n("7989")}}]);