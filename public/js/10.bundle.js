webpackJsonp([10],Array(88).concat([
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(103)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(105)
/* template */
var __vue_template__ = __webpack_require__(150)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-731ed9d6"
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
Component.options.__file = "resources/assets/js/components/cotizer/Cotizer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-731ed9d6", Component.options)
  } else {
    hotAPI.reload("data-v-731ed9d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(94)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(96)
/* template */
var __vue_template__ = __webpack_require__(97)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-77e27c8a"
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
Component.options.__file = "resources/assets/js/components/admin/admin/paginator.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77e27c8a", Component.options)
  } else {
    hotAPI.reload("data-v-77e27c8a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("3d1b8ce6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-77e27c8a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./paginator.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-77e27c8a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./paginator.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.pagination[data-v-77e27c8a] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n", ""]);

// exports


/***/ }),
/* 96 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['selectedPage', 'products', 'productsPerPage'],
    computed: {
        total: function total() {
            if (this.products) {
                return this.products.length / this.productsPerPage;
            }
        },
        pages: function pages() {
            var total = this.total;
            if (total % 1 != 0) {
                total++;
            }
            var res = [];
            for (var i = 1; i < total; i++) {
                res.push(i);
            }
            return res;
        }
    },
    methods: {
        select: function select(page) {
            this.$emit('selectPage', page);
        }
    }
});

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.total > 1
    ? _c("nav", { attrs: { "aria-label": "Paginator" } }, [
        _c(
          "ul",
          { staticClass: "pagination" },
          [
            _c(
              "li",
              {
                staticClass: "page-item",
                class: { disabled: _vm.selectedPage == 1 }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: { "aria-label": "Previous" },
                    on: {
                      click: function($event) {
                        _vm.select(_vm.selectedPage - 1)
                      }
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("«")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _vm._l(_vm.pages, function(page) {
              return _c(
                "li",
                {
                  key: page,
                  staticClass: "page-item",
                  class: { active: _vm.selectedPage == page }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "page-link",
                      on: {
                        click: function($event) {
                          _vm.select(page)
                        }
                      }
                    },
                    [_vm._v(_vm._s(page))]
                  )
                ]
              )
            }),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass: "page-item",
                class: { disabled: _vm.selectedPage == _vm.total }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: { "aria-label": "Next" },
                    on: {
                      click: function($event) {
                        _vm.select(_vm.selectedPage + 1)
                      }
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("»")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "sr-only" }, [_vm._v("Next")])
                  ]
                )
              ]
            )
          ],
          2
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
    require("vue-hot-reload-api")      .rerender("data-v-77e27c8a", module.exports)
  }
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(106)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(108)
/* template */
var __vue_template__ = __webpack_require__(109)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0ae5e525"
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
Component.options.__file = "resources/assets/js/components/cotizer/pedido.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ae5e525", Component.options)
  } else {
    hotAPI.reload("data-v-0ae5e525", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(130)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(132)
/* template */
var __vue_template__ = __webpack_require__(133)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f226c7f6"
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
Component.options.__file = "resources/assets/js/components/cotizer/products-table.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f226c7f6", Component.options)
  } else {
    hotAPI.reload("data-v-f226c7f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(104);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("8a658236", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-731ed9d6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cotizer.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-731ed9d6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cotizer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.contain-all[data-v-731ed9d6] {\n  width: 100vw;\n  padding: 5px;\n  overflow: hidden;\n}\n.lglogo[data-v-731ed9d6] {\n  width: 200px;\n  height: 100px;\n}\n.smlogo[data-v-731ed9d6] {\n  width: 100px;\n  height: 50px;\n  margin-bottom: 15px;\n  margin-top: 10px;\n}\nimg[data-v-731ed9d6] {\n  width: 100%;\n}\n.loader[data-v-731ed9d6] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  z-index: 110;\n  background-color: #ddddddaa;\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: start;\n  padding-top: 5%;\n}\n.search-bar[data-v-731ed9d6] {\n  border: 1px solid #ff0aaf;\n  padding: 3px;\n  margin-top: 20px;\n  text-align: center;\n}\n.search-bar[data-v-731ed9d6]::-webkit-input-placeholder {\n    color: #ff0aaf;\n    text-align: center;\n}\n.search-bar[data-v-731ed9d6]:-ms-input-placeholder {\n    color: #ff0aaf;\n    text-align: center;\n}\n.search-bar[data-v-731ed9d6]::-ms-input-placeholder {\n    color: #ff0aaf;\n    text-align: center;\n}\n.search-bar[data-v-731ed9d6]::placeholder {\n    color: #ff0aaf;\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pedido_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pedido_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pedido_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__banner_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__banner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__banner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__tutorial_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_paginator_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_paginator_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__admin_admin_paginator_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hide_opt_button_vue__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hide_opt_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__hide_opt_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__code_selector_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__code_selector_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__code_selector_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categories_acordion_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categories_acordion_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__categories_acordion_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__total_bouncer_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__total_bouncer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__total_bouncer_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_table_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__products_table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Cotizer_form_vue__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Cotizer_form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Cotizer_form_vue__);
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
    components: {
        cotizerForm: __WEBPACK_IMPORTED_MODULE_9__Cotizer_form_vue___default.a,
        paginator: __WEBPACK_IMPORTED_MODULE_3__admin_admin_paginator_vue___default.a,
        productsTable: __WEBPACK_IMPORTED_MODULE_8__products_table_vue___default.a,
        categoriesAcordion: __WEBPACK_IMPORTED_MODULE_6__categories_acordion_vue___default.a,
        totalBouncer: __WEBPACK_IMPORTED_MODULE_7__total_bouncer_vue___default.a,
        codeSelector: __WEBPACK_IMPORTED_MODULE_5__code_selector_vue___default.a,
        pedido: __WEBPACK_IMPORTED_MODULE_0__pedido_vue___default.a,
        appBanner: __WEBPACK_IMPORTED_MODULE_1__banner_vue___default.a,
        cotizerTutorial: __WEBPACK_IMPORTED_MODULE_2__tutorial_vue___default.a,

        hideOptbutton: __WEBPACK_IMPORTED_MODULE_4__hide_opt_button_vue___default.a
    },
    data: function data() {
        return {
            selectedPage: 1,
            productsPerPage: 30,
            searchTerm: '',
            loading: true,

            /*  categories : [], */
            list: []
            /*  user : null, */
            /*  config:null */
        };
    },

    watch: {
        searchTerm: function searchTerm() {
            this.selectedPage = 1;
        },
        total: function total() {
            var result = [];
            var vm = this;
            vm.categories.forEach(function (category) {
                var prods = category.products.filter(function (el) {
                    return el.units != null & el.units > 0;
                });
                if (prods.length > 0) {
                    result.push(prods);
                }
            });

            vm.list = [].concat.apply([], result);
        }
    },
    computed: {
        paginatedProducts: function paginatedProducts() {
            if (this.filteredProducts) {
                return this.paginate(this.filteredProducts, this.selectedPage);
            }
        },
        filteredProducts: function filteredProducts() {
            var vm = this;
            if (this.searchTerm.trim() != '') {
                var terms = vm.searchTerm.split(' ');
                var res = [];

                this.categories.forEach(function (cat) {
                    var categoryName = cat.name.toString().toLowerCase().trim();
                    cat.products.forEach(function (prod) {
                        var productName = prod.name.toString().toLowerCase().trim();
                        var addtores = true;

                        terms.forEach(function (term) {

                            term = term.toLowerCase();
                            if (addtores && productName.indexOf(term) < 0 && categoryName.indexOf(term) < 0) {
                                addtores = false;
                            }
                        });
                        if (addtores) {
                            res.push(prod);
                        }
                    });
                });
                return res;
            }
        },
        categories: function categories() {
            return this.$store.getters.getNotPaused;
        },
        config: function config() {
            return this.$store.getters.getConfig;
        },
        user: function user() {
            return this.$store.getters.getUser;
        },
        total: function total() {
            var vm = this;
            var tot = 0;
            vm.categories.forEach(function (category) {
                category.products.forEach(function (product) {
                    if (product.units > 0) {
                        if (product.units < product.pck_units) {
                            tot += product.price * product.units;
                        } else {
                            tot += product.pck_price * product.units;
                        }
                    }
                });
            });
            return tot;
        }
    },

    methods: {
        paginate: function paginate(array, page) {
            if (array && array.length > 0) {
                page--;
                return array.slice(page * this.productsPerPage, (page + 1) * this.productsPerPage);
            }
        }
    },
    filters: {
        price: function price(value) {
            return value.toFixed(2);
        }
    }
});

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("98448f24", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0ae5e525\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pedido.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0ae5e525\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pedido.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.table[data-v-0ae5e525]{\n    font-size:0.8rem;\n    margin-left: -2%;\n}\n.form-control[data-v-0ae5e525]{\n    max-width: 80px;\n}\n.form-control[data-v-0ae5e525]{\n    max-width: 80px;\n}\n@media(max-width:600px){\n.table[data-v-0ae5e525]{\n        font-size:0.6rem;\n}\n}\n\n", ""]);

// exports


/***/ }),
/* 108 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['list'],
    methods: {
        del: function del(product) {
            product.units = 0;
        }
    }
});

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.list && _vm.list.length > 0
    ? _c("div", { staticClass: "mt-5" }, [
        _c("h5", [_vm._v("Pedido actual:")]),
        _vm._v(" "),
        _c("table", { staticClass: "table table-striped" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.list, function(product) {
              return _c("tr", { key: product.id }, [
                _c("td", [_vm._v(" " + _vm._s(product.code) + " ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(product.name) + " ")]),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.lazy",
                        value: product.units,
                        expression: "product.units",
                        modifiers: { lazy: true }
                      }
                    ],
                    staticClass: "form-control",
                    staticStyle: { width: "100px" },
                    attrs: { type: "number" },
                    domProps: { value: product.units },
                    on: {
                      change: function($event) {
                        _vm.$set(product, "units", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                product.units < product.pck_units
                  ? _c("td", [
                      _vm._v(
                        " $" +
                          _vm._s(
                            _vm._f("price")(product.price * product.units)
                          ) +
                          " "
                      )
                    ])
                  : _c("td", [
                      _vm._v(
                        " $" +
                          _vm._s(
                            _vm._f("price")(product.pck_price * product.units)
                          ) +
                          " "
                      )
                    ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-outline-danger",
                      on: {
                        click: function($event) {
                          _vm.del(product)
                        }
                      }
                    },
                    [_c("span", { staticClass: "fa fa-times" })]
                  )
                ])
              ])
            })
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("Codigo")]),
      _vm._v(" "),
      _c("th", [_vm._v("Producto")]),
      _vm._v(" "),
      _c("th", [_vm._v("Unidades")]),
      _vm._v(" "),
      _c("th", [_vm._v("Subtotal")]),
      _vm._v(" "),
      _c("th", [_vm._v("-")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0ae5e525", module.exports)
  }
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(113)
/* template */
var __vue_template__ = __webpack_require__(114)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-76fa018c"
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
Component.options.__file = "resources/assets/js/components/cotizer/banner.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76fa018c", Component.options)
  } else {
    hotAPI.reload("data-v-76fa018c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(112);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("57fc4c6e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76fa018c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./banner.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76fa018c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./banner.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.colorRed[data-v-76fa018c]{\n    color:red;\n     -webkit-transition: ease 1s;\n     transition: ease 1s;\n}\n.colorBlue[data-v-76fa018c]{\n    color:blue;\n     -webkit-transition: ease 1s;\n     transition: ease 1s;\n}\n.todaright[data-v-76fa018c]{\n        -webkit-transform: rotate(15deg);\n                transform: rotate(15deg);\n        color:blue;\n        -webkit-transition: ease 1s;\n        transition: ease 1s;\n}\n.todaleft[data-v-76fa018c]{\n         -webkit-transform: rotate(-15deg);\n                 transform: rotate(-15deg);\n         color:red;\n         -webkit-transition: 1s ease;\n         transition: 1s ease;\n}\n.dared[data-v-76fa018c]{\n         /* transform: rotate(-15deg); */\n         color:red;\n         -webkit-transition: 1s ease;\n         transition: 1s ease;\n}\n.dablue[data-v-76fa018c]{\n         color:blue;\n        -webkit-transition: ease 1s;\n        transition: ease 1s;\n}\n.neg-margins[data-v-76fa018c]{\n    margin-right: -7%;\n    margin-left: -3%;\n}\nh2[data-v-76fa018c]{\n    white-space: nowrap;\n}\n\n", ""]);

// exports


/***/ }),
/* 113 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {

            pos: true,
            customText: null
        };
    },

    computed: {
        configs: function configs() {
            return this.$store.getters.getConfig;
        }
    },
    created: function created() {
        var _this = this;

        var vm = this;

        this.$http.get('/api/custom-text/banner').then(function (res) {
            _this.customText = res.data;
        });

        setInterval(function () {
            _this.pos = !_this.pos;
        }, 1000);
    }
});

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "neg-margins" }, [
    _c(
      "h2",
      {
        staticClass: "mt-4 font-weight-bold",
        class: { dared: _vm.pos, dablue: !_vm.pos }
      },
      [
        _c("span", {
          staticClass: "fa fa-arrow-down",
          class: { todaright: _vm.pos, todaleft: !_vm.pos }
        }),
        _vm._v("\n            HACE TU PEDIDO\n        "),
        _c("span", {
          staticClass: "fa fa-arrow-down",
          class: { todaright: !_vm.pos, todaleft: _vm.pos }
        })
      ]
    ),
    _vm._v(" "),
    _vm.configs
      ? _c("div", { staticClass: "d-flex flex-column mb-1" }, [
          _c("h4", { staticClass: "text-primary" }, [
            _c("span", { staticClass: "fas fa-home " }),
            _vm._v(
              "\n            Compra mínima en el local $" +
                _vm._s(_vm.configs.minbuy) +
                "\n        "
            )
          ]),
          _vm._v(" "),
          _c("h4", { staticClass: "fucsia" }, [
            _c("span", { staticClass: "fas fa-truck " }),
            _vm._v(
              "\n            Compra mínima para envíos $" +
                _vm._s(_vm.configs.minbuy_ship) +
                " \n        "
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.customText
      ? _c("div", [
          _c("h5", [
            _vm._v(
              "\n            " + _vm._s(_vm.customText.text) + "\n        "
            )
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-76fa018c", module.exports)
  }
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(116)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(118)
/* template */
var __vue_template__ = __webpack_require__(119)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-48ec1a84"
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
Component.options.__file = "resources/assets/js/components/cotizer/tutorial.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48ec1a84", Component.options)
  } else {
    hotAPI.reload("data-v-48ec1a84", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0299ef40", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48ec1a84\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tutorial.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48ec1a84\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tutorial.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.redcircle[data-v-48ec1a84] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100px;\n  height: 100px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: rgba(170, 16, 16, 0.479);\n}\n.animation[data-v-48ec1a84] {\n  position: absolute;\n  top: 70px;\n  left: 20px;\n  color: #131212;\n  font-size: 3rem;\n}\n.image-container[data-v-48ec1a84] {\n  width: 50%;\n  position: relative;\n}\n.overlay[data-v-48ec1a84] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #cccc;\n}\n.speech-bubble[data-v-48ec1a84] {\n  position: fixed;\n  top: 50px;\n  right: 50px;\n  background: #57b2bb;\n  border-radius: .4em;\n  width: 50%;\n  padding: 20px;\n  text-align: center;\n  color: #fff;\n}\n.speech-bubble[data-v-48ec1a84]:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 37px solid transparent;\n  border-right-color: #57b2bb;\n  border-left: 0;\n  border-bottom: 0;\n  margin-top: -18.5px;\n  margin-left: -37px;\n}\n@media (min-width: 900px) {\n.overlay[data-v-48ec1a84] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.image-container[data-v-48ec1a84] {\n    margin-left: 22%;\n}\n.speech-bubble[data-v-48ec1a84] {\n    top: 150px;\n}\n}\n", ""]);

