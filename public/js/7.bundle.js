webpackJsonp([7],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/Order.vue":
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
//
//
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
    props: ['order'],
    data: function data() {
        return {
            city: null
        };
    },

    methods: {
        setStatus: function setStatus(status) {
            var vm = this;
            this.order.status = status;
            var data = {
                order: this.order.id,
                field: 'status',
                value: status
            };
            this.$http.put('/admin/order', data).then(function (response) {
                vm.$emit('statusChanged', response.data);
            });
        }
    },
    computed: {
        total: function total() {

            var tot = 0;
            if (this.order.order_products && this.order.order_products.length > 0) {
                this.order.order_products.forEach(function (op) {
                    tot += op.price * op.units;
                });
            }

            return tot;
        }
    },
    filters: {
        datetime: function datetime(val) {
            return moment(val).format('DD/MM/YYYY H:mm');
        }
    },

    created: function created() {
        var vm = this;
        if (this.order.shipping) {
            this.$http.get('/api/city/' + vm.order.city_id).then(function (res) {
                vm.city = res.data;
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/Orders.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Order_vue__ = __webpack_require__("./resources/assets/js/components/admin/Order.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Order_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Order_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        appOrder: __WEBPACK_IMPORTED_MODULE_0__Order_vue___default.a
    },
    data: function data() {
        return {
            searchTerm: '',
            orders: [],
            status: 'pendiente',
            source: 'online',
            filtered: [],
            selected: null

        };
    },

    methods: {
        viewed: function viewed(order) {
            if (order.viewed) {
                order.viewed = 1;
            } else {
                order.viewed = 0;
            }
            var data = {
                order: order.id,
                id: order.id,
                field: 'viewed',
                value: order.viewed
            };
            this.$http.put('/admin/order', data);
        },
        setSource: function setSource(src) {
            this.source = src;
            this.selected = null;
        },
        statusChanged: function statusChanged(event) {
            this.status = event.status;
        },
        changestatus: function changestatus(status) {
            this.status = status;
            this.selected = null;
        }
    },

    computed: {
        filteredOrders: function filteredOrders() {
            var vm = this;
            var res = this.orders.filter(function (order) {

                return order.source == vm.source && order.status == vm.status;
            });

            var st = this.searchTerm.trim().toLowerCase();
            if (st) {
                res = res.filter(function (order) {
                    return order.name.trim().toLowerCase().indexOf(st) > -1;
                });
            }

            res = _.sortBy(res, 'created_at');
            res = res.reverse();

            return res;
        }
    },
    created: function created() {
        var _this = this;

        this.$http.get('/api/orders').then(function (response) {
            _this.orders = response.data;
        });
    },

    filters: {
        datetime: function datetime(val) {
            return moment(val).format('DD/MM/YYYY H:mm');
        }
    }

});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-129a08dc\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/Orders.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.checkbox{\n    width: 30px;\n    height: 20px;\n}\n.cursor-pointer {\n        cursor: pointer;\n}\n.table-container{\n       height: 85vh;\n       scroll-behavior: auto;\n       overflow-x: hidden;\n       overflow-y: auto;\n}\n   \n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0f8d85b2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/Order.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "border border-primary p-3 mt-3" }, [
    _c("div", [
      _c("div", [
        _c("span", { staticClass: "font-weight-bold text-primary" }, [
          _vm._v(
            "Fecha: " + _vm._s(_vm._f("datetime")(_vm.order.created_at)) + " "
          )
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _vm.order.seller
          ? _c("span", { staticClass: "font-weight-bold text-primary" }, [
              _vm._v("Vendedor: " + _vm._s(_vm.order.seller) + " ")
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.order.comments
          ? _c("span", { staticClass: "mt-2" }, [
              _vm._v(" -- " + _vm._s(_vm.order.comments) + " -- ")
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("table", { staticClass: "table table-striped table-bordered mt-3" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.order.order_products, function(op) {
            return _c("tr", { key: "op" + op.product.id }, [
              _c("td", [_vm._v(" " + _vm._s(op.product.code) + " ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" " + _vm._s(op.product.name) + " ")]),
              _vm._v(" "),
              _c("td", [
                _vm._v(" $" + _vm._s(_vm._f("price")(op.price)) + " ")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(" " + _vm._s(op.units) + " ")]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  " $" + _vm._s(_vm._f("price")(op.units * op.price)) + " "
                )
              ])
            ])
          })
        ),
        _vm._v(" "),
        _c("tfoot", [
          _c("tr", [
            _c("td"),
            _vm._v(" "),
            _c("td"),
            _vm._v(" "),
            _c("td"),
            _vm._v(" "),
            _c("td", { staticStyle: { color: "blue" } }, [_vm._v("TOTAL")]),
            _vm._v(" "),
            _c("td", { staticStyle: { color: "blue" } }, [
              _vm._v(" $" + _vm._s(_vm._f("price")(_vm.total)) + " ")
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", [
      _c("ul", [
        _vm.order.name
          ? _c("li", [
              _vm._v("Nombre del cliente: " + _vm._s(_vm.order.name) + " ")
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.order.phone
          ? _c("li", [_vm._v("Telefono: " + _vm._s(_vm.order.phone) + " ")])
          : _vm._e(),
        _vm._v(" "),
        _vm.order.email
          ? _c("li", [_vm._v("Email: " + _vm._s(_vm.order.email) + " ")])
          : _vm._e(),
        _vm._v(" "),
        _vm.order.message
          ? _c("li", [
              _vm._v("Mensaje adjunto: " + _vm._s(_vm.order.message) + " ")
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.order.shipping
        ? _c("div", [
            _c("h4", [_vm._v("Datos de envío")]),
            _vm._v(" "),
            _c("ul", [
              _vm.city
                ? _c("li", [
                    _vm._v("  Provincia: " + _vm._s(_vm.city.state.name) + " ")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.city
                ? _c("li", [_vm._v(" Ciudad: " + _vm._s(_vm.city.name) + " ")])
                : _vm._e(),
              _vm._v(" "),
              _c("li", [_vm._v(" CP: " + _vm._s(_vm.order.cp) + "  ")]),
              _vm._v(" "),
              _c("li", [
                _vm._v(" Direccion: " + _vm._s(_vm.order.address) + " ")
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Transporte: " + _vm._s(_vm.order.transport) + "  ")
              ])
            ])
          ])
        : _c("div", [
            _vm._v("\n                - Retira en local.\n            ")
          ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 offset-lg-9 col-lg-3" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-block btn-outline-primary",
            attrs: { href: "/admin/pdf/" + _vm.order.id, target: "_blank" }
          },
          [_vm._v("\n                Generar PDF\n            ")]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-3" }, [
      _vm.order.status == "pagado"
        ? _c("div", { staticClass: "col-12 col-lg-4" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-block btn-outline-info",
                on: {
                  click: function($event) {
                    _vm.setStatus("enviado")
                  }
                }
              },
              [
                _c("fa-icon", { attrs: { icon: "truck" } }),
                _vm._v("\n                Marcar como enviado\n            ")
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.order.status != "pagado" && _vm.order.status != "cancelado"
        ? _c("div", { staticClass: "col-12 col-lg-4" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-block btn-outline-success",
                on: {
                  click: function($event) {
                    _vm.setStatus("pagado")
                  }
                }
              },
              [
                _c("fa-icon", { attrs: { icon: "dollar-sign" } }),
                _vm._v("\n                Marcar como pagado\n            ")
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.order.status != "cancelado"
        ? _c("div", { staticClass: "col-12 col-lg-4" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-block btn-outline-danger",
                on: {
                  click: function($event) {
                    _vm.setStatus("cancelado")
                  }
                }
              },
              [
                _c("fa-icon", { attrs: { icon: "times" } }),
                _vm._v("\n                Marcar como Cancelado\n            ")
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.order.status != "pendiente" && _vm.order.status != "enviado"
        ? _c("div", { staticClass: "col-12 col-lg-4" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-block btn-outline-warning",
                on: {
                  click: function($event) {
                    _vm.setStatus("pendiente")
                  }
                }
              },
              [
                _c("fa-icon", { attrs: { icon: "clock" } }),
                _vm._v("\n                Marcar como Pendiente\n            ")
              ],
              1
            )
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Codigo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Precio")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", [_vm._v("Subtotal")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0f8d85b2", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-129a08dc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/Orders.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 row mt-2" }, [
        _c("div", { staticClass: "col-6 col-lg-3 m-0 p-0" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-block ",
              class: {
                "btn-outline-warning": _vm.status != "pendiente",
                "btn-warning": _vm.status == "pendiente"
              },
              on: {
                click: function($event) {
                  _vm.changestatus("pendiente")
                }
              }
            },
            [
              _c("fa-icon", { attrs: { icon: "clock" } }),
              _vm._v("\n                    Pendientes\n                ")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6 col-lg-3 m-0 p-0" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-block",
              class: {
                "btn-outline-success": _vm.status != "pagado",
                "btn-success": _vm.status == "pagado"
              },
              on: {
                click: function($event) {
                  _vm.changestatus("pagado")
                }
              }
            },
            [
              _c("fa-icon", { attrs: { icon: "dollar-sign" } }),
              _vm._v("\n                    Pagadas\n                ")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6 col-lg-3 m-0 p-0" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-block",
              class: {
                "btn-outline-info": _vm.status != "enviado",
                "btn-info": _vm.status == "enviado"
              },
              on: {
                click: function($event) {
                  _vm.changestatus("enviado")
                }
              }
            },
            [
              _c("fa-icon", { attrs: { icon: "truck" } }),
              _vm._v("\n                    Enviadas\n                ")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6 col-lg-3 m-0 p-0" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-block",
              class: {
                "btn-outline-danger": _vm.status != "cancelado",
                "btn-danger": _vm.status == "cancelado"
              },
              on: {
                click: function($event) {
                  _vm.changestatus("cancelado")
                }
              }
            },
            [
              _c("fa-icon", { attrs: { icon: "times" } }),
              _vm._v("\n                   Canceladas\n                ")
            ],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-12 row" }, [
      _c("div", { staticClass: "col-12 col-lg-4 table-container" }, [
        _c("table", { staticClass: "table table-striped table-hover" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _c("tr", [
                _c("td", { attrs: { colspan: "3" } }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.searchTerm,
                        expression: "searchTerm"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.searchTerm },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.searchTerm = $event.target.value
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _vm._l(_vm.filteredOrders, function(order) {
                return _c(
                  "tr",
                  {
                    key: "order" + order.id,
                    class: { "bg-info": order == _vm.selected },
                    staticStyle: { cursor: "pointer" },
                    on: {
                      click: function($event) {
                        _vm.selected = order
                      }
                    }
                  },
                  [
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("datetime")(order.created_at)))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(order.name))]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: order.viewed,
                            expression: "order.viewed"
                          }
                        ],
                        staticClass: "form-control checkbox",
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(order.viewed)
                            ? _vm._i(order.viewed, null) > -1
                            : order.viewed
                        },
                        on: {
                          change: [
                            function($event) {
                              var $$a = order.viewed,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(order, "viewed", $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      order,
                                      "viewed",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(order, "viewed", $$c)
                              }
                            },
                            function($event) {
                              _vm.viewed(order)
                            }
                          ]
                        }
                      })
                    ])
                  ]
                )
              })
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-12 col-lg-8 bg-white" },
        [
          _vm.selected
            ? _c("app-order", {
                attrs: { order: _vm.selected },
                on: { statusChanged: _vm.statusChanged }
              })
            : _vm._e()
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("Fecha")]),
      _vm._v(" "),
      _c("th", [_vm._v("Cliente")]),
      _vm._v(" "),
      _c("th", [_vm._v("Visto")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-129a08dc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-129a08dc\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/Orders.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-129a08dc\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/Orders.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("407bfe00", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-129a08dc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Orders.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-129a08dc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Orders.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/admin/Order.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/Order.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0f8d85b2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/Order.vue")
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
Component.options.__file = "resources/assets/js/components/admin/Order.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f8d85b2", Component.options)
  } else {
    hotAPI.reload("data-v-0f8d85b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/admin/Orders.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-129a08dc\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/Orders.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/Orders.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-129a08dc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/Orders.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources/assets/js/components/admin/Orders.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-129a08dc", Component.options)
  } else {
    hotAPI.reload("data-v-129a08dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});