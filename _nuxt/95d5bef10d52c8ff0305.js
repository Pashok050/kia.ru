(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1019:function(t,e,n){},1048:function(t,e,n){"use strict";n.r(e);n(7),n(13),n(3),n(9),n(10),n(8),n(5);var i=n(15),s=n(173),a=n.n(s),r=n(76),o=n(998),c=n(386),l=n(169),p=n.n(l);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v=o.a.methods.choice,f=function(t,e){return t.length===e.length?a()(t,e):null};Object(r.c)("integer",d({},c.d,{message:"Поле должно содержать только цифры"})),Object(r.c)("alpha_spaces",d({},c.b,{message:function(t,e){var n=e.locale;return"Поле может содержать только ".concat("ru"===n?"русские ":"","буквы или пробелы")}})),Object(r.c)("alpha_num",d({},c.a,{message:function(t,e){var n=e.locale;return"Поле может содержать только ".concat("en"===n?"латинские ":"","буквы или цифры")}})),Object(r.c)("length",d({},c.e,{message:function(t,e){var n=e.length,i=v(n,["символ","символа","символов"]);return"Поле должно содержать ".concat(n," ").concat(i)}})),Object(r.c)("digits",d({},c.c,{message:function(t,e){var n=e.length,i=v(n,["цифру","цифры","цифр"]);return"Поле должно быть числовым и иметь ".concat(n," ").concat(i)}})),Object(r.c)("min_value",d({},c.g,{message:function(t,e){var n=e.min;return"Поле должно быть не менее ".concat(n)}})),Object(r.c)("max",d({},c.f,{message:function(t,e){var n=e.length,i=v(n,["символа","символов","символов"]);return"Не более ".concat(n," ").concat(i)}})),Object(r.c)("date_format",{params:["format"],validate:function(t,e){var n=e.format,i=f(t,n);return i&&i.isValid()},message:"Поле должно быть корректной датой"}),Object(r.c)("date_before",{params:["format"],validate:function(t,e){var n=e.format,i=f(t,n);return i&&i.isSameOrBefore(a()())},message:"Поле должно быть датой меньше текущей"}),Object(r.c)("date_after",{params:["format"],validate:function(t,e){var n=e.format,i=f(t,n);return i&&i.isSameOrAfter(a()())},message:"Поле должно быть датой больше текущей"}),Object(r.c)("max_age",{params:["max","format"],validate:function(t,e){var n=e.max,i=e.format;return a()().diff(a()(t,i),"years",!0)<p()(n)},message:"Поле должно быть корректной датой"}),Object(r.c)("letter_number",{validate:function(t){return/^[а-яА-ЯёЁa-zA-Z0-9\w -]+$/.test(t)},message:"Поле должно содержать только буквы, цифры, пробел и тире"})},1085:function(t,e,n){"use strict";n(6);var i=n(24),s=n(85),a={mixins:[i.a],props:{item:Object,small:Boolean,analytic:Boolean,itemClass:{type:String,default:""},hasIcon:Boolean,iconClass:String},computed:{itemIcon:function(){var t=this;return function(){return n(1088)("./".concat(t.item.icon,".svg"))}}},data:function(){return{isOpened:!1}},mounted:function(){window.dataLayer=window.dataLayer||[]},methods:{toggleItem:function(){this.isOpened=!this.isOpened,1==this.analytic&&this.dataLayerPush("Navigation",this.isOpened?"Open":"Close",this.item.question)}},components:{IconAngleDown:s.a}},r=(n(1089),n(2)),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["faq__item py-4",t.isOpened&&"faq__item_opened",t.small&&"faq__item--small",t.hasIcon&&"faq__item--iconed",t.itemClass]},[n("div",{staticClass:"faq__item-question text-s1 cursor-pointer flex items-center justify-between",on:{click:t.toggleItem}},[t.item.icon?n(t.itemIcon,{tag:"component",staticClass:"faq__item-icon",class:[t.iconClass,t.item.iconColor]}):t._e(),t._v(" "),n("div",{staticClass:"faq__item-question-text",domProps:{innerHTML:t._s(t.item.question)}}),t._v(" "),n("IconAngleDown",{staticClass:"faq__item-question-icon ml-4"})],1),t._v(" "),n("div",{staticClass:"faq__item-answer mt-4",domProps:{innerHTML:t._s(t.item.answer)}})])}),[],!1,null,null,null).exports,c={props:{items:Array,small:Boolean,analytic:Boolean,hasIcon:Boolean,itemClass:String,iconClass:String},components:{Item:o}},l=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"faq"},[t._l(t.items,(function(e){return[n("Item",{attrs:{item:e,analytic:t.analytic,small:t.small,"has-icon":t.hasIcon,"item-class":t.itemClass,"icon-class":t.iconClass}})]}))],2)}),[],!1,null,null,null);e.a=l.exports},1088:function(t,e,n){var i={"./4x4.svg":[1229,256],"./abs.svg":[1230,257],"./accumulator.svg":[1231,258],"./airbag.svg":[1232,259],"./auto-beam.svg":[1233,260],"./auto-hold.svg":[1234,261],"./beam.svg":[1235,262],"./bend.svg":[1236,263],"./brake.svg":[1237,264],"./check-engine.svg":[1238,265],"./collision.svg":[1239,266],"./cruise-control.svg":[1240,267],"./dbc.svg":[1241,268],"./eco.svg":[1242,269],"./epb.svg":[1243,270],"./esc-off.svg":[1244,271],"./esc.svg":[1245,272],"./exclamation-triangle.svg":[1246,273],"./exhaust.svg":[1247,274],"./fuel-filter.svg":[1248,275],"./gas.svg":[1249,276],"./immobilizer.svg":[1250,277],"./led.svg":[1251,278],"./light-devices.svg":[1252,279],"./low-beam.svg":[1253,280],"./oil-lamp.svg":[1254,281],"./pointers.svg":[1255,282],"./pressure.svg":[1256,283],"./road.svg":[1257,284],"./set.svg":[1258,285],"./smart.svg":[1259,286],"./sport-mode.svg":[1260,287],"./steering.svg":[1261,288],"./wire.svg":[1262,289]};function s(t){if(!n.o(i,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[t],s=e[0];return n.e(e[1]).then((function(){return n(s)}))}s.keys=function(){return Object.keys(i)},s.id=1088,t.exports=s},1089:function(t,e,n){"use strict";var i=n(1019);n.n(i).a},1335:function(t,e,n){"use strict";n(17),n(13),n(8),n(7),n(3),n(6),n(9),n(5),n(10);var i=["class","staticClass","style","staticStyle","attrs"];function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){if(null==t)return{};var n,i,s=function(t,e){if(null==t)return{};var n,i,s={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}e.a={functional:!0,render:function(t,e){var n=e._c,o=(e._v,e.data),c=e.children,l=void 0===c?[]:c,p=o.class,u=o.staticClass,d=o.style,v=o.staticStyle,f=o.attrs,_=void 0===f?{}:f,g=r(o,i);return n("svg",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({class:[p,u],style:[d,v],attrs:Object.assign({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},_)},g),l.concat([n("path",{attrs:{d:"M4 10.5L7.5 14l8-8",stroke:"currentColor","stroke-width":"2"}})]))}}},1404:function(t,e,n){},1405:function(t,e,n){},1406:function(t,e,n){},1535:function(t,e,n){"use strict";n(36);var i=n(37),s=n(1335),a={mixins:[i.a],props:{mileageHistoryLength:{type:Number,default:0},maintenanceHistoryLength:{type:Number,default:0},saleHistoryLength:{type:Number,default:0},serviceInspectionsHistoryLength:{type:Number,default:0},noPadding:{type:Boolean,default:!1}},computed:{items:function(){var t=[];return t.push("VIN найден в базе Kia"),this.maintenanceHistoryLength&&t.push("".concat(this.formatRecords(this.maintenanceHistoryLength)," в истории технического обслуживания")),this.mileageHistoryLength&&t.push("".concat(this.formatRecords(this.mileageHistoryLength)," в истории пробега")),this.saleHistoryLength&&t.push("".concat(this.formatRecords(this.saleHistoryLength)," в истории продажи")),this.serviceInspectionsHistoryLength&&t.push("".concat(this.formatRecords(this.serviceInspectionsHistoryLength)," в сервисных инспекциях")),t}},methods:{formatRecords:function(t){return t+" "+this.formatDeclination(t,["запись","записи","записей"])}},components:{IconCheck:s.a}},r=(n(1670),n(2)),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.items,(function(e){return n("div",{class:["maintenance-history-info-item pb-3",{"maintenance-history-info-item-no-pd":t.noPadding}]},[n("IconCheck",{staticClass:"mr-2"}),t._v(" "),n("span",[t._v(t._s(e))])],1)})),0)}),[],!1,null,null,null);e.a=o.exports},1670:function(t,e,n){"use strict";var i=n(1404);n.n(i).a},1671:function(t,e,n){"use strict";var i=n(1405);n.n(i).a},1672:function(t,e,n){"use strict";var i=n(1406);n.n(i).a},1673:function(t,e,n){},1962:function(t,e,n){"use strict";n(36);var i=n(1335),s=n(112),a=(n(17),n(13),n(8),n(7),n(3),n(6),n(9),n(5),n(10),["class","staticClass","style","staticStyle","attrs"]);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){if(null==t)return{};var n,i,s=function(t,e){if(null==t)return{};var n,i,s={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var l={functional:!0,render:function(t,e){var n=e._c,i=(e._v,e.data),s=e.children,l=void 0===s?[]:s,p=i.class,u=i.staticClass,d=i.style,v=i.staticStyle,f=i.attrs,_=void 0===f?{}:f,g=c(i,a);return n("svg",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({class:[p,u],style:[d,v],attrs:Object.assign({width:"45",height:"42",viewBox:"0 0 45 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},_)},g),l.concat([n("path",{attrs:{d:"M1 6l10-2 2 22 26-4v-4m-28-8h14.8M15 39.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z",stroke:"currentColor","stroke-width":"3"}}),n("circle",{attrs:{cx:"35",cy:"36",r:"3.5",stroke:"currentColor","stroke-width":"3"}}),n("rect",{attrs:{x:"27.4",y:".4",width:"16",height:"16",rx:"8",fill:"currentColor"}}),n("path",{staticClass:"color-white",attrs:{d:"M30.6 8.1l3.895 3.5 8.905-8",stroke:"currentColor","stroke-width":"2"}})]))}},p=n(1535),u={name:"vin-popup",props:{name:{type:String,default:!1},historyLength:{type:Number,default:0}},data:function(){return{html:document.getElementsByTagName("html")[0],htmlClass:"is-modal-opened"}},mounted:function(){this.html.classList.add(this.htmlClass)},beforeDestroy:function(){this.html.classList.remove(this.htmlClass)},components:{IconClose:s.a,IconCheck:i.a,IconBasket:l,MaintenanceHistoryInfo:p.a}},d=(n(1671),n(2)),v=Object(d.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal modal--vin-page"},[n("div",{staticClass:"modal__overlay",on:{click:function(e){return t.$emit("toggle-vin-popup")}}}),t._v(" "),n("div",{staticClass:"modal__body"},[n("div",{staticClass:"modal__header flex items-center justify-between"},[n("div",{staticClass:"modal__header-action"},[n("IconClose",{staticClass:"cursor-pointer",on:{click:function(e){return t.$emit("toggle-vin-popup")}}})],1)]),t._v(" "),n("div",{staticClass:"modal__content form mt-7 desktop:mt-14"},[n("div",{staticClass:"text-x5 mb-4"},[t._v("Отчет o "+t._s(t.name)+" добавлен в корзину")]),t._v(" "),n("div",{staticClass:"maintenance-history-info"},[n("MaintenanceHistoryInfo",{attrs:{"mileage-history-length":t.historyLength,"maintenance-history-length":t.historyLength}})],1),t._v(" "),n("div",{staticClass:"modal__content-basket my-6"},[n("div",{staticClass:"modal__content-basket-icon"},[n("IconBasket",{staticClass:"block"})],1),t._v(" "),n("div",{staticClass:"text-s2i"},[t._v("Перейдите в корзину, чтобы оформить заказ.")])]),t._v(" "),n("div",{staticClass:"button button_primary",on:{click:function(e){return t.$emit("submit-popup")}}},[n("span",{staticClass:"button__span-after"},[t._v("\n          Перейти в корзину\n        ")])])])])])}),[],!1,null,"212a0dd6",null);e.a=v.exports},1972:function(t,e,n){"use strict";var i=n(31),s=n(48),a={mixins:[i.a],components:{IconClose:s.a}},r=(n(1672),n(2)),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"guide-popup"},[n("IconClose",{staticClass:"guide-popup__close",on:{click:function(e){return t.$emit("close-popup")}}}),t._v(" "),n("div",{staticClass:"guide-popup__body"},[t._m(0),t._v(" "),n("div",{staticClass:"guide-popup__section"},[n("h2",{staticClass:"guide-popup__title desktop:text-x5"},[t._v("\n        На кузове автомобиля\n      ")]),t._v(" "),n("ul",{staticClass:"guide-popup__list"},[n("li",{staticClass:"guide-popup__item"},[n("div",{staticClass:"guide-popup__card"},[n("div",{staticClass:"guide-popup__image"},[n("img",{staticClass:"guide-popup__image-pic",attrs:{src:t.generateFilePath("/aftersale-data/download/carcase1-desktop.png")}})]),t._v(" "),n("p",{staticClass:"guide-popup__description"},[t._v("\n              На сертификационном ярлыке, прикрепленном к центральной стойке со стороны водителя.\n            ")])])]),t._v(" "),n("li",{staticClass:"guide-popup__item"},[n("div",{staticClass:"guide-popup__card"},[n("div",{staticClass:"guide-popup__image"},[n("img",{staticClass:"guide-popup__image-pic",attrs:{src:t.generateFilePath("/aftersale-data/download/carcase2-desktop.png")}})]),t._v(" "),n("p",{staticClass:"guide-popup__description"},[t._v("\n              Номер выбит на передней боковой стенке подкапотного пространства.\n            ")])])]),t._v(" "),n("li",{staticClass:"guide-popup__item"},[n("div",{staticClass:"guide-popup__card"},[n("div",{staticClass:"guide-popup__image"},[n("img",{staticClass:"guide-popup__image-pic",attrs:{src:t.generateFilePath("/aftersale-data/download/carcase3-desktop.png")}})]),t._v(" "),n("p",{staticClass:"guide-popup__description"},[t._v("\n              На табличке, прикрепленной к верхней части приборной панели.\n            ")])])])])]),t._v(" "),n("div",{staticClass:"guide-popup__section"},[n("h2",{staticClass:"guide-popup__title desktop:text-x5"},[t._v("\n        В СТС или ПТС\n      ")]),t._v(" "),n("ul",{staticClass:"guide-popup__list"},[n("li",{staticClass:"guide-popup__item"},[n("div",{staticClass:"guide-popup__card"},[n("div",{staticClass:"guide-popup__image"},[n("img",{staticClass:"guide-popup__image-pic",attrs:{src:t.generateFilePath("/aftersale-data/download/pts1-desktop.jpg")}})]),t._v(" "),n("p",{staticClass:"guide-popup__description"},[t._v("\n              В свидетельстве о регистрации (СТС) VIN-номер в строке «Идентификационный номер».\n            ")])])]),t._v(" "),n("li",{staticClass:"guide-popup__item"},[n("div",{staticClass:"guide-popup__card"},[n("div",{staticClass:"guide-popup__image"},[n("img",{staticClass:"guide-popup__image-pic",attrs:{src:t.generateFilePath("/aftersale-data/download/pts2-desktop.jpg")}})]),t._v(" "),n("p",{staticClass:"guide-popup__description"},[t._v("\n              В паспорте транспортного средства (ПТС) VIN-номер в строке\n              «1. Идентификационный номер (VIN)».\n            ")])])])])]),t._v(" "),n("div",{staticClass:"button button_primary guide-popup__button",on:{click:function(e){return t.$emit("close-popup")}}},[n("span",{staticClass:"button__span-after"},[t._v("Понятно")])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"guide-popup__section"},[e("h2",{staticClass:"guide-popup__heading desktop:text-x5"},[this._v("\n        Где найти VIN-номер?\n      ")]),this._v(" "),e("p",{staticClass:"guide-popup__text text-s2"},[this._v("\n        VIN — это аббревиатура идентификационного номера автомобиля, отличительный набор цифр и\n        символов, присваиваемый каждому автомобилю при производстве.\n      ")])])}],!1,null,"8bad9df8",null);e.a=o.exports},2145:function(t,e,n){"use strict";var i=n(1673);n.n(i).a},2504:function(t,e,n){"use strict";n.r(e);n(7),n(75),n(3),n(38),n(26),n(9),n(10),n(8),n(116),n(5);var i=n(15),s=n(18),a=n(76),r=n(56),o=n.n(r),c=n(997),l=n(31),p=n(1085),u=n(1962),d=n(1972),v=n(377),f=n(532),_=n(110),g=n(48),m=n(83);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n(1048);var y={mixins:[l.a],fetch:function(t){var e=t.store,n=t.error;return e.state["maintenance-history"].enabledShowOnSite?Object(c.a)(e,n,"maintenance-history/loadPage").then((function(){e.commit("ui/setHeaderColor","black")}),(function(){})):n({statusCode:404})},head:function(){return{title:this.seo.title}},data:function(){return{breadcrumbItems:[{name:"Проверка истории обслуживания",href:"/buy/vin-report"}],currentScreen:"",vin:"",vinInfo:"",basketPage:"cart",isVinPopupOpened:!1,vinTipsPopupOpened:!1}},mounted:function(){this.resize(),window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},computed:b({},Object(s.e)("maintenance-history",["seo","seller","faq","carInfo","historyId","historyLength"]),{vinHeaderImage:function(){return"mobile"===this.currentScreen?"/images/vin-image1.png":"/images/vin-image1-tablet.png"},infoPicture:function(){return"mobile"===this.currentScreen?"/images/vin-info1.png":"/images/vin-info1-desktop.png"},infoPictureSecond:function(){return"mobile"===this.currentScreen?"/images/vin-info2.png":"/images/vin-info2-desktop.png"},readableVinInfo:function(){switch(this.vinInfo){case"validation_error":return"Введен некорректный VIN номер";case"vin_not_found":return"VIN номер не найден";case"history_not_found":return"VIN номер найден. История ТО отсутствует";case"undefined_error":return"Неизвестная ошибка";default:return""}},defaultPrice:function(){return o()(this.seller,"order_type.default_price",100)},carName:function(){var t="Kia";return this.carInfo&&this.carInfo.model&&this.carInfo.model.model_line&&(t+=" ".concat(this.carInfo.model.model_line.name),this.carInfo.car&&(t+=" ".concat(this.carInfo.car.year))),t},faqItems:function(){return this.faq.map((function(t){return{question:t.title,answer:t.description}}))},exampleReport:function(){return{title:"Пример отчета",link:this.generateFilePath("/aftersale-data/pdf/kia-vin-report.pdf")}}}),methods:b({},Object(s.b)("maintenance-history",["checkVin","discardHistoryId"]),{},Object(s.b)("basket",["addToBasket"]),{resize:function(){window.innerWidth<768?this.currentScreen="mobile":window.innerWidth<1280?this.currentScreen="tablet":this.currentScreen="desktop"},checkVinInfo:function(){var t=this;this.vinInfo="",this.vin&&this.vin.length&&(this.vin=this.vin.toUpperCase(),this.checkVin({vin:this.vin,source:"maintenance_history"}).then((function(e){if(t.historyId){var n=new FormData;n.append("seller_type","kia"),n.append("product_id",t.historyId),n.append("order_type","reports"),n.append("product_type","report"),t.addToBasket(n).then((function(e){(0===e.data.error&&!0===e.data.content.success||1===e.data.error&&"basket_already_exists"===e.data.content.error_code)&&t.toggleVinPopup()}))}else t.vinInfo=e})))},toggleVinPopup:function(){!0===this.isVinPopupOpened&&(this.vin="",this.discardHistoryId()),this.isVinPopupOpened=!this.isVinPopupOpened},submitPopup:function(){this.$router.push({name:this.basketPage})},openExampleReport:function(){window.open(this.exampleReport.link)},openVinTipsPopup:function(){this.vinTipsPopupOpened=!0},closeVinTipsPopup:function(){this.vinTipsPopupOpened=!1}}),watch:{vin:function(){this.vinInfo&&(this.vinInfo="")}},components:{Faq:p.a,IconInfo:v.a,VinPopup:u.a,Breadcrumbs:f.default,IconTickRight:_.a,IconClose:g.a,FindVin:d.a,Popup:m.a,ValidationProvider:a.b,ValidationObserver:a.a}},C=(n(2145),n(2)),O=Object(C.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vin-page"},[n("div",{staticClass:"vin-page__check"},[n("g-padding",[n("g-container",{staticClass:"vin-page__check-container"},[n("div",{staticClass:"vin-page__check-content"},[n("Breadcrumbs",{staticClass:"vin-page__breadcrumbs text-s3 color-dark-gray",attrs:{items:t.breadcrumbItems}}),t._v(" "),n("div",{staticClass:"vin-page__check-header"},[n("h1",{staticClass:"vin-page__check-heading text-x5 desktop:text-x3"},[t._v("\n              Проверка Kia по VIN-номеру\n            ")])]),t._v(" "),n("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.handleSubmit;return[n("div",{staticClass:"vin-page__check-form"},[n("div",{staticClass:"vin-page__form"},[n("div",{staticClass:"vin-page__form-input"},[n("ValidationProvider",{ref:"vinProvider",attrs:{rules:"required|alpha_num:en|length:17"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[n("g-form-control",{attrs:{type:"text",maxlength:"17",placeholder:"Введите VIN-номер Kia",addClassName:"form-control_big text-uppercase form-control_common w-full",error:i[0]||t.readableVinInfo},model:{value:t.vin,callback:function(e){t.vin=e},expression:"vin"}})]}}],null,!0)})],1),t._v(" "),n("div",{staticClass:"vin-page__form-button"},[n("button",{staticClass:"button button_primary button_small",on:{click:function(e){return i(t.checkVinInfo)}}},[n("IconTickRight")],1)])]),t._v(" "),n("div",{staticClass:"vin-page__tooltip cursor-pointer",on:{click:t.openVinTipsPopup}},[n("IconInfo",{staticClass:"vin-page__tooltip-icon color-dark-gray"}),t._v(" "),n("span",{staticClass:"vin-page__tooltip-label text-s3 color-dark-gray"},[t._v("\n                  Где найти VIN-номер?\n                ")])],1)])]}}])})],1),t._v(" "),n("div",{staticClass:"vin-page__check-picture"},[n("img",{staticClass:"vin-page__check-image",attrs:{src:t.vinHeaderImage}})])])],1)],1),t._v(" "),n("div",{staticClass:"vin-page__content"},[n("g-container",[n("g-padding",[n("div",{staticClass:"vin-page__info"},[n("div",{staticClass:"vin-page__info-content"},[n("div",{staticClass:"vin-page__info-caption text-s3 color-forest-green"},[t._v("\n              Что в отчете\n            ")]),t._v(" "),n("div",{staticClass:"vin-page__info-header text-s1 desktop:text-x4"},[t._v("\n              История тех. обслуживания, необходимые сервисные инспекции и другие данные из\n              официальных источников Kia\n            ")]),t._v(" "),n("div",{staticClass:"vin-page__info-text text-s1 desktop:text-x4 color-dark"},[t._v("\n              Стоимость отчета - "+t._s(t.defaultPrice)+" ₽\n            ")])]),t._v(" "),n("div",{staticClass:"vin-page__info-picture"},[n("img",{staticClass:"vin-page__info-image",attrs:{src:t.infoPicture}})]),t._v(" "),n("div",{staticClass:"vin-page__info-action vin-page__info-action--mobile"},[n("button",{staticClass:"vin-page__info-button button button_secondary",on:{click:t.openExampleReport}},[n("span",{staticClass:"button__span-after"},[t._v("\n                "+t._s(t.exampleReport.title)+"\n              ")])])])]),t._v(" "),n("div",{staticClass:"vin-page__info"},[n("div",{staticClass:"vin-page__info-content"},[n("div",{staticClass:"vin-page__info-caption text-s3 color-forest-green"},[t._v("\n              Откуда берем данные\n            ")]),t._v(" "),n("div",{staticClass:"vin-page__info-header text-s1 desktop:text-x4"},[t._v("\n              Мы пользуемся эксклюзивной базой Kia и информацией от всех официальных дилеров\n            ")]),t._v(" "),n("div",{staticClass:"vin-page__info-action"},[n("button",{staticClass:"vin-page__info-button button button_secondary",on:{click:t.openExampleReport}},[n("span",{staticClass:"button__span-after"},[t._v("\n                  "+t._s(t.exampleReport.title)+"\n                ")])])])]),t._v(" "),n("div",{staticClass:"vin-page__info-picture"},[n("img",{staticClass:"vin-page__info-image",attrs:{src:t.infoPictureSecond}})])])])],1)],1),t._v(" "),t.faqItems.length>0?n("div",{staticClass:"vin-page__faq"},[n("g-padding",[n("g-container",[n("div",{staticClass:"vin-page__faq-heading text-s1 desktop:text-x4"},[t._v("\n          Ответы на частые вопросы\n        ")]),t._v(" "),n("Faq",{attrs:{items:t.faqItems}})],1)],1)],1):t._e(),t._v(" "),t.isVinPopupOpened?n("VinPopup",{attrs:{name:t.carName,"history-length":t.historyLength},on:{"toggle-vin-popup":t.toggleVinPopup,"submit-popup":t.submitPopup}}):t._e(),t._v(" "),t.vinTipsPopupOpened?n("Popup",[n("FindVin",{on:{"close-popup":t.closeVinTipsPopup}})],1):t._e()],1)}),[],!1,null,"4916dda6",null);e.default=O.exports},997:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(6);function i(t,e,n,i){return new Promise((function(s,a){t.dispatch(n,i).then((function(t){s(t)})).catch((function(t){404===t.response.status?e({statusCode:404}):e({statusCode:500}),a()}))}))}},998:function(t,e,n){"use strict";n(49),n(38),n(376),n(27),n(43),n(59);e.a={methods:{choice:function(t,e){return e[t%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?t%10:5]]},translit:function(t){var e={"а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"e","ж":"j","з":"z","и":"i","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"shch","ы":"y","э":"e","ю":"u","я":"ya"," ":"_",'"':""},n=[];t=t.replace(/[ъь]+/g,"").replace(/й/g,"i");for(var i=0;i<t.length;++i)n.push(e[t[i]]||null==e[t[i].toLowerCase()]&&t[i]||e[t[i].toLowerCase()].replace(/^(.)/,(function(t){return t.toUpperCase()})));return n.join("")},createId:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!1!==t)return this.translit((null!==e?e:"basic")+"_"+t+n).toLowerCase()},tabsIds:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=t.split("_");return s.splice(s.length-(e?2:1),0,i?"slides":"tabs"),n.map((function(t,e){return s.join("_")+"_"+(e+1)}))},getDisclaimerText:function(t,e){return t[e]&&t[e].text?t[e].text:""}}}}}]);