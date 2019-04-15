webpackJsonp([22],{

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(223)
/* template */
var __vue_template__ = __webpack_require__(224)
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
Component.options.__file = "resources/assets/js/components/category/product/Product.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-094e94b5", Component.options)
  } else {
    hotAPI.reload("data-v-094e94b5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shop_button_vue__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shop_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__shop_button_vue__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    components: { shopButton: __WEBPACK_IMPORTED_MODULE_0__shop_button_vue___default.a },
    metaInfo: function metaInfo() {
        return {
            title: this.metatitle,
            meta: [{ charset: 'utf-8' }, { vmid: 'description', name: 'description', content: this.metadescription }]
        };
    },

    computed: {
        metatitle: function metatitle() {
            if (this.product) {
                return this.product.metatitle ? this.product.metatitle : this.product.name + ' por mayor';
            }
        },
        metadescription: function metadescription() {
            if (this.product) {
                if (this.product.metadescription) {
                    return this.product.metadescription;
                } else if (this.product.description) {
                    return this.product.description;
                } else return this.product.name + " " + 'por mayor';
            }
        },
        categories: function categories() {
            return this.$store.getters.getNotPaused;
        },
        product: function product() {
            var vm = this;
            var res = null;
            this.categories.forEach(function (c) {
                var p = c.products.find(function (pr) {
                    var slug = pr.slug;
                    slug.replace('/', '');
                    return slug.trim().toLowerCase() == vm.$route.params.product_slug.trim().toLowerCase();
                });
                if (p) {
                    res = p;
                    return;
                }
            });
            return res;
        }
    }

});

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.product
    ? _c("dir", [_c("h1", [_vm._v(_vm._s(_vm.product.name))])])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-094e94b5", module.exports)
  }
}

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(226)
/* template */
var __vue_template__ = __webpack_require__(227)
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

/***/ 226:
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

/***/ 227:
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

/***/ })

});