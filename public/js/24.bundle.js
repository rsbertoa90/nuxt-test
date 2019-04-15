webpackJsonp([24],{

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(202)
/* template */
var __vue_template__ = __webpack_require__(203)
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

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
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
                    if (pr.slug) {
                        return pr.slug.trim().toLowerCase() == '/' + vm.$route.params.product_slug.trim().toLowerCase();
                    }
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

/***/ 203:
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

/***/ })

});