(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{1001:function(e,t,r){},1022:function(e,t,r){"use strict";r(7),r(3),r(9),r(10),r(8),r(6),r(5),r(51);var n=r(21),s=r(15),i=r(18),o=r(11),a=r(96),l=r.n(a),c=r(137),u=r.n(c),d=r(98),f=r.n(d),p=r(83),m=r(107),h=r(109),v=r(112),y=r(379);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var g,_={mixins:[r(24).a],props:{error:String,dealership:null,dealershipIds:{type:Array,default:function(){return[]}},excludedDealershipIds:{type:Array,default:function(){return[]}},model:{type:Object,default:function(){}},theme:{type:Object,default:function(){}},mapId:{type:String,default:"yamap"},autoFill:{type:Boolean,default:!1},showButton:{type:Boolean,default:!0},isSmall:{type:Boolean,default:function(){return!0}},buttonShort:{type:Boolean,default:!1},showServices:{type:Boolean,default:function(){return!0}},showFilter:{type:Boolean,default:function(){return!0}},showGeoIp:{type:Boolean,default:function(){return!0}},title:{type:String,default:function(){return"Выберите дилера"}},description:{type:String,default:null},disableResult:{type:Boolean,default:function(){return!1}},value:{type:Object,default:null},carInfo:{type:Object,default:null},headerClass:{type:String,default:""},isCalculatorPage:{type:Boolean,default:!1},showLink:{type:Boolean,default:!0},isMaintenanceCalc:{type:Boolean,default:function(){return!1}},isBuyCalc:{type:Boolean,default:!1},isConfigurator:{type:Boolean,default:!1},isTradeIn:{type:Boolean,default:function(){return!1}},isUsedCars:{type:Boolean,default:function(){return!1}}},data:function(){return{dealer:null,isLoading:!1,isPopupOpen:!1,isLimitQuery:this.dealershipIds.length>=100}},created:function(){var e=this;this.clearDealerships(),this.dealership?this.setDealer(this.dealership):this.autoFill&&this.$auth.loggedIn&&(this.isLoading=!0,this.$axios(o.a.lastUserDealer()).then((function(t){0===t.data.error&&void 0!==t.data.content.dealership&&e.setDealer(t.data.content.dealership)})).finally((function(){e.isLoading=!1})))},destroyed:function(){this.clearDealerships()},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(i.e)("geo-position",{currentCity:"city"}),{},Object(i.c)("dealerships",{cities:"getCities",dealerships:"getDealerships"}),{dealershipFiltered:function(){var e=this,t=this.dealerships;return this.excludedDealershipIds.length>0&&(t=this.dealerships.filter((function(t){return!e.excludedDealershipIdsByKey[t.id]}))),this.isLimitQuery?u()(t,(function(t){return-1!==f()(e.dealershipIds,t.id)})):t},cityFiltered:function(){if(this.isLimitQuery){var e=l()(this.dealershipFiltered,"city_id");return u()(this.cities,(function(t){return-1!==f()(e,t.id)}))}return this.cities},dealerSelected:function(){return!this.disableResult&&null!==this.dealer},hasError:function(){return!!this.error},hasButtonSlot:function(){return!!this.$slots.button},excludedDealershipIdsByKey:function(){var e={};return this.excludedDealershipIds.forEach((function(t){e[t]=t})),e}}),methods:{togglePopup:(g=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.loadDealerships();case 3:this.isPopupOpen=!this.isPopupOpen,this.dealerSelected&&this.dataLayerPush("Dealer search","Change dealer"),!this.dealerSelected&&this.isConfigurator&&this.isPopupOpen&&this.dataLayerPush("Dealer search pop-up","Open");case 6:case"end":return e.stop()}}),e,this)}))),function(e){return g.apply(this,arguments)}),checkedDealer:function(e){Object.assign(this,{dealer:e,isPopupOpen:!1}),this.$emit("input",e)},loadDealerships:function(){return this.dealerships.length<=0?this.$store.dispatch("dealerships/loadAll",this.isLimitQuery?[]:this.dealershipIds):Promise.resolve()},clearDealerships:function(){this.dealershipIds.length>0&&this.$store.dispatch("dealerships/clearAll")},clearSelected:function(){this.dealer=null},setDealer:function(e){this.dealer=e,this.isPopupOpen=!1,this.$emit("input",this.dealer)}},components:{Popup:p.a,Loader:m.a,IconEdit:h.a,IconClose:v.a,DealerLocator:y.a}},O=(r(1037),r(2)),j=Object(O.a)(_,(function(){var e,t=this,r=t.$createElement,n=t._self._c||r;return n("div",[t.isLoading?n("Loader",{attrs:{inline:!0}}):t.showButton?n("div",[n("div",{class:["form-control",(e={},e["has-error"]=t.hasError,e)]},[t.dealerSelected?t._e():n("button",{class:["button button_secondary",{button_small:t.isSmall},{"mt-3":t.isMaintenanceCalc},{"button-short":t.buttonShort}],on:{click:t.togglePopup}},[n("span",{staticClass:"button__span-after"},[t._v("\n          Выбрать дилера\n        ")])]),t._v(" "),t.hasError?n("span",{class:["form-control__error"]},[t._v(t._s(t.error))]):t._e()]),t._v(" "),t.dealerSelected?n("div",{staticClass:"form-dealer text-s2i"},[n("div",{staticClass:"flex items-center text-s1 mt-3 mb-1",class:t.headerClass},[t._v("\n        Дилер\n        "),n("icon-edit",{staticClass:"color-disabled-gray cursor-pointer ml-2",on:{click:t.togglePopup}})],1),t._v(" "),n("div",[t._v(t._s(t.dealer.name))]),t._v(" "),n("div",{staticClass:"color-dark-gray"},[t._v(t._s(t.dealer.address))])]):t._e()]):t._e(),t._v(" "),t.isPopupOpen?n("popup",[n("div",{staticClass:"popup__container flex items-center justify-center"},[n("div",{staticClass:"popup__body"},[n("div",{staticClass:"popup__close",on:{click:t.togglePopup}},[n("IconClose",{staticClass:"block"})],1),t._v(" "),n("div",{staticClass:"form form_popup flex flex-col"},[n("div",{staticClass:"form__wrap flex flex-col"},[n("div",{staticClass:"form__header px-6 desktop:px-16 pt-6 desktop:pt-8 desktop:pb-4"},[n("h1",{staticClass:"text-x5 desktop:text-x4 mb-1"},[t._v(t._s(t.title))]),t._v(" "),t.description?n("div",{staticClass:"sub-header",domProps:{innerHTML:t._s(t.description)}}):t._e()]),t._v(" "),n("div",{staticClass:"form__container flex-container flex-col"},[n("DealerLocator",{attrs:{mapId:t.mapId,cities:t.cityFiltered,carInfo:t.carInfo,showServices:t.showServices,"show-filter":t.showFilter,"show-geo-ip":t.showGeoIp,"dealership-ids":t.dealershipIds,defaultCityCode:t.currentCity.code,"excluded-dealership-ids":t.excludedDealershipIds,"is-calculator-page":t.isCalculatorPage,"show-link":t.showLink,isBuyCalc:t.isBuyCalc,isConfigurator:t.isConfigurator,isTradeIn:t.isTradeIn,isUsedCars:t.isUsedCars},on:{"checked-dealer":t.checkedDealer}})],1)])])])])]):t._e()],1)}),[],!1,null,"cf648c4c",null);t.a=j.exports},1037:function(e,t,r){"use strict";var n=r(1001);r.n(n).a},1048:function(e,t,r){"use strict";r.r(t);r(7),r(13),r(3),r(9),r(10),r(8),r(5);var n=r(15),s=r(173),i=r.n(s),o=r(76),a=r(998),l=r(386),c=r(169),u=r.n(c);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=a.a.methods.choice,m=function(e,t){return e.length===t.length?i()(e,t):null};Object(o.c)("integer",f({},l.d,{message:"Поле должно содержать только цифры"})),Object(o.c)("alpha_spaces",f({},l.b,{message:function(e,t){var r=t.locale;return"Поле может содержать только ".concat("ru"===r?"русские ":"","буквы или пробелы")}})),Object(o.c)("alpha_num",f({},l.a,{message:function(e,t){var r=t.locale;return"Поле может содержать только ".concat("en"===r?"латинские ":"","буквы или цифры")}})),Object(o.c)("length",f({},l.e,{message:function(e,t){var r=t.length,n=p(r,["символ","символа","символов"]);return"Поле должно содержать ".concat(r," ").concat(n)}})),Object(o.c)("digits",f({},l.c,{message:function(e,t){var r=t.length,n=p(r,["цифру","цифры","цифр"]);return"Поле должно быть числовым и иметь ".concat(r," ").concat(n)}})),Object(o.c)("min_value",f({},l.g,{message:function(e,t){var r=t.min;return"Поле должно быть не менее ".concat(r)}})),Object(o.c)("max",f({},l.f,{message:function(e,t){var r=t.length,n=p(r,["символа","символов","символов"]);return"Не более ".concat(r," ").concat(n)}})),Object(o.c)("date_format",{params:["format"],validate:function(e,t){var r=t.format,n=m(e,r);return n&&n.isValid()},message:"Поле должно быть корректной датой"}),Object(o.c)("date_before",{params:["format"],validate:function(e,t){var r=t.format,n=m(e,r);return n&&n.isSameOrBefore(i()())},message:"Поле должно быть датой меньше текущей"}),Object(o.c)("date_after",{params:["format"],validate:function(e,t){var r=t.format,n=m(e,r);return n&&n.isSameOrAfter(i()())},message:"Поле должно быть датой больше текущей"}),Object(o.c)("max_age",{params:["max","format"],validate:function(e,t){var r=t.max,n=t.format;return i()().diff(i()(e,n),"years",!0)<u()(r)},message:"Поле должно быть корректной датой"}),Object(o.c)("letter_number",{validate:function(e){return/^[а-яА-ЯёЁa-zA-Z0-9\w -]+$/.test(e)},message:"Поле должно содержать только буквы, цифры, пробел и тире"})},1216:function(e,t,r){},1295:function(e,t,r){"use strict";r(17),r(13),r(8),r(7),r(3),r(6),r(9),r(5),r(10);var n=["class","staticClass","style","staticStyle","attrs"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}t.a={functional:!0,render:function(e,t){var r=t._c,a=(t._v,t.data),l=t.children,c=void 0===l?[]:l,u=a.class,d=a.staticClass,f=a.style,p=a.staticStyle,m=a.attrs,h=void 0===m?{}:m,v=o(a,n);return r("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({class:[u,d],style:[f,p],attrs:Object.assign({width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},h)},v),c.concat([r("circle",{attrs:{cx:"20",cy:"20",r:"19",transform:"rotate(-180 20 20)",stroke:"currentColor","stroke-width":"2"}}),r("path",{attrs:{d:"M21 10h-2.5v15H21V10z",fill:"currentColor"}}),r("circle",{attrs:{cx:"19.75",cy:"28.75",r:"1.25",transform:"rotate(-180 19.75 28.75)",fill:"currentColor"}})]))}}},1431:function(e,t,r){"use strict";var n=r(1216);r.n(n).a},1471:function(e,t,r){"use strict";var n=r(1295),s={props:{description:String,isSimple:{type:Boolean,default:!1}},components:{IconInfoBig:n.a}},i=(r(1431),r(2)),o=Object(i.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"notice flex items-center"},[this.isSimple?this._e():t("IconInfoBig",{staticClass:"notice__icon mr-3 tablet:mr-6"}),this._v(" "),t("div",{class:["notice__text",{"w-full text-align-center":this.isSimple}],domProps:{innerHTML:this._s(this.description)}})],1)}),[],!1,null,null,null);t.a=o.exports},1744:function(e,t,r){},2203:function(e,t,r){"use strict";var n=r(1744);r.n(n).a},2423:function(e,t,r){"use strict";r.r(t);r(7),r(75),r(13),r(3),r(375),r(38),r(26),r(9),r(10),r(8),r(5);var n=r(15),s=r(18),i=r(997),o=(r(36),r(551)),a=r(532),l=(r(6),r(76)),c=r(0),u=r(56),d=r.n(u),f=r(55),p=r.n(f),m=r(14),h=r.n(m),v=r(1030),y=r(24),b=r(1016),g=r(539),_=r(1471),O=r(533),j=r(165),C=r(1989),k=r(1990),x=r(1022),P=r(1050),S=r(1017),w=r(1991),D=r(109),L=r(48),I=r(110);function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(1048);var B={mixins:[y.a,v.a,b.a],props:{vin:{type:String,default:null},dealer:{type:Object,default:null},year:{type:Number,default:null},modelLine:{type:Object,default:function(){return{}}},years:{type:Array,default:[]},modelLines:{type:Array,default:[]},models:{type:Array,default:[]},serviceTypes:{type:Array,default:[]},agreement:{type:Object,default:function(){return{}}},source:String},data:function(){return{form:{name:null,phone:null,agree:null,type:null,vin:this.vin,date:null,model:null,modelLine:null,dealer:this.dealer,message:null,year:null,slotTime:null,remote:!1},isSent:!1,isVinLoading:!1,isYearLoading:!1,isModelLineLoading:!1,isRemotePopupOpen:!1,chooseDate:null,title:"Укажите удобное время",isBanned:!1,unlockDate:null,banType:null}},created:function(){this.fillFormUserData(this.form),this.vin&&this.changeVin()},mounted:function(){this.loadAllCities(),this.modelLine.id&&this.fillCarData(this.modelLine,this.year)},computed:T({},Object(s.e)("service-request",["slots"]),{},Object(s.e)("service-inspections",["serviceInspections"]),{},Object(s.e)("geo-position",["city"]),{fromDate:function(){return this.$moment().startOf("day")},afterDate:function(){return this.$moment().startOf("day").add(13,"d").endOf("day")},hasDealer:function(){return!h()(this.form.dealer)},showTime:function(){return null!==this.form.date},showRemoteSlots:function(){return this.form.remote},showSlots:function(){return!h()(this.slots)},hasDealerRemoteService:function(){return d()(this.form,"dealer.remote_service",!1)},datePickerLabel:function(){return this.form.remote?"Желаемая дата и время оказания услуги":"Желаемая дата и время визита"},showInspections:function(){return!h()(this.serviceInspections)}}),methods:T({},Object(s.b)("geo-position",["loadAllCities"]),{},Object(s.b)("service-inspections",["loadInspections","clearInspections"]),{vinCheck:function(){this.form.vin&&(this.form.vin=this.form.vin.toUpperCase(),this.dataLayerPush("Aftersales","VIN checker",this.form.vin),this.getVin(this.form.vin))},getInspections:function(){this.form.vin&&(this.form.vin=this.form.vin.toUpperCase(),17===this.form.vin.length&&this.loadInspections(this.form.vin))},onSubmit:function(){var e=this,t=new FormData;t.append("source",this.source),t.append("name",this.form.name),t.append("agree",+this.form.agree),t.append("year",this.form.year.id),t.append("comment",this.form.message),t.append("agreement_id",this.agreement.id),t.append("dealership_id",this.form.dealer.id),t.append("model_line_id",this.form.modelLine.id),t.append("phone",this.preparePhone(this.form.phone)),t.append("service_types",this.prepareService(this.form.type.id)),this.form.remote?(t.append("remote_service",+this.form.remote),t.append("from_date",this.prepareDate(this.form.slotTime.from)),t.append("to_date",this.prepareDate(this.form.slotTime.to))):t.append("from_date",this.prepareDate(this.showSlots?this.form.slotTime:this.form.date.startOf("day"))),this.form.model&&(t.append("model_id",this.form.model.id),t.append("model_code",this.form.model.external_id)),this.form.vin&&t.append("vin",this.form.vin),this.sendDataLayerAnalytics(),this.$axios(c.a.createServiceRequest(t)).then((function(t){var r=t.data;r.content.unlock_date&&(e.unlockDate=r.content.unlock_date,e.banType=r.content.ban_type,e.isBanned=!0,window.scrollTo(0,0)),r.content.success&&(e.isSent=!0,window.scrollTo(0,0))})).catch((function(t){t instanceof j.a&&e.$refs.form.setErrors(e.prepareValidateErrors(t.data,{from_date:"date",to_date:"date",type_id:"type",comment:"message",dealership_id:"dealer",remote_service:"remote"}))}))},selectedTime:function(e){this.form.slotTime=e},prepareDate:function(e){return e&&e.format()},getYears:function(e){this.clearYear(),this.clearModel(),this.$store.dispatch("service-request/loadYears",e.id)},getVin:function(e){var t=this;if(17===this.form.vin.length){if(this.isVinLoading)return;this.isVinLoading=!0,this.isModelLineLoading=!0,this.$store.dispatch("service-request/loadVin",e).then((function(e){t.clearInspections();var r=e.data.content;e.data.error>0?"vin_not_found"===r.error_code&&t.$refs.form.setErrors({vin:["VIN-номер не найден"]}):void 0!==r.model&&r.model.model_line&&(t.fillCarData(r.model.model_line,r.car.year),t.getInspections())})).finally((function(){t.isVinLoading=!1,t.isModelLineLoading=!1}))}},getModels:function(e){this.clearModel(),this.$store.dispatch("service-request/loadModels",{model_line_id:this.form.modelLine.id,year:e.id})},changeDealer:function(){this.getSlots(),this.resetRemoteService()},getSlots:function(){this.clearSlots(),this.form.dealer.show_slots&&null!==this.form.dealer.dnm_id&&this.$store.dispatch("service-request/loadSlots",{dnm_id:this.form.dealer.dnm_id,start:this.fromDate.clone().add(this.fromDate.utcOffset(),"m").unix(),end:this.afterDate.clone().add(this.afterDate.utcOffset(),"m").unix()})},clearModel:function(){this.form.model=null,this.models.length>0&&this.$store.dispatch("service-request/clearModels")},clearYear:function(){this.form.year=null,this.years.length>0&&this.$store.dispatch("service-request/clearYears")},fillCarData:function(e,t){var r=this;this.isYearLoading=!0,this.form.modelLine=e,this.$store.dispatch("service-request/loadYears",e.id).then((function(e){r.years.length>0&&(r.form.year=p()(r.years,{id:t}))})).finally((function(){r.isYearLoading=!1}))},clearSlots:function(){this.form.remote||(this.form.slotTime=null),h()(this.slots)||this.$store.dispatch("service-request/clearSlots")},resetRemoteService:function(){this.hasDealerRemoteService||(this.form.remote=!1)},toggleRemotePopup:function(){this.isRemotePopupOpen=!this.isRemotePopupOpen},prepareService:function(e){return JSON.stringify([{id:e}])},sendDataLayerAnalytics:function(){var e={vehicleNameplate:this.form.modelLine.name,dealershipName:this.form.dealer.name_en,userLocation:this.city.name_en,worktype:this.form.type.name,productionYear:this.form.year.id};this.form.vin&&(e.customerLeadVin=this.form.vin),this.$auth.user&&(e.kiaCustomerId=this.$auth.user.id),this.dataLayerPush("Lead","Fast service","Lead submit",e)}}),components:{Slots:C.a,Button:g.default,Notice:_.a,NavLink:O.default,IconEdit:D.a,CloseIcon:L.a,LeadBanned:P.a,RemoteSlots:w.a,DealerChoice:x.a,PopupService:k.a,IconTickRight:I.a,LicenseButton:S.a,ValidationProvider:l.b,ValidationObserver:l.a}},V=(r(2203),r(2)),E=Object(V.a)(B,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:"form form_asided is-simple"},[r("g-padding",[r("g-container",[r("div",{staticClass:"form__wrap flex"},[r("div",{staticClass:"form__body"},[r("div",{staticClass:"form__container"},[e.isSent?r("div",[r("div",{staticClass:"text-x4 mb-4"},[e._v("Заявка успешно отправлена!")]),e._v(" "),r("p",[e._v("\n                Сотрудник дилерского центра Kia свяжется с Вами в ближайшее время.\n              ")]),e._v(" "),r("div",{staticClass:"form__footer__buttons flex flex-wrap"},[r("div",{staticClass:"form__footer__button"},[r("nuxt-link",{tag:"NavLink",staticClass:"button button_primary",attrs:{to:"/"}},[e._v("На главную\n                  ")])],1)])]):e._e(),e._v(" "),e.isBanned?r("LeadBanned",{attrs:{unlockDate:e.unlockDate,banType:e.banType}}):e._e(),e._v(" "),e.isSent||e.isBanned?e._e():r("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit;return[r("form",{on:{submit:function(t){return t.preventDefault(),n(e.onSubmit)}}},[r("div",{staticClass:"text-s1"},[e._v("Данные автомобиля")]),e._v(" "),r("br"),e._v(" "),r("fieldset",{staticClass:"is-full is-odd"},[r("ul",[r("li",[r("div",{staticClass:"check-vin-block"},[r("div",{staticClass:"flex-grow-1"},[r("ValidationProvider",{attrs:{vid:"vin",rules:"alpha_num:en|length:17"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("g-form-control",{attrs:{type:"text",maxlength:"17",label:"VIN-номер (необязательно)",error:n[0]},model:{value:e.form.vin,callback:function(t){e.$set(e.form,"vin",t)},expression:"form.vin"}})]}}],null,!0)})],1),e._v(" "),r("div",{staticClass:"check-vin-block__button"},[r("button",{staticClass:"check-vin-block__button-item button button_primary button_small",attrs:{type:"button"},on:{click:e.vinCheck}},[r("IconTickRight")],1)])])]),e._v(" "),r("li",[r("ValidationProvider",{attrs:{vid:"modelLine",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("g-select",{staticClass:"multiselect_small form-control_text",attrs:{placeholder:"Модельный ряд",searchable:!0,"has-label":!0,options:e.modelLines,loading:e.isModelLineLoading,selected:e.form.modelLine,error:n[0],selectFunction:"select-model-line"},on:{"select-model-line":e.getYears},model:{value:e.form.modelLine,callback:function(t){e.$set(e.form,"modelLine",t)},expression:"form.modelLine"}})]}}],null,!0)})],1),e._v(" "),r("li",[r("ValidationProvider",{attrs:{vid:"year",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("g-select",{staticClass:"multiselect_small form-control_text",attrs:{placeholder:"Год производства",searchable:!0,"has-label":!0,disabled:0===e.years.length,options:e.years,loading:e.isYearLoading,selected:e.form.year,error:n[0]},model:{value:e.form.year,callback:function(t){e.$set(e.form,"year",t)},expression:"form.year"}})]}}],null,!0)})],1),e._v(" "),r("li",[r("ValidationProvider",{attrs:{vid:"type",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("div",{staticClass:"mt-8"},[e._v("Тип работ")]),e._v(" "),r("g-select",{staticClass:"multiselect_small form-control_text",attrs:{searchable:!1,options:e.serviceTypes,error:n[0],placeholder:"Выберите тип работ"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})]}}],null,!0)})],1),e._v(" "),e.showInspections?r("li",[r("div",{staticClass:"mt-8 mb-4"},[r("strong",[e._v("Доступные сервисные кампании:")])]),e._v(" "),e._l(e.serviceInspections,(function(e){return r("Notice",{key:e.id,attrs:{description:"<strong>"+e.name+"</strong>"}})}))],2):e._e(),e._v(" "),r("li",[r("ValidationProvider",{attrs:{vid:"dealer",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[null===e.form.dealer?r("div",{staticClass:"text-s1 mt-8 mb-4"},[e._v("Дилер")]):e._e(),e._v(" "),r("DealerChoice",{attrs:{dealership:e.form.dealer,autoFill:!0,error:n[0]},on:{input:e.changeDealer},model:{value:e.form.dealer,callback:function(t){e.$set(e.form,"dealer",t)},expression:"form.dealer"}})]}}],null,!0)})],1),e._v(" "),r("li",[r("ValidationProvider",{attrs:{vid:"remote"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("g-form-control",{attrs:{disabled:!e.hasDealerRemoteService,type:"checkbox",id:"remote",name:"remote",checked:e.form.remote,error:n[0],"has-label":!1},on:{input:function(t){return e.selectedTime(null)}},model:{value:e.form.remote,callback:function(t){e.$set(e.form,"remote",t)},expression:"form.remote"}},[r("template",{slot:"label"},[r("span",{staticClass:"remote-label"},[e._v("Удаленный сервис")]),e._v(" "),r("button",{on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.toggleRemotePopup(t)}}},[r("g-info-icon",{attrs:{theme:"black"}})],1)]),e._v(" "),e.form.dealer&&!e.hasDealerRemoteService?r("div",{staticClass:"text-s4 mt-2 color-silver"},[e._v("\n                            Услуга недоступна для выбранного дилера\n                          ")]):e._e()],2)]}}],null,!0)})],1),e._v(" "),r("li",[r("ValidationProvider",{attrs:{vid:"date",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("g-form-datepicker",{attrs:{blackActive:!0,label:e.datePickerLabel,hideDefaultValue:!0,disabled:!e.hasDealer,disableFrom:e.fromDate,disableAfter:e.afterDate,error:n[0]},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})]}}],null,!0)})],1),e._v(" "),e.showTime?r("li",[e.showRemoteSlots?r("ValidationProvider",{attrs:{vid:"slot",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("RemoteSlots",{attrs:{chooseDate:e.form.date,error:n[0],title:"Укажите удобное время"},on:{"selected-time":e.selectedTime},model:{value:e.form.slotTime,callback:function(t){e.$set(e.form,"slotTime",t)},expression:"form.slotTime"}})]}}],null,!0)}):e.showSlots?r("ValidationProvider",{attrs:{vid:"slot",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("Slots",{attrs:{start:e.fromDate,end:e.afterDate,interval:e.slots.interval,"available-time":e.slots.work_time,"busy-time":e.slots.used,chooseDate:e.form.date,error:n[0],title:e.title},on:{"selected-time":e.selectedTime},model:{value:e.form.slotTime,callback:function(t){e.$set(e.form,"slotTime",t)},expression:"form.slotTime"}})]}}],null,!0)}):e._e()],1):e._e()])]),e._v(" "),r("div",{staticClass:"text-s1"},[e._v("Ваши контакты")]),e._v(" "),r("fieldset",{staticClass:"is-full is-odd"},[r("ul",[r("li",[r("ValidationProvider",{attrs:{vid:"name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("g-form-control",{attrs:{type:"text",label:"Имя",error:n[0]},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})]}}],null,!0)})],1),e._v(" "),r("li",[r("ValidationProvider",{attrs:{vid:"phone",rules:"required|phone"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("g-form-control",{directives:[{name:"mask",rawName:"v-mask",value:"+7 (###) ###-##-##",expression:"'+7 (###) ###-##-##'"}],attrs:{type:"text",label:"Телефон",placeholder:"+7 (___) ___-__-__",error:n[0]},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})]}}],null,!0)})],1),e._v(" "),r("li",[r("ValidationProvider",{attrs:{vid:"message"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("g-form-control",{staticClass:"mt-6",attrs:{type:"textarea",as:"textarea","rows-count":5,error:n[0],placeholder:"Ваш комментарий или вопрос"},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}})]}}],null,!0)})],1)])]),e._v(" "),r("div",{staticClass:"form-agree"},[r("ValidationProvider",{attrs:{vid:"agree",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("g-form-control",{attrs:{type:"checkbox",id:"agree",name:"agree",error:n[0],"has-label":!1},model:{value:e.form.agree,callback:function(t){e.$set(e.form,"agree",t)},expression:"form.agree"}},[r("template",{slot:"label"},[r("LicenseButton",{attrs:{agreement:e.agreement}})],1)],2)]}}],null,!0)})],1),e._v(" "),r("div",{staticClass:"form-button"},[r("button",{staticClass:"button button_primary",attrs:{type:"submit"}},[r("span",{staticClass:"button__span-after"},[e._v("\n                      Отправить\n                    ")])])])])]}}],null,!1,2591688268)})],1)])])])],1),e._v(" "),e.isRemotePopupOpen?r("PopupService",{on:{"toggle-info-popup":e.toggleRemotePopup}}):e._e()],1)}),[],!1,null,"32cca8b7",null).exports,R={props:{vin:{type:String,default:null},year:{type:Number,default:null},dealer:{type:Object,default:null},modelLine:{type:Object,default:function(){return{}}},years:{type:Array,default:[]},modelLines:{type:Array,default:[]},models:{type:Array,default:[]},serviceTypes:{type:Array,default:[]},agreement:{type:Object,default:function(){return{}}}},computed:{breadcrumbItems:function(){return[{name:"Быстрая запись на сервис"}]}},components:{FindDealer:o.default,Breadcrumbs:a.default,FormServiceQuick:E}},q=Object(V.a)(R,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pt-12 desktop1440:pt-16"},[r("g-padding",{staticClass:"pt-0 desktop:pt-4"},[r("g-container",{staticClass:"flex justify-between"},[r("Breadcrumbs",{attrs:{items:e.breadcrumbItems}})],1)],1),e._v(" "),r("g-padding",{staticClass:"py-6 desktop:pb-8"},[r("g-container",[r("h1",{staticClass:"text-x5 tablet:text-x4 desktop1440:text-x3 pt-10 desktop:pt-0"},[e._v("\n        Быстрая запись на сервис\n      ")])])],1),e._v(" "),r("FormServiceQuick",{attrs:{source:"service",vin:e.vin,year:e.year,dealer:e.dealer,modelLine:e.modelLine,years:e.years,"model-lines":e.modelLines,models:e.models,serviceTypes:e.serviceTypes,agreement:e.agreement}})],1)}),[],!1,null,null,null).exports;function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F={fetch:function(e){var t=e.store,r=e.error;return Object(i.a)(t,r,"service-request/loadPage",null).then((function(){t.commit("ui/setHeaderColor","black")}),(function(){}))},head:function(){return{title:this.$store.state["service-request"].seo.title,meta:[{hid:"description",name:"description",content:this.$store.state["service-request"].seo.description}]}},computed:M({},Object(s.e)("service-request",["models","allModelLines","years","generations","carcasses","modelLines","serviceTypes","agreement"]),{prepareModels:function(){var e=this;return this.models.map((function(t){var r=e.modelLines.find((function(e){return t.model_line_id===e.id})),n=e.carcasses.find((function(e){return t.carcass_id===e.id})),s=e.generations.find((function(e){return t.generation_id===e.id}));return M({},t,{name:"".concat(r.name," ").concat(s.name," (").concat(t.model_year," MY), ").concat(n.name)})}))},vin:function(){return this.$route.params.vin},modelLine:function(){return this.$route.params.modelLine},dealer:function(){return this.$route.params.dealer},year:function(){return this.$route.params.year}}),components:{ServicePage:q}},Y=Object(V.a)(F,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("ServicePage",{attrs:{vin:e.vin,year:e.year,dealer:e.dealer,modelLine:e.modelLine,years:e.years,models:e.prepareModels,"model-lines":e.allModelLines,agreement:e.agreement,serviceTypes:e.serviceTypes}})}),[],!1,null,null,null);t.default=Y.exports},997:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(6);function n(e,t,r,n){return new Promise((function(s,i){e.dispatch(r,n).then((function(e){s(e)})).catch((function(e){404===e.response.status?t({statusCode:404}):t({statusCode:500}),i()}))}))}},998:function(e,t,r){"use strict";r(49),r(38),r(376),r(27),r(43),r(59);t.a={methods:{choice:function(e,t){return t[e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]]},translit:function(e){var t={"а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"e","ж":"j","з":"z","и":"i","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"shch","ы":"y","э":"e","ю":"u","я":"ya"," ":"_",'"':""},r=[];e=e.replace(/[ъь]+/g,"").replace(/й/g,"i");for(var n=0;n<e.length;++n)r.push(t[e[n]]||null==t[e[n].toLowerCase()]&&e[n]||t[e[n].toLowerCase()].replace(/^(.)/,(function(e){return e.toUpperCase()})));return r.join("")},createId:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!1!==e)return this.translit((null!==t?t:"basic")+"_"+e+r).toLowerCase()},tabsIds:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=e.split("_");return s.splice(s.length-(t?2:1),0,n?"slides":"tabs"),r.map((function(e,t){return s.join("_")+"_"+(t+1)}))},getDisclaimerText:function(e,t){return e[t]&&e[t].text?e[t].text:""}}}}}]);