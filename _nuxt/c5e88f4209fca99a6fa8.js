(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1005:function(e,t,a){"use strict";var i=a(166),n=a(115),s={props:{isRight:{type:Boolean,default:!1},isTransparent:{type:Boolean,default:!1}},components:{LongArrowLeft:i.a,LongArrowRight:n.a}},r=(a(1015),a(2)),o=Object(r.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("button",{class:["shared-slider-button",this.isTransparent&&"shared-slider-button_transparent"]},[this.isRight?[t("LongArrowRight")]:[t("LongArrowLeft")]],2)}),[],!1,null,null,null);t.a=o.exports},1015:function(e,t,a){"use strict";var i=a(999);a.n(i).a},1045:function(e,t,a){},1144:function(e,t,a){"use strict";var i=a(1045);a.n(i).a},1165:function(e,t,a){"use strict";a(7),a(3),a(9),a(10),a(8),a(5);var i=a(15),n=a(1005);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var o={mixins:[a(31).a],props:{title:{type:String,default:"Подробнее о Kia"},exclude:{type:[String,Array],default:null},dark:{type:Boolean,default:!1}},data:function(){return{curSlide:0,swiperOptions:r({pagination:{el:"[data-slider-pager]",type:"bullets",clickable:!0,bulletClass:"v-swiper-pager__item",bulletActiveClass:"v-swiper-pager__item_active"},navigation:{nextEl:"[data-slider-button-next]",prevEl:"[data-slider-button-prev]"},slidesPerView:"auto"},this.options),items:[{code:"brand-kia",title:"Бренд Киа",image:this.generateFilePath("/media-data/landing/about/brand/menu/img-more-brand-kia.jpg"),link:"/about/brand-kia/"},{code:"design",title:"Дизайн",image:this.generateFilePath("/media-data/landing/about/brand/menu/img-more-design.jpg"),link:"/about/design/"},{code:"technologies",title:"Технологии",image:this.generateFilePath("/media-data/landing/about/brand/menu/img-more-technologies.jpg"),link:"/about/technologies/"},{code:"social",title:"Социальная ответственность",image:this.generateFilePath("/media-data/landing/about/brand/menu/img-more-social.jpg"),link:"/about/social/"},{code:"sponsorship",title:"Спонсорство",image:this.generateFilePath("/media-data/landing/about/brand/menu/img-more-sponsorship.jpg"),link:"/about/sponsorship/"},{code:"history",title:"История Kia",image:this.generateFilePath("/media-data/landing/about/brand/menu/img-more-history.jpg"),link:"/about/history/"},{code:"awards",title:"Награды",image:this.generateFilePath("/media-data/landing/about/brand/menu/img-more-awards.jpg"),link:"/about/awards/"}]}},computed:{excludes:function(){return"string"==typeof this.exclude?[this.exclude]:"array"==typeof this.exclude?this.exclude:[]}},components:{RoundArrowButton:n.a}},l=(a(1144),a(2)),d=Object(l.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"landing-page__read-more"},[a("div",{staticClass:"text-x5 mb-6"},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),a("div",{directives:[{name:"swiper",rawName:"v-swiper:slider",value:e.swiperOptions,expression:"swiperOptions",arg:"slider"}],staticClass:"landing-page__read-more-container"},[a("div",{staticClass:"landing-page__read-more-wrapper swiper-wrapper flex"},[e._l(e.items,(function(t,i){return-1===e.excludes.indexOf(t.code)?[a("div",{key:i,class:["landing-page__read-more-slide swiper-slide",{active:e.curSlide===i}]},[a("nuxt-link",{staticClass:"landing-page__read-more-item",attrs:{to:t.link}},[a("span",{staticClass:"landing-page__read-more-item-bg",style:"background-image:url("+t.image+");"}),e._v(" "),a("span",{staticClass:"landing-page__read-more-item-title text-s1 desktop:text-x5"},[e._v("\n              "+e._s(t.title)+"\n            ")])])],1)]:e._e()}))],2),e._v(" "),a("div",{class:["landing-page__read-more-pager v-swiper-pager",{"v-swiper-pager_dark":e.dark}],attrs:{"data-slider-pager":""}}),e._v(" "),a("RoundArrowButton",{staticClass:"landing-page__read-more-button landing-page__read-more-button_prev",attrs:{"data-slider-button-prev":""}}),e._v(" "),a("RoundArrowButton",{staticClass:"landing-page__read-more-button landing-page__read-more-button_next",attrs:{"data-slider-button-next":"","is-right":!0}})],1)])}),[],!1,null,"4e74132a",null);t.a=d.exports},1588:function(e,t,a){},2073:function(e,t,a){"use strict";var i=a(1588);a.n(i).a},2478:function(e,t,a){"use strict";a.r(t);a(7),a(75),a(3),a(33),a(49),a(26),a(9),a(10),a(8),a(5);var i=a(15),n=a(18),s=a(19),r=a.n(s),o=a(31),l=a(70),d=a(382),c=a(107),u=a(532),p=a(1165),m=a(997);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h={mixins:[o.a,l.a],fetch:function(e){var t=e.store,a=e.error;return t.commit("awards/clearData"),Object(m.a)(t,a,"awards/loadPage","about-awards").then((function(){t.commit("ui/setHeaderColor","black")}),(function(){}))},head:function(){return{title:this.$store.state.awards.seo.title,meta:[{hid:"description",name:"description",content:this.$store.state.awards.seo.description}]}},data:function(){return{title:"Награды автомобилей Kia",activeTab:0,resize:"400x250",modelLine:null,breadcrumbItems:[{name:"Бренд Kia",href:"/about/brand-kia/"},{name:"Награды"}],defaultAwardImage:"/images/award.png",backgrounds:{mobile:"/media-data/awards/banner/375.jpg",tablet:"/media-data/awards/banner/1024.jpg",desktop:"/media-data/awards/banner/1440.jpg",retina:"/media-data/awards/banner/1920.jpg",selected:""},allTab:{name:"Все"}}},beforeMount:function(){var e=this;setTimeout((function(){e.scrollTop()}),10)},mounted:function(){this.isDesktop()?this.backgrounds.selected=this.backgrounds.retina:this.isTablet()?this.backgrounds.selected=this.backgrounds.tablet:this.backgrounds.selected=this.backgrounds.mobile},computed:b({},Object(n.e)("awards",["seo","awards","groups","modelLines","meta","isDataLoading"]),{awardsTabs:function(){var e=[this.allTab.name];return this.groups.forEach((function(t){e.push(t.name)})),e},currentGroup:function(){return this.isAllTab?this.allTab:this.groups[this.activeTab-1]},isAllTab:function(){return 0===this.activeTab},isModelLineSelected:function(){return null!==this.modelLine},modelLinesById:function(){return r()(this.modelLines,"id")},presentAwards:function(){var e=this,t=[];return this.awards.forEach((function(a){var i=[];a.model_lines.forEach((function(t){e.modelLinesById[t]&&i.push(e.modelLinesById[t].name)})),t.push(Object.assign({},a,{image:a.image?e.getResizeImagePath(a.image,e.resize):e.defaultAwardImage,modelLinesNames:i.join(", ")}))})),t},availableModelLines:function(){var e=this;if(this.isAllTab)return this.modelLines;var t=[];return this.modelLines.forEach((function(a){-1!==e.currentGroup.model_lines.indexOf(a.id)&&t.push(a)})),t}}),methods:b({},Object(n.b)("awards",["loadMore"]),{selectTab:function(e){this.modelLine=null,this.activeTab=e,this.showMore(!0)},onLinkClick:function(e){window.open(e,"_blank")},selectModelLineHandler:function(e){this.loadMore({modelLineId:e.id,groupId:this.isAllTab?null:this.currentGroup.id,resetPage:!0})},showMore:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.loadMore({modelLineId:this.modelLine?this.modelLine.id:null,groupId:this.isAllTab?null:this.currentGroup.id,resetPage:e})},scrollTop:function(){window.scrollTo(0,0)}}),components:{Loader:c.a,NavTabs:d.a,Breadcrumbs:u.default,ReadMoreAbout:p.a}},_=(a(2073),a(2)),f=Object(_.a)(h,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"landing-page pt-12 desktop1440:pt-16"},[a("g-padding",{staticClass:"pt-0 desktop:pt-4"},[a("g-container",{staticClass:"flex justify-between"},[a("Breadcrumbs",{attrs:{items:e.breadcrumbItems}})],1)],1),e._v(" "),a("g-padding",{staticClass:"py-6 desktop:pb-8"},[a("g-container",[a("h1",{staticClass:"text-x4 desktop:text-x3 mb-8"},[e._v(e._s(e.title))]),e._v(" "),a("nuxt-link",{staticClass:"landing-page__image mb-8 desktop:mb-12 block relative",attrs:{to:"/press/news/100/"}},[a("img",{staticClass:"lazyload",attrs:{"data-src":e.generateFilePath(e.backgrounds.selected),alt:""}}),e._v(" "),a("div",{staticClass:"landing-page__image-text text-s1-r desktop1440:text-x5  tablet:text-s1 mt-4 tablet:mt-6 mx-6 tablet:mx-11 desktop:mx-6 desktop1440:m-10 tablet:color-white"},[e._v("\n          Kia Telluride и Kia Soul EV – победители конкурса\n          "),a("br",{staticClass:"hidden tablet:block"}),e._v("«Всемирный автомобиль года 2020»\n        ")])]),e._v(" "),a("NavTabs",{attrs:{tabs:e.awardsTabs,activeTabIndex:e.activeTab},on:{"select-tab":e.selectTab}}),e._v(" "),a("div",{staticClass:"landing-page__select mt-6 desktop:mt-8"},[a("g-select",{staticClass:"multiselect_small",attrs:{placeholder:"Все модели",searchable:!0,allowEmpty:!0,options:e.availableModelLines,selected:e.modelLine,selectFunction:"select-model-line"},on:{"select-model-line":e.selectModelLineHandler},model:{value:e.modelLine,callback:function(t){e.modelLine=t},expression:"modelLine"}})],1),e._v(" "),a("div",{staticClass:"landing-page__awards mt-8"},[a("div",{staticClass:"landing-page__awards-list"},[e._l(e.presentAwards,(function(t,i){return a("div",{key:i,staticClass:"landing-page__awards-list-item"},[a("div",{staticClass:"landing-page__awards-list-item-body"},[a("span",{staticClass:"landing-page__awards-list-item-img"},[a("img",{staticClass:"lazyload",attrs:{"data-src":t.image,alt:""}})]),e._v(" "),a("span",{staticClass:"landing-page__awards-list-item-txt"},[a("span",{staticClass:"landing-page__awards-list-item-txt-content"},[t.name?a("span",{staticClass:"block text-s1"},[e._v(e._s(t.name))]):e._e(),e._v(" "),t.modelLinesNames?a("span",{staticClass:"block mt-1"},[e._v(e._s(t.modelLinesNames))]):e._e(),e._v(" "),t.preview_text?a("span",{staticClass:"block mt-4 color-dark-gray"},[e._v(e._s(t.preview_text))]):e._e()]),e._v(" "),t.link?a("span",{staticClass:"landing-page__awards-list-item-txt-link mt-6"},[t.in_new_window?[a("g-nav-link",{nativeOn:{click:function(a){return e.onLinkClick(t.link)}}},[e._v("Подробнее")])]:[a("g-nav-link",{attrs:{to:t.link}},[e._v("Подробнее")])]],2):e._e()])])])})),e._v(" "),e.isDataLoading?a("Loader"):e._e()],2),e._v(" "),e.awards.length<e.meta.total?a("button",{staticClass:"button button_secondary mt-8",on:{click:function(t){return e.showMore()}}},[a("span",{staticClass:"button__span-after"},[e._v("\n            Показать еще\n          ")])]):e._e()]),e._v(" "),a("ReadMoreAbout",{staticClass:"mt-12 desktop:mt-16 desktop1440:mt-20 mb-6 desktop:mb-8 desktop1440:mb-12",attrs:{exclude:"awards"}})],1)],1)],1)}),[],!1,null,"b2d1583e",null);t.default=f.exports},997:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(6);function i(e,t,a,i){return new Promise((function(n,s){e.dispatch(a,i).then((function(e){n(e)})).catch((function(e){404===e.response.status?t({statusCode:404}):t({statusCode:500}),s()}))}))}},999:function(e,t,a){}}]);