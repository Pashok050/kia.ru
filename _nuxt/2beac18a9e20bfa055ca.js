(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1658:function(e,t,s){},2133:function(e,t,s){"use strict";var r=s(1658);s.n(r).a},2501:function(e,t,s){"use strict";s.r(t);s(7),s(75),s(13),s(3),s(9),s(10),s(8),s(5);var r=s(15),o=s(18),c=s(997),n=s(532),a=s(2017),i=s(1484),l=s(1182);function d(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function f(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?d(Object(s),!0).forEach((function(t){Object(r.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):d(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var p={name:"special-offers",mixins:[s(24).a],mounted:function(){this.gtagEventByPath("-","interest")},fetch:function(e){var t=e.store,s=e.error;return Object(c.a)(t,s,"special-offers/loadPage",null).then((function(){t.commit("ui/setHeaderColor","black")}),(function(){}))},head:function(){return{title:this.$store.state["special-offers"].seo.title,meta:[{hid:"description",name:"description",content:this.$store.state["special-offers"].seo.description}]}},computed:f({},Object(o.e)("special-offers",["offers","models"]),{},Object(o.c)("watched",["watchedEntities"]),{presentModels:function(){return[{id:null,name:"Выберите модель"}].concat(this.models)},breadcrumbItems:function(){return[{name:"Спецпредложения"}]}}),methods:f({},Object(o.d)("special-offers",["setModelCode"]),{},Object(o.b)("special-offers",["loadModel","loadPage"]),{selectModel:function(e){e.code?(this.setModelCode(e.code),this.loadModel()):this.loadPage()}}),components:{Title:i.a,Programs:a.a,Breadcrumbs:n.default,Watched:l.a}},u=(s(2133),s(2)),m=Object(u.a)(p,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"pt-12 desktop1440:pt-16"},[s("g-padding",{staticClass:"pt-0 desktop:pt-4"},[s("g-container",{staticClass:"flex justify-between"},[s("Breadcrumbs",{attrs:{items:e.breadcrumbItems}})],1)],1),e._v(" "),s("Title",{attrs:{title:"Специальные предложения"}}),e._v(" "),s("g-padding",[s("g-container",{staticClass:"pt-8 desktop1440:pt-4"},[s("div",{staticClass:"special-filter mb-4 tablet:mb-6"},[s("div",{staticClass:"special-filter__options flex flex-wrap items-center"},[s("div",{staticClass:"special-filter__select tablet:mt-0"},[e.models.length?s("g-select",{staticClass:"multiselect_small",attrs:{options:e.presentModels,selected:e.presentModels[0],allowEmpty:!0,"select-function":"select-model",placeholder:"Выберите модель"},on:{"select-model":function(t){return e.selectModel(t)}}}):e._e()],1)])]),e._v(" "),s("Programs",{attrs:{offers:e.offers}})],1)],1),e._v(" "),s("Watched",{attrs:{entities:e.watchedEntities}})],1)])}),[],!1,null,"4671a832",null);t.default=m.exports}}]);