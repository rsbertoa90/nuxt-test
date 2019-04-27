webpackJsonp([24],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/configs/Configs.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_slider_vue__ = __webpack_require__("./resources/assets/js/components/admin/configs/admin-slider.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__admin_slider_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { adminSlider: __WEBPACK_IMPORTED_MODULE_0__admin_slider_vue___default.a },
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
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/configs/admin-slider.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            selected: 0,
            shoNewSlidePannel: false,
            slides: [],
            fileSelected: false,
            newSlide: {
                url: '',
                alt: '',
                slider: 'home'
            }
        };
    },
    created: function created() {
        this.refresh();
    },

    computed: {
        valid: function valid() {
            return this.fileSelected && this.newSlide.url && this.newSlide.alt;
        }
    },
    watch: {
        selected: function selected() {
            if (this.selected < 0) {
                this.selected = this.slides.length - 1;
            } else if (!this.slides[this.selected]) {
                this.selected = 0;
            }
        }
    },
    methods: {
        refresh: function refresh() {
            var _this = this;

            this.selected = 0;
            this.$http.get('/api/slides').then(function (res) {
                _this.slides = res.data;
            });
        },
        send: function send() {
            var vm = this;
            if (this.valid) {
                var data = new FormData();

                var file = this.$refs.file.files[0];
                data.append('image', file);
                data.append('url', this.newSlide.url);
                data.append('alt', this.newSlide.alt);
                data.append('slider', this.newSlide.slider);

                this.$http.post('/admin/slider', data).then(function (res) {
                    vm.refresh();
                    vm.selected = vm.slides.length - 1;
                });
            }
        }
    }

});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-46324894\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/configs/admin-slider.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.img-container[data-v-46324894] {\n  padding: 10px;\n  border: 1px solid #ccc;\n  position: relative;\n  overflow: hidden;\n}\n.img-container img[data-v-46324894] {\n    width: 100%;\n}\n.img-container .delete-button[data-v-46324894] {\n    position: absolute;\n    bottom: 10px;\n    left: 45%;\n}\n.img-container .controls[data-v-46324894] {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-46324894\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/configs/admin-slider.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mt-4 p-4" }, [
    _c("h2", [_vm._v("Slider")]),
    _vm._v(" "),
    this.slides && this.slides[this.selected]
      ? _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-12 col-lg-6 offset-lg-2 img-container" },
            [
              _c(
                "transition",
                {
                  attrs: {
                    "leave-active-class":
                      "animated slideOutRight position-absolute"
                  }
                },
                [
                  _c("img", {
                    key: _vm.slides[this.selected].id,
                    attrs: { src: _vm.slides[this.selected].image }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-danger delete-button" },
                [_c("fa-icon", { attrs: { icon: "times" } })],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "controls" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info",
                    on: {
                      click: function($event) {
                        _vm.selected--
                      }
                    }
                  },
                  [_c("fa-icon", { attrs: { icon: "chevron-left" } })],
                  1
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info",
                    on: {
                      click: function($event) {
                        _vm.selected++
                      }
                    }
                  },
                  [_c("fa-icon", { attrs: { icon: "chevron-right" } })],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 " }, [
            _c("label", { staticClass: "col-6 col-lg-2" }, [_vm._v("Leyenda")]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.slides[_vm.selected].alt,
                  expression: "slides[selected].alt"
                }
              ],
              attrs: { rows: "2", type: "text" },
              domProps: { value: _vm.slides[_vm.selected].alt },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.slides[_vm.selected], "alt", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _c("label", { staticClass: "col-6 col-lg-2", attrs: { for: "" } }, [
              _vm._v("URL destino")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.slides[_vm.selected].url,
                  expression: "slides[selected].url"
                }
              ],
              attrs: { type: "text" },
              domProps: { value: _vm.slides[_vm.selected].url },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.slides[_vm.selected], "url", $event.target.value)
                }
              }
            })
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "mt-4 btn btn-outline-info",
        on: {
          click: function($event) {
            _vm.shoNewSlidePannel = !_vm.shoNewSlidePannel
          }
        }
      },
      [_vm._v("Nueva Slide")]
    ),
    _vm._v(" "),
    _vm.shoNewSlidePannel
      ? _c("div", { staticClass: "form row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("label", { staticClass: "col-6" }, [_vm._v("Url destino")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.newSlide.url,
                  expression: "newSlide.url"
                }
              ],
              staticClass: "col-6",
              attrs: { type: "text" },
              domProps: { value: _vm.newSlide.url },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.newSlide, "url", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _c("label", { staticClass: "col-6", attrs: { for: "" } }, [
              _vm._v(" Alt ")
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.newSlide.alt,
                  expression: "newSlide.alt"
                }
              ],
              staticClass: "col-6",
              attrs: { rows: "2", type: "text" },
              domProps: { value: _vm.newSlide.alt },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.newSlide, "alt", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _c(
              "label",
              { staticClass: "btn btn-block btn-outline-info btn-file" },
              [
                _vm._v("\n                Cargar imagen "),
                _c("input", {
                  ref: "file",
                  staticStyle: { display: "none" },
                  attrs: { type: "file", accept: "image/*" },
                  on: {
                    change: function($event) {
                      _vm.fileSelected = true
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _vm.fileSelected
              ? _c("span", [_vm._v(" Imagen subida ")])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _vm.valid
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-info",
                    on: { click: _vm.send }
                  },
                  [_vm._v("\n                Guardar\n            ")]
                )
              : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-46324894", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-be0b9628\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/configs/Configs.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _vm._m(0),
    _vm._v(" "),
    _vm.configs
      ? _c("div", { staticClass: "col-12 row" }, [
          _c("div", { staticClass: "col-12 mt-2" }, [
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
          _c("div", { staticClass: "col-12 mt-2" }, [
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
    _c("hr"),
    _vm._v(" "),
    _c("div", { staticClass: "col-12 row" }, [_c("admin-slider")], 1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 mt-4" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-outline-info",
          attrs: { href: "/admin/lista-de-precios" }
        },
        [_vm._v("  \n            Refrescar Lista de Precios\n        ")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-be0b9628", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-46324894\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/configs/admin-slider.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-46324894\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/configs/admin-slider.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("e4cb3106", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-46324894\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./admin-slider.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-46324894\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./admin-slider.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/admin/configs/Configs.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/configs/Configs.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-be0b9628\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/configs/Configs.vue")
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
Component.options.__file = "resources/assets/js/components/admin/configs/Configs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-be0b9628", Component.options)
  } else {
    hotAPI.reload("data-v-be0b9628", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/admin/configs/admin-slider.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-46324894\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/configs/admin-slider.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/configs/admin-slider.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-46324894\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/configs/admin-slider.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-46324894"
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
Component.options.__file = "resources/assets/js/components/admin/configs/admin-slider.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46324894", Component.options)
  } else {
    hotAPI.reload("data-v-46324894", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});