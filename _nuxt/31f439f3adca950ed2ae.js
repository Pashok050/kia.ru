(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1e3:function(t,e,i){},1003:function(t,e,i){},1004:function(t,e,i){"use strict";var s=i(14),a=i.n(s),n={retina:1920,desktop:1440,mobile:500};e.a={methods:{getMaxResizeWidthByType:function(t){return n[t]},getResizeTypes:function(){return["mobile","desktop","retina"]},getPictureMediaSources:function(t,e){for(var i=this.getResizeTypes(),s=[],a=0;a<i.length;a++){var n=i[a];null!==t[n]&&s.push({max_width:this.getMaxResizeWidthByType(n),url:this.getResizeImagePath(t[n],e[n])})}return this.unsetLastMaxwithProperty(s)},getVideoMediaSources:function(t,e,i){for(var s=this.getResizeTypes(),n=[],r=0;r<s.length;r++){var o=s[r];n.push({max_width:this.getMaxResizeWidthByType(o),url:this.generateFilePath(e),poster:a()(t[o])?null:this.getResizeImagePath(t[o],i[o])})}return this.unsetLastMaxwithProperty(n)},unsetLastMaxwithProperty:function(t){return void 0!==t[t.length-1]&&delete t[t.length-1].max_width,t}}}},1005:function(t,e,i){"use strict";var s=i(166),a=i(115),n={props:{isRight:{type:Boolean,default:!1},isTransparent:{type:Boolean,default:!1}},components:{LongArrowLeft:s.a,LongArrowRight:a.a}},r=(i(1015),i(2)),o=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{class:["shared-slider-button",this.isTransparent&&"shared-slider-button_transparent"]},[this.isRight?[e("LongArrowRight")]:[e("LongArrowLeft")]],2)}),[],!1,null,null,null);e.a=o.exports},1006:function(t,e){t.exports={isFunction:function(t){return"function"==typeof t},isArray:function(t){return"[object Array]"===Object.prototype.toString.apply(t)},each:function(t,e){for(var i=0,s=t.length;i<s&&!1!==e(t[i],i);i++);}}},1015:function(t,e,i){"use strict";var s=i(999);i.n(s).a},1018:function(t,e,i){"use strict";var s={props:{lazyload:{type:Boolean,default:!1},sources:{type:Array,required:!0},alt:String},methods:{source:function(t){var e={};return e[this.lazyload?"data-srcset":"srcset"]=t.url,e},maxSourceProp:function(t){var e=this.source(t);return e.media="(max-width: ".concat(t.max_width,"px)"),e},minSourceProp:function(t){var e=this.source(t);return e.media="(min-width: ".concat(t.min_width,"px)"),e},imageProp:function(t){var e={};return e[this.lazyload?"data-src":"src"]=t.url,e}}},a=(i(1031),i(2)),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("picture",{staticClass:"picture-media-query w-full"},[t._l(t.sources,(function(e){return[void 0!==e.max_width?i("source",t._b({},"source",t.maxSourceProp(e),!1)):void 0!==e.min_width?i("source",t._b({},"source",t.minSourceProp(e),!1)):i("img",t._b({staticClass:"swiper-lazy lazyload",attrs:{alt:t.alt,"data-sizes":"auto"}},"img",t.imageProp(e),!1))]}))],2)}),[],!1,null,null,null);e.a=n.exports},1021:function(t,e,i){"use strict";i(3),i(375),i(77),i(5);var s,a=i(161),n={props:{sources:{type:Array,required:!0}},data:function(){return{currentMediaSize:null}},mounted:function(){var t=this;if(s=i(1029),Array.isArray(this.sources)){this.mediaHandlers=[];var e=Object(a.a)(this.sources.filter((function(t){return"number"==typeof t.max_width})));e.sort((function(t,e){return t.max_width>e.max_width?1:-1})),e.forEach((function(i,s){i.max_width&&t.mediaHandlers.push({query:"(max-width: ".concat(i.max_width,"px)"),handlers:{match:function(){t.currentMediaSize=i.max_width},unmatch:function(){e.length-1===s&&(t.currentMediaSize=null)},destroy:function(){}}})})),this.mediaHandlers.forEach((function(t){s.register(t.query,t.handlers)}))}},computed:{currentBgVideo:function(){var t=this;return null!==this.currentMediaSize?this.sources.find((function(e){return e.max_width===t.currentMediaSize})):this.getDefault(this.sources)}},beforeDestroy:function(){Array.isArray(this.mediaHandlers)&&this.mediaHandlers.forEach((function(t){s.unregister(t.query,t.handlers)}))},methods:{getDefault:function(t){var e=t.find((function(t){return void 0===t.max_width}));return e||null}}},r=i(2),o=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("video",{attrs:{src:this.currentBgVideo.url,poster:this.currentBgVideo.poster,muted:"",autoplay:"",loop:"",preload:"",playsinline:""},domProps:{muted:!0}})}),[],!1,null,null,null);e.a=o.exports},1024:function(t,e,i){var s=i(1025),a=i(1006),n=a.each,r=a.isFunction,o=a.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}l.prototype={constructor:l,register:function(t,e,i){var a=this.queries,l=i&&this.browserIsIncapable;return a[t]||(a[t]=new s(t,l)),r(e)&&(e={match:e}),o(e)||(e=[e]),n(e,(function(e){r(e)&&(e={match:e}),a[t].addHandler(e)})),this},unregister:function(t,e){var i=this.queries[t];return i&&(e?i.removeHandler(e):(i.clear(),delete this.queries[t])),this}},t.exports=l},1025:function(t,e,i){var s=i(1026),a=i(1006).each;function n(t,e){this.query=t,this.isUnconditional=e,this.handlers=[],this.mql=window.matchMedia(t);var i=this;this.listener=function(t){i.mql=t.currentTarget||t,i.assess()},this.mql.addListener(this.listener)}n.prototype={constuctor:n,addHandler:function(t){var e=new s(t);this.handlers.push(e),this.matches()&&e.on()},removeHandler:function(t){var e=this.handlers;a(e,(function(i,s){if(i.equals(t))return i.destroy(),!e.splice(s,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){a(this.handlers,(function(t){t.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";a(this.handlers,(function(e){e[t]()}))}},t.exports=n},1026:function(t,e){function i(t){this.options=t,!t.deferSetup&&this.setup()}i.prototype={constructor:i,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},t.exports=i},1029:function(t,e,i){var s=i(1024);t.exports=new s},1031:function(t,e,i){"use strict";var s=i(1e3);i.n(s).a},1035:function(t,e,i){"use strict";i(7),i(3),i(26),i(9),i(10),i(8),i(5);var s=i(15),a=i(83),n=i(378),r=i(48),o=i(113),l=i(1018),d=i(1021),c=i(18),u=i(50),p=i.n(u),g=i(24),v=i(1004),m=i(70);function b(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function _(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?b(Object(i),!0).forEach((function(e){Object(s.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var h={mixins:[g.a,v.a,m.a],props:{playOnMobile:{type:Boolean,default:function(){return!1}},poster:"",url:{type:String},video:{type:Object,default:function(){return{}}},overlay:{type:String,default:null},time:{type:String},name:{type:String,default:null},modelName:{type:String,default:null},isFull:{type:Boolean,default:!1}},data:function(){return{isDesktopScreen:this.isDeviceDesktop,isOpen:!1,resizeBackgroundImages:{mobile:"375x211",desktop:"1440x810",retina:"1920x1080"}}},methods:_({},Object(c.d)("video-bank",["setActiveVideoId","setActiveVideoBankGroups","setSelectVideoBankGroups"]),{isDeviceDesktop:function(){return this.$device.isDesktop},togglePopupVideo:function(){if(this.url)this.isOpen=!this.isOpen,this.isOpen&&this.sendStatistic(this.name);else if(Object.keys(this.getVideoBank).length>0&&this.video.id){var t=p()(this.getVideoBankGroups,{id:this.video.group_id}),e=p()(this.getVideoBank[this.video.group_id],{id:this.video.id});-1!==t&&-1!==e&&(this.setActiveVideoId(this.video.id),this.setActiveVideoBankGroups(t),this.setSelectVideoBankGroups(t),this.isOpen=!this.isOpen,this.isOpen&&this.sendStatistic(this.getVideoBank[this.video.group_id][e].name))}},sendStatistic:function(t){this.sendStatic(this.modelName,t,this.gAnalytics.eventCategory.videoOpen)}}),computed:_({},Object(c.c)("video-bank",["getVideoBank","getVideoBankGroups"])),components:{Popup:a.a,Videos:n.a,PlayIcon:o.a,PictureMedia:l.a,VideoMediaQuery:d.a,CloseIcon:r.a}},f=(i(1042),i(2)),y=Object(f.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["video-block flex w-full",{"video-block_full":t.isFull}]},[t.isFull?[i("div",{staticClass:"video-block__bg",style:"background-image:url("+t.poster+");"})]:[i("div",{staticClass:"flex items-center w-full"},[t.poster?i("img",{staticClass:"w-full lazyload",attrs:{"data-src":t.poster,alt:""}}):t._e()])],t._v(" "),i("div",{staticClass:"video-block__overlay flex justify-center items-center",on:{click:t.togglePopupVideo}},[i("div",{staticClass:"video-block__icon flex justify-center items-center"},[i("PlayIcon",{staticClass:"video-block__icon-svg"})],1),t._v(" "),t.overlay&&(t.playOnMobile||t.isDesktopScreen&&t.isDeviceDesktop())?[i("video",{staticClass:"video-block__overlay-video",attrs:{src:t.overlay,muted:"muted",autoplay:"autoplay",loop:"loop",preload:"",playsinline:""},domProps:{muted:!0}})]:t._e()],2),t._v(" "),t.time?i("div",{staticClass:"news-card__video-duration text-s3"},[t._v("\n      "+t._s(t.time)+"\n    ")]):t._e(),t._v(" "),t.url&&t.isOpen?i("Popup",[i("button",{staticClass:"video-block__close color-white",on:{click:function(e){t.isOpen=!1}}},[i("CloseIcon")],1),t._v(" "),i("div",{staticClass:"video-block__popup-content"},[i("div",{staticClass:"flex justify-center"},[i("div",{staticClass:"video-block__video-wrapper flex w-full"},[i("iframe",{attrs:{width:"100%",height:"100%",src:t.url,allow:"autoplay",allowfullscreen:""}})])])])]):t.video.id&&t.isOpen?i("Videos",{attrs:{videoBankGroups:t.getVideoBankGroups,videoBank:t.getVideoBank},on:{"toggle-video-popup":t.togglePopupVideo}}):t._e()],2)}),[],!1,null,"28ce75b6",null);e.a=y.exports},1042:function(t,e,i){"use strict";var s=i(1003);i.n(s).a},1045:function(t,e,i){},1144:function(t,e,i){"use strict";var s=i(1045);i.n(s).a},1145:function(t,e,i){},1165:function(t,e,i){"use strict";i(7),i(3),i(9),i(10),i(8),i(5);var s=i(15),a=i(1005);function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){Object(s.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var o={mixins:[i(31).a],props:{title:{type:String,default:"Подробнее о Kia"},exclude:{type:[String,Array],default:null},dark:{type:Boolean,default:!1}},data:function(){return{curSlide:0,swiperOptions:r({pagination:{el:"[data-slider-pager]",type:"bullets",clickable:!0,bulletClass:"v-swiper-pager__item",bulletActiveClass:"v-swiper-pager__item_active"},navigation:{nextEl:"[data-slider-button-next]",prevEl:"[data-slider-button-prev]"},slidesPerView:"auto"},this.options),items:[{code:"brand-kia",title:"Бренд Киа",image:this.generateFilePath("/media-data/landing/about/brand/menu/img-more-brand-kia.jpg"),link:"/about/brand-kia/"},{code:"design",title:"Дизайн",image:this.generateFilePath("/media-data/landing/about/brand/menu/img-more-design.jpg"),link:"/about/design/"},{code:"technologies",title:"Технологии",image:this.generateFilePath("/media-data/landing/about/brand/menu/img-more-technologies.jpg"),link:"/about/technologies/"},{code:"social",title:"Социальная ответственность",image:this.generateFilePath("/media-data/landing/about/brand/menu/img-more-social.jpg"),link:"/about/social/"},{code:"sponsorship",title:"Спонсорство",image:this.generateFilePath("/media-data/landing/about/brand/menu/img-more-sponsorship.jpg"),link:"/about/sponsorship/"},{code:"history",title:"История Kia",image:this.generateFilePath("/media-data/landing/about/brand/menu/img-more-history.jpg"),link:"/about/history/"},{code:"awards",title:"Награды",image:this.generateFilePath("/media-data/landing/about/brand/menu/img-more-awards.jpg"),link:"/about/awards/"}]}},computed:{excludes:function(){return"string"==typeof this.exclude?[this.exclude]:"array"==typeof this.exclude?this.exclude:[]}},components:{RoundArrowButton:a.a}},l=(i(1144),i(2)),d=Object(l.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"landing-page__read-more"},[i("div",{staticClass:"text-x5 mb-6"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),i("div",{directives:[{name:"swiper",rawName:"v-swiper:slider",value:t.swiperOptions,expression:"swiperOptions",arg:"slider"}],staticClass:"landing-page__read-more-container"},[i("div",{staticClass:"landing-page__read-more-wrapper swiper-wrapper flex"},[t._l(t.items,(function(e,s){return-1===t.excludes.indexOf(e.code)?[i("div",{key:s,class:["landing-page__read-more-slide swiper-slide",{active:t.curSlide===s}]},[i("nuxt-link",{staticClass:"landing-page__read-more-item",attrs:{to:e.link}},[i("span",{staticClass:"landing-page__read-more-item-bg",style:"background-image:url("+e.image+");"}),t._v(" "),i("span",{staticClass:"landing-page__read-more-item-title text-s1 desktop:text-x5"},[t._v("\n              "+t._s(e.title)+"\n            ")])])],1)]:t._e()}))],2),t._v(" "),i("div",{class:["landing-page__read-more-pager v-swiper-pager",{"v-swiper-pager_dark":t.dark}],attrs:{"data-slider-pager":""}}),t._v(" "),i("RoundArrowButton",{staticClass:"landing-page__read-more-button landing-page__read-more-button_prev",attrs:{"data-slider-button-prev":""}}),t._v(" "),i("RoundArrowButton",{staticClass:"landing-page__read-more-button landing-page__read-more-button_next",attrs:{"data-slider-button-next":"","is-right":!0}})],1)])}),[],!1,null,"4e74132a",null);e.a=d.exports},1305:function(t,e,i){},1341:function(t,e,i){"use strict";var s=i(1145);i.n(s).a},1369:function(t,e,i){"use strict";i(7),i(3),i(9),i(10),i(8),i(5);var s=i(15),a=i(1005),n=i(83),r=i(395),o=i(113),l=i(48);function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(Object(i),!0).forEach((function(e){Object(s.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var u={props:{videos:Array,centered1920:{type:Boolean,default:!1}},data:function(){return{curSlide:0,isVideoPopupShown:!1,videoLink:null,swiperOptions:c({pagination:{el:"[data-slider-pager]",type:"bullets",clickable:!0,bulletClass:"carousel-videos__pager-item",bulletActiveClass:"carousel-videos__pager-item_active"},navigation:{nextEl:"[data-slider-button-next]",prevEl:"[data-slider-button-prev]"},slidesPerView:"auto"},this.options)}},methods:{toggleVideoPopup:function(t){this.videoLink=t,this.isVideoPopupShown=!this.isVideoPopupShown}},components:{RoundArrowButton:a.a,Popup:n.a,PopupContentVideo:r.a,PlayIcon:o.a,IconClose:l.a}},p=(i(1341),i(2)),g=Object(p.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"carousel-videos"},[i("div",{directives:[{name:"swiper",rawName:"v-swiper:slider",value:t.swiperOptions,expression:"swiperOptions",arg:"slider"}],staticClass:"carousel-videos__container"},[i("div",{class:["carousel-videos__wrapper swiper-wrapper flex",{"desktop1920:justify-center":t.centered1920}]},[t._l(t.videos,(function(e,s){return[i("div",{key:s,class:["carousel-videos__slide swiper-slide",{active:t.curSlide===s}]},[i("div",{staticClass:"carousel-videos__item"},[i("div",{staticClass:"carousel-videos__item-cover",style:"background-image:url("+e.cover+");",on:{click:function(i){return t.toggleVideoPopup(e.link)}}},[i("button",{staticClass:"carousel-videos__item-cover-button flex items-center justify-center"},[i("PlayIcon",{staticClass:"carousel-videos__item-cover-button-svg"})],1),t._v(" "),e.duration?i("div",{staticClass:"carousel-videos__item-cover-duration text-s3"},[t._v("\n                "+t._s(e.duration)+"\n              ")]):t._e()]),t._v(" "),e.title?i("div",{staticClass:"text-s2-b desktop:text-s1 mt-2"},[t._v("\n              "+t._s(e.title)+"\n            ")]):t._e()])])]}))],2),t._v(" "),i("div",{staticClass:"carousel-videos__pager",attrs:{"data-slider-pager":""}}),t._v(" "),i("RoundArrowButton",{staticClass:"carousel-videos__button carousel-videos__button_prev",attrs:{"data-slider-button-prev":""}}),t._v(" "),i("RoundArrowButton",{staticClass:"carousel-videos__button carousel-videos__button_next",attrs:{"data-slider-button-next":"","is-right":!0}})],1),t._v(" "),t.isVideoPopupShown?i("Popup",[i("PopupContentVideo",{attrs:{"video-link":t.videoLink},on:{close:t.toggleVideoPopup}})],1):t._e()],1)}),[],!1,null,null,null);e.a=g.exports},1396:function(t,e,i){},1494:function(t,e,i){"use strict";var s=i(1305);i.n(s).a},1516:function(t,e,i){"use strict";var s={props:{items:{type:Array,default:null}}},a=(i(1494),i(2)),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"landing-page__illustrated"},[t._l(t.items,(function(e){return[i("div",{staticClass:"landing-page__illustrated-item"},[i("div",{staticClass:"landing-page__illustrated-item-descr"},[e.title?i("div",{staticClass:"text-x5 desktop1920:text-x4",domProps:{innerHTML:t._s(e.title)}}):t._e(),t._v(" "),e.subtitle?i("div",{staticClass:"text-s2-b desktop1920:text-s1 mt-1 desktop:mt-2",domProps:{innerHTML:t._s(e.subtitle)}}):t._e(),t._v(" "),e.description?i("div",{staticClass:" desktop:text-s1-r mt-4",domProps:{innerHTML:t._s(e.description)}}):t._e()]),t._v(" "),e.image?i("div",{staticClass:"landing-page__illustrated-item-img"},[i("img",{staticClass:"lazyload",attrs:{"data-src":e.image,alt:""}})]):t._e()])]}))],2)}),[],!1,null,null,null);e.a=n.exports},1601:function(t,e,i){},1602:function(t,e,i){},1603:function(t,e,i){"use strict";var s=i(1396);i.n(s).a},1604:function(t,e,i){},1971:function(t,e,i){"use strict";i(7),i(3),i(9),i(10),i(8),i(5);var s=i(15),a=i(1005);function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){Object(s.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var o={props:{arrowWhite:{type:Boolean,default:""},imagesOnly:{type:Boolean,default:!1},isWide:{type:Boolean,default:!1},slides:{type:Array,default:null},showCounter:{type:Boolean,default:!0}},data:function(){return{activeSlide:1,swiperOptions:r({pagination:{el:"[data-slider-pager]",type:"bullets",clickable:!0,bulletClass:"v-swiper-pager__item",bulletActiveClass:"v-swiper-pager__item_active"},navigation:{nextEl:"[data-slider-button-next]",prevEl:"[data-slider-button-prev]"},spaceBetween:10},this.options)}},methods:{getCurSlide:function(){this.activeSlide=this.$refs.slider.swiper.activeIndex+1}},components:{RoundArrowButton:a.a}},l=(i(1603),i(2)),d=Object(l.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["landing-page__slider",{"landing-page__slider_images":t.imagesOnly},{"landing-page__slider_wide":t.isWide}]},[i("div",{staticClass:"landing-page__slider-body"},[i("div",{directives:[{name:"swiper",rawName:"v-swiper:slider",value:t.swiperOptions,expression:"swiperOptions",arg:"slider"}],ref:"slider",on:{slideChange:t.getCurSlide}},[i("div",{staticClass:"swiper-wrapper"},[t._l(t.slides,(function(e,s){return[i("div",{staticClass:"landing-page__slider-slide swiper-slide",attrs:{id:s}},[i("div",{staticClass:"landing-page__slider-image"},[i("img",{staticClass:"swiper-lazy lazyload",attrs:{"data-src":e.image,alt:""}})]),t._v(" "),e.title||e.description?i("div",{staticClass:"px-6 tablet:px-0 mt-8"},[e.title?i("div",{staticClass:"text-s2-b mt-1"},[t._v("\n                "+t._s(e.title)+"\n              ")]):t._e(),t._v(" "),e.description?i("div",{staticClass:"mt-1"},[t._v("\n                "+t._s(e.description)+"\n              ")]):t._e()]):t._e()])]}))],2),t._v(" "),i("div",{staticClass:"landing-page__slider-pager v-swiper-pager",attrs:{"data-slider-pager":""}}),t._v(" "),t.slides.length>1&&t.showCounter?i("div",{staticClass:"landing-page__slider-counter"},[t._v("\n        "+t._s(t.activeSlide)+" / "+t._s(t.slides.length)+"\n      ")]):t._e(),t._v(" "),i("RoundArrowButton",{class:[{"arrow-white":t.arrowWhite},"landing-page__slider-button landing-page__slider-button_prev"],attrs:{"data-slider-button-prev":""}}),t._v(" "),i("RoundArrowButton",{class:[{"arrow-white":t.arrowWhite},"landing-page__slider-button landing-page__slider-button_next"],attrs:{"data-slider-button-next":"","is-right":!0}})],1)])])}),[],!1,null,"925fe1b2",null);e.a=d.exports},2084:function(t,e,i){"use strict";var s=i(1601);i.n(s).a},2085:function(t,e,i){"use strict";var s=i(1602);i.n(s).a},2086:function(t,e,i){"use strict";var s=i(1604);i.n(s).a},2412:function(t,e,i){"use strict";i.r(e);i(7),i(75);var s=i(31),a=i(70),n=i(1086),r=i(1165),o=i(1516),l=(i(17),i(13),i(8),i(3),i(6),i(9),i(5),i(10),["class","staticClass","style","staticStyle","attrs"]);function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function u(t,e){if(null==t)return{};var i,s,a=function(t,e){if(null==t)return{};var i,s,a={},n=Object.keys(t);for(s=0;s<n.length;s++)i=n[s],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(s=0;s<n.length;s++)i=n[s],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var p={props:{text:{type:String,default:null},caption:{type:String,default:null}},components:{QuoteIcon:{functional:!0,render:function(t,e){var i=e._c,s=(e._v,e.data),a=e.children,n=void 0===a?[]:a,r=s.class,o=s.staticClass,p=s.style,g=s.staticStyle,v=s.attrs,m=void 0===v?{}:v,b=u(s,l);return i("svg",function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(Object(i),!0).forEach((function(e){c(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({class:[r,o],style:[p,g],attrs:Object.assign({width:"35",height:"22",viewBox:"0 0 35 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},m)},b),n.concat([i("path",{attrs:{d:"M19.15 0H8.49L0 22h13.68l5.47-22zM35 0H24.34l-8.49 22h13.678L35 0z",fill:"currentColor"}})]))}}}},g=(i(2084),i(2)),v=Object(g.a)(p,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"quote-box"},[i("QuoteIcon",{staticClass:"quote-box__icon"}),t._v(" "),i("div",{staticClass:"quote-box__body"},[t.text?i("div",{staticClass:"text-s2i-b desktop:text-s1",domProps:{innerHTML:t._s(t.text)}}):t._e(),t._v(" "),t.caption?i("div",{staticClass:"text-s3 desktop:text-s2 mt-2 desktop:mt-4",domProps:{innerHTML:t._s(t.caption)}}):t._e()])],1)}),[],!1,null,"2e693273",null).exports,m={props:{background:{type:String,default:null},pretitle:{type:String,default:null},title:{type:String,default:null},description:{type:String,default:null},button:{type:Object,default:null},image:{type:String,default:null},imageClassName:{type:String,default:null}}},b=(i(2085),Object(g.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["kia-banner",{"kia-banner_bgd":t.background}]},[t.background?i("div",{staticClass:"kia-banner__bg",style:"background-image:url("+t.background+");"}):t._e(),t._v(" "),i("g-padding",[i("g-container",[i("div",{staticClass:"kia-banner__body"},[t.pretitle?i("div",{staticClass:"text-n1 color-afternoon-yellow mb-4"},[t._v("\n          "+t._s(t.pretitle)+"\n        ")]):t._e(),t._v(" "),t.title?i("div",{staticClass:"text-x5 tablet:text-x4 desktop:text-x3",domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t.description?i("div",{staticClass:"desktop:text-s1-r mt-4 desktop:mt-6",domProps:{innerHTML:t._s(t.description)}}):t._e(),t._v(" "),t.button?i("div",{staticClass:"kia-banner__button mt-6"},[i("nuxt-link",{class:["button",t.button.className],attrs:{to:t.button.link}},[i("span",{staticClass:"button__span-after"},[t._v("\n              "+t._s(t.button.text)+"\n            ")])])],1):t._e()]),t._v(" "),t.image?i("div",{class:["kia-banner__img",t.imageClassName]},[i("img",{staticClass:"lazyload",attrs:{"data-src":t.image,alt:""}})]):t._e()])],1)],1)}),[],!1,null,"a12aa26a",null).exports),_=i(1369),h=i(1971),f=i(1035),y=i(532),w=i(997),x={mixins:[s.a,a.a],head:function(){return{title:this.$store.state.layout.seo.title,meta:[{hid:"description",name:"description",content:this.$store.state.layout.seo.description}]}},fetch:function(t){var e=t.store,i=t.error;return Object(w.a)(e,i,"layout/loadPage","about-design").then((function(){e.commit("ui/setHeaderColor","white")}),(function(){}))},data:function(){return{isTabletScreen:!1,header:{image:this.generateFilePath("/media-data/landing/about/design/1920x960.mp4"),video:"https://www.youtube.com/embed/ueR8PcA9S4c?iv_load_policy=3&autoplay=1&rel=0&version=3&loop=1&playlist=ueR8PcA9S4c"},banner:{image:this.generateFilePath("/media-data/landing/about/design/bg-video-3.png"),video:"https://www.youtube.com/embed/sxgVRkuN6K8?iv_load_policy=3&autoplay=1&rel=0&version=3&loop=1&playlist=sxgVRkuN6K8"},backgroundImageHeader:this.generateFilePath("/media-data/landing/about/design/bg-header.jpg"),title:"Дизайн",description:"Дизайн, перевернувший представление о Kia",quote:{text:"Kia – это растущий, амбициозный бренд, который стремится к инновациям в области электрификации и мобильности. Я очень рад стать частью этих перемен и помочь укрепить позиции бренда в автопроме.",caption:"C этих слов Карим Хабиб начал свое сотрудничество с Kia."},illustrated:[{title:'Центральный <span class="nowrap">дизайн-центр</span>',subtitle:"Намьянг, Южная Корея",description:"Главный дизайн-центр компании занимается всеми аспектами автомобильного дизайна: от изначальной задумки до подбора цветовой палитры и материалов. Выделенный канал спутниковой связи позволяет объединить его с дизайн-центрами Kia в других странах и в режиме реального времени обмениваться идеями и анализировать глобальные тренды.",image:this.generateFilePath("/media-data/landing/about/design/img-ill-0.jpg")},{title:'Европейский <span class="nowrap">дизайн-центр</span>',subtitle:"Франкфурт-на-Майне, Германия",description:"Дизайн-центр играет ключевую роль в формировании нового стиля бренда Kia как на континенте, так и во всем мире. Специализированная команда дизайнеров создает концептуальные автомобили будущего, а также серийные модели для Европы и мирового рынка.",image:this.generateFilePath("/media-data/landing/about/design/img-ill-1.jpg")},{title:'Американский <span class="nowrap">дизайн-центр</span>',subtitle:"Ирвайн, США",description:"Начал свою работу в 2008 году по соседству с региональной штаб-квартирой в Калифорнии. Местная команда помогает формировать будущее индустрии, создавая броские концептуальные модели. Здесь моделируют стилистические решения для моделей Kia по всему миру.",image:this.generateFilePath("/media-data/landing/about/design/img-ill-2.jpg")}],bannerFirst:{background:this.generateFilePath("/media-data/landing/about/design/bg-banner-0.jpg"),title:"Концепт-кары",description:"Физическое воплощение идей из будущего, позволяющее опробовать смелые решения и технологии.",button:{className:"button_secondary",link:"/about/concept/",text:"Подробнее"}},bannerSecond:{pretitle:"Символика",title:"Визуальные особенности",description:'Kia создала визуальный символ, столь же мощный, как и логотип бренда. Фирменная "Улыбка тигра", фары и логотип бренда образуют уникальный и неповторимый семейный облик, который развивался годами и теперь настолько распространен на дорогах, что люди могут мгновенно узнавать марку на расстоянии или в темноте.',image:this.generateFilePath("/media-data/landing/about/design/bg-banner-1.jpg")},videos:[{cover:this.generateFilePath("/media-data/landing/about/design/bg-video-0.jpg"),link:"https://www.youtube.com/embed/YuZhmtXRUFY?iv_load_policy=3&autoplay=1&rel=0&version=3&loop=1&playlist=YuZhmtXRUFY",duration:"1:33",title:"Глава дизайн-центра Kia о новом логотипе"},{cover:this.generateFilePath("/media-data/landing/about/design/bg-video-2.jpg"),link:"https://www.youtube.com/embed/PPEiahYL0Z4?iv_load_policy=3&autoplay=1&rel=0&version=3&loop=1&playlist=PPEiahYL0Z4",duration:"1:28",title:"The Kia EV6 GT"},{cover:this.generateFilePath("/media-data/landing/about/design/bg-video-1.jpg"),link:"https://www.youtube.com/embed/ZzbA_UZ8IC4?iv_load_policy=3&autoplay=1&rel=0&version=3&loop=1&playlist=ZzbA_UZ8IC4",duration:"1:43",title:"Kia Inspiration Lab"}],slides:[{image:this.generateFilePath("/media-data/landing/about/design/img-slide-0.jpg")},{image:this.generateFilePath("/media-data/landing/about/design/img-slide-1.jpg")}]}},mounted:function(){this.resize(),window.removeEventListener("load",this.resize),window.removeEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("load",this.resize),window.removeEventListener("resize",this.resize)},computed:{breadcrumbItems:function(){return[{name:"Бренд Kia",href:"/about/brand-kia/"},{name:"Дизайн"}]},backgroundImagePerson:function(){return this.isTabletScreen?this.generateFilePath("/media-data/landing/about/design/img-person.jpg"):this.generateFilePath("/media-data/landing/about/design/img-person_mob.jpg")}},methods:{resize:function(){this.isTabletScreen=this.isTablet()}},components:{Header:n.a,ReadMoreAbout:r.a,Illustrated:o.a,Quote:v,BannerFullscreen:b,CarouselVideos:_.a,Slider:h.a,VideoBlock:f.a,Breadcrumbs:y.default}},k=(i(2086),Object(g.a)(x,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"landing-page"},[i("div",{staticClass:"landing-page__header desktop:pt-10 desktop1440:pb-12"},[i("VideoBlock",{attrs:{overlay:t.header.image,url:t.header.video,isFull:!0,playOnMobile:!0}}),t._v(" "),i("div",{staticClass:"pt-2 absolute desktop1440:pt-4"},[i("g-padding",{staticClass:"pt-0 desktop:pt-4"},[i("g-container",[t.breadcrumbItems?i("Breadcrumbs",{staticClass:"breadcrumbs-beige",attrs:{items:t.breadcrumbItems}}):t._e()],1)],1)],1),t._v(" "),t.isTabletScreen?i("div",{staticClass:"landing-page__header-caption"},[i("g-padding",[i("g-container",[i("div",{staticClass:"text-x4 desktop:text-x3 desktop1440:text-x2"},[t._v("\n            "+t._s(t.title)+"\n          ")]),t._v(" "),i("div",{staticClass:"text-s1-r mt-2 desktop1440:mt-3"},[t._v("\n            "+t._s(t.description)+"\n          ")])])],1)],1):t._e()],1),t._v(" "),i("div",{staticClass:"landing-page__quote"},[i("g-padding",[i("g-container",[t.isTabletScreen?t._e():i("div",{staticClass:"landing-page__quote-descr mb-6 tablet:mb-8 desktop1440:mb-10"},[i("div",{staticClass:"text-x5 tablet:text-x4 desktop:text-x3 mb-4 tablet:mb-6"},[t._v("\n            Дизайн\n          ")]),t._v(" "),i("div",{staticClass:"text-s2i desktop:text-s1-r mb-4"},[t._v("\n            Перевернувший представление о Kia\n          ")])]),t._v(" "),i("div",{staticClass:"landing-page__quote-body"},[i("div",{staticClass:"landing-page__quote-img mb-4 tablet:mb-0"},[i("img",{attrs:{src:t.backgroundImagePerson}})]),t._v(" "),i("div",{staticClass:"landing-page__quote-descr mb-6 tablet:mb-8 desktop1440:mb-10"},[i("div",{staticClass:"text-x5 tablet:text-x4 desktop:text-x3 mb-4 tablet:mb-6"},[t._v("\n              Шеф-дизайнер\n            ")]),t._v(" "),i("div",{staticClass:"text-s2i desktop:text-s1-r mb-4"},[t._v("\n              С сентября 2019 года за дизайн Kia отвечает Карим Хабиб. Он пришел в компанию после\n              более чем двадцатилетнего опыта сотрудничества с автомобильными премиум-брендами.\n              Назначение господина Хабиба позволит Kia продолжить развитие дизайна своих продуктов\n              на высоком конкурентном уровне.\n            ")]),t._v(" "),i("g-nav-link",{attrs:{to:"/press/news/24/"}},[t._v("\n              Подробнее\n            ")])],1),t._v(" "),i("div",{staticClass:"landing-page__quote-content"},[i("Quote",{attrs:{text:t.quote.text,caption:t.quote.caption}})],1)])])],1)],1),t._v(" "),i("g-padding",{staticClass:"mt-12 desktop:mt-16 desktop1440:mt-20"},[i("g-container",[i("div",{staticClass:"text-n1 color-forest-green mb-2 tablet:text-align-center"},[t._v("\n        Разработка\n      ")]),t._v(" "),i("div",{staticClass:"text-x5 tablet:text-x4 desktop:text-x3 tablet:text-align-center"},[t._v("\n        Дизайн-центры\n      ")]),t._v(" "),i("Illustrated",{staticClass:"my-6 tablet:my-12 desktop:my-16",attrs:{items:t.illustrated}})],1)],1),t._v(" "),i("g-padding",{staticClass:"bg-black color-white mt-14 py-12 desktop:py-16 desktop1440:mt-20"},[i("g-container",[i("g-margin",[i("div",{staticClass:"desktop:flex justify-between"},[i("div",{staticClass:"text-x5 tablet:text-x4 desktop:text-x3 mb-6 desktop:mb-0 desktop:w-4/10"},[t._v("\n            Философия дизайна\n          ")]),t._v(" "),i("div",{staticClass:"text-s2i desktop:text-s1-r desktop:w-1/2 desktop:pt-2"},[i("div",[t._v("\n              В основе дизайна лежит идея противопоставления, которую мы используем для\n              формирования уникального стиля Kia. Философия единства противоположностей позволяет\n              нам выделяться и символизирует наступление новой эры бренда. Kia адаптируется к\n              меняющемуся миру вокруг нас. Мы вдохновлены изменениями, которые происходят вокруг\n              нас, и приглашаем вас вместе с нами создавать будущее.\n            ")])])])]),t._v(" "),i("div",{staticClass:"landing-page__videoblock"},[t.isTabletScreen?i("div",{staticClass:"landing-page__videoblock__text w-full"},[i("g-padding",[i("g-container",[i("div",{staticClass:"text-x4 tablet:text-x5 desktop1440:text-x4"},[t._v("\n                Unity of opposites\n              ")]),t._v(" "),i("div",{staticClass:"text-s1-r mt-2 desktop1440:mt-3 tablet:s2"},[t._v("\n                Единство противоположностей\n              ")])])],1)],1):t._e(),t._v(" "),i("VideoBlock",{staticClass:"mt-12 desktop:mt-20",attrs:{poster:t.banner.image,url:t.banner.video}})],1)],1)],1),t._v(" "),i("div",{staticClass:"bg-depth-blue color-white py-12 desktop:py-16 desktop1440:py-20"},[i("g-padding",[i("g-container",[i("div",{staticClass:"text-n1 color-afternoon-yellow mb-2 text-align-center"},[t._v("\n          ПОИСК НОВОГО\n        ")]),t._v(" "),i("div",{staticClass:"text-x5 tablet:text-x4 desktop:text-x3 text-align-center mb-6 tablet:mb-8 desktop:mb-12"},[t._v("\n          Стиль передающий "),i("br"),t._v("дух бренда\n        ")]),t._v(" "),i("CarouselVideos",{staticClass:"carousel-videos_dark",attrs:{videos:t.videos}})],1)],1)],1),t._v(" "),i("g-padding",{staticClass:"my-12 desktop:my-16 desktop1440:my-20"},[i("g-container",[i("g-margin",[i("div",{staticClass:"text-n1 color-forest-green mb-2"},[t._v("\n          ДИЗАЙН ИНТЕРЬЕРОВ\n        ")]),t._v(" "),i("div",{staticClass:"desktop:flex justify-between"},[i("div",{staticClass:"text-x5 tablet:text-x4 desktop:text-x3 mb-6 desktop:mb-0 desktop:w-4/10"},[t._v("\n            Баланс эстетики и функции\n          ")]),t._v(" "),i("div",{staticClass:"text-s2i desktop:text-s1-r desktop:w-1/2 desktop:pt-2"},[i("div",[t._v("\n              Именно этими словами наилучшим образом можно выразить концепцию дизайна интерьера\n              автомобилей Kia. Ядром этой идеи является стремление к гармонии и балансу между\n              эстетикой и удобством использования. Утонченность отделки и текстур, передовые\n              технологии.\n              "),i("br"),i("br"),t._v("\n              Дизайнеры и инженеры Kia уже сейчас создают интерьеры будущего, с учетом самых\n              высокотехнологичных решений и с уважением к традициям комфорта и высочайшего\n              качества.\n            ")])])])]),t._v(" "),i("Slider",{staticClass:"mt-6 desktop:mt-10 desktop1440:mt-16",attrs:{slides:t.slides,"is-wide":!0,"images-only":!0,"show-counter":!1,"arrow-white":!0}})],1)],1),t._v(" "),i("g-padding",[i("g-container",[i("ReadMoreAbout",{staticClass:"my-12 desktop:my-16 desktop1440:my-20",attrs:{exclude:"design"}})],1)],1)],1)}),[],!1,null,"e68ee534",null));e.default=k.exports},997:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));i(6);function s(t,e,i,s){return new Promise((function(a,n){t.dispatch(i,s).then((function(t){a(t)})).catch((function(t){404===t.response.status?e({statusCode:404}):e({statusCode:500}),n()}))}))}},999:function(t,e,i){}}]);