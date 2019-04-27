webpackJsonp([2],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/category/product/Product.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__related_products_vue__ = __webpack_require__("./resources/assets/js/components/category/product/related-products.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__related_products_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__related_products_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_floating_categories_pannel_vue__ = __webpack_require__("./resources/assets/js/components/home/floating-categories-pannel.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_floating_categories_pannel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__home_floating_categories_pannel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_vue__ = __webpack_require__("./resources/assets/js/components/category/product/info.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_vue__ = __webpack_require__("./resources/assets/js/components/category/product/card.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__small_card_vue__ = __webpack_require__("./resources/assets/js/components/category/product/small-card.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__small_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__small_card_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { card: __WEBPACK_IMPORTED_MODULE_3__card_vue___default.a, smallCard: __WEBPACK_IMPORTED_MODULE_4__small_card_vue___default.a, categoriesPannel: __WEBPACK_IMPORTED_MODULE_1__home_floating_categories_pannel_vue___default.a, infoRow: __WEBPACK_IMPORTED_MODULE_2__info_vue___default.a, relatedProducts: __WEBPACK_IMPORTED_MODULE_0__related_products_vue___default.a },
    metaInfo: function metaInfo() {
        return {
            title: this.metatitle,
            meta: [{ charset: 'utf-8' }, { vmid: 'description', name: 'description', content: this.metadescription }]
        };
    },
    data: function data() {
        return {
            i: 0
        };
    },

    computed: {
        metatitle: function metatitle() {
            if (this.product) {

                return this.product.metatitle ? this.product.metatitle : this.product.name + ' por mayor';
            } else {
                return '';
            }
        },
        metadescription: function metadescription() {
            if (this.product) {
                if (this.product.metadescription) {
                    return this.product.metadescription;
                } else if (this.product.description) {
                    return this.product.description;
                } else return this.product.name + " " + 'por mayor';
            } else {
                return '';
            }
        },
        categories: function categories() {
            return this.$store.getters.getNotPaused;
        },
        category: function category() {
            var _this = this;

            if (this.product && this.categories) {
                return this.categories.find(function (c) {
                    return c.id == _this.product.category_id;
                });
            }
        },
        product: function product() {
            var vm = this;
            var res = null;
            this.categories.forEach(function (c) {
                var p = c.products.find(function (pr) {
                    if (pr.slug) {

                        var productSlug = '/' + pr.slug;
                        productSlug = productSlug.replace('//', '/');
                        var routeParam = '/' + vm.$route.params.product_slug;
                        routeParam = routeParam.replace('//', '/');

                        return routeParam.trim().toLowerCase() == productSlug.trim().toLowerCase();
                    }
                });
                if (p) {
                    res = p;

                    return res;
                }
            });
            return res;
        },
        config: function config() {
            return this.$store.getters.getConfig;
        }
    }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/category/product/card.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shop_button_vue__ = __webpack_require__("./resources/assets/js/components/category/product/shop-button.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shop_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__shop_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cotizer_Img_modal_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/Img-modal.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cotizer_Img_modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__cotizer_Img_modal_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        product: Object,
        hideHead: {
            type: Boolean,
            default: false
        },
        i: {
            Type: Number,
            default: 0
        }
    },
    components: {
        shopButton: __WEBPACK_IMPORTED_MODULE_0__shop_button_vue___default.a,
        imageModal: __WEBPACK_IMPORTED_MODULE_1__cotizer_Img_modal_vue___default.a
    },
    data: function data() {
        return {
            showModal: false,
            index: 0,
            hovered: false
        };
    },

    methods: {
        show: function show() {
            var _this = this;

            this.showModal = true;

            /* this.$refs.modal.$forceUpdate(); */
            setTimeout(function () {
                var element = _this.$refs.modal.$el;
                $(element).modal('show');
            }, 100);
        },
        closedModal: function closedModal() {
            var _this2 = this;

            this.modalProduct = null;
            this.showModal = false;
            setTimeout(function () {
                _this2.showModal = true;
            }, 100);
        }
    },
    computed: {
        productUrl: function productUrl() {
            var _this3 = this;

            var cats = this.$store.getters.getCategories;
            var category = cats.find(function (c) {
                return c.id == _this3.product.category_id;
            });

            var url = category.slug + '/' + this.product.slug;
            url = url.replace('//', '/');
            return url;
        },
        config: function config() {
            return this.$store.getters.getConfig;
        },
        image: function image() {

            if (this.product.images && this.product.images[this.i]) {
                return this.product.images[this.i];
            } else {
                return { url: '/storage/images/app/no-image.png' };
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/category/product/info.vue":
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
        config: function config() {
            return this.$store.getters.getConfig;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/category/product/related-products.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__small_card__ = __webpack_require__("./resources/assets/js/components/category/product/small-card.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__small_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__small_card__);
//
//
//
//
//
//
//
//
//
//
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
    components: { smallCard: __WEBPACK_IMPORTED_MODULE_0__small_card___default.a },
    props: ['products'],
    methods: {
        scrollTo: function scrollTo(element, scrollPixels, duration) {
            var scrollPos = element.scrollLeft;
            // Condition to check if scrolling is required
            if (!((scrollPos === 0 || scrollPixels > 0) && (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0))) {
                var _scroll = function _scroll(timestamp) {
                    //Calculate the timeelapsed
                    var timeElapsed = timestamp - startTime;
                    //Calculate progress 
                    var progress = Math.min(timeElapsed / duration, 1);
                    //Set the scrolleft
                    element.scrollLeft = scrollPos + scrollPixels * progress;
                    //Check if elapsed time is less then duration then call the requestAnimation, otherwise exit
                    if (timeElapsed < duration) {
                        //Request for animation
                        window.requestAnimationFrame(_scroll);
                    } else {
                        return;
                    }
                };
                //Call requestAnimationFrame on scroll function first time


                // Get the start timestamp
                var startTime = "now" in window.performance ? performance.now() : new Date().getTime();

                window.requestAnimationFrame(_scroll);
            }
        },
        swipeLeft: function swipeLeft() {
            var content = this.$refs.content;
            this.scrollTo(content, -300, 800);
        },
        swipeRight: function swipeRight() {
            var content = this.$refs.content;
            this.scrollTo(content, 300, 800);
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/category/product/shop-button.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['product'],
    methods: {
        addFirstUnit: function addFirstUnit() {

            Vue.set(this.product, 'units', this.minUnits);
        }
    },
    computed: {
        minUnits: function minUnits() {
            return this.product.price > 0 ? 1 : this.product.pck_units;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/category/product/small-card.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shop_button_vue__ = __webpack_require__("./resources/assets/js/components/category/product/shop-button.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shop_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__shop_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cotizer_Img_modal_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/Img-modal.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cotizer_Img_modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__cotizer_Img_modal_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        product: Object,
        i: {
            Type: Number,
            default: 0
        }
    },
    components: {
        shopButton: __WEBPACK_IMPORTED_MODULE_0__shop_button_vue___default.a,
        imageModal: __WEBPACK_IMPORTED_MODULE_1__cotizer_Img_modal_vue___default.a
    },
    data: function data() {
        return {
            hovered: false,
            showModal: false,
            index: 0
        };
    },

    methods: {
        show: function show() {
            var _this = this;

            this.showModal = true;

            /* this.$refs.modal.$forceUpdate(); */
            setTimeout(function () {
                var element = _this.$refs.modal.$el;
                $(element).modal('show');
            }, 100);
        },
        closedModal: function closedModal() {
            var _this2 = this;

            this.modalProduct = null;
            this.showModal = false;
            setTimeout(function () {
                _this2.showModal = true;
            }, 100);
        }
    },

    computed: {
        productUrl: function productUrl() {
            var _this3 = this;

            var cats = this.$store.getters.getCategories;
            var category = cats.find(function (c) {
                return c.id == _this3.product.category_id;
            });

            var url = category.slug + '/' + this.product.slug;
            url = url.replace('//', '/');
            return url;
        },
        config: function config() {
            return this.$store.getters.getConfig;
        },
        image: function image() {

            if (this.product.images && this.product.images[this.i]) {
                return this.product.images[this.i];
            } else {
                return { url: '/storage/images/app/no-image.png' };
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/Img-modal.vue":
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/home/categories-pannel.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({

    computed: {
        searchTerm: function searchTerm() {
            return this.$store.getters.getSearchTerm;
        },
        categories: function categories() {
            return this.$store.getters.getNotPaused;
        }
    }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/home/floating-categories-pannel.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories_pannel_vue__ = __webpack_require__("./resources/assets/js/components/home/categories-pannel.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories_pannel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__categories_pannel_vue__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: { categoriesPannel: __WEBPACK_IMPORTED_MODULE_0__categories_pannel_vue___default.a },
  data: function data() {
    return {
      yStyle: 'top:100px'

    };
  },

  methods: {
    handleScroll: function handleScroll(e) {
      var def = 100;
      var ypos = window.scrollY;
      var wh = window.document.documentElement.clientHeight;
      var innerh = window.innerHeight;
      var scrollh = document.body.scrollHeight;
      var posicion = scrollh - (innerh + ypos);

      var fixedy = 100;
      if (posicion < 450) {
        fixedy = posicion - 450 + 100;
      }

      this.yStyle = 'top:' + fixedy + 'px';
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-094e94b5\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/Product.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.descri[data-v-094e94b5] {\n  font-size: 1.3rem;\n}\n.fixed-pannel[data-v-094e94b5] {\n  position: fixed;\n  top: 55px;\n  left: 20px;\n}\n.red-ribbon[data-v-094e94b5] {\n  background-color: #D52B1E;\n  width: 100%;\n  height: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  color: #fff;\n  margin-bottom: 20px;\n  margin-top: 10px;\n}\n.red-ribbon .logo-square[data-v-094e94b5] {\n    background-color: #fff;\n    border: 3px solid #868686;\n    font-size: 2rem;\n    color: #D52B1E;\n    /* padding:5px; */\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 75px;\n    width: 75px;\n}\nh1[data-v-094e94b5] {\n  font-size: 2rem;\n  white-space: nowrap;\n}\nimg[data-v-094e94b5] {\n  width: 100%;\n}\n.small-images[data-v-094e94b5] {\n  padding: 10px;\n  margin-left: 10px;\n}\n.small-image[data-v-094e94b5] {\n  padding: 5px;\n  border: 1px solid #868686;\n  margin-left: 5px;\n  cursor: pointer;\n}\n@media (max-width: 600px) {\n.red-ribbon[data-v-094e94b5] {\n    margin-top: 20px;\n    width: 100vw;\n    height: 60px;\n}\n.red-ribbon h1[data-v-094e94b5] {\n      margin-left: 10px;\n      font-size: 1.3rem;\n      white-space: normal;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-192f2bea\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/home/floating-categories-pannel.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.fixed-pannel[data-v-192f2bea] {\n  position: fixed;\n  z-index: 50;\n  top: 55px;\n  left: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3acb39d0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/home/categories-pannel.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.heading[data-v-3acb39d0] {\n  background-color: #D52B1E;\n  color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-bottom: 5px;\n  border-right: 1px solid #fff;\n}\n.selected[data-v-3acb39d0] {\n  border-left: 2px solid #D52B1E;\n  background-color: #D52B1E33;\n}\n.scrollable-pannel[data-v-3acb39d0] {\n  border: 1px solid #D52B1E;\n  background-color: #fff;\n  height: 422px;\n  max-width: 300px;\n  overflow-y: auto;\n  overflow-x: overlay;\n  width: 100%;\n}\n.scrollable-pannel ul[data-v-3acb39d0] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin: 0;\n    padding: 0;\n    padding-left: 5px;\n}\n.scrollable-pannel ul a[data-v-3acb39d0] {\n      color: #000;\n      margin-left: 5px;\n}\n.img-container[data-v-3acb39d0] {\n  width: 85px;\n}\n.img-container img[data-v-3acb39d0] {\n    width: 85px;\n}\nul[data-v-3acb39d0] {\n  list-style: none;\n}\nul li[data-v-3acb39d0] {\n    cursor: pointer;\n}\nul li[data-v-3acb39d0]:hover {\n      -webkit-transform: scale(1.2);\n              transform: scale(1.2);\n      z-index: 100;\n      background-color: #D52B1E33;\n}\na[data-v-3acb39d0]:hover {\n  color: #000;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42c87420\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/small-card.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.min-sign[data-v-42c87420] {\n  font-size: .85rem;\n  padding: 7px;\n  text-align: center;\n  white-space: normal;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\na[data-v-42c87420]:hover {\n  color: #000;\n}\n.price[data-v-42c87420], .pck_price[data-v-42c87420] {\n  text-align: center;\n}\n.shop-button-container[data-v-42c87420] {\n  margin-top: 5px;\n  width: 100%;\n}\n.title[data-v-42c87420] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 50px;\n  font-size: 1.5rem;\n}\n.product-card[data-v-42c87420] {\n  padding: 10px;\n  /*  border:1px solid #868686; */\n}\n.image-container[data-v-42c87420] {\n  width: 100%;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  /*  padding:10px;\n       border:1px solid #868686; */\n}\n.image-container .offer-ribbon[data-v-42c87420] {\n    width: 100px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    -webkit-transform: rotate(-23deg);\n            transform: rotate(-23deg);\n    -webkit-transition: width 1s;\n    transition: width 1s;\n}\n.image-container .hovered-ribbon[data-v-42c87420] {\n    width: 120px;\n    -webkit-transition: width 1s;\n    transition: width 1s;\n}\n.image-container img[data-v-42c87420] {\n    width: 100%;\n}\n.prices-container[data-v-42c87420] {\n  padding: 10px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.prices-container .price-bg[data-v-42c87420] {\n    margin: 5px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    padding: 10px 3px;\n    background-color: #D52B1E;\n    color: #fff;\n    text-align: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    font-weight: bold;\n    border-radius: 5%;\n    font-size: .90rem;\n    border-left: 2px solid #fff;\n    border-right: 2px solid #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-507fb960\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/related-products.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.x-scroll[data-v-507fb960] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow-y: hidden;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  position: relative;\n}\n.contain-all[data-v-507fb960] {\n  position: relative;\n  width: 100%;\n}\n.contain-all .left[data-v-507fb960], .contain-all .right[data-v-507fb960] {\n    position: absolute;\n    top: 45%;\n    cursor: pointer;\n    width: 90%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 80px;\n    height: 80px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: #868686cc;\n    font-size: 2rem;\n    color: #D52B1E;\n    border-radius: 50%;\n}\n.contain-all .left[data-v-507fb960] {\n    left: 0;\n}\n.contain-all .right[data-v-507fb960] {\n    right: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-527fb35a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Img-modal.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-dialog[data-v-527fb35a] {\n  max-width: 400px;\n}\n.image-container[data-v-527fb35a] {\n  position: relative;\n  overflow: hidden;\n}\n.image-container img[data-v-527fb35a] {\n    width: 100%;\n}\n.close-button[data-v-527fb35a] {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n}\n.controls[data-v-527fb35a] {\n  position: absolute;\n  bottom: 50%;\n  left: 0;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.controls .ctr[data-v-527fb35a] {\n    font-size: 2rem;\n    cursor: pointer;\n}\n@media (max-width: 600) {\n.modal-dialog[data-v-527fb35a] {\n    max-width: 300px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-544a8b9a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/card.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na[data-v-544a8b9a]:hover {\n  color: #000;\n}\n.min-sign[data-v-544a8b9a] {\n  font-size: 1.3rem;\n}\n.price[data-v-544a8b9a], .pck_price[data-v-544a8b9a] {\n  text-align: center;\n}\n.shop-button-container[data-v-544a8b9a] {\n  margin-top: 15px;\n  width: 100%;\n}\n.title[data-v-544a8b9a] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 50px;\n}\n.product-card[data-v-544a8b9a] {\n  padding: 10px;\n  /*   border:1px solid #868686; */\n}\nimg[data-v-544a8b9a] {\n  width: 100%;\n}\n.image-container[data-v-544a8b9a] {\n  cursor: pointer;\n  width: 55%;\n  overflow: hidden;\n  position: relative;\n}\n.image-container .offer-ribbon[data-v-544a8b9a] {\n    width: 120px;\n    -webkit-transition: width 1s;\n    transition: width 1s;\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    -webkit-transform: rotate(-23deg);\n            transform: rotate(-23deg);\n    /*  padding:10px;\n       border:1px solid #868686; */\n}\n.image-container .hovered-ribbon[data-v-544a8b9a] {\n    width: 150px;\n    -webkit-transition: width 1s;\n    transition: width 1s;\n}\n.prices-container[data-v-544a8b9a] {\n  padding: 10px;\n  width: 45%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.prices-container .price-bg[data-v-544a8b9a] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    padding: 15px 10px;\n    background-color: #D52B1E;\n    color: #fff;\n    text-align: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    font-weight: bold;\n    border-radius: 5%;\n    font-size: 2rem;\n}\n.price .price-bg[data-v-544a8b9a] {\n  font-size: 1.65rem;\n  padding: 10px;\n  margin-left: 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f637638\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/info.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.icon[data-v-5f637638] {\n  color: #D52B1E;\n  font-size: 2rem;\n  margin-right: 10px;\n}\np[data-v-5f637638] {\n  font-size: 1.2rem;\n  color: #3d3c3c;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-684b91cf\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/shop-button.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.hover-border[data-v-684b91cf]:hover {\n  border: 2px solid #868686;\n}\n.units-control[data-v-684b91cf] {\n  border: 1px solid #868686;\n  padding: 5px;\n  border-radius: 15%;\n}\n.bg-red[data-v-684b91cf] {\n  background-color: #D52B1E;\n  color: #fff;\n}\n.text-red[data-v-684b91cf] {\n  color: #D52B1E;\n}\n.text-red[data-v-684b91cf]:focus {\n    outline: none;\n}\n.btn-red[data-v-684b91cf] {\n  background-color: #fff;\n  color: #D52B1E;\n  cursor: pointer;\n  border: none;\n}\n.btn-red[data-v-684b91cf]:focus {\n    outline: none;\n    border: none;\n}\n.units-field[data-v-684b91cf] {\n  width: 70px;\n  border: none;\n  text-align: center;\n  outline: none;\n}\n.units-field[data-v-684b91cf]:focus {\n    outline: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-094e94b5\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/category/product/Product.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.product
    ? _c("div", { staticClass: "row" }, [
        _vm.$mq == "lg"
          ? _c("div", { staticClass: "col-3" }, [
              _c("div", [_c("categories-pannel")], 1)
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-lg-9 row p-0 m-0" }, [
          _vm.$mq == "lg"
            ? _c("div", { staticClass: "red-ribbon col-12" }, [
                _c("h1", { staticClass: " font-weight-bold" }, [
                  _vm._v(
                    "\n                 " +
                      _vm._s(_vm._f("uc")(_vm.product.name)) +
                      "\n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { attrs: { "col-lg-3": "" } })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 row" }, [
            _c(
              "div",
              { staticClass: "col-12 col-lg-8" },
              [
                _vm.$mq == "lg"
                  ? _c("card", {
                      attrs: { i: _vm.i, hideHead: true, product: _vm.product }
                    })
                  : _c("small-card", {
                      attrs: { i: _vm.i, product: _vm.product }
                    }),
                _vm._v(" "),
                _vm.product.images[1]
                  ? _c(
                      "div",
                      { staticClass: "small-images row" },
                      _vm._l(_vm.product.images, function(image, key) {
                        return _c(
                          "div",
                          {
                            key: image.url,
                            staticClass: "small-image col-3",
                            on: {
                              click: function($event) {
                                _vm.i = key
                              }
                            }
                          },
                          [
                            _c("v-lazy-image", {
                              attrs: { src: image.url, alt: _vm.product.name }
                            })
                          ],
                          1
                        )
                      })
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-lg-4" }, [_c("info-row")], 1)
          ]),
          _vm._v(" "),
          _vm.product.description
            ? _c("div", { staticClass: "col-12 descri" }, [
                _c("p", [
                  _vm._v(
                    " " +
                      _vm._s(_vm._f("ucFirst")(_vm.product.description)) +
                      " "
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.category
            ? _c(
                "div",
                { staticClass: "col-12" },
                [
                  _c("related-products", {
                    attrs: { products: _vm.category.products }
                  })
                ],
                1
              )
            : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-094e94b5", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-192f2bea\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/home/floating-categories-pannel.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "fixed-pannel", style: _vm.yStyle },
    [_c("categories-pannel")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-192f2bea", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3acb39d0\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/home/categories-pannel.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.categories
    ? _c("div", [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "scrollable-pannel" },
          _vm._l(_vm.categories, function(category) {
            return _c(
              "li",
              {
                key: category.name,
                class: { selected: _vm.$route.path == category.slug }
              },
              [
                _c(
                  "router-link",
                  { staticClass: "d-flex", attrs: { to: category.slug } },
                  [
                    category.image
                      ? _c(
                          "div",
                          { staticClass: "img-container" },
                          [
                            _c("v-lazy-image", {
                              attrs: { src: category.image, alt: category.name }
                            })
                          ],
                          1
                        )
                      : _vm._e(),
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "heading" }, [
      _c("h3", [_vm._v("Categorias:")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3acb39d0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-42c87420\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/category/product/small-card.vue":
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
            "ml-2 d-flex flex-column align-items-center product-card  justify-content-between h-100",
          on: {
            mouseenter: function($event) {
              _vm.hovered = true
            },
            mouseleave: function($event) {
              _vm.hovered = false
            }
          }
        },
        [
          _c("router-link", { attrs: { to: _vm.productUrl } }, [
            _c("h2", { staticClass: "text-center title" }, [
              _vm._v(_vm._s(_vm._f("uc")(_vm.product.name)))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex w-100 flex-column" }, [
            _c(
              "div",
              { staticClass: "image-container", on: { click: _vm.show } },
              [
                _c("v-lazy-image", { attrs: { src: _vm.image.url } }),
                _vm._v(" "),
                _vm.product.offer && _vm.config && !_vm.config.maintenance
                  ? _c(
                      "div",
                      {
                        staticClass: "offer-ribbon",
                        class: { "hovered-ribbon": _vm.hovered }
                      },
                      [
                        _c("v-lazy-image", {
                          attrs: { src: "/storage/images/app/oferta.png" }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _vm.config && !_vm.config.maintenance
              ? _c("div", { staticClass: "prices-container" }, [
                  _vm.product.price > 0 &&
                  _vm.product.price != _vm.product.pck_price
                    ? _c("div", { staticClass: "price" }, [
                        _c("div", { staticClass: "price-bg" }, [
                          _vm._v(
                            "\n                    $" +
                              _vm._s(_vm._f("price")(_vm.product.price)) +
                              " C/U\n                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "min-sign" }, [
                          _vm._v(
                            " Menos de " +
                              _vm._s(_vm.product.pck_units) +
                              " unidades "
                          )
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "pck_price" }, [
                    _c("div", { staticClass: "price-bg" }, [
                      _vm._v(
                        "\n                    $" +
                          _vm._s(_vm._f("price")(_vm.product.pck_price)) +
                          " C/U\n                "
                      )
                    ]),
                    _vm._v(" "),
                    _vm.product.price == 0 && _vm.product.pck_units > 1
                      ? _c("span", { staticClass: "min-sign" }, [
                          _vm._v(
                            " Mínimo " +
                              _vm._s(_vm.product.pck_units) +
                              " unidades "
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.product.pck_price < _vm.product.price &&
                    _vm.product.pck_units > 1
                      ? _c("span", { staticClass: "min-sign" }, [
                          _vm._v(
                            " Más de " +
                              _vm._s(_vm.product.pck_units) +
                              " unidades "
                          )
                        ])
                      : _vm._e()
                  ])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.config && !_vm.config.maintenance
            ? _c(
                "div",
                { staticClass: "shop-button-container" },
                [_c("shop-button", { attrs: { product: _vm.product } })],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          this.showModal
            ? _c("image-modal", {
                ref: "modal",
                attrs: { product: _vm.product },
                on: { close: _vm.closedModal }
              })
            : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-42c87420", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-507fb960\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/category/product/related-products.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "contain-all" }, [
    _c(
      "div",
      { ref: "content", staticClass: "x-scroll" },
      _vm._l(_vm.products, function(p) {
        return _c(
          "div",
          { key: p.code },
          [_c("smallCard", { attrs: { product: p } })],
          1
        )
      })
    ),
    _vm._v(" "),
    _vm.$mq == "lg"
      ? _c(
          "div",
          { staticClass: "left" },
          [
            _c("fa-icon", {
              attrs: { icon: "chevron-left" },
              on: { click: _vm.swipeLeft }
            })
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.$mq == "lg"
      ? _c(
          "div",
          { staticClass: "right", on: { click: _vm.swipeRight } },
          [_c("fa-icon", { attrs: { icon: "chevron-right" } })],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-507fb960", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-527fb35a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/Img-modal.vue":
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
              _c("div", { staticClass: "modal-header text-center" }, [
                _c("h5", { staticClass: "modal-title w-100 text-center " }, [
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
                    _vm.product.images && _vm.product.images[1]
                      ? _c("div", { staticClass: "controls" }, [
                          _c(
                            "span",
                            {
                              staticClass: "ctr",
                              on: {
                                click: function($event) {
                                  _vm.changeImage("prev")
                                }
                              }
                            },
                            [
                              _c("fa-icon", { attrs: { icon: "chevron-left" } })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass: "ctr",
                              on: {
                                click: function($event) {
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-544a8b9a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/category/product/card.vue":
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
            "d-flex flex-column align-items-center product-card  justify-content-between ",
          on: {
            mouseenter: function($event) {
              _vm.hovered = true
            },
            mouseleave: function($event) {
              _vm.hovered = false
            }
          }
        },
        [
          _c("router-link", { attrs: { to: _vm.productUrl } }, [
            !_vm.hideHead
              ? _c("h2", { staticClass: "text-center title" }, [
                  _vm._v(_vm._s(_vm._f("uc")(_vm.product.name)))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex w-100" }, [
            _c(
              "div",
              { staticClass: "image-container", on: { click: _vm.show } },
              [
                _c("v-lazy-image", { attrs: { src: _vm.image.url } }),
                _vm._v(" "),
                _vm.product.offer
                  ? _c(
                      "div",
                      {
                        staticClass: "offer-ribbon",
                        class: { "hovered-ribbon": _vm.hovered }
                      },
                      [
                        _c("v-lazy-image", {
                          attrs: { src: "/storage/images/app/oferta.png" }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _vm.config && !_vm.config.maintenance
              ? _c("div", { staticClass: "prices-container" }, [
                  _c("div", { staticClass: "pck_price" }, [
                    _c("div", { staticClass: "price-bg" }, [
                      _vm._v(
                        "\n                    $" +
                          _vm._s(_vm._f("price")(_vm.product.pck_price)) +
                          " C/U\n                "
                      )
                    ]),
                    _vm._v(" "),
                    _vm.product.price == 0 && _vm.product.pck_units > 1
                      ? _c("span", { staticClass: "min-sign" }, [
                          _vm._v(
                            " Mínimo " +
                              _vm._s(_vm.product.pck_units) +
                              " unidades "
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.product.pck_price < _vm.product.price &&
                    _vm.product.pck_units > 1
                      ? _c("span", { staticClass: "min-sign" }, [
                          _vm._v(
                            " Más de " +
                              _vm._s(_vm.product.pck_units) +
                              " unidades "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _vm.product.price > 0 &&
                  _vm.product.price != _vm.product.pck_price
                    ? _c("div", { staticClass: "price" }, [
                        _c("div", { staticClass: "price-bg" }, [
                          _vm._v(
                            "\n                    $" +
                              _vm._s(_vm._f("price")(_vm.product.price)) +
                              " C/U\n                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "min-sign" }, [
                          _vm._v(
                            " Menos de " +
                              _vm._s(_vm.product.pck_units) +
                              " unidades "
                          )
                        ])
                      ])
                    : _vm._e()
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.config && !_vm.config.maintenance
            ? _c(
                "div",
                { staticClass: "shop-button-container" },
                [_c("shop-button", { attrs: { product: _vm.product } })],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          this.showModal
            ? _c("image-modal", {
                ref: "modal",
                attrs: { product: _vm.product },
                on: { close: _vm.closedModal }
              })
            : _vm._e()
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5f637638\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/category/product/info.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.config
    ? _c("div", { staticClass: "d-flex flex-column" }, [
        _c(
          "div",
          { staticClass: "d-flex align-items-center" },
          [
            _c("fa-icon", { staticClass: "icon", attrs: { icon: "home" } }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Compra mínima por local $" +
                  _vm._s(_vm.config.minbuy) +
                  ". Forma de pago: efectivo"
              )
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "d-flex align-items-center" },
          [
            _c("fa-icon", { staticClass: "icon", attrs: { icon: "truck" } }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Compra mínima para envíos $" +
                  _vm._s(_vm.config.minbuy_ship) +
                  ". Forma de pago: Deposito / Transferencia bancaria"
              )
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "d-flex align-items-center" },
          [
            _c("fa-icon", {
              staticClass: "icon",
              attrs: { icon: "user-check" }
            }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Atención personalizada por Whatsapp al 11 2708-2683. De lunes a viernes de 9hs a 18hs"
              )
            ])
          ],
          1
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
    require("vue-hot-reload-api")      .rerender("data-v-5f637638", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-684b91cf\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/category/product/shop-button.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    !_vm.product.units || _vm.product.units < _vm.minUnits
      ? _c("div", { staticClass: "col-12" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-block bg-red hover-border",
              staticStyle: { cursor: "pointer" },
              on: { click: _vm.addFirstUnit }
            },
            [
              _c("fa-icon", { attrs: { icon: "shopping-cart" } }),
              _vm._v(" Agregar al carrito \n        ")
            ],
            1
          )
        ])
      : _c("div", { staticClass: "d-flex justify-content-center" }, [
          _c(
            "div",
            {
              staticClass: "mr-1 d-2 d-flex flex-column justify-content-center",
              staticStyle: { "font-size": "2rem" }
            },
            [
              _c("fa-icon", {
                staticClass: "bg-white text-red",
                attrs: { icon: "shopping-cart" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: " d-flex  justify-content-center units-control" },
            [
              _c(
                "button",
                {
                  staticClass: "btn-red",
                  on: {
                    click: function($event) {
                      _vm.product.units--
                    }
                  }
                },
                [_c("fa-icon", { attrs: { icon: "minus" } })],
                1
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.product.units,
                    expression: "product.units"
                  }
                ],
                staticClass: " units-field",
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
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn-red",
                  on: {
                    click: function($event) {
                      _vm.product.units++
                    }
                  }
                },
                [_c("fa-icon", { attrs: { icon: "plus" } })],
                1
              )
            ]
          )
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-684b91cf", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-094e94b5\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/Product.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-094e94b5\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/Product.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("01f14b6a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-094e94b5\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Product.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-094e94b5\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Product.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-192f2bea\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/home/floating-categories-pannel.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-192f2bea\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/home/floating-categories-pannel.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("30cb9aeb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-192f2bea\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./floating-categories-pannel.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-192f2bea\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./floating-categories-pannel.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3acb39d0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/home/categories-pannel.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3acb39d0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/home/categories-pannel.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("29fee088", content, false, {});
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42c87420\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/small-card.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42c87420\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/small-card.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("7aa72272", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42c87420\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./small-card.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42c87420\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./small-card.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-507fb960\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/related-products.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-507fb960\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/related-products.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("2b8965b6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-507fb960\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./related-products.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-507fb960\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./related-products.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-527fb35a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Img-modal.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-527fb35a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Img-modal.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("124fa637", content, false, {});
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-544a8b9a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/card.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-544a8b9a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/card.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("b361917c", content, false, {});
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f637638\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/info.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f637638\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/info.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("569eebae", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f637638\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./info.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f637638\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./info.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-684b91cf\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/shop-button.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-684b91cf\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/shop-button.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("74e11d8a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-684b91cf\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./shop-button.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-684b91cf\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./shop-button.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/category/product/Product.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-094e94b5\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/Product.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/category/product/Product.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-094e94b5\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/category/product/Product.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-094e94b5"
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

/***/ "./resources/assets/js/components/category/product/card.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-544a8b9a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/card.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/category/product/card.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-544a8b9a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/category/product/card.vue")
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

/***/ "./resources/assets/js/components/category/product/info.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f637638\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/info.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/category/product/info.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5f637638\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/category/product/info.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5f637638"
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
Component.options.__file = "resources/assets/js/components/category/product/info.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f637638", Component.options)
  } else {
    hotAPI.reload("data-v-5f637638", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/category/product/related-products.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-507fb960\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/related-products.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/category/product/related-products.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-507fb960\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/category/product/related-products.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-507fb960"
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
Component.options.__file = "resources/assets/js/components/category/product/related-products.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-507fb960", Component.options)
  } else {
    hotAPI.reload("data-v-507fb960", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/category/product/shop-button.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-684b91cf\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/shop-button.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/category/product/shop-button.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-684b91cf\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/category/product/shop-button.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-684b91cf"
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

/***/ "./resources/assets/js/components/category/product/small-card.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42c87420\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/small-card.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/category/product/small-card.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-42c87420\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/category/product/small-card.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-42c87420"
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
Component.options.__file = "resources/assets/js/components/category/product/small-card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42c87420", Component.options)
  } else {
    hotAPI.reload("data-v-42c87420", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/cotizer/Img-modal.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-527fb35a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Img-modal.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/Img-modal.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-527fb35a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/Img-modal.vue")
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

/***/ "./resources/assets/js/components/home/categories-pannel.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3acb39d0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/home/categories-pannel.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/home/categories-pannel.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3acb39d0\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/home/categories-pannel.vue")
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

/***/ "./resources/assets/js/components/home/floating-categories-pannel.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-192f2bea\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/home/floating-categories-pannel.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/home/floating-categories-pannel.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-192f2bea\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/home/floating-categories-pannel.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-192f2bea"
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
Component.options.__file = "resources/assets/js/components/home/floating-categories-pannel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-192f2bea", Component.options)
  } else {
    hotAPI.reload("data-v-192f2bea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});