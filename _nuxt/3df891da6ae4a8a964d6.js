(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{1002:function(e,t,i){"use strict";i(1013),i(3),i(60),i(36),i(27),i(168),i(311);var s=i(161),r=i(86),n=(i(33),i(376),i(8),i(5),null);var a=null;function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=document.createElement(e);return Object.keys(t).forEach((function(e){i[e]=t[e]})),i}function c(e,t,i){return(window.getComputedStyle(e,i||null)||{display:"none"})[t]}function l(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};for(var t=e;t!==document;){if("none"===c(t,"display"))return{detached:!1,rendered:!1};t=t.parentNode}return{detached:!1,rendered:!0}}var d='.resize-triggers{visibility:hidden;opacity:0}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}',u=0,_=null;function f(e,t){if(e.__resize_mutation_handler__||(e.__resize_mutation_handler__=p.bind(e)),!e.__resize_listeners__)if(e.__resize_listeners__=[],window.ResizeObserver){var i=e.offsetWidth,s=e.offsetHeight,r=new ResizeObserver((function(){(e.__resize_observer_triggered__||(e.__resize_observer_triggered__=!0,e.offsetWidth!==i||e.offsetHeight!==s))&&v(e)})),n=l(e),a=n.detached,f=n.rendered;e.__resize_observer_triggered__=!1===a&&!1===f,e.__resize_observer__=r,r.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){v(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(u||(_=function(e){var t=document.createElement("style");return t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(t),t}(d)),function(e){var t=c(e,"position");t&&"static"!==t||(e.style.position="relative");e.__resize_old_position__=t,e.__resize_last__={};var i=o("div",{className:"resize-triggers"}),s=o("div",{className:"resize-expand-trigger"}),r=o("div"),n=o("div",{className:"resize-contract-trigger"});s.appendChild(r),i.appendChild(s),i.appendChild(n),e.appendChild(i),e.__resize_triggers__={triggers:i,expand:s,expandChild:r,contract:n},m(e),e.addEventListener("scroll",h,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}(e),e.__resize_rendered__=l(e).rendered,window.MutationObserver){var g=new MutationObserver(e.__resize_mutation_handler__);g.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=g}e.__resize_listeners__.push(t),u++}function p(){var e=l(this),t=e.rendered,i=e.detached;t!==this.__resize_rendered__&&(!i&&this.__resize_triggers__&&(m(this),this.addEventListener("scroll",h,!0)),this.__resize_rendered__=t,v(this))}function h(){var e,t,i=this;m(this),this.__resize_raf__&&(e=this.__resize_raf__,a||(a=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}).bind(window)),a(e)),this.__resize_raf__=(t=function(){var e,t,s,r,n,a,o=(t=(e=i).__resize_last__,s=t.width,r=t.height,n=e.offsetWidth,a=e.offsetHeight,n!==s||a!==r?{width:n,height:a}:null);o&&(i.__resize_last__=o,v(i))},n||(n=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return setTimeout(e,16)}).bind(window)),n(t))}function v(e){e&&e.__resize_listeners__&&e.__resize_listeners__.forEach((function(t){t.call(e)}))}function m(e){var t=e.__resize_triggers__,i=t.expand,s=t.expandChild,r=t.contract,n=r.scrollWidth,a=r.scrollHeight,o=i.offsetWidth,c=i.offsetHeight,l=i.scrollWidth,d=i.scrollHeight;r.scrollLeft=n,r.scrollTop=a,s.style.width=o+1+"px",s.style.height=c+1+"px",i.scrollLeft=l,i.scrollTop=d}var g=["maxLines","maxHeight","ellipsis","isClamped"],b=["tag","text","autoresize"];t.a={name:"vue-clamp",props:{tag:{type:String,default:"div"},autoresize:{type:Boolean,default:!1},maxLines:Number,maxHeight:[String,Number],ellipsis:{type:String,default:"…"},expanded:Boolean},data:function(){return{offset:null,text:this.getText(),localExpanded:!!this.expanded}},computed:{clampedText:function(){return this.text.slice(0,this.offset)+this.ellipsis},isClamped:function(){return!!this.text&&this.offset!==this.text.length},realText:function(){return this.isClamped?this.clampedText:this.text},realMaxHeight:function(){if(this.localExpanded)return null;var e=this.maxHeight;return e?"number"==typeof e?"".concat(e,"px"):e:null}},watch:{expanded:function(e){this.localExpanded=e},localExpanded:function(e){e?this.clampAt(this.text.length):this.update(),this.expanded!==e&&this.$emit("update:expanded",e)}},mounted:function(){var e=this;this.init(),b.forEach((function(t){e.$watch(t,e.init)})),g.forEach((function(t){e.$watch(t,e.update)}))},updated:function(){this.text=this.getText(),this.applyChange()},beforeDestroy:function(){this.cleanUp()},methods:{init:function(){var e=this;if(this.$slots.default){if(this.offset=this.text.length,this.cleanUp(),this.autoresize){var t=function(){e.update()};f(this.$el,t),this.unregisterResizeCallback=function(){!function(e,t){if(e.detachEvent&&e.removeEventListener)return e.detachEvent("onresize",e.__resize_legacy_resize_handler__),void document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);var i=e.__resize_listeners__;i&&(i.splice(i.indexOf(t),1),i.length||(e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",h),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null),!--u&&_&&_.parentNode.removeChild(_))}(e.$el,t)}}this.update()}},update:function(){this.localExpanded||(this.applyChange(),(this.isOverflow()||this.isClamped)&&this.search())},expand:function(){this.localExpanded=!0},collapse:function(){this.localExpanded=!1},toggle:function(){this.localExpanded=!this.localExpanded},getLines:function(){return this.$refs.content.getClientRects().length},isOverflow:function(){return!(!this.maxLines&&!this.maxHeight)&&(!!(this.maxLines&&this.getLines()>this.maxLines)||!!(this.maxHeight&&this.$el.scrollHeight>this.$el.offsetHeight))},getText:function(){var e=(this.$slots.default||[]).filter((function(e){return!e.tag&&!e.isComment})),t=Object(r.a)(e,1)[0];return t?t.text:""},moveEdge:function(e){this.clampAt(this.offset+e)},clampAt:function(e){this.offset=e,this.applyChange()},applyChange:function(){this.$refs.text.textContent=this.realText},stepToFit:function(){this.fill(),this.clamp()},fill:function(){for(;(!this.isOverflow()||this.getLines()<2)&&this.offset<this.text.length;)this.moveEdge(1)},clamp:function(){for(;this.isOverflow()&&this.getLines()>1&&this.offset>0;)this.moveEdge(-1)},search:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var s=t[0],r=void 0===s?0:s,n=t[1],a=void 0===n?this.offset:n;if(a-r<=3)this.stepToFit();else{var o=Math.floor((a+r)/2);this.clampAt(o),this.isOverflow()?this.search(r,o):this.search(o,a)}},cleanUp:function(){this.unregisterResizeCallback&&this.unregisterResizeCallback()}},render:function(e){var t=[e("span",{ref:"text",attrs:{"aria-label":this.text.trim()}},this.realText)],i={expand:this.expand,collapse:this.collapse,toggle:this.toggle,clamped:this.isClamped,expanded:this.localExpanded},r=this.$scopedSlots.before?this.$scopedSlots.before(i):this.$slots.before;r&&t.unshift.apply(t,Object(s.a)(Array.isArray(r)?r:[r]));var n=this.$scopedSlots.after?this.$scopedSlots.after(i):this.$slots.after;n&&t.push.apply(t,Object(s.a)(Array.isArray(n)?n:[n]));var a=[e("span",{style:{boxShadow:"transparent 0 0"},ref:"content"},t)];return e(this.tag,{style:{maxHeight:this.realMaxHeight,overflow:"hidden"}},a)}}},1013:function(e,t,i){var s=i(23),r=i(1014),n=i(167);s({target:"Array",proto:!0},{fill:r}),n("fill")},1014:function(e,t,i){"use strict";var s=i(71),r=i(310),n=i(64);e.exports=function(e){for(var t=s(this),i=n(t.length),a=arguments.length,o=r(a>1?arguments[1]:void 0,i),c=a>2?arguments[2]:void 0,l=void 0===c?i:r(c,i);l>o;)t[o++]=e;return t}},1143:function(e,t,i){},1313:function(e,t,i){},1340:function(e,t,i){"use strict";var s=i(1143);i.n(s).a},1371:function(e,t,i){"use strict";var s=i(1002),r=i(31),n=i(37),a=i(113),o={props:{article:Object,url:{type:String|Object,default:"/"},isSlide:{type:Boolean,default:!1}},data:function(){return{resize:"410x277",dateOptions:{month:"long",day:"numeric",year:"numeric"},activeOptions:{month:"long",day:"numeric"}}},computed:{hasVideo:function(){return"video"===this.article.type||"review"===this.article.type},resizedImage:function(){return this.article.image?this.getResizeImagePath(this.article.image,this.resize):this.getResizeImagePath(this.article.preview_image,this.resize)}},components:{VClamp:s.a,IconPlay:a.a},mixins:[r.a,n.a]},c=(i(1340),i(2)),l=Object(c.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("article",{class:["articles-item flex flex-col",{"has-video":e.hasVideo},{"swiper-slide":e.isSlide}],on:{click:function(t){e.hasVideo&&e.$emit("toggle-popup-video",e.article.id)}}},[i("figure",{style:"background-image:url("+e.resizedImage+")"},[e.hasVideo?i("span",{staticClass:"flex justify-center items-center color-white"},[i("icon-play")],1):e._e(),e._v(" "),e.article.video_time?i("div",{staticClass:"news-card__video-duration text-s3"},[e._v("\n      "+e._s(e.article.video_time)+"\n    ")]):e._e()]),e._v(" "),i("div",{staticClass:"articles-item__info flex flex-col"},[e.article.name?i("div",{staticClass:"articles-item__preview text-s2-b desktop:text-s1"},[i("v-clamp",{attrs:{autoresize:"","max-lines":3,ellipsis:"..."}},[e._v("\n        "+e._s(e.article.name)+"\n      ")])],1):e._e(),e._v(" "),e.article.author?i("div",{staticClass:"articles-item__source text-s3 desktop:text-s2 mt-4"},[e._v("\n      "+e._s(e.article.author)+"\n    ")]):e._e(),e._v(" "),e.article.date?i("div",{staticClass:"articles-item__date text-s3 desktop:text-s2 color-disabled-gray mt-1"},[e._v("\n      "+e._s(e.formatDate(e.article.date,e.dateOptions))+"\n    ")]):e.article.active?i("div",{staticClass:"articles-item__date text-s3 desktop:text-s2 color-disabled-gray mt-1"},[e._v("\n      "+e._s(e.formatDate(e.article.active.from,e.activeOptions))+" -\n      "+e._s(e.formatDate(e.article.active.to,e.activeOptions))+"\n    ")]):e._e(),e._v(" "),e.article.section?i("div",{staticClass:"articles-item__section text-s2 color-disabled-gray mt-1"},[e._v("\n      "+e._s(e.article.section)+"\n    ")]):e._e(),e._v(" "),e.article.preview_descr?i("div",{staticClass:"articles-item__descr text-s2 desktop:text-s2i mt-2"},[e._v("\n      "+e._s(e.article.preview_descr)+"\n    ")]):e._e()]),e._v(" "),"link"===e.article.type?i("nuxt-link",{staticClass:"articles-item__link",attrs:{to:e.url}}):e._e()],1)}),[],!1,null,null,null);t.a=l.exports},1468:function(e,t,i){"use strict";i(7),i(3),i(9),i(10),i(8),i(5);var s=i(15),r=i(83),n=i(1371),a=i(378),o=i(48),c=i(18);function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){Object(s.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var u={props:{articles:Array,popupVideo:{type:Boolean,default:!1},hasPager:{type:Boolean,default:!0}},data:function(){return{isPopupVideoOpened:!1,videoLink:null}},methods:d({},Object(c.d)("video-bank",["setActiveVideoId","setActiveVideoBankGroups"]),{togglePopupVideo:function(e){this.isPopupVideoOpened||(e&&this.setActiveVideoId(e),this.videoLink=this.activeVideo.video_link),this.isPopupVideoOpened=!this.isPopupVideoOpened}}),computed:d({},Object(c.c)("video-bank",["getVideoBank","getVideoBankGroups","activeVideo"])),components:{Popup:r.a,Videos:a.a,Article:n.a,IconClose:o.a}},_=i(2),f=Object(_.a)(u,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"articles-list flex flex-wrap mb-12 desktop:mb-20"},[e._l(e.articles,(function(t,s){return[t.video||"review"===t.type?[i("Article",{key:s,attrs:{article:t},on:{"toggle-popup-video":e.togglePopupVideo}})]:[i("Article",{key:s,attrs:{article:t,url:t.url}})]]})),e._v(" "),e._t("show-more-button")],2),e._v(" "),e.isPopupVideoOpened?i("Popup",[i("button",{staticClass:"news-feed__popup-close-button color-white",on:{click:e.togglePopupVideo}},[i("icon-close")],1),e._v(" "),i("div",{staticClass:"news-feed__popup-content w-full"},[i("div",{staticClass:"flex justify-center"},[i("div",{staticClass:"news-feed__video-wrapper flex w-full"},[i("iframe",{attrs:{width:"100%",height:"100%",src:e.videoLink,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])]):e._e()],1)}),[],!1,null,"2b1e0718",null);t.a=f.exports},1484:function(e,t,i){"use strict";var s={name:"page-title",props:{title:String}},r=(i(1496),i(2)),n=Object(r.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("g-padding",{staticClass:"page-title pt-6 desktop:pb-4 desktop1440:pb-8"},[t("g-container",[t("div",{staticClass:"page-title__title text-x4 desktop:text-x3"},[this._v("\n      "+this._s(this.title)+"\n    ")])])],1)}),[],!1,null,null,null);t.a=n.exports},1496:function(e,t,i){"use strict";var s=i(1313);i.n(s).a},1774:function(e,t,i){},2230:function(e,t,i){"use strict";var s=i(1774);i.n(s).a},2444:function(e,t,i){"use strict";i.r(t);i(7),i(75),i(13),i(3),i(9),i(10),i(8),i(5);var s=i(15),r=i(18),n=i(998),a=i(997),o=i(1075),c=i(532),l=(i(38),i(26),i(1468)),d={props:{offers:Array},computed:{programs:function(){return this.offers.map((function(e){return{name:e.name,preview_descr:e.preview_text,image:e.preview_image,url:{name:"service-special-code",params:{code:e.code}},active:{from:e.active_from,to:e.active_to},type:"link"}}))}},components:{Articles:l.a}},u=(i(2230),i(2)),_=Object(u.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[0!==this.offers.length?t("div",{staticClass:"spoffers-programs"},[t("Articles",{attrs:{articles:this.programs,"has-pager":!1}})],1):t("div",[this._m(0)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"articles-list_empty pb-6 desktop:pb-4 desktop1440:pb-8"},[t("div",{staticClass:"text-x4 desktop:text-x4"},[this._v("\n        На данный момент спецпредложения отсутствуют\n      ")])])}],!1,null,"3b1649e7",null).exports,f=i(1484);function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}var h={name:"aftersales-offers",mixins:[n.a],fetch:function(e){var t=e.store,i=e.error;return Object(a.a)(t,i,"aftersales-offers/loadPage",null).then((function(){t.commit("ui/setHeaderColor","black")}),(function(){}))},head:function(){return{title:this.$store.state["aftersales-offers"].seo.title,meta:[{hid:"description",name:"description",content:this.$store.state["aftersales-offers"].seo.description}]}},data:function(){return{viewAlsoItems:[{icon:"IconDealerOffice",url:"/dealers/",text:"Поиск дилера"},{icon:"IconContract",url:"/service/booking/",text:"Запись на сервис"},{icon:"IconPartTools",url:"/service/genuine_parts/",text:"Запчасти"},{icon:"IconSetup",url:"/service/accessories/",text:"Аксессуары"}]}},computed:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach((function(t){Object(s.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},Object(r.e)("aftersales-offers",["offers"]),{cntOffers:function(){var e=this.choice(this.offers.length,["спецпредложение","спецпредложения","спецпредложений"]);return"".concat(this.offers.length," ").concat(e)},breadcrumbItems:function(){return[{name:"Спецпредложения на сервис Kia"}]}}),components:{Title:f.a,ViewAlso:o.a,Programs:_,Breadcrumbs:c.default}},v=Object(u.a)(h,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"pt-12 desktop1440:pt-16"},[i("g-padding",{staticClass:"pt-0 desktop:pt-4"},[i("g-container",{staticClass:"flex justify-between"},[i("Breadcrumbs",{attrs:{items:e.breadcrumbItems}})],1)],1),e._v(" "),i("Title",{attrs:{title:"Специальные предложения на сервис Kia"}}),e._v(" "),i("g-padding",[i("g-container",{staticClass:"pt-2 desktop1440:pt-0"},[e.offers.length>0?i("div",{staticClass:"mb-4 desktop:mb-5"},[e._v("\n          "+e._s(e.cntOffers)+"\n        ")]):e._e(),e._v(" "),i("Programs",{attrs:{offers:e.offers}}),e._v(" "),i("ViewAlso",{attrs:{"is-strips":!0,"is-small":!0,items:e.viewAlsoItems,"show-title":!0,title:"Может быть полезным"}})],1)],1)],1)])}),[],!1,null,null,null);t.default=v.exports},997:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));i(6);function s(e,t,i,s){return new Promise((function(r,n){e.dispatch(i,s).then((function(e){r(e)})).catch((function(e){404===e.response.status?t({statusCode:404}):t({statusCode:500}),n()}))}))}},998:function(e,t,i){"use strict";i(49),i(38),i(376),i(27),i(43),i(59);t.a={methods:{choice:function(e,t){return t[e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]]},translit:function(e){var t={"а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"e","ж":"j","з":"z","и":"i","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"shch","ы":"y","э":"e","ю":"u","я":"ya"," ":"_",'"':""},i=[];e=e.replace(/[ъь]+/g,"").replace(/й/g,"i");for(var s=0;s<e.length;++s)i.push(t[e[s]]||null==t[e[s].toLowerCase()]&&e[s]||t[e[s].toLowerCase()].replace(/^(.)/,(function(e){return e.toUpperCase()})));return i.join("")},createId:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!1!==e)return this.translit((null!==t?t:"basic")+"_"+e+i).toLowerCase()},tabsIds:function(e,t,i){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=e.split("_");return r.splice(r.length-(t?2:1),0,s?"slides":"tabs"),i.map((function(e,t){return r.join("_")+"_"+(t+1)}))},getDisclaimerText:function(e,t){return e[t]&&e[t].text?e[t].text:""}}}}}]);