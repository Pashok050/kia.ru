(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{1e3:function(e,t,i){},1003:function(e,t,i){},1006:function(e,t){e.exports={isFunction:function(e){return"function"==typeof e},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},each:function(e,t){for(var i=0,s=e.length;i<s&&!1!==t(e[i],i);i++);}}},1018:function(e,t,i){"use strict";var s={props:{lazyload:{type:Boolean,default:!1},sources:{type:Array,required:!0},alt:String},methods:{source:function(e){var t={};return t[this.lazyload?"data-srcset":"srcset"]=e.url,t},maxSourceProp:function(e){var t=this.source(e);return t.media="(max-width: ".concat(e.max_width,"px)"),t},minSourceProp:function(e){var t=this.source(e);return t.media="(min-width: ".concat(e.min_width,"px)"),t},imageProp:function(e){var t={};return t[this.lazyload?"data-src":"src"]=e.url,t}}},n=(i(1031),i(2)),a=Object(n.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("picture",{staticClass:"picture-media-query w-full"},[e._l(e.sources,(function(t){return[void 0!==t.max_width?i("source",e._b({},"source",e.maxSourceProp(t),!1)):void 0!==t.min_width?i("source",e._b({},"source",e.minSourceProp(t),!1)):i("img",e._b({staticClass:"swiper-lazy lazyload",attrs:{alt:e.alt,"data-sizes":"auto"}},"img",e.imageProp(t),!1))]}))],2)}),[],!1,null,null,null);t.a=a.exports},1021:function(e,t,i){"use strict";i(3),i(375),i(77),i(5);var s,n=i(161),a={props:{sources:{type:Array,required:!0}},data:function(){return{currentMediaSize:null}},mounted:function(){var e=this;if(s=i(1029),Array.isArray(this.sources)){this.mediaHandlers=[];var t=Object(n.a)(this.sources.filter((function(e){return"number"==typeof e.max_width})));t.sort((function(e,t){return e.max_width>t.max_width?1:-1})),t.forEach((function(i,s){i.max_width&&e.mediaHandlers.push({query:"(max-width: ".concat(i.max_width,"px)"),handlers:{match:function(){e.currentMediaSize=i.max_width},unmatch:function(){t.length-1===s&&(e.currentMediaSize=null)},destroy:function(){}}})})),this.mediaHandlers.forEach((function(e){s.register(e.query,e.handlers)}))}},computed:{currentBgVideo:function(){var e=this;return null!==this.currentMediaSize?this.sources.find((function(t){return t.max_width===e.currentMediaSize})):this.getDefault(this.sources)}},beforeDestroy:function(){Array.isArray(this.mediaHandlers)&&this.mediaHandlers.forEach((function(e){s.unregister(e.query,e.handlers)}))},methods:{getDefault:function(e){var t=e.find((function(e){return void 0===e.max_width}));return t||null}}},r=i(2),o=Object(r.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("video",{attrs:{src:this.currentBgVideo.url,poster:this.currentBgVideo.poster,muted:"",autoplay:"",loop:"",preload:"",playsinline:""},domProps:{muted:!0}})}),[],!1,null,null,null);t.a=o.exports},1024:function(e,t,i){var s=i(1025),n=i(1006),a=n.each,r=n.isFunction,o=n.isArray;function c(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}c.prototype={constructor:c,register:function(e,t,i){var n=this.queries,c=i&&this.browserIsIncapable;return n[e]||(n[e]=new s(e,c)),r(t)&&(t={match:t}),o(t)||(t=[t]),a(t,(function(t){r(t)&&(t={match:t}),n[e].addHandler(t)})),this},unregister:function(e,t){var i=this.queries[e];return i&&(t?i.removeHandler(t):(i.clear(),delete this.queries[e])),this}},e.exports=c},1025:function(e,t,i){var s=i(1026),n=i(1006).each;function a(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var i=this;this.listener=function(e){i.mql=e.currentTarget||e,i.assess()},this.mql.addListener(this.listener)}a.prototype={constuctor:a,addHandler:function(e){var t=new s(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers;n(t,(function(i,s){if(i.equals(e))return i.destroy(),!t.splice(s,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){n(this.handlers,(function(e){e.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";n(this.handlers,(function(t){t[e]()}))}},e.exports=a},1026:function(e,t){function i(e){this.options=e,!e.deferSetup&&this.setup()}i.prototype={constructor:i,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},e.exports=i},1029:function(e,t,i){var s=i(1024);e.exports=new s},1031:function(e,t,i){"use strict";var s=i(1e3);i.n(s).a},1035:function(e,t,i){"use strict";i(7),i(3),i(26),i(9),i(10),i(8),i(5);var s=i(15),n=i(83),a=i(378),r=i(48),o=i(113),c=i(1018),l=i(1021),d=i(18),u=i(50),p=i.n(u),h=i(24),m=i(1004),f=i(70);function v(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function g(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(Object(i),!0).forEach((function(t){Object(s.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var b={mixins:[h.a,m.a,f.a],props:{playOnMobile:{type:Boolean,default:function(){return!1}},poster:"",url:{type:String},video:{type:Object,default:function(){return{}}},overlay:{type:String,default:null},time:{type:String},name:{type:String,default:null},modelName:{type:String,default:null},isFull:{type:Boolean,default:!1}},data:function(){return{isDesktopScreen:this.isDeviceDesktop,isOpen:!1,resizeBackgroundImages:{mobile:"375x211",desktop:"1440x810",retina:"1920x1080"}}},methods:g({},Object(d.d)("video-bank",["setActiveVideoId","setActiveVideoBankGroups","setSelectVideoBankGroups"]),{isDeviceDesktop:function(){return this.$device.isDesktop},togglePopupVideo:function(){if(this.url)this.isOpen=!this.isOpen,this.isOpen&&this.sendStatistic(this.name);else if(Object.keys(this.getVideoBank).length>0&&this.video.id){var e=p()(this.getVideoBankGroups,{id:this.video.group_id}),t=p()(this.getVideoBank[this.video.group_id],{id:this.video.id});-1!==e&&-1!==t&&(this.setActiveVideoId(this.video.id),this.setActiveVideoBankGroups(e),this.setSelectVideoBankGroups(e),this.isOpen=!this.isOpen,this.isOpen&&this.sendStatistic(this.getVideoBank[this.video.group_id][t].name))}},sendStatistic:function(e){this.sendStatic(this.modelName,e,this.gAnalytics.eventCategory.videoOpen)}}),computed:g({},Object(d.c)("video-bank",["getVideoBank","getVideoBankGroups"])),components:{Popup:n.a,Videos:a.a,PlayIcon:o.a,PictureMedia:c.a,VideoMediaQuery:l.a,CloseIcon:r.a}},_=(i(1042),i(2)),y=Object(_.a)(b,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:["video-block flex w-full",{"video-block_full":e.isFull}]},[e.isFull?[i("div",{staticClass:"video-block__bg",style:"background-image:url("+e.poster+");"})]:[i("div",{staticClass:"flex items-center w-full"},[e.poster?i("img",{staticClass:"w-full lazyload",attrs:{"data-src":e.poster,alt:""}}):e._e()])],e._v(" "),i("div",{staticClass:"video-block__overlay flex justify-center items-center",on:{click:e.togglePopupVideo}},[i("div",{staticClass:"video-block__icon flex justify-center items-center"},[i("PlayIcon",{staticClass:"video-block__icon-svg"})],1),e._v(" "),e.overlay&&(e.playOnMobile||e.isDesktopScreen&&e.isDeviceDesktop())?[i("video",{staticClass:"video-block__overlay-video",attrs:{src:e.overlay,muted:"muted",autoplay:"autoplay",loop:"loop",preload:"",playsinline:""},domProps:{muted:!0}})]:e._e()],2),e._v(" "),e.time?i("div",{staticClass:"news-card__video-duration text-s3"},[e._v("\n      "+e._s(e.time)+"\n    ")]):e._e(),e._v(" "),e.url&&e.isOpen?i("Popup",[i("button",{staticClass:"video-block__close color-white",on:{click:function(t){e.isOpen=!1}}},[i("CloseIcon")],1),e._v(" "),i("div",{staticClass:"video-block__popup-content"},[i("div",{staticClass:"flex justify-center"},[i("div",{staticClass:"video-block__video-wrapper flex w-full"},[i("iframe",{attrs:{width:"100%",height:"100%",src:e.url,allow:"autoplay",allowfullscreen:""}})])])])]):e.video.id&&e.isOpen?i("Videos",{attrs:{videoBankGroups:e.getVideoBankGroups,videoBank:e.getVideoBank},on:{"toggle-video-popup":e.togglePopupVideo}}):e._e()],2)}),[],!1,null,"28ce75b6",null);t.a=y.exports},1042:function(e,t,i){"use strict";var s=i(1003);i.n(s).a},1044:function(e,t,i){},1133:function(e,t,i){"use strict";var s={mixins:[i(24).a],props:{items:Array},methods:{sendDataLayerAnalytics:function(e){"/"===e&&document&&this.dataLayerPush("Navigation","Breadcrumbs menu",document.title)}}},n=(i(1141),i(2)),a=Object(n.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",{staticClass:"breadcrumbs m-0 p-0 color-dark-gray text-s3"},e._l(e.items,(function(t){return i("li",{staticClass:"breadcrumbs__item",on:{click:function(i){return e.sendDataLayerAnalytics(t.href)}}},[i(t.href?"nuxt-link":"span",{tag:"component",attrs:{to:t.href}},[e._v(e._s(t.name))])],1)})),0)}),[],!1,null,"7859a4d6",null);t.a=a.exports},1141:function(e,t,i){"use strict";var s=i(1044);i.n(s).a},1806:function(e,t,i){},2261:function(e,t,i){"use strict";var s=i(1806);i.n(s).a},2547:function(e,t,i){"use strict";i.r(t);i(7),i(75);var s=i(31),n=i(1133),a=i(1338),r=i(997),o=i(387),c=i(1035),l=i(24),d={components:{Breadcrumbs:n.a,Subscribe:a.a,ImagesSlider:o.a,VideoBlock:c.a},mixins:[s.a,l.a],computed:{bannerImage:function(){return"mobile"===this.currentScreen?this.generateFilePath("/media-data/landing/new-sportage-teaser/banner.jpg"):this.generateFilePath("/media-data/landing/new-sportage-teaser/banner-desktop.jpg")},interiorImage:function(){return"mobile"===this.currentScreen||"tablet"===this.currentScreen?this.generateFilePath("/media-data/landing/new-sportage-teaser/interior-1-mobile.jpg"):this.generateFilePath("/media-data/landing/new-sportage-teaser/interior-1.jpg")},breadcrumbItems:function(){return[{name:"Главная",href:"/"},{name:"Модели",href:{name:"models"}},{name:"Sportage"}]}},mounted:function(){var e=this;this.resize(),window.addEventListener("load",(function(){e.handleScroll(),e.resize()})),window.addEventListener("resize",(function(){e.handleScroll(),e.resize()})),window.addEventListener("scroll",this.handleScroll,!1),this.dataLayerPush("Teaser","New Sportage","Start",null,!0)},beforeDestroy:function(){var e=this;window.removeEventListener("load",(function(){e.handleScroll(),e.resize()})),window.removeEventListener("resize",(function(){e.handleScroll(),e.resize()})),window.removeEventListener("resize",this.handleScroll)},fetch:function(e){var t=e.store,i=e.error;return Object(r.a)(t,i,"layout/loadPage","landing-sportage-teaser").then((function(){t.commit("ui/setHeaderColor","white")}),(function(){}))},head:function(){return{title:this.$store.state.layout.seo.title,meta:[{hid:"description",name:"description",content:this.$store.state.layout.seo.description}]}},data:function(){return{isFixedRowVisible:!1,currentScreen:"",images:{exterior:[this.generateFilePath("/media-data/landing/new-sportage-teaser/exterior-1.jpg"),this.generateFilePath("/media-data/landing/new-sportage-teaser/exterior-2.jpg"),this.generateFilePath("/media-data/landing/new-sportage-teaser/exterior-3.jpg")]},videos:{masterpiece:{url:"https://www.youtube.com/embed/22UMgDhzXQw?iv_load_policy=3&autoplay=1&rel=0&version=3&loop=1&playlist=22UMgDhzXQw",overlay:this.generateFilePath("/media-data/landing/new-sportage-teaser/masterpiece.mp4"),poster:this.generateFilePath("/media-data/landing/new-sportage-teaser/masterpiece.jpg"),title:"Absolutely new Kia Sportage. Soon"}},formParams:{buttonText:"Отправить",modelCode:"F1W",success:{title:"Вы успешно подписаны на&nbsp;новости о&nbsp;новом Kia&nbsp;Sportage"},title:"Подписаться на новости о новом Kia Sportage"},agreement:{id:"122420ea-7d6f-4f4d-881e-5abd7b6c1c5e",text:"Проставляя отметку, Вы даете согласие на обработку Ваших персональных данных ООО «Киа Россия и СНГ»[1], дилерам Kia[2],\n          а также партнерам ООО «Киа Россия и СНГ» в РФ и за рубежом[3] в соответствии с ФЗ № 152 «О персональных данных» на условиях, указанных здесь.\n          Настоящим Вы выражаете свое согласие на получение от ООО «Киа Россия и СНГ»[1]\n          и дилеров Kia[2] информационных и рекламных материалов путем осуществления прямых контактов с помощью различных средств связи, включая,\n          но, не ограничиваясь: почтовую рассылку, sms – рассылку, электронную почту, телефон, Интернет."},dataLayerProps:{properties:{vehicleModelYear:2022,vehicleNameplate:"Sportage"}},isExteriorSent:!1,isInteriorSent:!1}},methods:{resize:function(){window.innerWidth<768?this.currentScreen="mobile":window.innerWidth<1280?this.currentScreen="tablet":this.currentScreen="desktop"},getIBlockIndex:function(e){return null==this.index&&(this.index={},this.currentIndex=0),null==this.index[e]&&(this.index[e]=++this.currentIndex),this.index[e]},handleScroll:function(){var e=Math.floor(window.pageYOffset),t=Math.floor(window.innerHeight),i=Math.floor(void 0!==this.$refs.banner?this.$refs.banner.offsetHeight:0),s=Math.floor(void 0!==this.$refs.interiorSection?this.$refs.interiorSection.offsetTop:0);if(void 0!==this.$refs.modelForm){var n=Math.floor(this.$refs.modelForm.offsetTop);this.isFixedRowVisible=e>i&&e<n-t}this.isFixedRowVisible&&!this.isExteriorSent&&(this.dataLayerPush("Landing page section","Exterior"),this.isExteriorSent=!0),this.isInteriorOnScreen=e>=s,this.isInteriorOnScreen&&!this.isInteriorSent&&(this.dataLayerPush("Landing page section","Interior"),this.isInteriorSent=!0)},scrollTo:function(){window.scrollTo({top:this.$refs.modelForm.offsetTop,behavior:"smooth"})}}},u=(i(2261),i(2)),p=Object(u.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"landing-page"},[i("div",{ref:"banner",staticClass:"landing-page__banner"},[i("div",{staticClass:"landing-page__banner-image",style:"background-image: url("+e.bannerImage+")"}),e._v(" "),i("div",{staticClass:"landing-page__banner-top"},[i("breadcrumbs",{staticClass:"landing-page__breadcrumbs absolute color-white text-s3",attrs:{items:e.breadcrumbItems}})],1),e._v(" "),i("div",{staticClass:"landing-page__banner-bottom"},[i("div",{staticClass:"landing-page__banner-title"},[i("div",{staticClass:"landing-page__banner-text text-s1"},[e._v("\n          Новый Kia\n        ")]),e._v(" "),i("div",{staticClass:"landing-page__banner-text"},[i("img",{attrs:{src:e.generateFilePath("/media-data/landing/new-sportage-teaser/sportage-logo.svg")}})]),e._v(" "),i("div",{staticClass:"landing-page__banner-text text-s1"},[e._v("\n          Скоро в России\n        ")])]),e._v(" "),i("div",{staticClass:"landing-page__banner-action"},[i("button",{staticClass:"landing-page__banner-button button",on:{click:function(t){e.dataLayerPush("Teaser","New Sportage","Subscribe to model news"),e.scrollTo()}}},[e._v("\n          Подписаться на новости\n        ")])])])]),e._v(" "),i("div",{staticClass:"model-landing__section relative"},[i("g-padding",[i("g-container",{staticClass:"desktop1440:px-20 desktop1920:px-30"},[i("div",{staticClass:"text-n1 color-forest-green mb-2"},[e._v("\n          Экстерьер\n        ")]),e._v(" "),i("div",{staticClass:"desktop:flex justify-between mb-8 desktop:mb-12 desktop1440:mb-16"},[i("div",{staticClass:"desktop:w-4/10 mb-4 desktop:mb-0"},[i("div",{staticClass:"text-x4 desktop1440:text-x3"},[e._v("Яркая индивидуальность")])]),e._v(" "),i("div",{staticClass:"desktop:w-4/10 text-s2i"},[e._v("\n            Дизайн абсолютно нового Kia Sportage бросает вызов сегменту кроссоверов. Атлетичные\n            линии кузова формируют дерзкий и уверенный профиль. Эффектные футуристичные фары\n            дополняют фирменную решетку радиатора и подчеркивают яркую эмоциональность стиля.\n            Новый Kia Sportage – для тех, кто готов двигаться в поисках вдохновения.\n          ")])]),e._v(" "),i("div",{staticClass:"model-landing__section-media"},[i("ImagesSlider",{staticClass:"images-slider_1920x960 images-slider_media-offset",attrs:{images:e.images.exterior,hasOffset:!0},on:{"is-clicked":function(t){return e.dataLayerPush("Teaser","New Sportage","Image Slider click")}}})],1)])],1)],1),e._v(" "),i("div",{ref:"interiorSection",staticClass:"model-landing__section relative"},[i("g-padding",[i("g-container",{staticClass:"desktop1440:px-20 desktop1920:px-30"},[i("div",{staticClass:"text-n1 color-forest-green mb-2"},[e._v("\n          Интерьер\n        ")]),e._v(" "),i("div",{staticClass:"desktop:flex justify-between mb-8 desktop:mb-12 desktop1440:mb-16"},[i("div",{staticClass:"desktop:w-4/10 mb-4 desktop:mb-0"},[i("div",{staticClass:"text-x4 desktop1440:text-x3"},[e._v("Иммерсивное пространство")])]),e._v(" "),i("div",{staticClass:"desktop:w-4/10 text-s2i"},[e._v("\n            Интерьер Sportage сочетает премиальное качество и ориентированный на водителя дизайн.\n            Симбиоз эстетики и эргономики дает возможность интуитивно и безошибочно находить все\n            органы управления. Одним из самых ярких элементов в салоне стал изогнутый панорамный\n            интегрированный дисплей, открывающий доступ к новейшим достижениям в области\n            мультимедиа.\n          ")])]),e._v(" "),i("div",{staticClass:"model-landing__section-media desktop:px-8"},[i("img",{staticClass:"block w-full",attrs:{src:e.interiorImage,alt:""}})])])],1)],1),e._v(" "),i("div",{staticClass:"model-landing__section relative"},[i("g-padding",[i("g-container",{staticClass:"desktop1440:px-20 desktop1920:px-30"},[i("div",{staticClass:"desktop:flex justify-between mb-8 desktop:mb-12 desktop1440:mb-16"},[i("div",{staticClass:"desktop:w-4/10 mb-4 desktop:mb-0"},[i("div",{staticClass:"text-x4 desktop1440:text-x3"},[e._v("Шедевр дизайнерского искусства")])]),e._v(" "),i("div",{staticClass:"desktop:w-4/10 text-s2i"},[e._v("\n            Этот автомобиль стал воплощением природного мира, его облик смел, эмоционален,\n            современен, но полностью естественен. В отделке использованы роскошные и приятные на\n            ощупь материалы высочайшего качества, благодаря чему интерьер нового Kia Sportage\n            превращается в уникальное пространство, буквально заряжающее энергией во время\n            поездки.\n          ")])]),e._v(" "),e.videos.masterpiece.url?i("div",{staticClass:"model-landing__section-media"},[i("VideoBlock",{attrs:{url:e.videos.masterpiece.url,overlay:e.videos.masterpiece.overlay,poster:e.videos.masterpiece.poster},on:{click:function(t){return e.dataLayerPush("Video","Start",e.videos.masterpiece.title)}}})],1):e._e()])],1)],1),e._v(" "),i("div",{class:["fixed-row bg-white p-2",{"fixed-row_visible":e.isFixedRowVisible}]},[i("g-container",{staticClass:"fixed-row-body tablet:flex items-center justify-between"},[i("div",{staticClass:"fixed-row-text text-s2-b tablet:block"},[e._v("\n        Новости о новом Kia Sportage\n      ")]),e._v(" "),i("div",{staticClass:"fixed-row-button"},[[i("button",{staticClass:"fixed-row-button-link button button_primary",on:{click:function(t){e.dataLayerPush("Navigation","Sticky menu","Subscribe to model news"),e.scrollTo()}}},[e._v("\n            Подписаться\n          ")])]],2)])],1),e._v(" "),i("div",{ref:"modelForm",attrs:{id:"modelForm"}},[i("g-form-wrapper",{staticClass:"relative"},[[i("Subscribe",{attrs:{formParams:e.formParams,agreement:e.agreement,sendAnalytic:!0,"small-button":!0,"data-layer-properties":e.dataLayerProps},on:{"change-name-focusout":function(t){return e.dataLayerPush("Form","Teaser","Name")},"change-phone-focusout":function(t){return e.dataLayerPush("Form","Teaser","Phone")},"change-email-focusout":function(t){return e.dataLayerPush("Form","Teaser","Email")}}})]],2)],1)])}),[],!1,null,"9f059f56",null);t.default=p.exports}}]);