(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{1020:function(n,t,i){},1090:function(n,t,i){"use strict";var s=i(1020);i.n(s).a},1112:function(n,t,i){"use strict";var s=i(170),a=i(163),e={props:{indexMenu:Boolean},data:function(){return{isSubmenuShown:!1,isIndexMenu:!!this.indexMenu&&this.indexMenu}},methods:{toggleSubmenu:function(){this.isSubmenuShown=!this.isSubmenuShown}},components:{TickUp:s.a,TickDown:a.a}},o=(i(1090),i(2)),v=Object(o.a)(e,(function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("aside",{class:["menu-info fixed",{"menu-info_opened":n.isSubmenuShown},{"menu-info_index":n.isIndexMenu}]},[i("div",{staticClass:"menu-info__header flex",on:{click:n.toggleSubmenu}},[i("div",{staticClass:"menu-info__header__title text-s2i-b"},[n._v("\n      Содержание\n    ")]),n._v(" "),n.isSubmenuShown?i("TickUp",{staticClass:"menu-info__name-menu-arrow"}):n._e(),n._v(" "),n.isSubmenuShown?n._e():i("TickDown",{staticClass:"menu-info__name-menu-arrow"})],1),n._v(" "),i("div",{staticClass:"menu-info__body"},[i("div",{staticClass:"menu-info__content",attrs:{id:"menu-info"}},[i("div",{staticClass:"text-x4 mb-6"},[n._v("Содержание")]),n._v(" "),i("div",{staticClass:"mb-3"},[i("nuxt-link",{attrs:{to:"/info/privacy/"}},[n._v("Политика конфиденциальности")])],1),n._v(" "),i("div",{staticClass:"mb-3"},[i("nuxt-link",{attrs:{to:"/info/pd/"}},[n._v("Политика в отношении обработки персональных данных")])],1),n._v(" "),i("div",{staticClass:"mb-3"},[i("nuxt-link",{attrs:{to:"/info/cookie/"}},[n._v("Файлы Cookie и анализ посещения сайта")])],1),n._v(" "),i("div",{staticClass:"mb-3"},[i("nuxt-link",{attrs:{to:"/info/sn/"}},[n._v("Плагины социальных сетей")])],1),n._v(" "),i("div",{staticClass:"mb-3"},[i("nuxt-link",{attrs:{to:"/info/trademark/"}},[n._v("Авторские права и товарные знаки")])],1),n._v(" "),i("div",{staticClass:"mb-3"},[i("nuxt-link",{attrs:{to:"/info/notoffer/"}},[n._v("Отказ от заверений и гарантий")])],1),n._v(" "),i("div",{staticClass:"mb-3"},[i("nuxt-link",{attrs:{to:"/info/personaldata/"}},[n._v("Согласие на обработку персональных данных")])],1),n._v(" "),i("div",{staticClass:"mb-3"},[i("nuxt-link",{attrs:{to:"/info/account/"}},[n._v("Условия доступа в Личный кабинет")])],1),n._v(" "),i("div",{staticClass:"mb-3"},[i("nuxt-link",{attrs:{to:"/info/mykia_usage/"}},[n._v("My Kia 2.0: Общие условия использования")])],1),n._v(" "),i("div",{staticClass:"mb-3"},[i("nuxt-link",{attrs:{to:"/info/mykia_privacy/"}},[n._v("My Kia 2.0: Политика конфиденциальности")])],1),n._v(" "),i("div",{staticClass:"mb-3"},[i("nuxt-link",{attrs:{to:"/info/mykia_pd/"}},[n._v("My Kia 2.0: Согласие на обработку персональных данных")])],1),n._v(" "),i("div",{staticClass:"mb-3"},[i("nuxt-link",{class:{"nuxt-link-exact-active nuxt-link-active cursor-pointer":"info-sellers-code"===this.$route.name},attrs:{to:"/info/sellers/"}},[n._v("Информация о продавцах на сайте kia.ru")])],1)])])])}),[],!1,null,null,null);t.a=v.exports},1679:function(n,t,i){},2150:function(n,t,i){"use strict";var s=i(1679);i.n(s).a},2512:function(n,t,i){"use strict";i.r(t);i(7),i(75);var s=i(532),a=i(1112),e=i(997),o={head:function(){return{title:this.$store.state.layout.seo.title,meta:[{hid:"description",name:"description",content:this.$store.state.layout.seo.description}]}},fetch:function(n){var t=n.store,i=n.error;return Object(e.a)(t,i,"layout/loadSeo","info-personaldata").then((function(){t.commit("ui/setHeaderColor","black")}),(function(){}))},computed:{breadcrumbItems:function(){return[{name:"Правовая информация",href:"/info/"},{name:"Согласие на обработку персональных данных "}]}},components:{Breadcrumbs:s.default,InfoMenu:a.a}},v=(i(2150),i(2)),l=Object(v.a)(o,(function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"pt-12 desktop1440:pt-16"},[i("div",{staticClass:"info__body"},[i("g-padding",[i("g-container",{staticClass:"flex flex-col desktop:flex-row"},[i("InfoMenu"),n._v(" "),i("div",{staticClass:"info__content desktop:pl-6 desktop1440:pl-14"},[i("div",{staticClass:"pt-0 desktop:pt-4"},[i("div",{staticClass:"justify-between"},[i("Breadcrumbs",{attrs:{items:n.breadcrumbItems}})],1)]),n._v(" "),i("div",{staticClass:"color-dark-gray text-s2i pb-8"},[i("div",{staticClass:"section-break"}),n._v(" "),i("h1",{staticClass:"text-x4 color-black mb-4"},[n._v("Согласие на обработку персональных данных")]),n._v(" "),i("div",{staticClass:"mb-6"},[i("ol",[i("li",[i("p",[n._v("\n                    Пользователь, проходя регистрацию на Сайте\n                    "),i("a",{attrs:{href:"https://kia.ru/"}},[n._v("https://kia.ru/")]),n._v(", принимает настоящее Согласие на\n                    обработку персональных данных (далее – Согласие).\n                  ")]),n._v(" "),i("p",[n._v("\n                    Действуя свободно, своей волей и в своем интересе, а также подтверждая свою\n                    дееспособность, Пользователь дает свое согласие Общество с ограниченной\n                    ответственностью «Киа Россия и СНГ» зарегистрированному по адресу 115054, г.\n                    Москва, ул. Валовая, д. 26 (далее — Оператор) на обработку своих персональных\n                    данных со следующими условиями:\n                  ")])]),n._v(" "),i("li",[i("p",[n._v("\n                    Данное Согласие дается на автоматизированную обработку персональных данных.\n                  ")]),n._v(" "),i("p",[n._v("Согласие дается на обработку следующих моих персональных данных:")]),n._v(" "),i("ol",{staticClass:"ol_bracket"},[i("li",[n._v("Специальные категории персональных данных – не обрабатываются.")]),n._v(" "),i("li",[n._v("Биометрические персональные данные – не обрабатываются.")]),n._v(" "),i("li",[n._v("\n                      Персональные данные, не являющиеся специальными или биометрическими:"),i("br"),n._v("\n                      фамилия, имя, отчество; номер телефона; адрес электронной почты; пол;\n                      семейное положение; дата рождения; адрес места жительства, образ жизни и\n                      поведение субъекта (в том числе, в сети Интернет), сфера деятельности, место\n                      работы и должность (род занятий), иные данные и информация, предоставленные\n                      и предоставляемые субъектом или ставшие известными ООО «Киа Россия и СНГ» в\n                      целях, указанных в настоящем согласии.\n                    ")])])]),n._v(" "),i("li",[i("p",[n._v("\n                    Настоящее Согласие дается на выполнение следующих действий (операций),\n                    совершаемых с использованием средств автоматизации или без использования таких\n                    средств с персональными данными: сбор, запись, систематизация, накопление,\n                    хранение, уточнение (обновление, изменение), извлечение, использование,\n                    передача, в том числе трансграничная (распространение в случаях и в объеме,\n                    предусмотренных законодательством РФ, в том числе предоставление в\n                    государственные органы и иные организации), деперсонализация, блокирование,\n                    удаление, уничтожение персональных данных в целях:\n                  ")]),n._v(" "),i("ol",{staticClass:"ol_latin"},[i("li",[n._v("продвижения и совершенствование товаров и услуг бренда Kia;")]),n._v(" "),i("li",[n._v("\n                      получения и исследования статистических данных об объемах продаж и качестве\n                      услуг бренда Kia;\n                    ")]),n._v(" "),i("li",[n._v("\n                      изучения конъюнктуры рынка автомобилей, автомобильных запасных частей и\n                      аксессуаров;\n                    ")]),n._v(" "),i("li",[n._v("\n                      сбора статистики по посетителям Сайта для улучшения качества работы Сайта и\n                      его содержания;\n                    ")]),n._v(" "),i("li",[n._v("\n                      осуществления других видов деятельности в рамках законодательства РФ с\n                      обязательным выполнением требований законодательства РФ в области\n                      персональных данных.\n                    ")]),n._v(" "),i("li",[n._v("\n                      сбора данных по поведению на сайте kia.ru (сервисами веб-аналитики,\n                      метрическими программами). Подробная информация приведена на официальном\n                      сайте ООО «Киа Россия и СНГ» в разделе в разделе «Правовая информация» на\n                      странице «Файлы Cookie и анализ посещения сайта»\n                      "),i("a",{attrs:{href:"https://www.kia.ru/info/cookie/"}},[n._v("https://www.kia.ru/info/cookie/")])]),n._v(" "),i("p",[n._v("\n                      При обработке персональных данных и информации в целях, не связанных с\n                      направлением информации рекламного характера, могут использоваться e-mail\n                      рассылка (направление сообщений на электронную почту), СМС-рассылка (служба\n                      коротких сообщений), почтовая рассылка, телефонные звонки, любые иные\n                      средства связи, сеть Интернет. Для целей направления информации рекламного\n                      характера могут использоваться только варианты связи, отмеченные выше, либо\n                      на которые отдельно дано согласие.\n                    ")])])]),n._v(" "),i("li",[n._v("\n                  Основанием для обработки персональных данных является: ст. 24 Конституции\n                  Российской Федерации; настоящее Согласие на обработку персональных данных.\n                ")]),n._v(" "),i("li",[n._v("\n                  Оператор персональных данных ведет деятельность на территории Российской\n                  Федерации в соответствии с законодательством Российской Федерации. Предлагаемые\n                  товары/работы/услуги доступны к получению на территории Российской Федерации.\n                  Мониторинг потребительского поведения субъектов, находящихся за пределами\n                  Российской Федерации, не ведется.\n                ")]),n._v(" "),i("li",[n._v("\n                  Обработка персональных данных может быть прекращена по запросу субъекта\n                  персональных данных. Хранение персональных данных, зафиксированных на бумажных\n                  носителях, осуществляется согласно Федеральному закону №125-ФЗ «Об архивном деле\n                  в Российской Федерации» и иным нормативно правовым актам в области архивного\n                  дела и архивного хранения.\n                ")]),n._v(" "),i("li",[n._v("\n                  Согласие может быть отозвано субъектом персональных данных или его\n                  представителем путем направления письменного заявления заказным письмом с\n                  уведомлением Оператору по адресу, указанному в начале данного Согласия.\n                ")]),n._v(" "),i("li",[n._v("\n                  В случае отзыва субъектом персональных данных или его представителем согласия на\n                  обработку персональных данных Оператор вправе продолжить обработку персональных\n                  данных без согласия субъекта персональных данных при наличии оснований,\n                  указанных в пунктах 2 – 11 части 1 статьи 6, части 2 статьи 10 и части 2 статьи\n                  11 Федерального закона №152-ФЗ «О персональных данных» от 27.07.2006 г.\n                ")]),n._v(" "),i("li",[n._v("\n                  Настоящее согласие действует с момента проставления отметки и до момента\n                  прекращения обработки персональных данных, указанных в п.7 и п.8 данного\n                  Согласия.\n                ")]),n._v(" "),i("li",[n._v("\n                  Политика обработки данных ООО «Киа Россия и СНГ», а также описание прав субъекта\n                  персональных данных и возможности их реализации приведены на официальном сайте\n                  ООО «Киа Россия и СНГ» в разделе «Правовая информация»\n                  "),i("a",{attrs:{href:"https://www.kia.ru/info/"}},[n._v("https://www.kia.ru/info/")])])])]),n._v(" "),i("div",{staticClass:"section-break"})])])],1)],1)],1)])}),[],!1,null,"1a8b1393",null);t.default=l.exports},997:function(n,t,i){"use strict";i.d(t,"a",(function(){return s}));i(6);function s(n,t,i,s){return new Promise((function(a,e){n.dispatch(i,s).then((function(n){a(n)})).catch((function(n){404===n.response.status?t({statusCode:404}):t({statusCode:500}),e()}))}))}}}]);