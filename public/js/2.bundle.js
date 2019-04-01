webpackJsonp([2],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories_vue__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__categories_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__metadata_vue__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__metadata_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__metadata_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        superCategories: __WEBPACK_IMPORTED_MODULE_0__categories_vue___default.a,
        superMetadata: __WEBPACK_IMPORTED_MODULE_1__metadata_vue___default.a
    },
    computed: {
        configs: function configs() {
            return this.$store.getters.getConfig;
        }
    },
    methods: {
        updateconfig: function updateconfig(field) {
            var data = {
                field: field,
                value: this.configs[field]
            };

            this.$http.put('/admin/config', data);
        }
    },
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
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
Component.options.__file = "resources/assets/js/components/admin/metadata/categories.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f8502b96", Component.options)
  } else {
    hotAPI.reload("data-v-f8502b96", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 165:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        categories: function categories() {
            return this.$store.getters.getCategories;
        }
    },
    data: function data() {
        return {
            selected: null

        };
    },

    methods: {
        bindFile: function bindFile(e) {
            var fileUploadFormData = new FormData();
            var file = e.target.files[0];
            var ext = file.name.split('.').pop();
            if (ext == 'png' || ext == 'jpg' || ext == 'jpeg' || ext == 'gif' || ext == webp) {
                fileUploadFormData.append('image', e.target.files[0]);
                fileUploadFormData.append('id', this.selected.id);
                this.$http.post('/super/category/image', fileUploadFormData).then(function (response) {
                    window.location.replace('/super');
                });
            }
        },
        save: function save(category, field) {
            var data = {
                id: category.id,
                field: field,
                value: category[field]
            };
            this.$http.put('/admin/category', data);
        }
    }

});

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12 col-lg-4 d-flex flex-column" },
      _vm._l(_vm.categories, function(category) {
        return _c(
          "button",
          {
            key: category.id,
            staticClass: "btn btn-block bg-first white-bold",
            class: { "bg-focus": _vm.selected == category },
            on: {
              click: function($event) {
                _vm.selected = category
              }
            }
          },
          [_vm._v("\n                " + _vm._s(category.name) + "\n        ")]
        )
      })
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-12 col-lg-8" }, [
      _vm.selected
        ? _c("div", [
            _c("h2", [_vm._v(" " + _vm._s(_vm.selected.name) + " ")]),
            _vm._v(" "),
            _c("div", { staticClass: "p2 row" }, [
              _c("label", { staticClass: "col-12 col-lg-4" }, [
                _vm._v("\n                    Descripcion\n                ")
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.lazy.trim",
                    value: _vm.selected.description,
                    expression: "selected.description",
                    modifiers: { lazy: true, trim: true }
                  }
                ],
                staticClass: "col-12 col-lg-8 form-control",
                attrs: { rows: "5", type: "text" },
                domProps: { value: _vm.selected.description },
                on: {
                  change: [
                    function($event) {
                      _vm.$set(
                        _vm.selected,
                        "description",
                        $event.target.value.trim()
                      )
                    },
                    function($event) {
                      _vm.save(_vm.selected, "description")
                    }
                  ],
                  blur: function($event) {
                    _vm.$forceUpdate()
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p2 row" }, [
              _c("label", { staticClass: "col-12 col-lg-4" }, [
                _vm._v(
                  "\n                    Descripcion para HOME\n                "
                )
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.lazy.trim",
                    value: _vm.selected.homedescription,
                    expression: "selected.homedescription",
                    modifiers: { lazy: true, trim: true }
                  }
                ],
                staticClass: "col-12 col-lg-8 form-control",
                attrs: { rows: "5", type: "text" },
                domProps: { value: _vm.selected.homedescription },
                on: {
                  change: [
                    function($event) {
                      _vm.$set(
                        _vm.selected,
                        "homedescription",
                        $event.target.value.trim()
                      )
                    },
                    function($event) {
                      _vm.save(_vm.selected, "homedescription")
                    }
                  ],
                  blur: function($event) {
                    _vm.$forceUpdate()
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p2 row" }, [
              _c("label", { staticClass: "col-12 col-lg-4" }, [
                _vm._v("\n                    Meta Titutlo\n                ")
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.lazy.trim",
                    value: _vm.selected.metatitle,
                    expression: "selected.metatitle",
                    modifiers: { lazy: true, trim: true }
                  }
                ],
                staticClass: "col-12 col-lg-8 form-control",
                attrs: { rows: "5", type: "text" },
                domProps: { value: _vm.selected.metatitle },
                on: {
                  change: [
                    function($event) {
                      _vm.$set(
                        _vm.selected,
                        "metatitle",
                        $event.target.value.trim()
                      )
                    },
                    function($event) {
                      _vm.save(_vm.selected, "metatitle")
                    }
                  ],
                  blur: function($event) {
                    _vm.$forceUpdate()
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p2 row" }, [
              _c("label", { staticClass: "col-12 col-lg-4" }, [
                _vm._v(
                  "\n                    Meta Descripcion\n                "
                )
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.lazy.trim",
                    value: _vm.selected.metadescription,
                    expression: "selected.metadescription",
                    modifiers: { lazy: true, trim: true }
                  }
                ],
                staticClass: "col-12 col-lg-8 form-control",
                attrs: { rows: "5", type: "text" },
                domProps: { value: _vm.selected.metadescription },
                on: {
                  change: [
                    function($event) {
                      _vm.$set(
                        _vm.selected,
                        "metadescription",
                        $event.target.value.trim()
                      )
                    },
                    function($event) {
                      _vm.save(_vm.selected, "metadescription")
                    }
                  ],
                  blur: function($event) {
                    _vm.$forceUpdate()
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-4" }, [
              _c("div", { staticClass: "col-6" }, [
                _c("img", {
                  attrs: { src: _vm.selected.image, alt: _vm.selected.name }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6 d-flex align-items-end" }, [
                _c(
                  "label",
                  { staticClass: "btn btn-block btn-outline-info btn-file" },
                  [
                    _vm._v("\n                        Cargar imagen "),
                    _c("input", {
                      staticStyle: { display: "none" },
                      attrs: { type: "file", accept: "image/*" },
                      on: { change: _vm.bindFile }
                    })
                  ]
                )
              ])
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h2", [_vm._v("Descripciones y metadata de Categorias")]),
      _vm._v(" "),
      _c("hr")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f8502b96", module.exports)
  }
}

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
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
Component.options.__file = "resources/assets/js/components/admin/metadata/metadata.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b5e96bf0", Component.options)
  } else {
    hotAPI.reload("data-v-b5e96bf0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 168:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            selected: null

        };
    },

    computed: {
        metadatas: function metadatas() {
            return this.$store.getters.getMeta;
        }
    },

    methods: {
        save: function save(meta, field) {
            var data = {
                page: meta.page,
                field: field,
                value: meta[field]
            };
            this.$http.put('/super/metadata', data);
        }
    }

});

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row " }, [
    _vm._m(0),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12 col-lg-4 d-flex flex-column" },
      _vm._l(_vm.metadatas, function(meta) {
        return _c(
          "button",
          {
            key: meta.id,
            staticClass: "btn btn-block bg-first white-bold",
            class: { "bg-focus": _vm.selected == meta },
            on: {
              click: function($event) {
                _vm.selected = meta
              }
            }
          },
          [
            _vm._v(
              "\n                " +
                _vm._s(_vm._f("ucFirst")(meta.page)) +
                "\n        "
            )
          ]
        )
      })
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-12 col-lg-8" }, [
      _vm.selected
        ? _c("div", [
            _c("h2", [
              _vm._v(" " + _vm._s(_vm._f("ucFirst")(_vm.selected.page)) + " ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p2 row" }, [
              _c("label", { staticClass: "col-12 col-lg-4" }, [
                _vm._v("\n                    Meta Titutlo\n                ")
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.lazy.trim",
                    value: _vm.selected.metatitle,
                    expression: "selected.metatitle",
                    modifiers: { lazy: true, trim: true }
                  }
                ],
                staticClass: "col-12 col-lg-8 form-control",
                attrs: { rows: "5", type: "text" },
                domProps: { value: _vm.selected.metatitle },
                on: {
                  change: [
                    function($event) {
                      _vm.$set(
                        _vm.selected,
                        "metatitle",
                        $event.target.value.trim()
                      )
                    },
                    function($event) {
                      _vm.save(_vm.selected, "metatitle")
                    }
                  ],
                  blur: function($event) {
                    _vm.$forceUpdate()
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p2 row" }, [
              _c("label", { staticClass: "col-12 col-lg-4" }, [
                _vm._v(
                  "\n                    Meta Descripcion\n                "
                )
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.lazy.trim",
                    value: _vm.selected.metadescription,
                    expression: "selected.metadescription",
                    modifiers: { lazy: true, trim: true }
                  }
                ],
                staticClass: "col-12 col-lg-8 form-control",
                attrs: { rows: "5", type: "text" },
                domProps: { value: _vm.selected.metadescription },
                on: {
                  change: [
                    function($event) {
                      _vm.$set(
                        _vm.selected,
                        "metadescription",
                        $event.target.value.trim()
                      )
                    },
                    function($event) {
                      _vm.save(_vm.selected, "metadescription")
                    }
                  ],
                  blur: function($event) {
                    _vm.$forceUpdate()
                  }
                }
              })
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h2", [_vm._v("Metadata de paginas")]),
      _vm._v(" "),
      _c("hr")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b5e96bf0", module.exports)
  }
}

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row mt-4" }, [
    _vm._m(0),
    _vm._v(" "),
    _vm.configs
      ? _c("div", { staticClass: "col-12 row" }, [
          _c("div", { staticClass: "col-12" }, [
            _vm._v("\n            compra minima local: \n            "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.lazy",
                  value: _vm.configs.minbuy,
                  expression: "configs.minbuy",
                  modifiers: { lazy: true }
                }
              ],
              attrs: { type: "number" },
              domProps: { value: _vm.configs.minbuy },
              on: {
                change: [
                  function($event) {
                    _vm.$set(_vm.configs, "minbuy", $event.target.value)
                  },
                  function($event) {
                    _vm.updateconfig("minbuy")
                  }
                ]
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _vm._v("\n            compra minima envios: \n            "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.lazy",
                  value: _vm.configs.minbuy_ship,
                  expression: "configs.minbuy_ship",
                  modifiers: { lazy: true }
                }
              ],
              attrs: { type: "number" },
              domProps: { value: _vm.configs.minbuy_ship },
              on: {
                change: [
                  function($event) {
                    _vm.$set(_vm.configs, "minbuy_ship", $event.target.value)
                  },
                  function($event) {
                    _vm.updateconfig("minbuy_ship")
                  }
                ]
              }
            })
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12 mt-4" },
      [_c("hr"), _vm._v(" "), _c("super-metadata"), _vm._v(" "), _c("hr")],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12" },
      [_c("hr"), _vm._v(" "), _c("super-categories"), _vm._v(" "), _c("hr")],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-outline-info",
          attrs: { href: "/admin/lista-de-precios" }
        },
        [_vm._v("  \n            Refrescar Lista de Precios\n        ")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-outline-danger",
          attrs: { href: "/super/failed-jobs" }
        },
        [_vm._v("  \n            Failed jobs\n        ")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-340f7f5c", module.exports)
  }
}

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(163)
/* template */
var __vue_template__ = __webpack_require__(170)
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
Component.options.__file = "resources/assets/js/components/admin/metadata/Super.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-340f7f5c", Component.options)
  } else {
    hotAPI.reload("data-v-340f7f5c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});