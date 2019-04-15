webpackJsonp([16],{

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(135)
/* template */
var __vue_template__ = __webpack_require__(150)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/home/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a7dd8a8", Component.options)
  } else {
    hotAPI.reload("data-v-3a7dd8a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(124)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(126)
/* template */
var __vue_template__ = __webpack_require__(130)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-544a8b9a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/category/product/card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-544a8b9a", Component.options)
  } else {
    hotAPI.reload("data-v-544a8b9a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("b361917c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-544a8b9a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./card.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-544a8b9a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./card.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.title[data-v-544a8b9a] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 90px;\n}\n.product-card[data-v-544a8b9a] {\n  height: 100%;\n}\n.image-container[data-v-544a8b9a] {\n  width: 280px;\n  overflow: hidden;\n  position: relative;\n}\n.image-container img[data-v-544a8b9a] {\n    width: 100%;\n}\n.image-container .price-badge[data-v-544a8b9a] {\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n.image-container .price-badge .price[data-v-544a8b9a] {\n      position: absolute;\n      top: 30%;\n      left: 25%;\n      color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shop_button_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shop_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__shop_button_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['product'],
    components: {
        shopButton: __WEBPACK_IMPORTED_MODULE_0__shop_button_vue___default.a
    },
    data: function data() {
        return {
            index: 0
        };
    },

    computed: {
        productUrl: function productUrl() {
            var _this = this;

            var cats = this.$store.getters.getCategories;
            var category = cats.find(function (c) {
                return c.id == _this.product.category_id;
            });
            console.log(this.product);
            var url = category.slug + '/' + this.product.slug;
            url = url.replace('//', '/');
            return url;
        },
        config: function config() {
            return this.$store.getters.getConfig;
        },
        image: function image() {

            if (this.product.images && this.product.images[this.index]) {
                return this.product.images[this.index];
            } else {
                return { url: '/storage/images/app/no-image.png' };
            }
        }
    }
});

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(128)
/* template */
var __vue_template__ = __webpack_require__(129)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/category/product/shop-button.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-684b91cf", Component.options)
  } else {
    hotAPI.reload("data-v-684b91cf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['product'],
    methods: {
        addFirstUnit: function addFirstUnit() {
            Vue.set(this.product, 'units', 1);
        }
    }
});

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    !_vm.product.units
      ? _c("div", { staticClass: "col-12" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-success",
              staticStyle: { cursor: "pointer" },
              on: { click: _vm.addFirstUnit }
            },
            [
              _c("i", { staticClass: "fas fa-shopping-cart" }),
              _vm._v(" Agregar al carrito ")
            ]
          )
        ])
      : _c("div", { staticClass: "col-12 row" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-6 p-4 d-flex flex-column justify-content-center"
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.product.units,
                    expression: "product.units"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.product.units },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.product, "units", $event.target.value)
                  }
                }
              })
            ]
          )
        ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-4 d-2 d-flex flex-column justify-content-center",
        staticStyle: { "font-size": "2rem" }
      },
      [_c("i", { staticClass: "fas fa-shopping-cart text-success" })]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-684b91cf", module.exports)
  }
}

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.product
    ? _c(
        "div",
        {
          staticClass:
            "d-flex flex-column align-items-center product-card  justify-content-between h-100"
        },
        [
          _c("h2", { staticClass: "text-center title" }, [
            _vm._v(_vm._s(_vm._f("uc")(_vm.product.name)))
          ]),
          _vm._v(" "),
          _c("router-link", { attrs: { to: _vm.productUrl } }, [
            _c(
              "div",
              { staticClass: "image-container" },
              [
                _c("v-lazy-image", { attrs: { src: _vm.image.url } }),
                _vm._v(" "),
                _vm.config && !_vm.config.hide_prices
                  ? _c(
                      "div",
                      { staticClass: "price-badge" },
                      [
                        _c("v-lazy-image", {
                          attrs: { src: "/storage/images/app/price-badge.png" }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "price" }, [
                          _vm._v(
                            "$" + _vm._s(_vm._f("price")(_vm.product.price))
                          )
                        ])
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("shop-button", { attrs: { product: _vm.product } })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-544a8b9a", module.exports)
  }
}

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(136)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(138)
/* template */
var __vue_template__ = __webpack_require__(139)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3acb39d0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/home/categories-pannel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3acb39d0", Component.options)
  } else {
    hotAPI.reload("data-v-3acb39d0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories_pannel_vue__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories_pannel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__categories_pannel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__banners_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__banners_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__banners_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_vue__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__offers_vue__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__offers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__offers_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    components: { homeOffers: __WEBPACK_IMPORTED_MODULE_3__offers_vue___default.a, homeBanners: __WEBPACK_IMPORTED_MODULE_1__banners_vue___default.a, homeInfo: __WEBPACK_IMPORTED_MODULE_2__info_vue___default.a, categoriesPannel: __WEBPACK_IMPORTED_MODULE_0__categories_pannel_vue___default.a },
    metaInfo: function metaInfo() {
        return {
            title: this.metadata ? this.metadata.metatitle : 'Mayorista  del Mate',
            meta: [{ name: 'description', content: this.metadata ? this.metadata.metadescription : '' }]
        };
    },

    computed: {
        metadatas: function metadatas() {
            return this.$store.getters.getMeta;
        },
        metadata: function metadata() {
            if (this.metadatas) {
                return this.metadatas.find(function (m) {
                    return m.page == 'home';
                });
            }
        },
        categories: function categories() {
            return this.$store.getters.getNotPaused;
        }
    }
});

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("29fee088", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3acb39d0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./categories-pannel.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3acb39d0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./categories-pannel.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.scrollable-pannel[data-v-3acb39d0] {\n  height: 450px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  width: 100%;\n}\n.scrollable-pannel ul[data-v-3acb39d0] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.scrollable-pannel ul a[data-v-3acb39d0] {\n      color: #000;\n}\n.img-container[data-v-3acb39d0] {\n  width: 85px;\n}\n.img-container img[data-v-3acb39d0] {\n    width: 85px;\n}\n", ""]);

// exports


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        categories: function categories() {
            return this.$store.getters.getNotPaused;
        }
    }
});

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.categories
    ? _c("div", { staticClass: "scrollable-pannel" }, [
        _c(
          "ul",
          _vm._l(_vm.categories, function(category) {
            return _c(
              "li",
              { key: category.name },
              [
                _c(
                  "router-link",
                  { staticClass: "d-flex", attrs: { to: category.slug } },
                  [
                    _c(
                      "div",
                      { staticClass: "img-container" },
                      [
                        category.image
                          ? _c("v-lazy-image", {
                              attrs: { src: category.image, alt: category.name }
                            })
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "ml-1" }, [
                      _vm._v(
                        "\n                    " +
                          _vm._s(category.name) +
                          "\n                "
                      )
                    ])
                  ]
                )
              ],
              1
            )
          })
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3acb39d0", module.exports)
  }
}

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(141)
/* template */
var __vue_template__ = __webpack_require__(142)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/home/banners.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0fb473ae", Component.options)
  } else {
    hotAPI.reload("data-v-0fb473ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories_pannel_vue__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories_pannel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__categories_pannel_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    components: { categoriesPannel: __WEBPACK_IMPORTED_MODULE_0__categories_pannel_vue___default.a }
});

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _vm.$mq == "lg"
      ? _c("div", { staticClass: "col-3" }, [_c("categories-pannel")], 1)
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12 col-lg-9" },
      [
        _c("router-link", { attrs: { to: "/cotizador" } }, [
          _c(
            "div",
            {
              staticStyle: {
                border: "1px solid #000",
                display: "flex",
                "justify-content": "center",
                "align-items": "center",
                width: "100%",
                height: "449px"
              }
            },
            [_c("h1", [_vm._v("TODOS LOS PRODUCTOS")])]
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0fb473ae", module.exports)
  }
}

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(144)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(146)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5e3964d7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/home/info.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e3964d7", Component.options)
  } else {
    hotAPI.reload("data-v-5e3964d7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(145);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("b38645a8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e3964d7\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./info.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e3964d7\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./info.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.info-row[data-v-5e3964d7] {\n  background-color: #09879f;\n  margin: 0 -6%;\n  padding: 20px 6%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.icon[data-v-5e3964d7] {\n  font-size: 2rem;\n}\n.info-item[data-v-5e3964d7] {\n  max-width: 30%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: .9rem;\n  color: #fff;\n}\n@media (max-width: 660px) {\n.info-item[data-v-5e3964d7] {\n    width: 100%;\n    max-width: 100%;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: start;\n    margin-top: 15px;\n    margin-left: 15px;\n}\n.info-row[data-v-5e3964d7] {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: start;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "info-row" }, [
    _c(
      "div",
      { staticClass: "info-item" },
      [
        _c("fa-icon", { staticClass: "icon", attrs: { icon: "truck" } }),
        _vm._v(" "),
        _vm._m(0)
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "info-item" },
      [
        _c("fa-icon", { staticClass: "icon", attrs: { icon: "dollar-sign" } }),
        _vm._v(" "),
        _vm._m(1)
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "info-item" },
      [
        _c("fa-icon", { staticClass: "icon", attrs: { icon: "dollar-sign" } }),
        _vm._v(" "),
        _vm._m(2)
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-column ml-2" }, [
      _c("span", [_c("b", [_vm._v("ENVIO GRATIS")])]),
      _vm._v(" "),
      _c("span", [_vm._v("En CABA y Zona Oesta de GBA")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-column ml-2" }, [
      _c("span", [_c("b", [_vm._v("PAGO CONTRAREEMBOLSO")])]),
      _vm._v(" "),
      _c("span", [_vm._v("Paga al recibir tus productos")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-column ml-2" }, [
      _c("span", [_c("b", [_vm._v("PAGO CONTRAREEMBOLSO")])]),
      _vm._v(" "),
      _c("span", [_vm._v("Paga al recibir tus productos")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5e3964d7", module.exports)
  }
}

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(148)
/* template */
var __vue_template__ = __webpack_require__(149)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/home/offers.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2fc9b500", Component.options)
  } else {
    hotAPI.reload("data-v-2fc9b500", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category_product_card_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category_product_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__category_product_card_vue__);
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    components: { productCard: __WEBPACK_IMPORTED_MODULE_0__category_product_card_vue___default.a },
    computed: {
        offers: function offers() {
            return this.$store.getters.getOffers;
        },
        categories: function categories() {
            return this.$store.getters.getCategories;
        }
    },
    methods: {
        getUrl: function getUrl(product) {
            var category = this.categories.find(function (c) {
                return c.id === product.category_id;
            });

            var res = category.slug + '/' + product.slug;
            res = res.replace('//', '/');

            return res;
        }
    }
});

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row mt-4 d-flex align-items-stretch" },
    _vm._l(_vm.offers, function(product) {
      return _c(
        "div",
        { key: product.id, staticClass: "col-12 col-lg-3" },
        [_c("productCard", { attrs: { product: product } })],
        1
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2fc9b500", module.exports)
  }
}

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("home-banners"),
      _vm._v(" "),
      _c("homeInfo", { staticClass: "mt-4" }),
      _vm._v(" "),
      _c("homeOffers")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row mb-3" }, [
      _c("div", { staticClass: "col-12 d-flex justify-content-center" }, [
        _c("h1", [_vm._v("Bazar Mayorista Maju")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3a7dd8a8", module.exports)
  }
}

/***/ })

});