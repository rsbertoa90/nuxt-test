webpackJsonp([16],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__productcard_vue__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__productcard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__productcard_vue__);
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
    components: { productCard: __WEBPACK_IMPORTED_MODULE_0__productcard_vue___default.a },
    metaInfo: function metaInfo() {
        return {
            title: this.metatitle
        };
    },
    data: function data() {
        return {};
    },


    computed: {
        metatitle: function metatitle() {
            return this.category && this.category.metatitle.trim() ? this.category.metatitle : 'Bazar Mayorista Maju';
        },
        categories: function categories() {
            return this.$store.getters.getCategories;
        },
        category: function category() {
            var vm = this;
            if (this.categories) {
                return this.categories.find(function (cat) {
                    return cat.slug == '/' + vm.$route.params.category_slug;
                    console.log(cat.slug);
                    console.log('/' + vm.$route.params.category_slug);
                });
            }
        },
        productsNotPaused: function productsNotPaused() {
            if (this.category) {
                return this.category.products.filter(function (prod) {
                    return !prod.paused;
                });
            }
        }
    }
});

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(148)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(150)
/* template */
var __vue_template__ = __webpack_require__(151)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2162fc85"
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
Component.options.__file = "resources/assets/js/components/category/productcard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2162fc85", Component.options)
  } else {
    hotAPI.reload("data-v-2162fc85", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("778e1897", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2162fc85\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./productcard.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2162fc85\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./productcard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-2162fc85]{width:100%\n}\n", ""]);

// exports


/***/ }),

/***/ 150:
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
    props: ['product']

});

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.product.images[0]
        ? _c("v-lazy-image", { attrs: { src: _vm.product.images[0].url } })
        : _c("v-lazy-image", {
            attrs: { src: "/storage/images/app/no-image.png" }
          }),
      _vm._v(" "),
      _c(
        "div",
        { staticStyle: { "margin-top": "-16px", "margin-left": "10px" } },
        [
          _c("br"),
          _vm._v(" "),
          _vm.product.price > 0
            ? _c(
                "span",
                {
                  staticStyle: {
                    width: "73px",
                    height: "60px",
                    "font-size": "1.2rem",
                    color: "blue",
                    display: "inline"
                  }
                },
                [_vm._v(" $ " + _vm._s(_vm.product.price.toFixed(2)) + " ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.product.pck_units > 1 && _vm.product.price > 0
            ? _c("span", [_vm._v(" / ")])
            : _vm._e(),
          _vm._v(" "),
          _vm.product.pck_units > 1
            ? _c(
                "span",
                {
                  staticStyle: {
                    width: "73px",
                    height: "60px",
                    "font-size": "1.25rem",
                    color: "green",
                    display: "inline"
                  }
                },
                [_vm._v(" $" + _vm._s(_vm.product.pck_price.toFixed(2)))]
              )
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticStyle: {
            "font-size": "1rem",
            "font-weight": "bold",
            display: "inline",
            "line-height": "normal"
          }
        },
        [
          _vm._v(
            "\n            Cod: " +
              _vm._s(_vm.product.code) +
              " - " +
              _vm._s(_vm.product.name) +
              "  \n        "
          )
        ]
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _vm.product.pck_units > 1
        ? _c(
            "span",
            {
              staticStyle: {
                "font-size": ".85rem",
                display: "inline",
                color: "green"
              }
            },
            [
              _vm._v(
                "\n            Precio especial a partir de " +
                  _vm._s(_vm.product.pck_units) +
                  " unidades\n        "
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2162fc85", module.exports)
  }
}

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.category && _vm.category.products
    ? _c("div", { staticClass: "d-flex flex-column" }, [
        _c("div", { staticStyle: { "text-align": "center" } }, [
          _c("h1", [_vm._v(" " + _vm._s(_vm.category.name) + " ")])
        ]),
        _vm._v(" "),
        _vm.category.description
          ? _c("div", { staticClass: "text-center mt-4" }, [
              _c("p", [_vm._v(" " + _vm._s(_vm.category.description) + " ")])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.productsNotPaused, function(product) {
              return _c(
                "div",
                { key: product.id, staticClass: "col-lg-3 col-12" },
                [
                  _c("productCard", {
                    staticClass: "mt-4",
                    attrs: { product: product }
                  })
                ],
                1
              )
            })
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7fd20288", module.exports)
  }
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(146)
/* template */
var __vue_template__ = __webpack_require__(152)
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
Component.options.__file = "resources/assets/js/components/category/Category.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fd20288", Component.options)
  } else {
    hotAPI.reload("data-v-7fd20288", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});