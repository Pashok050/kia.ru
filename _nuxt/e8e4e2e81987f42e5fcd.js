(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{1020:function(t,n,e){},1090:function(t,n,e){"use strict";var s=e(1020);e.n(s).a},1112:function(t,n,e){"use strict";var s=e(170),i=e(163),a={props:{indexMenu:Boolean},data:function(){return{isSubmenuShown:!1,isIndexMenu:!!this.indexMenu&&this.indexMenu}},methods:{toggleSubmenu:function(){this.isSubmenuShown=!this.isSubmenuShown}},components:{TickUp:s.a,TickDown:i.a}},o=(e(1090),e(2)),r=Object(o.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("aside",{class:["menu-info fixed",{"menu-info_opened":t.isSubmenuShown},{"menu-info_index":t.isIndexMenu}]},[e("div",{staticClass:"menu-info__header flex",on:{click:t.toggleSubmenu}},[e("div",{staticClass:"menu-info__header__title text-s2i-b"},[t._v("\n      Содержание\n    ")]),t._v(" "),t.isSubmenuShown?e("TickUp",{staticClass:"menu-info__name-menu-arrow"}):t._e(),t._v(" "),t.isSubmenuShown?t._e():e("TickDown",{staticClass:"menu-info__name-menu-arrow"})],1),t._v(" "),e("div",{staticClass:"menu-info__body"},[e("div",{staticClass:"menu-info__content",attrs:{id:"menu-info"}},[e("div",{staticClass:"text-x4 mb-6"},[t._v("Содержание")]),t._v(" "),e("div",{staticClass:"mb-3"},[e("nuxt-link",{attrs:{to:"/info/privacy/"}},[t._v("Политика конфиденциальности")])],1),t._v(" "),e("div",{staticClass:"mb-3"},[e("nuxt-link",{attrs:{to:"/info/pd/"}},[t._v("Политика в отношении обработки персональных данных")])],1),t._v(" "),e("div",{staticClass:"mb-3"},[e("nuxt-link",{attrs:{to:"/info/cookie/"}},[t._v("Файлы Cookie и анализ посещения сайта")])],1),t._v(" "),e("div",{staticClass:"mb-3"},[e("nuxt-link",{attrs:{to:"/info/sn/"}},[t._v("Плагины социальных сетей")])],1),t._v(" "),e("div",{staticClass:"mb-3"},[e("nuxt-link",{attrs:{to:"/info/trademark/"}},[t._v("Авторские права и товарные знаки")])],1),t._v(" "),e("div",{staticClass:"mb-3"},[e("nuxt-link",{attrs:{to:"/info/notoffer/"}},[t._v("Отказ от заверений и гарантий")])],1),t._v(" "),e("div",{staticClass:"mb-3"},[e("nuxt-link",{attrs:{to:"/info/personaldata/"}},[t._v("Согласие на обработку персональных данных")])],1),t._v(" "),e("div",{staticClass:"mb-3"},[e("nuxt-link",{attrs:{to:"/info/account/"}},[t._v("Условия доступа в Личный кабинет")])],1),t._v(" "),e("div",{staticClass:"mb-3"},[e("nuxt-link",{attrs:{to:"/info/mykia_usage/"}},[t._v("My Kia 2.0: Общие условия использования")])],1),t._v(" "),e("div",{staticClass:"mb-3"},[e("nuxt-link",{attrs:{to:"/info/mykia_privacy/"}},[t._v("My Kia 2.0: Политика конфиденциальности")])],1),t._v(" "),e("div",{staticClass:"mb-3"},[e("nuxt-link",{attrs:{to:"/info/mykia_pd/"}},[t._v("My Kia 2.0: Согласие на обработку персональных данных")])],1),t._v(" "),e("div",{staticClass:"mb-3"},[e("nuxt-link",{class:{"nuxt-link-exact-active nuxt-link-active cursor-pointer":"info-sellers-code"===this.$route.name},attrs:{to:"/info/sellers/"}},[t._v("Информация о продавцах на сайте kia.ru")])],1)])])])}),[],!1,null,null,null);n.a=r.exports},1680:function(t,n,e){},2151:function(t,n,e){"use strict";var s=e(1680);e.n(s).a},2514:function(t,n,e){"use strict";e.r(n);e(7),e(75),e(13),e(3),e(9),e(10),e(8),e(5);var s=e(15),i=e(18),a=e(997),o=e(1112),r=e(532);function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,s)}return e}var u={head:function(){return{title:this.seo.title,meta:[{hid:"description",name:"description",content:this.seo.description}]}},fetch:function(t){var n=t.store,e=t.error;return Object(a.a)(n,e,"sellers/loadPage").then((function(){n.commit("ui/setHeaderColor","black")}),(function(){}))},computed:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){Object(s.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},Object(i.e)("sellers",["seo","sellers"]),{breadcrumbItems:function(){return[{name:"Правовая информация",href:"/info/"},{name:"Информация о продавцах на сайте kia.ru "}]}}),methods:{getSellerName:function(t){return null!==t.dealership_name?"".concat(t.dealership_name,", ").concat(t.legal_name):t.legal_name}},components:{Breadcrumbs:r.default,InfoMenu:o.a}},l=(e(2151),e(2)),d=Object(l.a)(u,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pt-12 desktop1440:pt-16"},[e("div",{staticClass:"info__body h-full-vh"},[e("g-padding",[e("g-container",{staticClass:"flex flex-col desktop:flex-row"},[e("InfoMenu"),t._v(" "),e("div",{staticClass:"info__content desktop:pl-6 desktop1440:pl-14"},[e("div",{staticClass:"pt-0 desktop:pt-4"},[e("div",{staticClass:"justify-between"},[e("Breadcrumbs",{attrs:{items:t.breadcrumbItems}})],1)]),t._v(" "),e("div",{staticClass:"color-dark-gray text-s2i pb-8"},[e("div",{staticClass:"section-break"}),t._v(" "),e("h1",{staticClass:"text-x4 color-black mb-4"},[t._v("Информация о продавцах на сайте kia.ru")]),t._v(" "),e("div",{staticClass:"mb-6"},[t.sellers.length>0?e("ul",t._l(t.sellers,(function(n){return e("li",[e("NuxtLink",{attrs:{to:""+n.code}},[t._v(t._s(t.getSellerName(n))+", ИНН "+t._s(n.inn))])],1)})),0):e("div",[t._v("\n                В настоящий момент нет информации о продавцах.\n              ")])]),t._v(" "),e("div",{staticClass:"section-break"})])])],1)],1)],1)])}),[],!1,null,"09bb6cfa",null);n.default=d.exports},997:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));e(6);function s(t,n,e,s){return new Promise((function(i,a){t.dispatch(e,s).then((function(t){i(t)})).catch((function(t){404===t.response.status?n({statusCode:404}):n({statusCode:500}),a()}))}))}}}]);