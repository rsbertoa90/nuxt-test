webpackJsonp([18],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(204)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(206)
/* template */
var __vue_template__ = __webpack_require__(223)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-10ddd0a8"
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
Component.options.__file = "resources/assets/js/components/admin/Admin.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10ddd0a8", Component.options)
  } else {
    hotAPI.reload("data-v-10ddd0a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 118:
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

/***/ 119:
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

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.pagination[data-v-77e27c8a] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n", ""]);

// exports


/***/ }),

/***/ 121:
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

/***/ 122:
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

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(205);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("123827d3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-10ddd0a8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Admin.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-10ddd0a8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Admin.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.loader[data-v-10ddd0a8] {\n    position : fixed;\n    height: 100%;\n    width: 100%;\n    z-index: 110;\n    background-color: #ddddddaa;\n    left: 0;\n    top: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: start;\n    padding-top: 5%;\n}\ninput[type=\"checkbox\"][data-v-10ddd0a8]{\n    width: 25px;\n    margin:  10px;\n    height: 20px;\n}\n.smallField[data-v-10ddd0a8]{width: 80px;\n}\ntd[data-v-10ddd0a8] {min-width: 120px;\n}\n.btn-link[data-v-10ddd0a8] {color : black;\n}\ntd img[data-v-10ddd0a8] {\n        width: 10vw;\n}\n@media(max-width: 600px){\ntable[data-v-10ddd0a8],.container[data-v-10ddd0a8],.card[data-v-10ddd0a8],.card-body[data-v-10ddd0a8] {font-size: 0.66rem ; padding : 0\n}\nth[data-v-10ddd0a8],td[data-v-10ddd0a8], input[data-v-10ddd0a8]{\n           white-space:nowrap;\n           width: 13vw;\n           padding: 2px;\n}\n.nametd[data-v-10ddd0a8] {width: 25vw;\n}\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_Create_vue__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_Create_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__admin_Create_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_Change_prices_vue__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_Change_prices_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__admin_Change_prices_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_Product_row_vue__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_Product_row_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__admin_Product_row_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_paginator_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_paginator_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__admin_paginator_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* import adminReport from './Report.vue'; */


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        paginator: __WEBPACK_IMPORTED_MODULE_3__admin_paginator_vue___default.a,
        changePrices: __WEBPACK_IMPORTED_MODULE_1__admin_Change_prices_vue___default.a,

        adminCreate: __WEBPACK_IMPORTED_MODULE_0__admin_Create_vue___default.a,
        productRow: __WEBPACK_IMPORTED_MODULE_2__admin_Product_row_vue___default.a
    },
    data: function data() {
        return {
            loading: true,
            searchMode: false,
            searchTerm: '',
            selectedPage: 1,
            productsPerPage: 30,
            selector: { id: 'all', checked: false },
            variation: 0,
            products: [],

            list: [],
            supliers: [],

            showModal: false,
            orderBy: 'suplier.name'
        };
    },

    computed: {
        categories: function categories() {
            return this.$store.getters.getCategories;
        },
        selectedProducts: function selectedProducts() {
            var list = [];
            this.products.forEach(function (prod) {
                if (prod.selected) {
                    list.push(prod);
                }
            });
            return list;
        },
        filterProducts: function filterProducts() {
            var _this = this;

            if (this.searchMode) {
                return this.searchFilter();
            } else {
                if (this.products.length > 0) {
                    var prop = null;
                    if (this.orderBy == 'category.name') {
                        prop = 'category';
                    } else if (this.orderBy == 'suplier.name') {
                        prop = 'suplier';
                    }

                    if (prop && this.selector.id != 'all') {
                        var filtered = this.products.filter(function (prod) {
                            return prod[prop].id == _this.selector.id;
                        });
                        return _.orderBy(filtered, this.orderBy);
                    } else {
                        return _.orderBy(this.products, this.orderBy);
                    }
                }
                return [];
            }
        },
        filteredProducts: function filteredProducts() {
            var prods = this.filterProducts;

            return this.paginate(prods, this.selectedPage);
        }
    },
    watch: {
        orderBy: function orderBy() {
            this.products = _.sortBy(this.products, this.orderBy);
            this.selector.id = 'all';
            this.resetFilters();
        },
        'selector.id': function selectorId() {
            this.resetFilters();
        }
    },
    methods: {
        resetFilters: function resetFilters() {
            this.resetCheckboxes();
            this.selectedPage = 1;
            this.searchMode = false;
            this.searchTerm = '';
        },
        search: function search() {
            var _this2 = this;

            this.loading = true;
            var term = this.searchTerm;
            this.selector.id = 'all';
            this.selectedPage = 1;
            setTimeout(function () {
                _this2.searchTerm = term;
                _this2.searchMode = true;
                _this2.loading = false;
            }, 100);
            this.searchMode = true;
        },
        searchComparision: function searchComparision(term, prod) {
            var prodName = prod.name.toLowerCase().trim();
            term = term.toLowerCase().trim();
            var categoryName = prod.category.name.toLowerCase().trim();
            var suplierName = prod.suplier.name.toLowerCase().trim();
            var code = prod.code.toLowerCase().trim();

            if (prodName.indexOf(term) > -1 || categoryName.indexOf(term) > -1 || suplierName.indexOf(term) > -1 || code.indexOf(term) > -1) {
                return true;
            } else {
                return false;
            }
        },
        searchFilter: function searchFilter() {
            var _this3 = this;

            this.loading = true;
            var terms = this.searchTerm.split(' ');
            var res = [];
            this.products.forEach(function (prod) {
                var include = true;
                terms.forEach(function (term) {
                    if (include && !_this3.searchComparision(term, prod)) {
                        include = false;
                    }
                });
                if (include) {
                    res.push(prod);
                }
            });
            this.loading = false;
            return res;
        },
        paginate: function paginate(array, page) {
            if (array && array.length > 0) {
                page--;
                return array.slice(page * this.productsPerPage, (page + 1) * this.productsPerPage);
            }
        },
        resetCheckboxes: function resetCheckboxes() {
            this.selector.checked = false;
            this.products.forEach(function (prod) {
                if (prod.selected == undefined) {
                    Vue.set(prod, 'selected', false);
                } else {

                    prod.selected = false;
                }
            });
        },
        checkSelect: function checkSelect() {
            var _this4 = this;

            if (this.selector.id == 'all') {
                this.products.forEach(function (prod) {
                    if (prod.selected == undefined) {
                        Vue.set(prod, 'selected', true);
                    }
                    prod.selected = _this4.selector.checked;
                });
            } else {
                if (this.orderBy == 'category.name') {
                    this.products.forEach(function (prod) {
                        if (prod.category.id == _this4.selector.id) {
                            if (prod.selected == undefined) {
                                Vue.set(prod, 'selected', true);
                            }
                            prod.selected = _this4.selector.checked;
                        }
                    });
                } else if (this.orderBy == 'suplier.name') {
                    this.products.forEach(function (prod) {
                        if (prod.suplier.id == _this4.selector.id) {
                            if (prod.selected == undefined) {
                                Vue.set(prod, 'selected', true);
                            }
                            prod.selected = _this4.selector.checked;
                        }
                    });
                }
            }
        },
        refresh: function refresh() {
            var vm = this;
            this.$store.dispatch('fetchCategories');

            $.ajax({
                url: 'api/supliers',
                success: function success(response) {
                    vm.supliers = response;
                    vm.supliers = _.sortBy(vm.supliers, 'name');
                }
            });

            $.ajax({
                url: 'api/products',
                success: function success(response) {
                    vm.products = response;
                    vm.products = _.sortBy(vm.products, vm.orderBy);
                    vm.loading = false;
                }
            });
        },
        saveChange: function saveChange(product, field) {
            var data = {
                product: product.id,
                field: field,
                value: product[field]
            };

            $.ajax({
                method: 'put',
                data: data,
                url: '/admin/product/update'
            });
        },
        selectAllProducts: function selectAllProducts() {
            this.products.forEach(function (prod) {
                if (prod.selected == undefined) {
                    Vue.set(prod, 'selected', true);
                } else {
                    prod.selected = true;
                }
            });
        }
    },
    created: function created() {
        this.refresh();
    },
    mounted: function mounted() {
        var _this5 = this;

        this.$http.get('/getuser').then(function (response) {
            _this5.user = response.data;
        });
    }
});

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(208)
/* template */
var __vue_template__ = __webpack_require__(209)
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
Component.options.__file = "resources/assets/js/components/admin/admin/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0343cef3", Component.options)
  } else {
    hotAPI.reload("data-v-0343cef3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 208:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['categories', 'supliers'],
    data: function data() {
        return {
            showForm: false,
            editProvider: false,
            editCategory: false,
            newCategory: null,
            newSuplier: null,
            formData: {

                price: null,
                pck_price: null,
                pck_units: null,
                category_id: null,
                suplier_id: null,
                name: null,
                code: null
            }
        };
    },

    methods: {
        valid: function valid() {
            var vm = this;
            if (vm.formData.category_id == 'new') {

                if (!vm.newCategory) {
                    swal('error', 'No ingreso un nombre para la nueva categoria', 'error');
                    return false;
                }
            }
            if (vm.formData.suplier_id == 'new') {

                if (!vm.newSuplier) {
                    swal('error', 'No ingreso un nombre para el nuevo proveedor', 'error');
                    return false;
                }
            }
            var duplicated = null;
            vm.categories.forEach(function (el) {
                var e = el.products.find(function (p) {
                    return p.code == vm.formData.code;
                });
                if (e != null) {
                    duplicated = e;
                }
            });

            if (duplicated != null) {
                swal('error', 'ya existe un producto con el codigo' + vm.formData.code, 'error');
                return false;
            } else {
                return true;
            }
        },
        resetForm: function resetForm() {
            this.formData = {

                price: null,
                pck_price: null,
                pck_units: null,
                category_id: null,
                name: null,
                code: null
            };
        },
        saveProduct: function saveProduct() {

            var vm = this;
            vm.$http.post('/admin/product/', vm.formData).then(function (response) {
                vm.$emit('productSaved', response.data);

                swal('Producto guardado', '', 'success');
                vm.resetForm();
                vm.$emit('productSaved');
                vm.showForm = false;
            });
        },
        saveCategory: function saveCategory(callback) {

            var vm = this;

            var duplicated = vm.categories.find(function (el) {
                return el.name.toLowerCase() == vm.newCategory.toLowerCase();
            });

            if (duplicated != null) {
                swal('Error', 'Ya existe la categoria ' + vm.newCategory, 'error');
            } else {
                vm.$http.post('/admin/category/', { name: this.newCategory, _token: csrf }).then(function (response) {
                    var category = response.data;
                    vm.formData.category_id = category.id;
                    callback();
                });
            }
        },
        saveSuplier: function saveSuplier(callback) {

            var vm = this;
            var duplicated = vm.supliers.find(function (el) {
                return el.name.toLowerCase() == vm.newSuplier.toLowerCase();
            });

            if (duplicated != null) {
                swal('Error', 'Ya existe el proveedor ' + vm.newSuplier, 'error');
            } else {
                vm.$http.post('/admin/suplier/', { name: this.newSuplier }).then(function (response) {
                    var suplier = response.data;
                    vm.formData.suplier_id = suplier.id;
                    vm.saveProduct();
                });
            }
        },
        save: function save() {
            var vm = this;

            if (this.valid()) {
                if (this.formData.category_id == 'new') {
                    // Si categoria y proveedor son nuevos.
                    if (this.formData.suplier_id == 'new') {
                        vm.saveCategory(vm.saveSuplier);
                    }
                    // si solo categoria es nuevo
                    else {
                            vm.saveCategory(vm.saveProduct);
                        }
                }
                // si solo proveedor es nuevo
                else if (this.formData.suplier_id == 'new') {
                        vm.saveSuplier();
                    }
                    // si ninguno es nuevo
                    else {
                            vm.saveProduct();
                        }
            }
        }
    }

});

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "button",
      {
        staticClass: "btn btn-lg btn-info",
        on: {
          click: function($event) {
            _vm.showForm = !_vm.showForm
          }
        }
      },
      [_vm._v("Nuevo Producto")]
    ),
    _vm._v(" "),
    _vm.showForm
      ? _c(
          "form",
          {
            ref: "form",
            staticClass: "form form-inline row ml-1 d-flex align-items-end",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.save($event)
              }
            }
          },
          [
            _c("div", { staticClass: "col-2 row" }, [
              _c("label", { staticClass: "col-12", attrs: { for: "" } }, [
                _vm._v("Codigo")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.trim",
                    value: _vm.formData.code,
                    expression: "formData.code",
                    modifiers: { trim: true }
                  }
                ],
                staticClass: "col-12",
                attrs: { required: "", type: "text" },
                domProps: { value: _vm.formData.code },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.formData, "code", $event.target.value.trim())
                  },
                  blur: function($event) {
                    _vm.$forceUpdate()
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-2 row" }, [
              _c("label", { staticClass: "col-12" }, [_vm._v("Proveedor")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.formData.suplier_id,
                      expression: "formData.suplier_id",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "col-12 form-control",
                  attrs: { required: "" },
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
                        "suplier_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _vm._l(_vm.supliers, function(suplier) {
                    return _c(
                      "option",
                      { key: suplier.id, domProps: { value: suplier.id } },
                      [
                        _vm._v(
                          "\n                      " +
                            _vm._s(suplier.name) +
                            "\n                   "
                        )
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "option",
                    { staticClass: "text-success", attrs: { value: "new" } },
                    [_vm._v("Nuevo")]
                  )
                ],
                2
              ),
              _vm._v(" "),
              _vm.formData.suplier_id == "new"
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.trim",
                        value: _vm.newSuplier,
                        expression: "newSuplier",
                        modifiers: { trim: true }
                      }
                    ],
                    attrs: { placeholder: "Nuevo proveedor", type: "text" },
                    domProps: { value: _vm.newSuplier },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.newSuplier = $event.target.value.trim()
                      },
                      blur: function($event) {
                        _vm.$forceUpdate()
                      }
                    }
                  })
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-2 row" }, [
              _c("label", { staticClass: "col-12", attrs: { for: "" } }, [
                _vm._v("Categoria")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.formData.category_id,
                      expression: "formData.category_id",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "col-12 form-control",
                  attrs: { required: "", id: "" },
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
                        "category_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _vm._l(_vm.categories, function(category) {
                    return _c(
                      "option",
                      { key: category.id, domProps: { value: category.id } },
                      [
                        _vm._v(
                          "\n                      " +
                            _vm._s(category.name) +
                            "\n                   "
                        )
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "option",
                    { staticClass: "text-success", attrs: { value: "new" } },
                    [_vm._v("Nueva")]
                  )
                ],
                2
              ),
              _vm._v(" "),
              _vm.formData.category_id == "new"
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.trim",
                        value: _vm.newCategory,
                        expression: "newCategory",
                        modifiers: { trim: true }
                      }
                    ],
                    attrs: { placeholder: "Nueva Categoria", type: "text" },
                    domProps: { value: _vm.newCategory },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.newCategory = $event.target.value.trim()
                      },
                      blur: function($event) {
                        _vm.$forceUpdate()
                      }
                    }
                  })
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-2 row" }, [
              _c("label", { staticClass: "col-12", attrs: { for: "" } }, [
                _vm._v("Producto")
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.trim",
                    value: _vm.formData.name,
                    expression: "formData.name",
                    modifiers: { trim: true }
                  }
                ],
                staticClass: "col-12",
                attrs: { rows: "2", required: "", type: "text" },
                domProps: { value: _vm.formData.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.formData, "name", $event.target.value.trim())
                  },
                  blur: function($event) {
                    _vm.$forceUpdate()
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-2 row" }, [
              _c("label", { staticClass: "col-12", attrs: { for: "" } }, [
                _vm._v("Precio")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.trim",
                    value: _vm.formData.price,
                    expression: "formData.price",
                    modifiers: { trim: true }
                  }
                ],
                staticClass: "col-12",
                attrs: { min: "0", step: ".01", required: "", type: "number" },
                domProps: { value: _vm.formData.price },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.formData, "price", $event.target.value.trim())
                  },
                  blur: function($event) {
                    _vm.$forceUpdate()
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-2 row" }, [
              _c("label", { staticClass: "col-12", attrs: { for: "" } }, [
                _vm._v("Unidades x bulto")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.trim",
                    value: _vm.formData.pck_units,
                    expression: "formData.pck_units",
                    modifiers: { trim: true }
                  }
                ],
                staticClass: "col-12",
                attrs: { min: "0", required: "", type: "number", step: "1" },
                domProps: { value: _vm.formData.pck_units },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.formData,
                      "pck_units",
                      $event.target.value.trim()
                    )
                  },
                  blur: function($event) {
                    _vm.$forceUpdate()
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-2 row" }, [
              _c("label", { staticClass: "col-12", attrs: { for: "" } }, [
                _vm._v("Precio x mayor")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.trim",
                    value: _vm.formData.pck_price,
                    expression: "formData.pck_price",
                    modifiers: { trim: true }
                  }
                ],
                staticClass: "col-12",
                attrs: { step: ".01", min: "0", required: "", type: "number" },
                domProps: { value: _vm.formData.pck_price },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.formData,
                      "pck_price",
                      $event.target.value.trim()
                    )
                  },
                  blur: function($event) {
                    _vm.$forceUpdate()
                  }
                }
              })
            ]),
            _vm._v(" "),
            _vm._m(0)
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "offset-11" }, [
      _c(
        "button",
        {
          staticClass:
            "btn btn-outline-success align-self-end justify-self-end",
          attrs: { type: "submit" }
        },
        [_vm._v(" GUARDAR ")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0343cef3", module.exports)
  }
}

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(211)
/* template */
var __vue_template__ = __webpack_require__(212)
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
Component.options.__file = "resources/assets/js/components/admin/admin/Change-prices.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08994de0", Component.options)
  } else {
    hotAPI.reload("data-v-08994de0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 211:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['selectedProducts'],
    data: function data() {
        return {
            variation: 0
        };
    },

    methods: {
        saveChange: function saveChange(product, field) {

            var vm = this;
            var data = {
                product: product.id,
                field: field,
                value: product[field]
            };

            this.$http.put('/admin/product/update', data).then(function (res) {
                vm.$emit('refresh');
            });
        },
        applyVariation: function applyVariation() {
            var vm = this;
            var variation = 1 + this.variation / 100;
            this.selectedProducts.forEach(function (prod) {
                prod.price = prod.price * variation;
                prod.pck_price = prod.pck_price * variation;

                vm.saveChange(prod, 'price');
                vm.saveChange(prod, 'pck_price');
            });
            vm.variation = 0;
            vm.$emit('resetCheckboxes');
        }
    }
});

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "col-4 d-flex flex-column justify-content-center align-items-center"
    },
    [
      _c("h4", [_vm._v("Cambiar precios masivo")]),
      _vm._v(" "),
      _c("h5", [
        _c("span", { staticClass: "text-info" }, [
          _vm._v(_vm._s(_vm.selectedProducts.length))
        ]),
        _vm._v("  Productos seleccionados \n    ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex justify-content-center" }, [
        _c(
          "button",
          {
            staticClass: "mr-2",
            on: {
              click: function($event) {
                _vm.variation -= 1
              }
            }
          },
          [_vm._v("-")]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.variation,
              expression: "variation"
            }
          ],
          staticStyle: { width: "45px" },
          attrs: { type: "number" },
          domProps: { value: _vm.variation },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.variation = $event.target.value
            }
          }
        }),
        _vm._v(" %\n        "),
        _c(
          "button",
          {
            staticClass: "ml-2",
            on: {
              click: function($event) {
                _vm.variation += 1
              }
            }
          },
          [_vm._v("+")]
        )
      ]),
      _vm._v(" "),
      _vm.variation != 0 && _vm.selectedProducts.length > 0
        ? _c(
            "button",
            {
              staticClass: "btn btn-md btn-outline-success mt-1",
              on: { click: _vm.applyVariation }
            },
            [_vm._v("Aplicar")]
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
    require("vue-hot-reload-api")      .rerender("data-v-08994de0", module.exports)
  }
}

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(214)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(216)
/* template */
var __vue_template__ = __webpack_require__(222)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-867c2ad6"
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
Component.options.__file = "resources/assets/js/components/admin/admin/Product-row.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-867c2ad6", Component.options)
  } else {
    hotAPI.reload("data-v-867c2ad6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(215);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("566de3b6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-867c2ad6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Product-row.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-867c2ad6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Product-row.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\ninput[type=\"checkbox\"][data-v-867c2ad6] {\n  width: 25px;\n  margin: 10px;\n  height: 20px;\n}\n.smallField[data-v-867c2ad6] {\n  width: 80px;\n}\ntd[data-v-867c2ad6] {\n  min-width: 120px;\n}\n.btn-link[data-v-867c2ad6] {\n  color: black;\n}\ntd img[data-v-867c2ad6] {\n  width: 10vw;\n}\n@media (max-width: 600px) {\ntable[data-v-867c2ad6], .container[data-v-867c2ad6], .card[data-v-867c2ad6], .card-body[data-v-867c2ad6] {\n    font-size: 0.66rem;\n    padding: 0;\n}\nth[data-v-867c2ad6], td[data-v-867c2ad6], input[data-v-867c2ad6] {\n    white-space: nowrap;\n    width: 13vw;\n    padding: 2px;\n}\n.nametd[data-v-867c2ad6] {\n    width: 25vw;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Img_modal_vue__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Img_modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Img_modal_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { imageModal: __WEBPACK_IMPORTED_MODULE_0__Img_modal_vue___default.a },
    props: ['product', 'supliers', 'categories'],
    data: function data() {
        return {
            showModal: false
        };
    },

    methods: {
        refresh: function refresh() {
            this.$emit('refresh');
        },
        saveChange: function saveChange(product, field) {
            var data = {
                product: product.id,
                field: field,
                value: product[field]
            };
            this.$http.put('/admin/product/update', data);
        },
        togglePause: function togglePause(product) {
            var vm = this;
            product.paused = !product.paused;
            vm.saveChange(product, 'paused');
        },
        toggleOffer: function toggleOffer(product) {
            var vm = this;
            product.offer = !product.offer;
            vm.saveChange(product, 'paused');
        },
        deleteProduct: function deleteProduct(product) {
            var _this = this;

            var vm = this;
            swal({
                title: "¿Estas seguro de elimiar este producto?",
                text: "",
                type: "warning",
                buttons: ['Cancelar', 'Borrar!'],
                dangerMode: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Borrar!',
                cancelButtonText: "Cancelar!",
                closeOnConfirm: false,
                closeOnCancel: false
            }).then(function (isConfirm) {
                if (isConfirm) {
                    _this.$http.delete('/admin/product/' + product.id).then(function (response) {
                        vm.$emit('refresh');
                    });
                }
            });
        },
        changed: function changed(product, field) {
            this.saveChange(product, field + '_id');
        },
        imgModal: function imgModal() {
            var _this2 = this;

            this.showModal = true;

            setTimeout(function () {
                var element = _this2.$refs.modal.$el;
                $(element).modal('show');
            }, 100);
        }
    }
});

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(218)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(220)
/* template */
var __vue_template__ = __webpack_require__(221)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1f0cb108"
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
Component.options.__file = "resources/assets/js/components/admin/admin/Img-modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f0cb108", Component.options)
  } else {
    hotAPI.reload("data-v-1f0cb108", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(219);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("20694cac", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1f0cb108\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Img-modal.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1f0cb108\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Img-modal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.modal-content[data-v-1f0cb108] {\n  height: 90vh;\n  overflow-y: auto;\n}\n.chevron-button[data-v-1f0cb108] {\n  font-size: 1.5rem;\n  padding: 3px;\n  cursor: pointer;\n  z-index: 300;\n  background-color: #0000;\n}\n.image-container[data-v-1f0cb108] {\n  position: relative;\n  overflow: hidden;\n}\n.close-button[data-v-1f0cb108] {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n}\n.controls[data-v-1f0cb108] {\n  position: absolute;\n  bottom: 50%;\n  left: 0;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.controls .fa[data-v-1f0cb108] {\n    font-size: 2rem;\n    cursor: pointer;\n}\n.set-first[data-v-1f0cb108] {\n  position: absolute;\n  top: 10px;\n  left: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        }
    },
    methods: {
        destroyImage: function destroyImage() {
            var vm = this;
            var data = {
                id: vm.product.images[vm.i].id
            };
            this.$http.post('/admin/product/deleteImage', data).then(function (res) {
                console.log('deleted');
                vm.product.images.splice(vm.i, 1);
                vm.i = 0;
            });
        },
        setFirst: function setFirst() {
            var vm = this;
            this.product.images.forEach(function (image) {
                image.first = 0;
            });

            this.product.images[this.i].first = 1;

            var data = {
                product: this.product.id,
                first: this.product.images[this.i].id
            };
            this.$http.put('/admin/product/setFirstImage', data).then(function (res) {
                $('#image-modal').modal('hide');
                vm.$emit('closedModal');
                vm.$emit('refresh');
            });
        },
        closedModal: function closedModal() {
            this.i = 0;
            this.$emit('closedModal');
        },


        save: function save(event) {
            var vm = this;

            var file = vm.$refs.daFile.files[0];

            var fdata = new FormData();

            fdata.append('image', file);
            fdata.append('product', this.product.id);

            this.$http.post('/admin/product/image', fdata, { emulateHTTP: true, emulateJSON: true, headers: _defineProperty({ 'X-File-Name': 'image', 'Content-Type': 'multipart/form-data' }, 'Content-Type', 'application/x-www-form-urlencoded') }).then(function (res) {

                $('#image-modal').modal('hide');
                vm.$emit('refresh');
                vm.$emit('closedModal');
            });
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

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
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
                        _vm.closedModal()
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
                        _vm.product.images &&
                        _vm.product.images.length > 0 &&
                        _vm.product.images[_vm.i]
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
                          _c(
                            "span",
                            {
                              staticClass: "chevron-button",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.changeImage("prev")
                                }
                              }
                            },
                            [
                              _c("fa-icon", {
                                staticClass: "text-info",
                                attrs: { icon: "chevron-left" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass: "chevron-button text-info",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.changeImage("next")
                                }
                              }
                            },
                            [
                              _c("fa-icon", {
                                attrs: { icon: "chevron-right" }
                              })
                            ],
                            1
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.product.images && _vm.product.images.length > 0
                      ? _c(
                          "button",
                          {
                            staticClass: "close-button btn btn-danger btn-sm",
                            attrs: { type: "submit" },
                            on: {
                              click: function($event) {
                                _vm.destroyImage()
                              }
                            }
                          },
                          [_vm._v("X")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.product.images && _vm.product.images.length > 0
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-info set-first",
                            on: {
                              click: function($event) {
                                _vm.setFirst()
                              }
                            }
                          },
                          [_vm._v("Definir primera imagen")]
                        )
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    attrs: { enctype: "multipart/form-data", name: "uploader" }
                  },
                  [
                    _c("csrf"),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex flex-column" }, [
                      _c("label", { staticClass: "text-info text-center" }, [
                        _vm._v(
                          "  \n                    Subir una imagen   \n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        ref: "daFile",
                        staticClass: "display-none",
                        attrs: {
                          type: "file",
                          name: "file",
                          accept: "image/x-png,image/gif,image/jpeg"
                        }
                      })
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: { click: _vm.save }
                  },
                  [_vm._v("Guardar")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Cerrar")]
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
    require("vue-hot-reload-api")      .rerender("data-v-1f0cb108", module.exports)
  }
}

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "tr",
    [
      _c("td", [
        _vm.product.images && _vm.product.images.length > 0
          ? _c("img", {
              staticStyle: { width: "150px" },
              attrs: { src: _vm.product.images[0].url, alt: _vm.product.name },
              on: {
                click: function($event) {
                  _vm.imgModal()
                }
              }
            })
          : _c("img", {
              attrs: {
                src: "/storage/images/app/no-image.png",
                alt: _vm.product.name
              },
              on: {
                click: function($event) {
                  _vm.imgModal(_vm.product)
                }
              }
            })
      ]),
      _vm._v(" "),
      _c("td", [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model.lazy",
              value: _vm.product.code,
              expression: "product.code",
              modifiers: { lazy: true }
            }
          ],
          staticClass: "form-control smallField",
          attrs: { type: "text" },
          domProps: { value: _vm.product.code },
          on: {
            change: [
              function($event) {
                _vm.$set(_vm.product, "code", $event.target.value)
              },
              function($event) {
                _vm.saveChange(_vm.product, "code")
              }
            ]
          }
        })
      ]),
      _vm._v(" "),
      _c("td", [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.product.suplier_id,
                expression: "product.suplier_id"
              }
            ],
            staticClass: "form-control",
            on: {
              change: [
                function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.product,
                    "suplier_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                },
                function($event) {
                  _vm.changed(_vm.product, "suplier")
                }
              ]
            }
          },
          _vm._l(_vm.supliers, function(suplier) {
            return _c(
              "option",
              {
                key: suplier.id,
                domProps: {
                  value: suplier.id,
                  selected: suplier.id == _vm.product.suplier_id
                }
              },
              [
                _vm._v(
                  " \n                " +
                    _vm._s(suplier.name) +
                    " \n            "
                )
              ]
            )
          })
        )
      ]),
      _vm._v(" "),
      _c("td", [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.product.category_id,
                expression: "product.category_id"
              }
            ],
            staticClass: "form-control",
            on: {
              change: [
                function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.product,
                    "category_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                },
                function($event) {
                  _vm.changed(_vm.product, "category")
                }
              ]
            }
          },
          _vm._l(_vm.categories, function(category) {
            return _c(
              "option",
              {
                key: category.id,
                domProps: {
                  value: category.id,
                  selected: _vm.product.category.id == category.id
                }
              },
              [
                _vm._v(
                  " \n                " +
                    _vm._s(category.name) +
                    " \n            "
                )
              ]
            )
          })
        )
      ]),
      _vm._v(" "),
      _c("td", [
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model.lazy",
              value: _vm.product.name,
              expression: "product.name",
              modifiers: { lazy: true }
            }
          ],
          staticClass: "form-control",
          attrs: { rows: "4", type: "text" },
          domProps: { value: _vm.product.name },
          on: {
            change: [
              function($event) {
                _vm.$set(_vm.product, "name", $event.target.value)
              },
              function($event) {
                _vm.saveChange(_vm.product, "name")
              }
            ]
          }
        })
      ]),
      _vm._v(" "),
      _c("td", [
        _c("div", { staticClass: "row w-100 d-flex align-items-center" }, [
          _vm._v("\n            $"),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.lazy",
                value: _vm.product.price,
                expression: "product.price",
                modifiers: { lazy: true }
              }
            ],
            staticClass: " form-control smallField",
            attrs: { type: "number", step: ".01" },
            domProps: { value: _vm.product.price },
            on: {
              change: [
                function($event) {
                  _vm.$set(_vm.product, "price", $event.target.value)
                },
                function($event) {
                  _vm.saveChange(_vm.product, "price")
                }
              ]
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("td", { staticClass: "smallField" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model.lazy",
              value: _vm.product.pck_units,
              expression: "product.pck_units",
              modifiers: { lazy: true }
            }
          ],
          staticClass: "form-control smallField ",
          attrs: { step: "1", type: "number" },
          domProps: { value: _vm.product.pck_units },
          on: {
            change: [
              function($event) {
                _vm.$set(_vm.product, "pck_units", $event.target.value)
              },
              function($event) {
                _vm.saveChange(_vm.product, "pck_units")
              }
            ]
          }
        })
      ]),
      _vm._v(" "),
      _c("td", [
        _c("div", { staticClass: "row w-100 d-flex align-items-center" }, [
          _vm._v("\n            \n            $"),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.lazy",
                value: _vm.product.pck_price,
                expression: "product.pck_price",
                modifiers: { lazy: true }
              }
            ],
            staticClass: "form-control smallField",
            attrs: { type: "number", step: ".01" },
            domProps: { value: _vm.product.pck_price },
            on: {
              change: [
                function($event) {
                  _vm.$set(_vm.product, "pck_price", $event.target.value)
                },
                function($event) {
                  _vm.saveChange(_vm.product, "pck_price")
                }
              ]
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c(
        "td",
        {
          staticClass:
            "d-flex flex-column justify-content-center align-items-center p-0"
        },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.product.selected,
                expression: "product.selected"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "checkbox" },
            domProps: {
              checked: Array.isArray(_vm.product.selected)
                ? _vm._i(_vm.product.selected, null) > -1
                : _vm.product.selected
            },
            on: {
              change: function($event) {
                var $$a = _vm.product.selected,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 &&
                      _vm.$set(_vm.product, "selected", $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      _vm.$set(
                        _vm.product,
                        "selected",
                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                      )
                  }
                } else {
                  _vm.$set(_vm.product, "selected", $$c)
                }
              }
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-sm btn-outline-danger m-1",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.deleteProduct(_vm.product)
                }
              }
            },
            [_c("fa-icon", { attrs: { icon: "trash" } })],
            1
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-sm m-1",
              class: {
                "btn-info": !_vm.product.paused,
                "btn-success": _vm.product.paused
              },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.togglePause(_vm.product)
                }
              }
            },
            [
              _vm.product.paused
                ? _c("fa-icon", {
                    staticClass: "text-success",
                    attrs: { icon: "play" }
                  })
                : _c("fa-icon", {
                    staticClass: "text-info",
                    attrs: { icon: "pause-circle" }
                  })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-sm m-1",
              class: {
                "btn-secondary": !_vm.product.offer,
                "btn-info": _vm.product.offer
              },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.toggleOffer(_vm.product)
                }
              }
            },
            [_vm._v("\n            Oferta\n        ")]
          )
        ]
      ),
      _vm._v(" "),
      _vm.product && _vm.showModal
        ? _c("image-modal", {
            ref: "modal",
            attrs: { product: _vm.product },
            on: {
              refresh: function($event) {
                _vm.refresh()
              },
              closedModal: function($event) {
                _vm.showModal = false
              }
            }
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-867c2ad6", module.exports)
  }
}

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
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
    _vm.$mq == "sm"
      ? _c(
          "div",
          {
            staticClass:
              "w-100 d-flex flex-column align-items-center jusify-content-center"
          },
          [
            _c("h2", { staticClass: "text-warning" }, [
              _vm._v(
                "\n            Lo sentimos. El administrador no esta disponible en dispositivos moviles.\n        "
              )
            ])
          ]
        )
      : _c(
          "div",
          { staticClass: "row" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12" },
              [
                _c("admin-create", {
                  attrs: { supliers: _vm.supliers, categories: _vm.categories },
                  on: { productSaved: _vm.refresh }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("hr", { staticClass: "w-100" }),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 row" }, [
              _c("div", { staticClass: "col-6 row" }, [
                _c(
                  "label",
                  { staticClass: "text-info font-weight-bold col-4" },
                  [_vm._v("Ordenar por")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.orderBy,
                        expression: "orderBy"
                      }
                    ],
                    staticClass: "form-control col-6",
                    attrs: { id: "" },
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
                        _vm.orderBy = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "suplier.name" } }, [
                      _vm._v("Proveedor")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "category.name" } }, [
                      _vm._v("Categoria")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "name" } }, [
                      _vm._v("Producto")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "price" } }, [
                      _vm._v("Precio")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6 d-flex flex-column" }, [
                _c("div", { staticClass: "d-flex align-items-center " }, [
                  _c("label", { staticClass: "text-info font-weight-bold" }, [
                    _vm._v("Filtrar")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.selector.checked,
                        expression: "selector.checked"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.selector.checked)
                        ? _vm._i(_vm.selector.checked, null) > -1
                        : _vm.selector.checked
                    },
                    on: {
                      change: [
                        function($event) {
                          var $$a = _vm.selector.checked,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.selector,
                                  "checked",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.selector,
                                  "checked",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.selector, "checked", $$c)
                          }
                        },
                        _vm.checkSelect
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selector.id,
                          expression: "selector.id"
                        }
                      ],
                      staticClass: "form-control col-4",
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
                            _vm.selector,
                            "id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "all" } }, [
                        _vm._v(" Todo")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.categories, function(category) {
                        return _vm.orderBy == "category.name"
                          ? _c(
                              "option",
                              {
                                key: category.id,
                                domProps: { value: category.id }
                              },
                              [
                                _vm._v(
                                  " \n                                    " +
                                    _vm._s(category.name) +
                                    "\n                            "
                                )
                              ]
                            )
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.supliers, function(suplier) {
                        return _vm.orderBy == "suplier.name"
                          ? _c(
                              "option",
                              {
                                key: suplier.id,
                                domProps: { value: suplier.id }
                              },
                              [
                                _vm._v(
                                  " \n                                    " +
                                    _vm._s(suplier.name) +
                                    "\n                            "
                                )
                              ]
                            )
                          : _vm._e()
                      })
                    ],
                    2
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 row mt-3 mb-3 ml-2" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.lazy",
                    value: _vm.searchTerm,
                    expression: "searchTerm",
                    modifiers: { lazy: true }
                  }
                ],
                staticClass: "form-control col-4",
                attrs: { placeholder: "BUSCAR" },
                domProps: { value: _vm.searchTerm },
                on: {
                  keyup: function($event) {
                    if (
                      !("button" in $event) &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.search($event)
                  },
                  change: function($event) {
                    _vm.searchTerm = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-success ml-2",
                  on: { click: _vm.search }
                },
                [_vm._v("Buscar")]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row mt-4 ml-2" },
              [
                _c("paginator", {
                  attrs: {
                    selectedPage: _vm.selectedPage,
                    products: _vm.filterProducts,
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
            ),
            _vm._v(" "),
            _c(
              "table",
              {
                staticClass: "table table-striped table-bordered ",
                attrs: { id: "table" }
              },
              [
                _vm._m(1),
                _vm._v(" "),
                _vm._l(_vm.filteredProducts, function(product) {
                  return _c("product-row", {
                    key: product.id,
                    tag: "tr",
                    attrs: {
                      product: product,
                      supliers: _vm.supliers,
                      categories: _vm.categories
                    },
                    on: { refresh: _vm.refresh }
                  })
                })
              ],
              2
            ),
            _vm._v(" "),
            _c("paginator", {
              attrs: {
                selectedPage: _vm.selectedPage,
                products: _vm.filterProducts,
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 d-flex justify-content-center" }, [
      _c("img", {
        staticStyle: { width: "200px", height: "110px" },
        attrs: { src: "/storage/images/app/MAJU.jpg", alt: "logo" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", {}, [
      _c("th", [_vm._v("imagen")]),
      _vm._v(" "),
      _c("th", [_vm._v("Codigo")]),
      _vm._v(" "),
      _c("th", [_vm._v("Proveedor")]),
      _vm._v(" "),
      _c("th", [_vm._v("Categoria")]),
      _vm._v(" "),
      _c("th", [_vm._v("Producto")]),
      _vm._v(" "),
      _c("th", [_vm._v("Precio")]),
      _vm._v(" "),
      _c("th", [_vm._v("Unidades x bulto")]),
      _vm._v(" "),
      _c("th", [_vm._v("Precio en bulto")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-10ddd0a8", module.exports)
  }
}

/***/ })

});