(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac70ba04"],{"076e":function(e,t,n){"use strict";var c=n("7a23");Object(c["pushScopeId"])("data-v-115b4f2f");var o=Object(c["createElementVNode"])("div",{class:"contact_info"},[Object(c["createElementVNode"])("h4",null,"Concact:"),Object(c["createElementVNode"])("div",{class:"contact_localtion"}," Norman Borlaug Center for Southern Crop Improvement 2123 TAMU, Rm 112. College Station, TX 77840 "),Object(c["createElementVNode"])("div",{class:"contact_email"},"e-mail: xiuren.zhang@tamu.edu"),Object(c["createElementVNode"])("div",{class:"contact_tel"},"Tel: 979-458-0596")],-1),r=Object(c["createElementVNode"])("strong",null,"Copyright © 2021 | All rights reserved",-1);function a(e,t,n,a,l,i){var u=Object(c["resolveComponent"])("el-col"),s=Object(c["resolveComponent"])("el-row"),d=Object(c["resolveComponent"])("el-container");return Object(c["openBlock"])(),Object(c["createBlock"])(d,{class:"el-footer"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(s,{justify:"center",align:"center"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{span:8}),Object(c["createVNode"])(u,{span:8},{default:Object(c["withCtx"])((function(){return[o]})),_:1}),Object(c["createVNode"])(u,{span:24},{default:Object(c["withCtx"])((function(){return[r]})),_:1})]})),_:1})]})),_:1})}Object(c["popScopeId"])();var l={name:"footer-main"},i=(n("111d"),n("d959")),u=n.n(i);const s=u()(l,[["render",a],["__scopeId","data-v-115b4f2f"]]);t["a"]=s},"0851":function(e,t,n){},"0b81":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return p}));var c=n("7a23");
/**
 * Vue 3 Carousel 0.1.38
 * (c) 2022
 * @license MIT
 */const o={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0};function r(e,t){let n;return function(...c){n&&clearTimeout(n),n=setTimeout(()=>{e(...c),n=null},t)}}function a(e,t){let n;return function(...c){const o=this;n||(e.apply(o,c),n=!0,setTimeout(()=>n=!1,t))}}function l(e){var t,n,c;return e?"CarouselSlide"===(null===(n=null===(t=e[0])||void 0===t?void 0:t.type)||void 0===n?void 0:n.name)?e:(null===(c=e[0])||void 0===c?void 0:c.children)||[]:[]}function i(e,t){if(e.wrapAround)return t-1;switch(e.snapAlign){case"start":return t-e.itemsToShow;case"end":return t-1;case"center":case"center-odd":return t-Math.ceil(e.itemsToShow/2);case"center-even":return t-Math.ceil(e.itemsToShow/2);default:return 0}}function u(e){if(e.wrapAround)return 0;switch(e.snapAlign){case"start":return 0;case"end":return e.itemsToShow-1;case"center":case"center-odd":return Math.floor((e.itemsToShow-1)/2);case"center-even":return Math.floor((e.itemsToShow-2)/2);default:return 0}}function s(e,t,n,c){return e.wrapAround?t:Math.min(Math.max(t,c),n)}function d({slidesBuffer:e,currentSlide:t,snapAlign:n,itemsToShow:c,wrapAround:o,slidesCount:r}){let a=e.indexOf(t);if(-1===a&&(a=e.indexOf(Math.ceil(t))),"center"===n||"center-odd"===n?a-=(c-1)/2:"center-even"===n?a-=(c-2)/2:"end"===n&&(a-=c-1),!o){const e=r-c,t=0;a=Math.max(Math.min(a,e),t)}return a}var b=Object(c["defineComponent"])({name:"Carousel",props:{itemsToShow:{default:o.itemsToShow,type:Number},itemsToScroll:{default:o.itemsToScroll,type:Number},wrapAround:{default:o.wrapAround,type:Boolean},snapAlign:{default:o.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:o.transition,type:Number},breakpoints:{default:o.breakpoints,type:Object},autoplay:{default:o.autoplay,type:Number},pauseAutoplayOnHover:{default:o.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:o.mouseDrag,type:Boolean},touchDrag:{default:o.touchDrag,type:Boolean},dir:{default:o.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}},setup(e,{slots:t,emit:n,expose:b}){var f;const j=Object(c["ref"])(null),O=Object(c["ref"])([]),p=Object(c["ref"])([]),v=Object(c["ref"])(0),m=Object(c["ref"])(1),h=Object(c["ref"])(null),g=Object(c["ref"])(null);let w=Object(c["ref"])({}),x=Object.assign({},o);const _=Object(c["reactive"])(Object.assign({},x)),C=Object(c["ref"])(null!==(f=_.modelValue)&&void 0!==f?f:0),N=Object(c["ref"])(0),V=Object(c["ref"])(0),y=Object(c["ref"])(0),S=Object(c["ref"])(0);function k(){const t=Object.assign(Object.assign({},e),e.settings);w=Object(c["ref"])(Object.assign({},t.breakpoints)),x=Object.assign(Object.assign({},t),{settings:void 0,breakpoints:void 0}),L(x)}function T(){const e=Object.keys(w.value).map(e=>Number(e)).sort((e,t)=>+t-+e);let t=Object.assign({},x);e.some(e=>{const n=window.matchMedia(`(min-width: ${e}px)`).matches;return!!n&&(t=Object.assign(Object.assign({},t),w.value[e]),!0)}),L(t)}function L(e){for(let t in e)_[t]=e[t]}Object(c["provide"])("config",_),Object(c["provide"])("slidesBuffer",p),Object(c["provide"])("slidesCount",m),Object(c["provide"])("currentSlide",C),Object(c["provide"])("maxSlide",y),Object(c["provide"])("minSlide",S);const A=r(()=>{w.value&&(T(),M()),B()},16);function B(){if(!j.value)return;const e=j.value.getBoundingClientRect();v.value=e.width/_.itemsToShow}function M(){m.value=Math.max(O.value.length,1),m.value<=0||(V.value=Math.ceil((m.value-1)/2),y.value=i(_,m.value),S.value=u(_),C.value=s(_,C.value,y.value,S.value))}function E(){const e=[...Array(m.value).keys()],t=_.wrapAround&&_.itemsToShow+1<=m.value;if(t){const t=1!==_.itemsToShow?Math.round((m.value-_.itemsToShow)/2):0;let n=t-C.value;if("end"===_.snapAlign?n+=Math.floor(_.itemsToShow-1):"center"!==_.snapAlign&&"center-odd"!==_.snapAlign||n++,n<0)for(let c=n;c<0;c++)e.push(Number(e.shift()));else for(let c=0;c<n;c++)e.unshift(Number(e.pop()))}p.value=e}Object(c["onMounted"])(()=>{w.value&&(T(),M()),Object(c["nextTick"])(()=>setTimeout(B,16)),_.autoplay&&_.autoplay>0&&J(),window.addEventListener("resize",A,{passive:!0})}),Object(c["onUnmounted"])(()=>{g.value&&clearTimeout(g.value),W(!1)});let R=!1;const U={x:0,y:0},D={x:0,y:0},I=Object(c["reactive"])({x:0,y:0}),P=Object(c["ref"])(!1),z=Object(c["ref"])(!1),X=()=>{z.value=!0},H=()=>{z.value=!1},Y=a(e=>{R||e.preventDefault(),D.x=R?e.touches[0].clientX:e.clientX,D.y=R?e.touches[0].clientY:e.clientY;const t=D.x-U.x,n=D.y-U.y;I.y=n,I.x=t},16);function F(e){R="touchstart"===e.type,R||e.preventDefault(),!R&&0!==e.button||$.value||(P.value=!0,U.x=R?e.touches[0].clientX:e.clientX,U.y=R?e.touches[0].clientY:e.clientY,document.addEventListener(R?"touchmove":"mousemove",Y),document.addEventListener(R?"touchend":"mouseup",G))}function G(){P.value=!1;const e="rtl"===_.dir?-1:1,t=.4*Math.sign(I.x),n=Math.round(I.x/v.value+t)*e;let c=s(_,C.value-n,y.value,S.value);q(c),I.x=0,I.y=0,document.removeEventListener(R?"touchmove":"mousemove",Y),document.removeEventListener(R?"touchend":"mouseup",G)}function J(){h.value=setInterval(()=>{_.pauseAutoplayOnHover&&z.value||K()},_.autoplay)}function W(e=!0){h.value&&(clearInterval(h.value),e&&J())}const $=Object(c["ref"])(!1);function q(e,t=!1){if(W(),C.value===e||$.value)return;const c=m.value-1;return e>c?q(e-m.value):e<0?q(e+m.value):($.value=!0,N.value=C.value,C.value=e,t||n("update:modelValue",C.value),void(g.value=setTimeout(()=>{_.wrapAround&&E(),$.value=!1},_.transition)))}function K(){let e=C.value+_.itemsToScroll;_.wrapAround||(e=Math.min(e,y.value)),q(e)}function Q(){let e=C.value-_.itemsToScroll;_.wrapAround||(e=Math.max(e,S.value)),q(e)}const Z={slideTo:q,next:K,prev:Q};Object(c["provide"])("nav",Z);const ee=Object(c["computed"])(()=>d({slidesBuffer:p.value,itemsToShow:_.itemsToShow,snapAlign:_.snapAlign,wrapAround:Boolean(_.wrapAround),currentSlide:C.value,slidesCount:m.value}));Object(c["provide"])("slidesToScroll",ee);const te=Object(c["computed"])(()=>{const e="rtl"===_.dir?-1:1,t=ee.value*v.value*e;return{transform:`translateX(${I.x-t}px)`,transition:($.value?_.transition:0)+"ms"}});function ne(){k()}function ce(){k(),T(),M(),E(),B()}function oe(){M(),E()}Object(c["watch"])(()=>Object.values(e),ce),ne(),Object(c["watchEffect"])(()=>{const t=m.value!==O.value.length,n=void 0!==e.modelValue&&C.value!==e.modelValue;n&&q(Number(e.modelValue),!0),t&&oe()});const re={config:_,slidesBuffer:p,slidesCount:m,slideWidth:v,currentSlide:C,maxSlide:y,minSlide:S,middleSlide:V};b({updateBreakpointsConfigs:T,updateSlidesData:M,updateSlideWidth:B,updateSlidesBuffer:E,initCarousel:ne,restartCarousel:ce,updateCarousel:oe,slideTo:q,next:K,prev:Q,nav:Z,data:re});const ae=t.default||t.slides,le=t.addons,ie=Object(c["reactive"])(re);return()=>{const e=l(null===ae||void 0===ae?void 0:ae(ie)),t=(null===le||void 0===le?void 0:le(ie))||[];O.value=e,e.forEach((e,t)=>e.props.index=t);const n=Object(c["h"])("ol",{class:"carousel__track",style:te.value,onMousedown:_.mouseDrag?F:null,onTouchstart:_.touchDrag?F:null},e),o=Object(c["h"])("div",{class:"carousel__viewport"},n);return Object(c["h"])("section",{ref:j,class:{carousel:!0,"carousel--rtl":"rtl"===_.dir},dir:_.dir,"aria-label":"Gallery",onMouseenter:X,onMouseleave:H},[o,t])}}});const f={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},j=e=>{const t=e.name;if(!t||"string"!==typeof t)return;const n=f[t],o=Object(c["h"])("path",{d:n}),r=e.title||t,a=Object(c["h"])("title",null,t);return Object(c["h"])("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:r},[a,o])};j.props={name:String,title:String};const O=(e,{slots:t,attrs:n})=>{const{next:r,prev:a}=t,l=Object(c["inject"])("config",Object(c["reactive"])(Object.assign({},o))),i=Object(c["inject"])("maxSlide",Object(c["ref"])(1)),u=Object(c["inject"])("minSlide",Object(c["ref"])(1)),s=Object(c["inject"])("currentSlide",Object(c["ref"])(1)),d=Object(c["inject"])("nav",{}),b="rtl"===l.dir,f=Object(c["h"])("button",{type:"button",class:["carousel__prev",!l.wrapAround&&s.value<=u.value&&"carousel__prev--in-active",null===n||void 0===n?void 0:n.class],"aria-label":"Navigate to previous slide",onClick:d.prev},(null===a||void 0===a?void 0:a())||Object(c["h"])(j,{name:b?"arrowRight":"arrowLeft"})),O=Object(c["h"])("button",{type:"button",class:["carousel__next",!l.wrapAround&&s.value>=i.value&&"carousel__next--in-active",null===n||void 0===n?void 0:n.class],"aria-label":"Navigate to next slide",onClick:d.next},(null===r||void 0===r?void 0:r())||Object(c["h"])(j,{name:b?"arrowLeft":"arrowRight"}));return[f,O]};var p=Object(c["defineComponent"])({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(e,{slots:t}){const n=Object(c["inject"])("config",Object(c["reactive"])(Object.assign({},o))),r=Object(c["inject"])("slidesBuffer",Object(c["ref"])([])),a=Object(c["inject"])("currentSlide",Object(c["ref"])(0)),l=Object(c["inject"])("slidesToScroll",Object(c["ref"])(0)),i=Object(c["ref"])(e.index);function u(){i.value=r.value.indexOf(e.index)}n.wrapAround&&(u(),Object(c["watch"])(r,u));const s=Object(c["computed"])(()=>{const e=n.itemsToShow,t=1/e*100+"%";return{width:t,order:i.value.toString()}}),d=()=>e.index===a.value,b=()=>{const t=Math.ceil(l.value),c=Math.floor(l.value+n.itemsToShow),o=r.value.slice(t,c);return o.includes(e.index)},f=()=>e.index===r.value[Math.ceil(l.value)-1],j=()=>e.index===r.value[Math.floor(l.value+n.itemsToShow)];return()=>{var e;return Object(c["h"])("li",{style:s.value,class:{carousel__slide:!0,"carousel__slide--active":d(),"carousel__slide--visible":b(),"carousel__slide--prev":f(),"carousel__slide--next":j()}},null===(e=t.default)||void 0===e?void 0:e.call(t))}}});const v=()=>{const e=Object(c["inject"])("maxSlide",Object(c["ref"])(1)),t=Object(c["inject"])("minSlide",Object(c["ref"])(1)),n=Object(c["inject"])("currentSlide",Object(c["ref"])(1)),o=Object(c["inject"])("nav",{});function r(e){o.slideTo(e)}const a=c=>{const o=n.value;return o===c||o>e.value&&c>=e.value||o<t.value&&c<=t.value},l=[];for(let i=t.value;i<e.value+1;i++){const e=Object(c["h"])("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":a(i)},"aria-label":"Navigate to slide "+(i+1),onClick:()=>r(i)}),t=Object(c["h"])("li",{class:"carousel__pagination-item",key:i},e);l.push(t)}return Object(c["h"])("ol",{class:"carousel__pagination"},l)}},"111d":function(e,t,n){"use strict";n("e4ea")},"1ccf":function(e,t,n){},"22cd":function(e,t,n){"use strict";n.r(t);var c=n("7a23");Object(c["pushScopeId"])("data-v-10ed6230");var o={style:{width:"80%","margin-left":"10%"}},r=Object(c["createElementVNode"])("strong",null,"News&Events",-1),a={style:{width:"80%","margin-left":"40px"}},l=Object(c["createElementVNode"])("strong",null,"Archives",-1),i={style:{width:"80%","margin-left":"40px","text-align":"start"}},u=Object(c["createElementVNode"])("strong",null,"Our Team",-1);function s(e,t,n,s,d,b){var f=Object(c["resolveComponent"])("headerComponent"),j=Object(c["resolveComponent"])("el-icon"),O=Object(c["resolveComponent"])("el-image"),p=Object(c["resolveComponent"])("el-carousel-item"),v=Object(c["resolveComponent"])("el-carousel"),m=Object(c["resolveComponent"])("el-button"),h=Object(c["resolveComponent"])("news_cards"),g=Object(c["resolveComponent"])("el-col"),w=Object(c["resolveComponent"])("el-row"),x=Object(c["resolveComponent"])("el-calendar"),_=Object(c["resolveComponent"])("facult_list"),C=Object(c["resolveComponent"])("el-main"),N=Object(c["resolveComponent"])("footer_main"),V=Object(c["resolveComponent"])("el-footer"),y=Object(c["resolveComponent"])("el-container");return Object(c["openBlock"])(),Object(c["createBlock"])(y,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(f),Object(c["createVNode"])(C,{style:{padding:"0px"},class:"main"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(v,{interval:5e3,arrow:"always",height:"500px"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.carousels_list,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(p,{key:e.url},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(O,{src:e.url,fit:"containe"},{placeholder:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(j,{class:"is-loading"})]})),_:2},1032,["src"])]})),_:2},1024)})),128))]})),_:1}),Object(c["createVNode"])(w,{justify:"center",align:"start",class:"main-box"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(g,{xs:24,sm:24,md:12,lg:8,xl:8,class:"el-main-content"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(w,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(g,{span:24},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",o,[Object(c["createVNode"])(m,{type:"info",plain:"",class:"info-button-header"},{default:Object(c["withCtx"])((function(){return[r]})),_:1}),Object(c["createVNode"])(h),Object(c["createVNode"])(h),Object(c["createVNode"])(h),Object(c["createVNode"])(h)])]})),_:1})]})),_:1})]})),_:1}),Object(c["createVNode"])(g,{xs:24,sm:24,md:12,lg:8,xl:8,class:"el-main-content"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",a,[Object(c["createVNode"])(m,{type:"info",class:"info-button-header",plain:""},{default:Object(c["withCtx"])((function(){return[l]})),_:1}),Object(c["createVNode"])(x,{modelValue:d.Data_value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return d.Data_value=e})},null,8,["modelValue"])])]})),_:1})]})),_:1}),Object(c["createVNode"])(w,{class:"main-faculty",justify:"center"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(g,{xs:24,sm:24,md:24,lg:16,xl:16,class:"el-main-content"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",i,[Object(c["createVNode"])(m,{type:"info",class:"info-button-header",plain:""},{default:Object(c["withCtx"])((function(){return[u]})),_:1})])]})),_:1}),Object(c["createVNode"])(g,{xs:24,sm:24,md:24,lg:16,xl:16},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(_,{style:{margin:"20px 40px"},carouselList:d.teamList},null,8,["carouselList"])]})),_:1})]})),_:1})]})),_:1}),Object(c["createVNode"])(V,{style:{padding:"0px",height:"400px"}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(N)]})),_:1})]})),_:1})}Object(c["popScopeId"])();var d=n("5530"),b=n("5502"),f=n("71c2");Object(c["pushScopeId"])("data-v-65dabc1c");var j=Object(c["createElementVNode"])("h4",null,"Congratulations on Tao, our former CSC-supported visiting student, for publication in PLoS Pathogen. Good job, Tao!",-1),O=Object(c["createElementVNode"])("span",null,"May 6, 2020",-1);function p(e,t,n,o,r,a){var l=Object(c["resolveComponent"])("el-image"),i=Object(c["resolveComponent"])("el-col"),u=Object(c["resolveComponent"])("el-row");return Object(c["openBlock"])(),Object(c["createBlock"])(u,{class:"news_event"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(i,{span:4},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{src:"https://btiscience.org/wp-content/uploads/222222222222.jpg",fit:"fit"})]})),_:1}),Object(c["createVNode"])(i,{span:20},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{justify:"center",align:"center"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(i,{span:24},{default:Object(c["withCtx"])((function(){return[j]})),_:1}),Object(c["createVNode"])(i,{span:24},{default:Object(c["withCtx"])((function(){return[O]})),_:1})]})),_:1})]})),_:1})]})),_:1})}Object(c["popScopeId"])();var v={name:"news_cards"},m=(n("a930"),n("d959")),h=n.n(m);const g=h()(v,[["render",p],["__scopeId","data-v-65dabc1c"]]);var w=g,x=n("076e"),_={class:"carousel__item"},C={class:"carousel__label"};function N(e,t,n,o,r,a){var l=Object(c["resolveComponent"])("el-image"),i=Object(c["resolveComponent"])("search"),u=Object(c["resolveComponent"])("el-icon"),s=Object(c["resolveComponent"])("el-link"),d=Object(c["resolveComponent"])("Slide"),b=Object(c["resolveComponent"])("Pagination"),f=Object(c["resolveComponent"])("Navigation"),j=Object(c["resolveComponent"])("Carousel");return Object(c["openBlock"])(),Object(c["createBlock"])(j,{settings:e.settings,breakpoints:e.breakpoints,class:"carousel1"},{addons:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(b),Object(c["createVNode"])(f)]})),default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.carouselList,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(d,{key:t,class:"carousel__slide"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",_,[Object(c["createVNode"])(l,{class:"carousel__img",src:e.imageURL,fit:"cover"},null,8,["src"]),Object(c["createElementVNode"])("div",C,[Object(c["createVNode"])(s,{type:"primary",href:e.clickURL,underline:!1,target:"_blank",style:{"font-size":"20px",color:"#d4d4d4"}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{size:20},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(i)]})),_:1}),Object(c["createElementVNode"])("div",null,Object(c["toDisplayString"])(e.title),1)]})),_:2},1032,["href"])])])]})),_:2},1024)})),128))]})),_:1},8,["settings","breakpoints"])}var V=n("0b81"),y=(e,t)=>{const n=e.__vccOpts||e;for(const[c,o]of t)n[c]=o;return n};const S=Object(c["defineComponent"])({name:"Search"}),k={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},T=Object(c["createElementVNode"])("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"},null,-1),L=[T];function A(e,t,n,o,r,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("svg",k,L)}var B=y(S,[["render",A]]),M=(n("4001"),{name:"Breakpoints",props:{carouselList:{type:Array,default:function(){return[{imageURL:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",title:"11",clickURL:""},{imageURL:"https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",title:"22",clickURL:""},{imageURL:"https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",title:"33",clickURL:""},{imageURL:"https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",title:"44",clickURL:""},{imageURL:"https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",title:"55",clickURL:""},{imageURL:"https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",title:"66",clickURL:""},{imageURL:"https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",title:"77",clickURL:""},{imageURL:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",title:"88",clickURL:""},{imageURL:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",title:"88",clickURL:""},{imageURL:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",title:"10",clickURL:""}]}}},components:{Carousel:V["a"],Slide:V["d"],Navigation:V["b"],Pagination:V["c"],Search:B},data:function(){return{settings:{itemsToShow:1,snapAlign:"center"},breakpoints:{700:{itemsToShow:3.5,snapAlign:"center"},1024:{itemsToShow:5,snapAlign:"start"}}}}});n("a081");const E=h()(M,[["render",N]]);var R=E,U=n("d8cd"),D={name:"home_layout",components:{headerComponent:f["a"],news_cards:w,footer_main:x["a"],facult_list:R},data:function(){return{show:!0,label:"loading",overlay:!0,fullPage:!0,Data_value:new Date,teamList:[]}},setup:function(){},computed:Object(d["a"])({},Object(b["c"])({carousels_list:function(e){return e.main.carousels_list}})),methods:Object(d["a"])({},Object(b["b"])({getnewData:"news/get_newsData"})),created:function(){},mounted:function(){var e=this;Object(U["b"])().then((function(t){e.teamList=t.data["info"]}))}};n("6875");const I=h()(D,[["render",s],["__scopeId","data-v-10ed6230"]]);t["default"]=I},"2a5e":function(e,t,n){"use strict";n("d92d")},"4de4":function(e,t,n){"use strict";var c=n("23e7"),o=n("b727").filter,r=n("1dde"),a=r("filter");c({target:"Array",proto:!0,forced:!a},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},6875:function(e,t,n){"use strict";n("1ccf")},"71c2":function(e,t,n){"use strict";var c=n("7a23");Object(c["pushScopeId"])("data-v-aeae30e8");var o=Object(c["createTextVNode"])("Explore"),r=Object(c["createTextVNode"])("Our Research"),a=Object(c["createTextVNode"])("item one"),l=Object(c["createTextVNode"])("item two"),i=Object(c["createTextVNode"])("item three"),u=Object(c["createTextVNode"])("Publications"),s=Object(c["createTextVNode"])("Our lab"),d=Object(c["createTextVNode"])("login");function b(e,t,n,b,f,j){var O=Object(c["resolveComponent"])("el-image"),p=Object(c["resolveComponent"])("el-col"),v=Object(c["resolveComponent"])("router-link"),m=Object(c["resolveComponent"])("el-menu-item"),h=Object(c["resolveComponent"])("el-sub-menu"),g=Object(c["resolveComponent"])("el-menu"),w=Object(c["resolveComponent"])("el-row"),x=Object(c["resolveComponent"])("el-header");return Object(c["openBlock"])(),Object(c["createBlock"])(x,{class:"el-header"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(w,{justify:"start",align:"middle"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(p,{span:8},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(O,{class:"el-header-log",src:"http://www.hzau.edu.cn/dfiles/14527/public/doc/images/logo2018.png",fit:"cover"})]})),_:1}),Object(c["createVNode"])(p,{span:10,offset:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(g,{"background-color":"#7fb899","active-text-color":"#ffd04b","text-color":"#fff","default-active":f.activeIndex,mode:"horizontal",onSelect:j.handleSelect,class:"el-menu-header"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(m,{index:"1"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(v,{to:"/"},{default:Object(c["withCtx"])((function(){return[o]})),_:1})]})),_:1}),Object(c["createVNode"])(h,{index:"2"},{title:Object(c["withCtx"])((function(){return[r]})),default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(m,{index:"2-1"},{default:Object(c["withCtx"])((function(){return[a]})),_:1}),Object(c["createVNode"])(m,{index:"2-2"},{default:Object(c["withCtx"])((function(){return[l]})),_:1}),Object(c["createVNode"])(m,{index:"2-3"},{default:Object(c["withCtx"])((function(){return[i]})),_:1})]})),_:1}),Object(c["createVNode"])(m,{index:"3"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(v,{to:"/publication"},{default:Object(c["withCtx"])((function(){return[u]})),_:1})]})),_:1}),Object(c["createVNode"])(m,{index:"4"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(v,{to:"/people"},{default:Object(c["withCtx"])((function(){return[s]})),_:1})]})),_:1}),Object(c["createVNode"])(m,{index:"5"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(v,{to:"/login"},{default:Object(c["withCtx"])((function(){return[d]})),_:1})]})),_:1})]})),_:1},8,["default-active","onSelect"])]})),_:1})]})),_:1})]})),_:1})}Object(c["popScopeId"])();var f={name:"header-web",data:function(){return{activeIndex:"0",activeIndex2:"0"}},methods:{handleSelect:function(e,t){console.log(e,t)}}},j=(n("2a5e"),n("d959")),O=n.n(j);const p=O()(f,[["render",b],["__scopeId","data-v-aeae30e8"]]);t["a"]=p},a081:function(e,t,n){"use strict";n("0851")},a930:function(e,t,n){"use strict";n("e37b")},b64b:function(e,t,n){var c=n("23e7"),o=n("7b0b"),r=n("df75"),a=n("d039"),l=a((function(){r(1)}));c({target:"Object",stat:!0,forced:l},{keys:function(e){return r(o(e))}})},d92d:function(e,t,n){},dbb4:function(e,t,n){var c=n("23e7"),o=n("83ab"),r=n("56ef"),a=n("fc6a"),l=n("06cf"),i=n("8418");c({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,n,c=a(e),o=l.f,u=r(c),s={},d=0;while(u.length>d)n=o(c,t=u[d++]),void 0!==n&&i(s,t,n);return s}})},e37b:function(e,t,n){},e439:function(e,t,n){var c=n("23e7"),o=n("d039"),r=n("fc6a"),a=n("06cf").f,l=n("83ab"),i=o((function(){a(1)})),u=!l||i;c({target:"Object",stat:!0,forced:u,sham:!l},{getOwnPropertyDescriptor:function(e,t){return a(r(e),t)}})},e4ea:function(e,t,n){}}]);