// exports


/***/ }),
/* 118 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            viewed: false,
            scrolled: false,
            enterhand: false,
            clicknow: false,
            imagesrc: "/storage/images/app/tuto.png"

        };
    },

    watch: {
        scrolled: function scrolled() {}
    },
    methods: {
        handleScroll: function handleScroll() {
            var _this = this;

            if (!this.scrolled) {
                this.scrolled = window.scrollY > 50;

                setTimeout(function () {
                    _this.enterhand = true;
                }, 1000);

                setTimeout(function () {
                    _this.clicknow = true;
                    _this.imagesrc = "/storage/images/app/tuto2.png";
                }, 2100);
            }
        }
    },
    created: function created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }
});

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    { attrs: { "enter-active-class": "animate animated bounceIn" } },
    [
      _vm.scrolled && !_vm.viewed
        ? _c(
            "div",
            { staticClass: "overlay" },
            [
              _c(
                "div",
                { staticClass: "image-container" },
                [
                  _c("v-lazy-image", { attrs: { src: _vm.imagesrc } }),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animate animated slideInUp"
                      }
                    },
                    [
                      _vm.enterhand
                        ? _c(
                            "div",
                            {
                              staticClass: "animation ",
                              class: { redcircle: _vm.clicknow }
                            },
                            [_c("i", { staticClass: "fa fa-mouse-pointer" })]
                          )
                        : _vm._e()
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "transition",
                {
                  attrs: { "enter-active-class": "animate animated bounceIn" }
                },
                [
                  _vm.clicknow
                    ? _c("div", { staticClass: "speech-bubble" }, [
                        _c("span", [
                          _vm._v(
                            "Haz Click en una categoria para desplegar los productos"
                          )
                        ])
                      ])
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-block btn-danger",
                  staticStyle: { "max-width": "400px" },
                  on: {
                    click: function($event) {
                      _vm.viewed = true
                    }
                  }
                },
                [_vm._v(" Cerrar ")]
              )
            ],
            1
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-48ec1a84", module.exports)
  }
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(121)
/* template */
var __vue_template__ = __webpack_require__(122)
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
Component.options.__file = "resources/assets/js/components/cotizer/hide-opt-button.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a78af47", Component.options)
  } else {
    hotAPI.reload("data-v-7a78af47", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 121 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        config: function config() {
            return this.$store.getters.getConfig;
        }
    },
    methods: {
        toggleMaintenance: function toggleMaintenance() {
            if (this.config.maintenance) {
                this.config.maintenance = 0;
            } else {
                this.config.maintenance = 1;
            }

            this.$http.put('/admin/config', { field: 'maintenance', value: this.config.maintenance });
        }
    }
});

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.config && !_vm.config.maintenance
      ? _c(
          "button",
          {
            staticClass: "btn btn-outline-danger btn-lg",
            on: { click: _vm.toggleMaintenance }
          },
          [_vm._v("\n       Ocultar cotizador al publico        \n   ")]
        )
      : _c(
          "button",
          {
            staticClass: "btn btn-outline-success btn-lg",
            on: { click: _vm.toggleMaintenance }
          },
          [_vm._v("\n       Mostrar cotizador al publico\n   ")]
        )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7a78af47", module.exports)
  }
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(124)
/* template */
var __vue_template__ = __webpack_require__(125)
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
Component.options.__file = "resources/assets/js/components/cotizer/code-selector.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74ba080f", Component.options)
  } else {
    hotAPI.reload("data-v-74ba080f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pedido_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pedido_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pedido_vue__);
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
    props: ['list'],
    components: { pedido: __WEBPACK_IMPORTED_MODULE_0__pedido_vue___default.a },
    computed: {
        categories: function categories() {
            return this.$store.getters.getCategories;
        }
    },
    data: function data() {
        return {
            selector: {
                code: '',
                name: '',
                product: null,
                units: 0
            }
        };
    },

    watch: {
        'selector.code': function selectorCode() {
            var vm = this;
            var res = false;
            this.categories.forEach(function (cat) {
                cat.products.forEach(function (prod) {
                    if (vm.selector.code == prod.code) {
                        vm.selector.product = prod;
                        vm.selector.name = prod.name;
                        res = true;
                    }
                });
            });
            if (!res) {
                vm.selector.product = null;
                vm.selector.name = '';
            }
        }
    },
    methods: {
        addSelectorProduct: function addSelectorProduct() {
            var vm = this;
            if (vm.selector.units > 0 && vm.selector.product != null) {
                var prod = this.selector.product;
                if (prod.units == undefined) {
                    Vue.set(prod, 'units', 0);
                }
                prod.units = this.selector.units;
                vm.selector.product = null;
                vm.selector.code = '';
                vm.selector.units = 0;
                vm.selector.name = '';
            }
        }
    }
});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "form",
      {
        staticClass: "form form-inline w-100 d-flex  ",
        class: {
          "flex-column align-items-start justify-items-between": _vm.$mq != "lg"
        },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.addSelectorProduct($event)
          }
        }
      },
      [
        _c("div", { staticClass: " d-flex ml-3 mt-2 " }, [
          _c("label", { attrs: { for: "" } }, [_vm._v("Codigo")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.selector.code,
                expression: "selector.code"
              }
            ],
            staticClass: "form-control ml-2",
            attrs: { type: "text" },
            domProps: { value: _vm.selector.code },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.selector, "code", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: " d-flex ml-3 mt-2 " }, [
          _c("label", { attrs: { for: "" } }, [_vm._v("Producto")]),
          _vm._v(" "),
          _c("label", { staticClass: "text-info ml-4" }, [
            _vm._v(" " + _vm._s(_vm.selector.name) + " ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: " d-flex ml-3 mt-2 " }, [
          _c("label", { staticClass: "mr-2", attrs: { for: "" } }, [
            _vm._v("Unidades")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.selector.units,
                expression: "selector.units"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "number", min: "0" },
            domProps: { value: _vm.selector.units },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.selector, "units", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-md btn-secondary ml-2",
            class: {
              "btn-outline-success":
                _vm.selector.product && _vm.selector.units > 0
            },
            attrs: { type: "submit" }
          },
          [_c("span", { staticClass: "fa fa-plus" })]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "w-100" },
      [
        _vm.list && _vm.list.length > 0
          ? _c("pedido", { attrs: { list: _vm.list } })
          : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-74ba080f", module.exports)
  }
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(127)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(129)
/* template */
var __vue_template__ = __webpack_require__(139)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6e3ddd8a"
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
Component.options.__file = "resources/assets/js/components/cotizer/categories-acordion.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e3ddd8a", Component.options)
  } else {
    hotAPI.reload("data-v-6e3ddd8a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("23e23792", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e3ddd8a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./categories-acordion.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e3ddd8a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./categories-acordion.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.category-image-container[data-v-6e3ddd8a] {\n  margin-right: 15px;\n  height: 100%;\n  min-width: 70px;\n}\n.card-header[data-v-6e3ddd8a] {\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.sampleImage[data-v-6e3ddd8a] {\n  width: 50px;\n}\n.btn-link[data-v-6e3ddd8a] {\n  color: black;\n}\nimg[data-v-6e3ddd8a] {\n  width: 100%;\n}\n@media (max-width: 600px) {\ntd[data-v-6e3ddd8a] {\n    white-space: normal;\n}\n#accordion[data-v-6e3ddd8a] {\n    margin: 0 -3%;\n}\ntable[data-v-6e3ddd8a] {\n    table-layout: fixed;\n    width: 95vw;\n    font-size: 0.66rem;\n    font-weight: bold;\n}\ninput[type=\"number\"][data-v-6e3ddd8a] {\n    max-width: 70px;\n}\n.card-body[data-v-6e3ddd8a], table th[data-v-6e3ddd8a], table td[data-v-6e3ddd8a] {\n    padding: 5px;\n}\n}\n@media (min-width: 600px) {\n.sampleImage[data-v-6e3ddd8a] {\n    width: 150px;\n}\ntable[data-v-6e3ddd8a] {\n    font-size: 1rem;\n    font-weight: normal;\n}\ntd[data-v-6e3ddd8a] {\n    white-space: normal;\n}\n.card-body[data-v-6e3ddd8a], .container[data-v-6e3ddd8a] {\n    padding: 1.25rem;\n}\n}\n.big[data-v-6e3ddd8a] {\n  font-size: 1.7rem;\n  white-space: normal;\n  padding: 0;\n}\n", ""]);

// exports


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_table_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__products_table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Img_modal_vue__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Img_modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Img_modal_vue__);
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
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: { imageModal: __WEBPACK_IMPORTED_MODULE_1__Img_modal_vue___default.a, productsTable: __WEBPACK_IMPORTED_MODULE_0__products_table_vue___default.a },
    data: function data() {
        return {
            selectedCategory: null,
            showModal: true,
            modalProduct: null
        };
    },

    computed: {
        categories: function categories() {
            return this.$store.getters.getCategories;
        },
        user: function user() {
            return this.$store.getters.getUser;
        },
        config: function config() {
            return this.$store.getters.getConfig;
        }
    },
    methods: {
        show: function show(product) {
            this.showModal = true;
            this.modalProduct = product;
            /* this.$refs.modal.$forceUpdate(); */

            var element = this.$refs.modal.$el;
            $(element).modal('show');
        },
        closedModal: function closedModal() {
            var _this = this;

            this.modalProduct = null;
            this.showModal = false;
            setTimeout(function () {
                _this.showModal = true;
            }, 100);
        }
    }
});

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0c9375d8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f226c7f6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./products-table.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f226c7f6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./products-table.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.card-header[data-v-f226c7f6] {\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.sampleImage[data-v-f226c7f6] {\n  width: 50px;\n}\n.btn-link[data-v-f226c7f6] {\n  color: black;\n}\nimg[data-v-f226c7f6] {\n  width: 100%;\n}\n@media (max-width: 600px) {\ntd[data-v-f226c7f6] {\n    white-space: normal;\n}\n#accordion[data-v-f226c7f6] {\n    margin: 0 -3%;\n}\ntable[data-v-f226c7f6] {\n    table-layout: fixed;\n    width: 95vw;\n    font-size: 0.66rem;\n    font-weight: bold;\n}\ninput[type=\"number\"][data-v-f226c7f6] {\n    max-width: 70px;\n}\n.card-body[data-v-f226c7f6], table th[data-v-f226c7f6], table td[data-v-f226c7f6] {\n    padding: 5px;\n}\n}\n@media (min-width: 600px) {\n.sampleImage[data-v-f226c7f6] {\n    width: 150px;\n}\ntable[data-v-f226c7f6] {\n    font-size: 1rem;\n    font-weight: normal;\n}\ntd[data-v-f226c7f6] {\n    white-space: normal;\n}\n.card-body[data-v-f226c7f6], .container[data-v-f226c7f6] {\n    padding: 1.25rem;\n}\n}\n.big[data-v-f226c7f6] {\n  font-size: 1.7rem;\n  white-space: normal;\n  padding: 0;\n}\n", ""]);

// exports


/***/ }),
/* 132 */
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
    props: ['products'],
    computed: {
        user: function user() {
            return this.$store.getters.getUser;
        }
    },
    methods: {
        show: function show(product) {
            this.$emit('show', product);
        }
    }
});

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("table", { staticClass: "table table-striped table-bordered" }, [
    _c("thead", {}, [
      _c("th", [_vm._v("Foto")]),
      _vm._v(" "),
      _vm.user && _vm.user.role_id < 3
        ? _c("th", [_vm._v("Codigo")])
        : _vm._e(),
      _vm._v(" "),
      _c("th", { staticClass: "nametd" }, [_vm._v("Nombre")]),
      _vm._v(" "),
      _c("th", { staticClass: "text-center", attrs: { colspan: "2" } }, [
        _vm._v("Precio")
      ]),
      _vm._v(" "),
      _c("th", {}, [_vm._v("Quiero")]),
      _vm._v(" "),
      _vm.$mq == "lg" ? _c("th", {}, [_vm._v("Subtotal")]) : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "tbody",
      _vm._l(_vm.products, function(product) {
        return _c("tr", { key: product.id }, [
          _c(
            "td",
            {
              attrs: { width: "10%" },
              on: {
                click: function($event) {
                  _vm.show(product)
                }
              }
            },
            [
              product.images && product.images.length > 0
                ? _c("v-lazy-image", {
                    staticClass: "sampleImage",
                    attrs: { src: product.images[0].url, alt: product.name }
                  })
                : _c("v-lazy-image", {
                    attrs: {
                      alt: product.name,
                      src: "/storage/images/app/no-image.png"
                    }
                  })
            ],
            1
          ),
          _vm._v(" "),
          _vm.user && _vm.user.role_id < 3
            ? _c("td", [_vm._v(" " + _vm._s(product.code) + " ")])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "td",
            {
              staticStyle: { cursor: "pointer" },
              on: {
                click: function($event) {
                  _vm.show(product)
                }
              }
            },
            [_vm._v("  " + _vm._s(_vm._f("ucFirst")(product.name)) + " ")]
          ),
          _vm._v(" "),
          _c("td", { staticClass: "text-info text-center" }, [
            product.price > 0
              ? _c("span", [
                  _vm._v(" $" + _vm._s(_vm._f("price")(product.price)) + " ")
                ])
              : _c("span", [_vm._v(" - ")]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            product.pck_units > 1 && product.price > 0
              ? _c("div", [
                  _c("span", [
                    _vm._v(" - de " + _vm._s(product.pck_units) + "  ")
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("span", [_vm._v("Unidades")])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c(
            "td",
            { staticClass: "text-center text-success font-weight-bold" },
            [
              product.pck_units > 1
                ? _c("span", [
                    _vm._v(
                      " $" + _vm._s(_vm._f("price")(product.pck_price)) + " "
                    )
                  ])
                : _c("span", [_vm._v(" - ")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              product.pck_units > 1
                ? _c("div", [
                    _c("span", [
                      _vm._v(" + de " + _vm._s(product.pck_units) + "  ")
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("span", [_vm._v("Unidades")])
                  ])
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: product.units,
                  expression: "product.units"
                }
              ],
              staticClass: "form-control ",
              attrs: { type: "number", min: "0" },
              domProps: { value: product.units },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(product, "units", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.$mq != "lg" && product.units > 0
              ? _c(
                  "div",
                  {
                    staticClass:
                      "text-success d-flex flex-column p-0 m-0 justify-content-center align-items-center"
                  },
                  [
                    product.units < product.pck_units
                      ? _c("span", [
                          _vm._v(
                            "  $" +
                              _vm._s(
                                _vm._f("price")(product.price * product.units)
                              ) +
                              " "
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    product.units >= product.pck_units
                      ? _c("span", [
                          _vm._v(
                            "  $" +
                              _vm._s(
                                _vm._f("price")(
                                  product.pck_price * product.units
                                )
                              ) +
                              " "
                          )
                        ])
                      : _vm._e()
                  ]
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          !product.units && _vm.$mq == "lg"
            ? _c("td", [_vm._v(" 0 ")])
            : (product.units < product.pck_units) & (_vm.$mq == "lg")
              ? _c("td", [
                  _vm._v(
                    "$ " +
                      _vm._s((product.units * product.price).toFixed(2)) +
                      "  "
                  )
                ])
              : _vm.$mq == "lg"
                ? _c("td", [
                    _vm._v(
                      " $" +
                        _vm._s((product.units * product.pck_price).toFixed(2)) +
                        " "
                    )
                  ])
                : _vm._e()
        ])
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f226c7f6", module.exports)
  }
}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(135)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(137)
/* template */
var __vue_template__ = __webpack_require__(138)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-527fb35a"
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
Component.options.__file = "resources/assets/js/components/cotizer/Img-modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-527fb35a", Component.options)
  } else {
    hotAPI.reload("data-v-527fb35a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(136);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("124fa637", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-527fb35a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Img-modal.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-527fb35a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Img-modal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.image-container[data-v-527fb35a] {\n  position: relative;\n  overflow: hidden;\n}\n.close-button[data-v-527fb35a] {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n}\n.controls[data-v-527fb35a] {\n  position: absolute;\n  bottom: 50%;\n  left: 0;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.controls .fa[data-v-527fb35a] {\n    font-size: 2rem;\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),
/* 137 */
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

    props: ['product'],
    data: function data() {
        return {
            file: null,
            i: 0,
            csrf: csrf,
            show: true
        };
    },

    watch: {
        product: function product() {
            this.show = true;
            this.preloadImages();
        }
    },
    methods: {
        preloadImages: function preloadImages() {
            /* console.log('preload'); */
            var images = [];
            this.product.images.forEach(function (image) {
                var img = new Image();
                img.src = image.url;
                images.push(img);
                /*  console.log(img); */
            });
        },
        close: function close() {
            this.i = 0;
            this.$emit('close');
        },
        changeImage: function changeImage(where) {
            if (where == 'next') {
                this.i++;
                if (!this.product.images[this.i]) {
                    this.i = 0;
                }
            } else {
                this.i--;
                if (this.i < 0) {
                    this.i = this.product.images.length - 1;
                }
            }
        }
    }

});

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "modal",
      staticClass: "modal fade",
      attrs: { id: "image-modal", tabindex: "-1", role: "dialog" }
    },
    [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _vm.product
          ? _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v(" " + _vm._s(_vm.product.name) + " ")
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    },
                    on: {
                      click: function($event) {
                        _vm.close()
                      }
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "div",
                  { staticClass: "image-container" },
                  [
                    _c(
                      "transition",
                      {
                        attrs: {
                          "leave-active-class":
                            " animated slideOutRight faster position-absolute"
                        }
                      },
                      [
                        _vm.product.images && _vm.product.images.length > 0
                          ? _c("img", {
                              key: _vm.product.images[_vm.i].id,
                              staticClass: "w-100 ",
                              attrs: {
                                src: _vm.product.images[_vm.i].url,
                                alt: _vm.product.name
                              }
                            })
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.product.images || !_vm.product.images.length > 0
                      ? _c("img", {
                          attrs: {
                            src: "/storage/images/app/no-image.png",
                            alt: _vm.product.name
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.product.images && _vm.product.images.length > 1
                      ? _c("div", { staticClass: "controls" }, [
                          _c("span", {
                            staticClass: "fa fa-chevron-left text-info",
                            on: {
                              click: function($event) {
                                _vm.changeImage("prev")
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", {
                            staticClass: "fa fa-chevron-right text-info",
                            on: {
                              click: function($event) {
                                _vm.changeImage("next")
                              }
                            }
                          })
                        ])
                      : _vm._e()
                  ],
                  1
                )
              ])
            ])
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-527fb35a", module.exports)
  }
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "accordion" } },
    [
      _vm._l(_vm.categories, function(category) {
        return _c("div", { key: category.id, staticClass: "card flex-wrap" }, [
          _c(
            "div",
            { staticClass: "card-header", attrs: { id: category.id } },
            [
              _c("h5", { staticClass: "mb-0 w-100" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn  btn-link w-100 text-left big",
                    attrs: {
                      "data-toggle": "collapse",
                      "data-target": "#cat" + category.id,
                      "aria-expanded": "true",
                      "aria-controls": category.id
                    },
                    on: {
                      click: function($event) {
                        _vm.selectedCategory = category.id
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "d-flex" }, [
                      _c(
                        "div",
                        { staticClass: "category-image-container ml-lg-2" },
                        [
                          category.image
                            ? _c("v-lazy-image", {
                                staticClass: "category-image",
                                attrs: {
                                  src: category.image,
                                  alt: category.name
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "d-flex align-items-center",
                          staticStyle: { width: "65%" }
                        },
                        [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm._f("uc")(category.name)) +
                              "\n                                "
                          )
                        ]
                      )
                    ])
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse collapsed ",
              attrs: {
                id: "cat" + category.id,
                "aria-labelledby": "headingOne",
                "data-parent": "#accordion"
              }
            },
            [
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _vm.selectedCategory == category.id
                    ? _c("products-table", {
                        attrs: { products: category.products },
                        on: { show: _vm.show }
                      })
                    : _vm._e()
                ],
                1
              )
            ]
          )
        ])
      }),
      _vm._v(" "),
      this.showModal
        ? _c("image-modal", {
            ref: "modal",
            attrs: { product: _vm.modalProduct },
            on: { close: _vm.closedModal }
          })
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6e3ddd8a", module.exports)
  }
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(141)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(143)
/* template */
var __vue_template__ = __webpack_require__(144)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7a974e9e"
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
Component.options.__file = "resources/assets/js/components/cotizer/total-bouncer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a974e9e", Component.options)
  } else {
    hotAPI.reload("data-v-7a974e9e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(142);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("27eb1153", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7a974e9e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./total-bouncer.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7a974e9e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./total-bouncer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n#total[data-v-7a974e9e] {\n  position: fixed;\n  /* margin-left:50vw; */\n  bottom: 25px;\n  left: 33%;\n  z-index: 900;\n}\n@media (min-width: 600px) {\n#total[data-v-7a974e9e] {\n    left: 45%;\n}\n}\n", ""]);

// exports


/***/ }),
/* 143 */
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
    props: ['total']
});

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: {
        "enter-active-class": "animated bounceIn",
        "leave-active-class": "animated fadeOutDown"
      }
    },
    [
      _vm.total > 0
        ? _c("div", { attrs: { id: "total" } }, [
            _c("div", { staticClass: "bg-success p-1" }, [
              _c(
                "div",
                { staticClass: " bg-white d-flex justify-content-center p-1" },
                [
                  _vm._v(
                    "\n                TOTAL : $" +
                      _vm._s(_vm._f("price")(_vm.total)) +
                      "\n                "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "bg-success p-1" }, [
              _c(
                "div",
                { staticClass: "bg-white d-flex justify-content-center p-1" },
                [
                  _c("a", { attrs: { href: "#form" } }, [
                    _vm._v(" Terminar pedido ")
                  ])
                ]
              )
            ])
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7a974e9e", module.exports)
  }
}

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(146)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(148)
/* template */
var __vue_template__ = __webpack_require__(149)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-54f6f00b"
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
Component.options.__file = "resources/assets/js/components/cotizer/Cotizer-form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54f6f00b", Component.options)
  } else {
    hotAPI.reload("data-v-54f6f00b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(147);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("132e5b92", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54f6f00b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cotizer-form.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54f6f00b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cotizer-form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.loader[data-v-54f6f00b] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  z-index: 110;\n  background-color: #ddddddaa;\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: start;\n  padding-top: 5%;\n}\ninput[type=\"radio\"][data-v-54f6f00b] {\n  -webkit-appearance: checkbox;\n  /* Chrome, Safari, Opera */\n  -moz-appearance: checkbox;\n  /* Firefox */\n  -ms-appearance: checkbox;\n  /* not currently supported */\n  -ms-transform: scale(2);\n  /* IE */\n  -moz-transform: scale(2);\n  /* FF */\n  -webkit-transform: scale(2);\n  /* Safari and Chrome */\n  -o-transform: scale(2);\n  /* Opera */\n  padding: 10px;\n  margin-right: 15px;\n}\n.radioText[data-v-54f6f00b] {\n  font-size: 1.2rem;\n}\n", ""]);

// exports


/***/ }),
/* 148 */
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
    props: {
        list: { default: [] },
        total: { default: 0 }

    },
    computed: {
        states: function states() {
            return this.$store.getters.getStates;
        },
        configs: function configs() {
            return this.$store.getters.getConfig;
        },
        user: function user() {
            return this.$store.getters.getUser;
        }
    },

    data: function data() {
        return {

            state: null,
            cities: [],
            loading: false,
            formData: {
                name: '',
                seller: '',
                message: '',
                phone: '',
                email: '',
                shipping: true,
                city: null,
                address: '',
                transport: '',
                cp: ''

            }
        };
    },


    methods: {
        minBuy: function minBuy() {
            if (this.configs) {
                if (this.formData.shipping) {
                    return this.configs.minbuy_ship;
                } else {
                    return this.configs.minbuy;
                }
            }
        },
        validateEmail: function validateEmail(email) {

            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            return re.test(String(email).toLowerCase());
        },
        formValid: function formValid() {
            if (this.formData.shipping && !this.formData.city) {
                swal('Por favor selecciones una localidad ', '', 'error');
                return false;
            } else if (!this.formData.name || this.formData.name.trim() == '') {
                swal('El campo "Nombre y Apellido" es obligatorio ', '', 'error');
                return false;
            } else if (!this.validateEmail(this.formData.email)) {
                swal('Hay algo mal con el mail', '', 'error');
                return false;
            } else if (this.formData.email.length < 4) {
                swal('Hay algo mal con el mail', '', 'error');
                return false;
            } else if (this.list.length <= 0) {
                swal('No hay productos seleccionados', '', 'error');
                return false;
            } else if (this.total < this.minBuy()) {
                swal('El minimo de compra es de $' + this.minBuy(), '', 'error');
                return false;
            } else {
                return true;
            }
        },
        compressList: function compressList() {
            var res = [];
            this.list.forEach(function (item) {
                var compresedItem = {
                    id: item.id,
                    units: item.units
                };
                res.push(compresedItem);
            });

            return res;
        },
        send: function send() {
            if (this.formValid()) {

                var data = this.formData;
                if (data.shipping) {
                    data.shipping = 1;
                } else {
                    data.shipping = 0;
                }

                var list = this.compressList();

                data.list = JSON.stringify(list);
                data.total = this.total;

                var vm = this;
                vm.loading = true;

                $.ajax({
                    method: 'post',
                    data: data,
                    url: '/cotizer/send',
                    success: function success() {
                        vm.loading = false;
                        swal('Enviamos tu presupuesto', 'Te estaremos contactando a la brevedad', 'success').then(function () {
                            window.location.replace('/');
                        });
                    }
                });
            }
        }
    }

});

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {}, [
    _vm.loading
      ? _c(
          "div",
          { staticClass: "loader" },
          [
            _c("dot-loader", { attrs: { loading: _vm.loading, size: "200px" } })
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _c("h5", [_vm._v("Envianos tu pedido")]),
    _vm._v(" "),
    _c("p", [
      _vm._v("Nos estaremos comunicando para confirmar tu presupuesto")
    ]),
    _vm._v(" "),
    _c(
      "form",
      { staticClass: "col-12", attrs: { id: "form" } },
      [
        _c("csrf"),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 row form-group-row mb-3" }, [
          _c("div", { staticClass: "col-12 col-lg-4" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.shipping,
                  expression: "formData.shipping"
                }
              ],
              attrs: { type: "radio" },
              domProps: {
                value: false,
                checked: _vm._q(_vm.formData.shipping, false)
              },
              on: {
                change: function($event) {
                  _vm.$set(_vm.formData, "shipping", false)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "text-secondary radioText",
                class: { "text-success": !_vm.formData.shipping },
                on: {
                  click: function($event) {
                    _vm.formData.shipping = false
                  }
                }
              },
              [
                _c("span", { staticClass: "fa fa-building" }),
                _vm._v(" Retiro en el local\n                 ")
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 row form-group-row mb-3" }, [
          _c("div", { staticClass: "col-12 col-lg-4" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.shipping,
                  expression: "formData.shipping"
                }
              ],
              attrs: { type: "radio" },
              domProps: {
                value: true,
                checked: _vm._q(_vm.formData.shipping, true)
              },
              on: {
                change: function($event) {
                  _vm.$set(_vm.formData, "shipping", true)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "text-secondary radioText",
                class: { "text-success": _vm.formData.shipping },
                on: {
                  click: function($event) {
                    _vm.formData.shipping = true
                  }
                }
              },
              [
                _c("span", { staticClass: "fa fa-truck" }),
                _vm._v(" Envio por transporte\n                ")
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 row form-group-row" }, [
          _c("label", { staticClass: "col-4 col-lg-2", attrs: { for: "" } }, [
            _vm._v(
              "\n                   Nombre y Apellido \n                  \n                "
            )
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.formData.name,
                expression: "formData.name"
              }
            ],
            staticClass: "form-control col-8 col-lg-4",
            attrs: { required: "", type: "text" },
            domProps: { value: _vm.formData.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.formData, "name", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm.formData.shipping
          ? _c("div", [
              _c("div", { staticClass: "col-12 row form-group-row" }, [
                _c(
                  "label",
                  { staticClass: "col-4 col-lg-2", attrs: { for: "" } },
                  [_vm._v(" Provincia ")]
                ),
                _vm._v(" "),
                _vm.states.length > 0
                  ? _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.state,
                            expression: "state"
                          }
                        ],
                        staticClass: "form-control col-8 col-lg-4",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.state = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      _vm._l(_vm.states, function(opt) {
                        return _c(
                          "option",
                          { key: opt.id, domProps: { value: opt } },
                          [
                            _vm._v(
                              " \n                            " +
                                _vm._s(opt.name) +
                                "\n                        "
                            )
                          ]
                        )
                      })
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 row form-group-row" }, [
                _c(
                  "label",
                  { staticClass: "col-4 col-lg-2", attrs: { for: "" } },
                  [_vm._v(" Ciudad ")]
                ),
                _vm._v(" "),
                _vm.state
                  ? _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formData.city,
                            expression: "formData.city"
                          }
                        ],
                        staticClass: "form-control col-8 col-lg-4",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.formData,
                              "city",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.state.cities, function(opt) {
                        return _c(
                          "option",
                          { key: opt.id, domProps: { value: opt.id } },
                          [
                            _vm._v(
                              " \n                            " +
                                _vm._s(opt.name) +
                                "\n                        "
                            )
                          ]
                        )
                      })
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 row form-group-row" }, [
                _c(
                  "label",
                  { staticClass: "col-4 col-lg-2", attrs: { for: "" } },
                  [_vm._v(" Direccion ")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.formData.address,
                      expression: "formData.address"
                    }
                  ],
                  staticClass: "form-control col-8 col-lg-4",
                  attrs: { type: "text" },
                  domProps: { value: _vm.formData.address },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.formData, "address", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 row form-group-row" }, [
                _c(
                  "label",
                  { staticClass: "col-4 col-lg-2", attrs: { for: "" } },
                  [_vm._v(" Transporte ")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.formData.transport,
                      expression: "formData.transport"
                    }
                  ],
                  staticClass: "form-control col-8 col-lg-4",
                  attrs: { type: "text" },
                  domProps: { value: _vm.formData.transport },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.formData, "transport", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 row form-group-row" }, [
                _c(
                  "label",
                  { staticClass: "col-4 col-lg-2", attrs: { for: "" } },
                  [_vm._v(" Codigo Postal ")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.formData.cp,
                      expression: "formData.cp"
                    }
                  ],
                  staticClass: "form-control col-8 col-lg-4",
                  attrs: { type: "text" },
                  domProps: { value: _vm.formData.cp },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.formData, "cp", $event.target.value)
                    }
                  }
                })
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 row form-group-row" }, [
          _c("label", { staticClass: "col-4 col-lg-2", attrs: { for: "" } }, [
            _vm._v("Email")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.formData.email,
                expression: "formData.email"
              }
            ],
            staticClass: "form-control col-8 col-lg-4",
            attrs: { required: "", type: "email" },
            domProps: { value: _vm.formData.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.formData, "email", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 row form-group-row" }, [
          _c("label", { staticClass: "col-4 col-lg-2", attrs: { for: "" } }, [
            _vm._v("Telefono")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.formData.phone,
                expression: "formData.phone"
              }
            ],
            staticClass: "form-control col-8 col-lg-4",
            attrs: { type: "text" },
            domProps: { value: _vm.formData.phone },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.formData, "phone", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 row form-group-row" }, [
          _c("label", { staticClass: "col-4 col-lg-2", attrs: { for: "" } }, [
            _vm._v("Mensaje")
          ]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.formData.message,
                expression: "formData.message"
              }
            ],
            staticClass: "form-control col-8 col-lg-4",
            attrs: { name: "msg" },
            domProps: { value: _vm.formData.message },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.formData, "message", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "button btn-lg btn-outline-success offset-2 mt-2",
            on: {
              click: function($event) {
                $event.preventDefault()
                $event.stopPropagation()
                return _vm.send($event)
              }
            }
          },
          [_vm._v("Enviar")]
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-54f6f00b", module.exports)
  }
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "contain-all" },
    [
      !_vm.categories || _vm.categories.length < 1 || !_vm.user || !_vm.config
        ? _c(
            "div",
            { staticClass: "loader" },
            [
              _c("dot-loader", {
                attrs: { loading: _vm.loading, size: "200px" }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.config && _vm.user && _vm.config.maintenance && _vm.user.role_id > 2
        ? _c("div", [_vm._m(0)])
        : _vm._e(),
      _vm._v(" "),
      _vm.categories && _vm.config && !_vm.config.maintenance
        ? _c(
            "div",
            {
              staticClass: "container w-100",
              class: { "bg-white": _vm.user != null && _vm.user.role_id > 2 }
            },
            [
              _c(
                "div",
                { staticClass: "row w-100 d-flex justify-content-center" },
                [
                  _vm.user && _vm.user.role_id < 3
                    ? _c(
                        "div",
                        { staticClass: "col-12 col-lg-12" },
                        [_c("hideOptbutton")],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      class: {
                        "col-12 col-lg-5 text-center": _vm.$mq == "lg",
                        "col-12 col-lg-4 text-center neg-margins":
                          _vm.$mq != "lg"
                      }
                    },
                    [_c("app-banner")],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("input", {
                  staticClass: "form-control search-bar",
                  attrs: {
                    type: "text",
                    placeholder: "¿ QUE ESTAS BUSCANDO ?"
                  },
                  on: {
                    input: function($event) {
                      _vm.searchTerm = $event.target.value
                    },
                    change: function($event) {
                      _vm.selectedPage = 1
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _vm.user && _vm.user.role_id < 3
                ? _c("code-selector", { attrs: { list: _vm.list } })
                : _vm._e(),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _vm.searchTerm.trim().length < 3
                ? _c("categories-acordion")
                : _vm._e(),
              _vm._v(" "),
              _vm.searchTerm.trim().length > 2
                ? _c(
                    "div",
                    { staticClass: "row" },
                    [
                      _c("paginator", {
                        staticClass: "col-12",
                        attrs: {
                          selectedPage: _vm.selectedPage,
                          products: _vm.filteredProducts,
                          productsPerPage: _vm.productsPerPage
                        },
                        on: {
                          selectPage: function($event) {
                            _vm.selectedPage = $event
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("products-table", {
                        staticClass: "col-12",
                        attrs: { products: _vm.paginatedProducts }
                      }),
                      _vm._v(" "),
                      _c("paginator", {
                        staticClass: "col-12",
                        attrs: {
                          selectedPage: _vm.selectedPage,
                          products: _vm.filteredProducts,
                          productsPerPage: _vm.productsPerPage
                        },
                        on: {
                          selectPage: function($event) {
                            _vm.selectedPage = $event
                          }
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.total
                ? _c("total-bouncer", { attrs: { total: _vm.total } })
                : _vm._e(),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("cotizer-form", {
                    attrs: { list: _vm.list, total: _vm.total }
                  })
                ],
                1
              ),
              _vm._v(" "),
              !_vm.user || _vm.user.role_id > 2
                ? _c(
                    "div",
                    [
                      _vm.list && _vm.list.length > 0
                        ? _c("pedido", { attrs: { list: _vm.list } })
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.user || _vm.user.role_id > 2 ? _c("cotizer-tutorial") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-column text-center w-100" }, [
      _c("h1", [
        _vm._v(
          "\n                Estamos Actualizando nuestros precios\n            "
        )
      ]),
      _vm._v(" "),
      _c("h2", [
        _vm._v("\n                Vuelve a intentar mas adelante\n            ")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-731ed9d6", module.exports)
  }
}

/***/ })
]));