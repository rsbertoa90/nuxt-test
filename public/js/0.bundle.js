webpackJsonp([0],Array(108).concat([
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(151)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(153)
/* template */
var __vue_template__ = __webpack_require__(184)
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
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(119)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(121)
/* template */
var __vue_template__ = __webpack_require__(122)
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
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("3d1b8ce6", content, false, {});
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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.pagination[data-v-77e27c8a] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n", ""]);

// exports


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
//
//
//
//
//
//
//
//
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
/* 122 */
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
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(174)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(176)
/* template */
var __vue_template__ = __webpack_require__(177)
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
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("8a658236", content, false, {});
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
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.contain-all[data-v-731ed9d6] {\n  width: 100vw;\n  padding: 5px;\n  overflow: hidden;\n}\n.lglogo[data-v-731ed9d6] {\n  width: 200px;\n  height: 100px;\n}\n.smlogo[data-v-731ed9d6] {\n  width: 100px;\n  height: 50px;\n  margin-bottom: 15px;\n  margin-top: 10px;\n}\nimg[data-v-731ed9d6] {\n  width: 100%;\n}\n.loader[data-v-731ed9d6] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  z-index: 110;\n  background-color: #ddddddaa;\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: start;\n  padding-top: 5%;\n}\n.search-bar[data-v-731ed9d6] {\n  border: 1px solid #ff0aaf;\n  padding: 3px;\n  margin-top: 20px;\n  text-align: center;\n}\n.search-bar[data-v-731ed9d6]::-webkit-input-placeholder {\n    color: #ff0aaf;\n    text-align: center;\n}\n.search-bar[data-v-731ed9d6]:-ms-input-placeholder {\n    color: #ff0aaf;\n    text-align: center;\n}\n.search-bar[data-v-731ed9d6]::-ms-input-placeholder {\n    color: #ff0aaf;\n    text-align: center;\n}\n.search-bar[data-v-731ed9d6]::placeholder {\n    color: #ff0aaf;\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__banner_vue__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__banner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__banner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tutorial_vue__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tutorial_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tutorial_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_admin_paginator_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_admin_paginator_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__admin_admin_paginator_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hide_opt_button_vue__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hide_opt_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__hide_opt_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__code_selector_vue__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__code_selector_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__code_selector_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categories_acordion_vue__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categories_acordion_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__categories_acordion_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_table_vue__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__products_table_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        paginator: __WEBPACK_IMPORTED_MODULE_2__admin_admin_paginator_vue___default.a,
        productsTable: __WEBPACK_IMPORTED_MODULE_6__products_table_vue___default.a,
        categoriesAcordion: __WEBPACK_IMPORTED_MODULE_5__categories_acordion_vue___default.a,
        codeSelector: __WEBPACK_IMPORTED_MODULE_4__code_selector_vue___default.a,
        appBanner: __WEBPACK_IMPORTED_MODULE_0__banner_vue___default.a,
        cotizerTutorial: __WEBPACK_IMPORTED_MODULE_1__tutorial_vue___default.a,
        hideOptbutton: __WEBPACK_IMPORTED_MODULE_3__hide_opt_button_vue___default.a
    },
    data: function data() {
        return {
            selectedPage: 1,
            productsPerPage: 30,
            searchTerm: '',
            loading: true

        };
    },

    watch: {
        searchTerm: function searchTerm() {
            this.selectedPage = 1;
        }
    },
    computed: {
        list: function list() {
            return this.$store.getters.getList;
        },
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
            return this.$store.getters.getTotal;
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
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(155)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(157)
/* template */
var __vue_template__ = __webpack_require__(158)
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
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(156);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("57fc4c6e", content, false, {});
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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.colorRed[data-v-76fa018c]{\n    color:red;\n     -webkit-transition: ease 1s;\n     transition: ease 1s;\n}\n.colorBlue[data-v-76fa018c]{\n    color:blue;\n     -webkit-transition: ease 1s;\n     transition: ease 1s;\n}\n.todaright[data-v-76fa018c]{\n          display: -webkit-inline-box;\n          display: -ms-inline-flexbox;\n          display: inline-flex;\n        -webkit-transform: rotate(15deg);\n                transform: rotate(15deg);\n       \n        -webkit-transition: ease 1s;\n       \n        transition: ease 1s;\n}\n.todaleft[data-v-76fa018c]{\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n         -webkit-transform: rotate(-15deg);\n                 transform: rotate(-15deg);\n        \n         -webkit-transition: 1s ease;\n        \n         transition: 1s ease;\n}\n.dared[data-v-76fa018c]{\n         /* transform: rotate(-15deg); */\n         color:red;\n         -webkit-transition: 1s ease;\n         transition: 1s ease;\n}\n.dablue[data-v-76fa018c]{\n         color:blue;\n        -webkit-transition: ease 1s;\n        transition: ease 1s;\n}\n.neg-margins[data-v-76fa018c]{\n    margin-right: -7%;\n    margin-left: -3%;\n}\nh2[data-v-76fa018c]{\n    white-space: nowrap;\n}\n\n", ""]);

// exports


/***/ }),
/* 157 */
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
/* 158 */
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
        class: { dared: !_vm.pos, dablue: _vm.pos }
      },
      [
        _c(
          "span",
          {
            class: {
              "todaright colorRed": _vm.pos,
              "todaleft colorBlue": !_vm.pos
            }
          },
          [_c("fa-icon", { attrs: { icon: "arrow-down" } })],
          1
        ),
        _vm._v("\n            HACE TU PEDIDO\n        "),
        _c(
          "span",
          {
            class: {
              "todaright colorBlue": !_vm.pos,
              "todaleft colorRed": _vm.pos
            }
          },
          [_c("fa-icon", { attrs: { icon: "arrow-down" } })],
          1
        )
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
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(160)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(162)
/* template */
var __vue_template__ = __webpack_require__(163)
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
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("0299ef40", content, false, {});
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
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.redcircle[data-v-48ec1a84] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100px;\n  height: 100px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: rgba(170, 16, 16, 0.479);\n}\n.animation[data-v-48ec1a84] {\n  position: absolute;\n  top: 70px;\n  left: 20px;\n  color: #131212;\n  font-size: 3rem;\n}\n.image-container[data-v-48ec1a84] {\n  width: 50%;\n  position: relative;\n}\n.overlay[data-v-48ec1a84] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #cccc;\n}\n.speech-bubble[data-v-48ec1a84] {\n  position: fixed;\n  top: 50px;\n  right: 50px;\n  background: #57b2bb;\n  border-radius: .4em;\n  width: 50%;\n  padding: 20px;\n  text-align: center;\n  color: #fff;\n}\n.speech-bubble[data-v-48ec1a84]:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 37px solid transparent;\n  border-right-color: #57b2bb;\n  border-left: 0;\n  border-bottom: 0;\n  margin-top: -18.5px;\n  margin-left: -37px;\n}\n@media (min-width: 900px) {\n.overlay[data-v-48ec1a84] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.image-container[data-v-48ec1a84] {\n    margin-left: 22%;\n}\n.speech-bubble[data-v-48ec1a84] {\n    top: 150px;\n}\n}\n", ""]);

// exports


/***/ }),
/* 162 */
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
/* 163 */
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
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(165)
/* template */
var __vue_template__ = __webpack_require__(166)
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
/* 165 */
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
/* 166 */
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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(168)
/* template */
var __vue_template__ = __webpack_require__(169)
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
/* 168 */
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


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['list'],

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
/* 169 */
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
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(171)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(173)
/* template */
var __vue_template__ = __webpack_require__(183)
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
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(172);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("23e23792", content, false, {});
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
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.category-image-container[data-v-6e3ddd8a] {\n  margin-right: 15px;\n  height: 100%;\n  min-width: 70px;\n}\n.card-header[data-v-6e3ddd8a] {\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.sampleImage[data-v-6e3ddd8a] {\n  width: 50px;\n}\n.btn-link[data-v-6e3ddd8a] {\n  color: black;\n}\nimg[data-v-6e3ddd8a] {\n  width: 100%;\n}\n@media (max-width: 600px) {\ntd[data-v-6e3ddd8a] {\n    white-space: normal;\n}\n#accordion[data-v-6e3ddd8a] {\n    margin: 0 -3%;\n}\ntable[data-v-6e3ddd8a] {\n    table-layout: fixed;\n    width: 95vw;\n    font-size: 0.66rem;\n    font-weight: bold;\n}\ninput[type=\"number\"][data-v-6e3ddd8a] {\n    max-width: 70px;\n}\n.card-body[data-v-6e3ddd8a], table th[data-v-6e3ddd8a], table td[data-v-6e3ddd8a] {\n    padding: 5px;\n}\n}\n@media (min-width: 600px) {\n.sampleImage[data-v-6e3ddd8a] {\n    width: 150px;\n}\ntable[data-v-6e3ddd8a] {\n    font-size: 1rem;\n    font-weight: normal;\n}\ntd[data-v-6e3ddd8a] {\n    white-space: normal;\n}\n.card-body[data-v-6e3ddd8a], .container[data-v-6e3ddd8a] {\n    padding: 1.25rem;\n}\n}\n.big[data-v-6e3ddd8a] {\n  font-size: 1.7rem;\n  white-space: normal;\n  padding: 0;\n}\n", ""]);

// exports


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_table_vue__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__products_table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Img_modal_vue__ = __webpack_require__(178);
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
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("0c9375d8", content, false, {});
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
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.card-header[data-v-f226c7f6] {\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.sampleImage[data-v-f226c7f6] {\n  width: 50px;\n}\n.btn-link[data-v-f226c7f6] {\n  color: black;\n}\nimg[data-v-f226c7f6] {\n  width: 100%;\n}\n@media (max-width: 600px) {\ntd[data-v-f226c7f6] {\n    white-space: normal;\n}\n#accordion[data-v-f226c7f6] {\n    margin: 0 -3%;\n}\ntable[data-v-f226c7f6] {\n    table-layout: fixed;\n    width: 95vw;\n    font-size: 0.66rem;\n    font-weight: bold;\n}\ninput[type=\"number\"][data-v-f226c7f6] {\n    max-width: 70px;\n}\n.card-body[data-v-f226c7f6], table th[data-v-f226c7f6], table td[data-v-f226c7f6] {\n    padding: 5px;\n}\n}\n@media (min-width: 600px) {\n.sampleImage[data-v-f226c7f6] {\n    width: 150px;\n}\ntable[data-v-f226c7f6] {\n    font-size: 1rem;\n    font-weight: normal;\n}\ntd[data-v-f226c7f6] {\n    white-space: normal;\n}\n.card-body[data-v-f226c7f6], .container[data-v-f226c7f6] {\n    padding: 1.25rem;\n}\n}\n.big[data-v-f226c7f6] {\n  font-size: 1.7rem;\n  white-space: normal;\n  padding: 0;\n}\n", ""]);

// exports


/***/ }),
/* 176 */
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
/* 177 */
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
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(179)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(181)
/* template */
var __vue_template__ = __webpack_require__(182)
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
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(180);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("124fa637", content, false, {});
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
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.image-container[data-v-527fb35a] {\n  position: relative;\n  overflow: hidden;\n}\n.close-button[data-v-527fb35a] {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n}\n.controls[data-v-527fb35a] {\n  position: absolute;\n  bottom: 50%;\n  left: 0;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.controls .fa[data-v-527fb35a] {\n    font-size: 2rem;\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),
/* 181 */
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
/* 182 */
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
/* 183 */
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
/* 184 */
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