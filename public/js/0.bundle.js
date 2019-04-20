webpackJsonp([0],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/admin/paginator.vue":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: {
        shopButton: __WEBPACK_IMPORTED_MODULE_0__shop_button_vue___default.a
    },
    data: function data() {
        return {
            index: 0
        };
    },

    computed: {
        productUrl: function productUrl() {
            var _this = this;

            var cats = this.$store.getters.getCategories;
            var category = cats.find(function (c) {
                return c.id == _this.product.category_id;
            });

            var url = category.slug + '/' + this.product.slug;
            url = url.replace('//', '/');
            return url;
        },
        config: function config() {
            return this.$store.getters.getConfig;
        },
        image: function image() {

            if (this.product.images && this.product.images[this.index]) {
                return this.product.images[this.index];
            } else {
                return { url: '/storage/images/app/no-image.png' };
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/Cotizer.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__web_cotizer_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/web/cotizer.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__web_cotizer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__web_cotizer_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mobile_cotizer_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/mobile/cotizer.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mobile_cotizer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mobile_cotizer_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__banner_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/banner.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__banner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__banner_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        webCotizer: __WEBPACK_IMPORTED_MODULE_0__web_cotizer_vue___default.a, mobileCotizer: __WEBPACK_IMPORTED_MODULE_1__mobile_cotizer_vue___default.a

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
        tutoSeen: function tutoSeen() {
            return this.$store.getters.getTutoSeen;
        },
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/banner.vue":
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
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/categories-acordion.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_table_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/products-table.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__products_table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Img_modal_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/Img-modal.vue");
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/code-selector.vue":
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/hide-opt-button.vue":
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/mobile/cotizer.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_table_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/products-table.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__products_table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categories_acordion_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/categories-acordion.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categories_acordion_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__categories_acordion_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_selector_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/code-selector.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_selector_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__code_selector_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__banner_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/banner.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__banner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__banner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hide_opt_button_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/hide-opt-button.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hide_opt_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__hide_opt_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tutorial_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/tutorial.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tutorial_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__tutorial_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        cotizerTutorial: __WEBPACK_IMPORTED_MODULE_5__tutorial_vue___default.a,
        productsTable: __WEBPACK_IMPORTED_MODULE_0__products_table_vue___default.a,
        categoriesAcordion: __WEBPACK_IMPORTED_MODULE_1__categories_acordion_vue___default.a,
        codeSelector: __WEBPACK_IMPORTED_MODULE_2__code_selector_vue___default.a,
        appBanner: __WEBPACK_IMPORTED_MODULE_3__banner_vue___default.a,

        hideOptbutton: __WEBPACK_IMPORTED_MODULE_4__hide_opt_button_vue___default.a
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
        tutoSeen: function tutoSeen() {
            return this.$store.getters.getTutoSeen;
        },
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/products-table.vue":
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/tutorial.vue":
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
        setViewed: function setViewed() {
            this.viewed = true;
            this.$store.commit('setTutoSeen');
        },
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/web/cotizer.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_grid_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/web/products-grid.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_grid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__products_grid_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categories_acordion_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/categories-acordion.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categories_acordion_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__categories_acordion_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_selector_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/code-selector.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_selector_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__code_selector_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__banner_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/banner.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__banner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__banner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hide_opt_button_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/hide-opt-button.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hide_opt_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__hide_opt_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__floating_categories_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/web/floating-categories.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__floating_categories_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__floating_categories_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin_paginator_vue__ = __webpack_require__("./resources/assets/js/components/admin/admin/paginator.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin_paginator_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__admin_admin_paginator_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        paginator: __WEBPACK_IMPORTED_MODULE_6__admin_admin_paginator_vue___default.a,
        productsGrid: __WEBPACK_IMPORTED_MODULE_0__products_grid_vue___default.a, floatingCategories: __WEBPACK_IMPORTED_MODULE_5__floating_categories_vue___default.a,
        categoriesAcordion: __WEBPACK_IMPORTED_MODULE_1__categories_acordion_vue___default.a,
        codeSelector: __WEBPACK_IMPORTED_MODULE_2__code_selector_vue___default.a,
        appBanner: __WEBPACK_IMPORTED_MODULE_3__banner_vue___default.a,

        hideOptbutton: __WEBPACK_IMPORTED_MODULE_4__hide_opt_button_vue___default.a
    },
    data: function data() {
        return {
            selectedPage: 1,
            productsPerPage: 30,
            loading: true,
            selectedCategory: null
        };
    },

    watch: {
        searchTerm: function searchTerm() {
            if (this.searchTerm.trim().length > 1) {
                this.selectedPage = 1;
                this.selectedCategory = null;
                window.scrollTo(0, 0);
            }
        },
        selectedCategory: function selectedCategory() {
            if (this.selectedCategory) {
                window.scrollTo(0, 0);
            }
            /* Quitar search term */
        }
    },
    computed: {
        searchTerm: function searchTerm() {
            return this.$store.getters.getSearchTerm;
        },
        tutoSeen: function tutoSeen() {
            return this.$store.getters.getTutoSeen;
        },
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
            if (this.searchTerm.trim() != '' && this.searchTerm.trim().length > 1) {
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
            } else if (this.selectedCategory) {
                return this.selectedCategory.products.filter(function (p) {
                    return !p.paused;
                });
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
        setSelectedCategory: function setSelectedCategory(e) {

            this.selectedCategory = this.categories.find(function (c) {
                return c.id == e;
            });

            this.$store.commit('setSearchTerm', '');
        },
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
    },
    mounted: function mounted() {
        if (!this.searchTerm && !this.selectedCategory && this.categories) {
            this.selectedCategory = this.categories[0];
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/web/floating-categories.vue":
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
    data: function data() {
        return {
            selected: null,
            yStyle: 'top:90px'

        };
    },

    computed: {
        searchTerm: function searchTerm() {
            return this.$store.getters.getSearchTerm;
        },
        categories: function categories() {
            return this.$store.getters.getNotPaused;
        }
    },
    watch: {
        categories: function categories() {
            if (!this.selected) {
                this.selected = this.categories[0].id;
            }
        },
        selected: function selected() {
            if (this.selected) {
                this.$emit('selectedCategory', this.selected);
            }
        },
        searchTerm: function searchTerm() {
            if (this.searchTerm.trim().length > 1) {
                this.selected = null;
            }
        }
    },
    methods: {
        handleScroll: function handleScroll(e) {
            var def = 90;
            var ypos = window.scrollY;
            var wh = window.document.documentElement.clientHeight;
            var innerh = window.innerHeight;
            var scrollh = document.body.scrollHeight;
            var posicion = scrollh - (innerh + ypos);

            var fixedy = 90;
            if (posicion < 450) {
                fixedy = posicion - 450 + 90;
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/web/products-grid.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category_product_small_card_vue__ = __webpack_require__("./resources/assets/js/components/category/product/small-card.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category_product_small_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__category_product_small_card_vue__);
//
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
    components: { productCard: __WEBPACK_IMPORTED_MODULE_0__category_product_small_card_vue___default.a },
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42c87420\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/product/small-card.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.min-sign[data-v-42c87420] {\n  font-size: .85rem;\n}\n.price[data-v-42c87420], .pck_price[data-v-42c87420] {\n  text-align: center;\n}\n.shop-button-container[data-v-42c87420] {\n  margin-top: 5px;\n  width: 100%;\n}\n.title[data-v-42c87420] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 50px;\n  font-size: 1.5rem;\n}\n.product-card[data-v-42c87420] {\n  padding: 10px;\n  border: 1px solid #868686;\n}\n.image-container[data-v-42c87420] {\n  width: 100%;\n  overflow: hidden;\n  /*  padding:10px;\n       border:1px solid #868686; */\n}\n.image-container img[data-v-42c87420] {\n    width: 100%;\n}\n.prices-container[data-v-42c87420] {\n  padding: 10px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.prices-container .price-bg[data-v-42c87420] {\n    margin: 5px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    padding: 10px 3px;\n    background-color: #D52B1E;\n    color: #fff;\n    text-align: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    font-weight: bold;\n    border-radius: 13%;\n    font-size: .90rem;\n    border-left: 2px solid #fff;\n    border-right: 2px solid #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-437ac699\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/mobile/cotizer.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.contain-all[data-v-437ac699] {\n  width: 100vw;\n  padding: 5px;\n  overflow: hidden;\n}\n.lglogo[data-v-437ac699] {\n  width: 200px;\n  height: 100px;\n}\n.smlogo[data-v-437ac699] {\n  width: 100px;\n  height: 50px;\n  margin-bottom: 15px;\n  margin-top: 10px;\n}\nimg[data-v-437ac699] {\n  width: 100%;\n}\n.loader[data-v-437ac699] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  z-index: 110;\n  background-color: #ddddddaa;\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: start;\n  padding-top: 5%;\n}\n.search-bar[data-v-437ac699] {\n  border: 1px solid #D52B1E;\n  padding: 3px;\n  margin-top: 20px;\n  text-align: center;\n}\n.search-bar[data-v-437ac699]::-webkit-input-placeholder {\n    color: #D52B1E;\n    text-align: center;\n}\n.search-bar[data-v-437ac699]:-ms-input-placeholder {\n    color: #D52B1E;\n    text-align: center;\n}\n.search-bar[data-v-437ac699]::-ms-input-placeholder {\n    color: #D52B1E;\n    text-align: center;\n}\n.search-bar[data-v-437ac699]::placeholder {\n    color: #D52B1E;\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48ec1a84\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/tutorial.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.redcircle[data-v-48ec1a84] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100px;\n  height: 100px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: rgba(170, 16, 16, 0.479);\n}\n.animation[data-v-48ec1a84] {\n  position: absolute;\n  top: 70px;\n  left: 20px;\n  color: #131212;\n  font-size: 3rem;\n}\n.image-container[data-v-48ec1a84] {\n  width: 50%;\n  position: relative;\n}\n.overlay[data-v-48ec1a84] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #cccc;\n}\n.speech-bubble[data-v-48ec1a84] {\n  position: fixed;\n  top: 50px;\n  right: 50px;\n  background: #57b2bb;\n  border-radius: .4em;\n  width: 50%;\n  padding: 20px;\n  text-align: center;\n  color: #fff;\n}\n.speech-bubble[data-v-48ec1a84]:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 37px solid transparent;\n  border-right-color: #57b2bb;\n  border-left: 0;\n  border-bottom: 0;\n  margin-top: -18.5px;\n  margin-left: -37px;\n}\n@media (min-width: 900px) {\n.overlay[data-v-48ec1a84] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.image-container[data-v-48ec1a84] {\n    margin-left: 22%;\n}\n.speech-bubble[data-v-48ec1a84] {\n    top: 150px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-527fb35a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Img-modal.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.image-container[data-v-527fb35a] {\n  position: relative;\n  overflow: hidden;\n}\n.close-button[data-v-527fb35a] {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n}\n.controls[data-v-527fb35a] {\n  position: absolute;\n  bottom: 50%;\n  left: 0;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.controls .fa[data-v-527fb35a] {\n    font-size: 2rem;\n    cursor: pointer;\n}\n", ""]);

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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e3ddd8a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/categories-acordion.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.category-image-container[data-v-6e3ddd8a] {\n  margin-right: 15px;\n  height: 100%;\n  min-width: 70px;\n}\n.card-header[data-v-6e3ddd8a] {\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.sampleImage[data-v-6e3ddd8a] {\n  width: 50px;\n}\n.btn-link[data-v-6e3ddd8a] {\n  color: black;\n}\nimg[data-v-6e3ddd8a] {\n  width: 100%;\n}\n@media (max-width: 600px) {\ntd[data-v-6e3ddd8a] {\n    white-space: normal;\n}\n#accordion[data-v-6e3ddd8a] {\n    margin: 0 -3%;\n}\ntable[data-v-6e3ddd8a] {\n    table-layout: fixed;\n    width: 95vw;\n    font-size: 0.66rem;\n    font-weight: bold;\n}\ninput[type=\"number\"][data-v-6e3ddd8a] {\n    max-width: 70px;\n}\n.card-body[data-v-6e3ddd8a], table th[data-v-6e3ddd8a], table td[data-v-6e3ddd8a] {\n    padding: 5px;\n}\n}\n@media (min-width: 600px) {\n.sampleImage[data-v-6e3ddd8a] {\n    width: 150px;\n}\ntable[data-v-6e3ddd8a] {\n    font-size: 1rem;\n    font-weight: normal;\n}\ntd[data-v-6e3ddd8a] {\n    white-space: normal;\n}\n.card-body[data-v-6e3ddd8a], .container[data-v-6e3ddd8a] {\n    padding: 1.25rem;\n}\n}\n.big[data-v-6e3ddd8a] {\n  font-size: 1.7rem;\n  white-space: normal;\n  padding: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-731ed9d6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Cotizer.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.contain-all[data-v-731ed9d6] {\n  width: 100vw;\n  padding: 5px;\n  overflow: hidden;\n}\n.lglogo[data-v-731ed9d6] {\n  width: 200px;\n  height: 100px;\n}\n.smlogo[data-v-731ed9d6] {\n  width: 100px;\n  height: 50px;\n  margin-bottom: 15px;\n  margin-top: 10px;\n}\nimg[data-v-731ed9d6] {\n  width: 100%;\n}\n.loader[data-v-731ed9d6] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  z-index: 110;\n  background-color: #ddddddaa;\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: start;\n  padding-top: 5%;\n}\n.search-bar[data-v-731ed9d6] {\n  border: 1px solid #D52B1E;\n  padding: 3px;\n  margin-top: 20px;\n  text-align: center;\n}\n.search-bar[data-v-731ed9d6]::-webkit-input-placeholder {\n    color: #D52B1E;\n    text-align: center;\n}\n.search-bar[data-v-731ed9d6]:-ms-input-placeholder {\n    color: #D52B1E;\n    text-align: center;\n}\n.search-bar[data-v-731ed9d6]::-ms-input-placeholder {\n    color: #D52B1E;\n    text-align: center;\n}\n.search-bar[data-v-731ed9d6]::placeholder {\n    color: #D52B1E;\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76fa018c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/banner.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.red-ribbon[data-v-76fa018c] {\n  background-color: #D52B1E;\n  width: 100%;\n  height: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  color: #fff;\n  margin-bottom: 20px;\n  margin-top: 10px;\n}\n.red-ribbon .cart-logo-square[data-v-76fa018c] {\n    background-color: #fff;\n    border: 3px solid #868686;\n    font-size: 2rem;\n    color: #D52B1E;\n    /* padding:5px; */\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 75px;\n    width: 75px;\n}\n.banner-font[data-v-76fa018c] {\n  font-size: 1.25rem;\n}\n.colorRed[data-v-76fa018c] {\n  color: red;\n  -webkit-transition: ease 1s;\n  transition: ease 1s;\n}\n.colorBlue[data-v-76fa018c] {\n  color: blue;\n  -webkit-transition: ease 1s;\n  transition: ease 1s;\n}\n.todaright[data-v-76fa018c] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-transform: rotate(15deg);\n          transform: rotate(15deg);\n  -webkit-transition: ease 1s;\n  transition: ease 1s;\n}\n.todaleft[data-v-76fa018c] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-transform: rotate(-15deg);\n          transform: rotate(-15deg);\n  -webkit-transition: 1s ease;\n  transition: 1s ease;\n}\n.dared[data-v-76fa018c] {\n  /* transform: rotate(-15deg); */\n  color: red;\n  -webkit-transition: 1s ease;\n  transition: 1s ease;\n}\n.dablue[data-v-76fa018c] {\n  color: blue;\n  -webkit-transition: ease 1s;\n  transition: ease 1s;\n}\n.neg-margins[data-v-76fa018c] {\n  margin-right: -7%;\n  margin-left: -3%;\n}\nh2[data-v-76fa018c] {\n  white-space: nowrap;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-77e27c8a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/admin/paginator.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pagination[data-v-77e27c8a] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9eb29e50\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/web/floating-categories.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.heading[data-v-9eb29e50] {\n  background-color: #D52B1E;\n  color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.selected[data-v-9eb29e50] {\n  border-left: 2px solid #D52B1E;\n  background-color: #D52B1E33;\n}\n.scrollable-pannel[data-v-9eb29e50] {\n  border: 1px solid #D52B1E;\n  background-color: #fff;\n  position: fixed;\n  top: 90px;\n  left: 20px;\n  height: 450px;\n  max-width: 300px;\n  overflow-y: auto;\n  overflow-x: overlay;\n  width: 100%;\n}\n.scrollable-pannel ul[data-v-9eb29e50] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin: 0;\n    padding: 0;\n    padding-left: 5px;\n}\n.scrollable-pannel ul a[data-v-9eb29e50] {\n      color: #000;\n      margin-left: 5px;\n}\n.img-container[data-v-9eb29e50] {\n  width: 85px;\n}\n.img-container img[data-v-9eb29e50] {\n    width: 85px;\n}\nul[data-v-9eb29e50] {\n  list-style: none;\n}\nul li[data-v-9eb29e50] {\n    cursor: pointer;\n}\nul li[data-v-9eb29e50]:hover {\n      -webkit-transform: scale(1.2);\n              transform: scale(1.2);\n      z-index: 100;\n      background-color: #D52B1E33;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cdc4c08a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/web/cotizer.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.contain-all[data-v-cdc4c08a] {\n  width: 100vw;\n  padding: 5px;\n  overflow: hidden;\n}\n.lglogo[data-v-cdc4c08a] {\n  width: 200px;\n  height: 100px;\n}\n.smlogo[data-v-cdc4c08a] {\n  width: 100px;\n  height: 50px;\n  margin-bottom: 15px;\n  margin-top: 10px;\n}\nimg[data-v-cdc4c08a] {\n  width: 100%;\n}\n.loader[data-v-cdc4c08a] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  z-index: 110;\n  background-color: #ddddddaa;\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: start;\n  padding-top: 5%;\n}\n.search-bar[data-v-cdc4c08a] {\n  border: 1px solid #D52B1E;\n  padding: 3px;\n  margin-top: 20px;\n  text-align: center;\n}\n.search-bar[data-v-cdc4c08a]::-webkit-input-placeholder {\n    color: #D52B1E;\n    text-align: center;\n}\n.search-bar[data-v-cdc4c08a]:-ms-input-placeholder {\n    color: #D52B1E;\n    text-align: center;\n}\n.search-bar[data-v-cdc4c08a]::-ms-input-placeholder {\n    color: #D52B1E;\n    text-align: center;\n}\n.search-bar[data-v-cdc4c08a]::placeholder {\n    color: #D52B1E;\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f226c7f6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/products-table.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-header[data-v-f226c7f6] {\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.sampleImage[data-v-f226c7f6] {\n  width: 50px;\n}\n.btn-link[data-v-f226c7f6] {\n  color: black;\n}\nimg[data-v-f226c7f6] {\n  width: 100%;\n}\n@media (max-width: 600px) {\ntd[data-v-f226c7f6] {\n    white-space: normal;\n}\n#accordion[data-v-f226c7f6] {\n    margin: 0 -3%;\n}\ntable[data-v-f226c7f6] {\n    table-layout: fixed;\n    width: 95vw;\n    font-size: 0.66rem;\n    font-weight: bold;\n}\ninput[type=\"number\"][data-v-f226c7f6] {\n    max-width: 70px;\n}\n.card-body[data-v-f226c7f6], table th[data-v-f226c7f6], table td[data-v-f226c7f6] {\n    padding: 5px;\n}\n}\n@media (min-width: 600px) {\n.sampleImage[data-v-f226c7f6] {\n    width: 150px;\n}\ntable[data-v-f226c7f6] {\n    font-size: 1rem;\n    font-weight: normal;\n}\ntd[data-v-f226c7f6] {\n    white-space: normal;\n}\n.card-body[data-v-f226c7f6], .container[data-v-f226c7f6] {\n    padding: 1.25rem;\n}\n}\n.big[data-v-f226c7f6] {\n  font-size: 1.7rem;\n  white-space: normal;\n  padding: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fd58c738\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/web/products-grid.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


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
            "d-flex flex-column align-items-center product-card  justify-content-between h-100"
        },
        [
          _c("h2", { staticClass: "text-center title" }, [
            _vm._v(_vm._s(_vm._f("uc")(_vm.product.name)))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex w-100 flex-column" }, [
            _c(
              "div",
              { staticClass: "image-container" },
              [_c("v-lazy-image", { attrs: { src: _vm.image.url } })],
              1
            ),
            _vm._v(" "),
            _vm.config && !_vm.config.hide_prices
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
                            " Minimo " +
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
                            " Mas de " +
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
          _c(
            "div",
            { staticClass: "shop-button-container" },
            [_c("shop-button", { attrs: { product: _vm.product } })],
            1
          )
        ]
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-437ac699\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/mobile/cotizer.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "row w-100 d-flex justify-content-center" }, [
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
              "col-12 col-lg-4 text-center neg-margins": _vm.$mq != "lg"
            }
          },
          [_c("app-banner")],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("input", {
          staticClass: "form-control search-bar",
          attrs: { type: "text", placeholder: "¿ QUE ESTAS BUSCANDO ?" },
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
      _vm.searchTerm.trim().length < 3 ? _c("categories-acordion") : _vm._e(),
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
      !_vm.user || (_vm.user.role_id > 2 && !_vm.tutoSeen)
        ? _c("cotizer-tutorial")
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
    require("vue-hot-reload-api")      .rerender("data-v-437ac699", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-48ec1a84\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/tutorial.vue":
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
                  on: { click: _vm.setViewed }
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6e3ddd8a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/categories-acordion.vue":
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-731ed9d6\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/Cotizer.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "contain-all" }, [
    !_vm.categories || _vm.categories.length < 1 || !_vm.config
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
    _vm.config && _vm.user && _vm.config.maintenance && _vm.user.role_id > 2
      ? _c("div", [_vm._m(0)])
      : _vm._e(),
    _vm._v(" "),
    _vm.categories && _vm.config && !_vm.config.maintenance
      ? _c(
          "div",
          {
            staticClass: " w-100",
            class: { "bg-white": _vm.user != null && _vm.user.role_id > 2 }
          },
          [
            _vm.$mq != "lg" ? _c("mobileCotizer") : _vm._e(),
            _vm._v(" "),
            _vm.$mq == "lg" ? _c("web-cotizer") : _vm._e()
          ],
          1
        )
      : _vm._e()
  ])
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-74ba080f\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/code-selector.vue":
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-76fa018c\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/banner.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "neg-margins" }, [
    _c("div", { staticClass: "red-ribbon col-12" }, [
      _c(
        "div",
        { staticClass: "cart-logo-square" },
        [_c("fa-icon", { attrs: { icon: "shopping-cart" } })],
        1
      ),
      _vm._v(" "),
      _c("h2", { staticClass: " font-weight-bold" }, [
        _vm._v("\n                HACE TU PEDIDO\n        ")
      ]),
      _vm._v(" "),
      _c("div", { attrs: { "col-lg-3": "" } })
    ]),
    _vm._v(" "),
    _vm.configs
      ? _c("div", { staticClass: "col-12 row" }, [
          _c(
            "h4",
            { staticClass: " col-12 col-lg-6 text-center banner-font" },
            [
              _c("fa-icon", {
                staticClass: "text-red",
                attrs: { icon: "home" }
              }),
              _vm._v(
                "\n            Compra mínima para retirar en el local $" +
                  _vm._s(_vm.configs.minbuy) +
                  ". Pago en efectivo.\n        "
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "h4",
            { staticClass: "col-12 col-lg-6 text-center banner-font" },
            [
              _c("fa-icon", {
                staticClass: "text-red",
                attrs: { icon: "truck" }
              }),
              _vm._v(
                "\n            Compra mínima para envíos $" +
                  _vm._s(_vm.configs.minbuy_ship) +
                  ". Pago depósito / transferencia bancaria.\n        "
              )
            ],
            1
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.customText
      ? _c("div", { staticClass: "mt-3" }, [
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-77e27c8a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/admin/paginator.vue":
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7a78af47\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/hide-opt-button.vue":
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9eb29e50\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/web/floating-categories.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.categories
    ? _c("div", { staticClass: "scrollable-pannel", style: _vm.yStyle }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "ul",
          _vm._l(_vm.categories, function(category) {
            return _c(
              "li",
              {
                key: category.name,
                class: { selected: _vm.selected == category.id }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "d-flex",
                    on: {
                      click: function($event) {
                        _vm.selected = category.id
                      }
                    }
                  },
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
              ]
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
    require("vue-hot-reload-api")      .rerender("data-v-9eb29e50", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-cdc4c08a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/web/cotizer.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-3 floating-categories" },
      [
        _c("floating-categories", {
          on: { selectedCategory: _vm.setSelectedCategory }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-9" },
      [
        _c("div", { staticClass: "col-12 row d-flex justify-content-center" }, [
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
              staticClass: " col-12 text-center",
              class: { "neg-margins": _vm.$mq != "lg" }
            },
            [_c("app-banner")],
            1
          )
        ]),
        _vm._v(" "),
        _vm.user && _vm.user.role_id < 3
          ? _c("code-selector", { attrs: { list: _vm.list } })
          : _vm._e(),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c(
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
            _vm.selectedCategory
              ? _c("h2", [_vm._v(_vm._s(_vm.selectedCategory.name))])
              : _vm._e(),
            _vm._v(" "),
            _c("products-grid", {
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
    require("vue-hot-reload-api")      .rerender("data-v-cdc4c08a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f226c7f6\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/products-table.vue":
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-fd58c738\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/web/products-grid.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row" },
    _vm._l(_vm.products, function(p) {
      return _c(
        "div",
        { key: p.code, staticClass: "col-4 mt-2" },
        [_c("productCard", { attrs: { product: p } })],
        1
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fd58c738", module.exports)
  }
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-437ac699\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/mobile/cotizer.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-437ac699\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/mobile/cotizer.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("712c841e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-437ac699\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cotizer.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-437ac699\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cotizer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48ec1a84\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/tutorial.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48ec1a84\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/tutorial.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("0299ef40", content, false, {});
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e3ddd8a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/categories-acordion.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e3ddd8a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/categories-acordion.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("23e23792", content, false, {});
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-731ed9d6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Cotizer.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-731ed9d6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Cotizer.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("8a658236", content, false, {});
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76fa018c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/banner.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76fa018c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/banner.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("417e0858", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76fa018c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./banner.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76fa018c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./banner.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-77e27c8a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/admin/paginator.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-77e27c8a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/admin/paginator.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3d1b8ce6", content, false, {});
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9eb29e50\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/web/floating-categories.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9eb29e50\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/web/floating-categories.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("48ef0faa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9eb29e50\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./floating-categories.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9eb29e50\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./floating-categories.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cdc4c08a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/web/cotizer.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cdc4c08a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/web/cotizer.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("1e9c31ef", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cdc4c08a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cotizer.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cdc4c08a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cotizer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f226c7f6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/products-table.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f226c7f6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/products-table.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("0c9375d8", content, false, {});
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fd58c738\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/web/products-grid.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fd58c738\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/web/products-grid.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("e759a9be", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fd58c738\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./products-grid.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fd58c738\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./products-grid.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/admin/admin/paginator.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-77e27c8a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/admin/paginator.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/admin/paginator.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-77e27c8a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/admin/paginator.vue")
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

/***/ "./resources/assets/js/components/cotizer/Cotizer.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-731ed9d6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Cotizer.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/Cotizer.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-731ed9d6\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/Cotizer.vue")
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

/***/ "./resources/assets/js/components/cotizer/banner.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76fa018c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/banner.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/banner.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-76fa018c\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/banner.vue")
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

/***/ "./resources/assets/js/components/cotizer/categories-acordion.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e3ddd8a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/categories-acordion.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/categories-acordion.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6e3ddd8a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/categories-acordion.vue")
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

/***/ "./resources/assets/js/components/cotizer/code-selector.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/code-selector.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-74ba080f\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/code-selector.vue")
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

/***/ "./resources/assets/js/components/cotizer/hide-opt-button.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/hide-opt-button.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7a78af47\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/hide-opt-button.vue")
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

/***/ "./resources/assets/js/components/cotizer/mobile/cotizer.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-437ac699\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/mobile/cotizer.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/mobile/cotizer.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-437ac699\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/mobile/cotizer.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-437ac699"
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
Component.options.__file = "resources/assets/js/components/cotizer/mobile/cotizer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-437ac699", Component.options)
  } else {
    hotAPI.reload("data-v-437ac699", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/cotizer/products-table.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f226c7f6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/products-table.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/products-table.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f226c7f6\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/products-table.vue")
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

/***/ "./resources/assets/js/components/cotizer/tutorial.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48ec1a84\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/tutorial.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/tutorial.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-48ec1a84\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/tutorial.vue")
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

/***/ "./resources/assets/js/components/cotizer/web/cotizer.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cdc4c08a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/web/cotizer.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/web/cotizer.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-cdc4c08a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/web/cotizer.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cdc4c08a"
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
Component.options.__file = "resources/assets/js/components/cotizer/web/cotizer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cdc4c08a", Component.options)
  } else {
    hotAPI.reload("data-v-cdc4c08a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/cotizer/web/floating-categories.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9eb29e50\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/web/floating-categories.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/web/floating-categories.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9eb29e50\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/web/floating-categories.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9eb29e50"
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
Component.options.__file = "resources/assets/js/components/cotizer/web/floating-categories.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9eb29e50", Component.options)
  } else {
    hotAPI.reload("data-v-9eb29e50", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/cotizer/web/products-grid.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fd58c738\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/web/products-grid.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/web/products-grid.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-fd58c738\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/web/products-grid.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fd58c738"
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
Component.options.__file = "resources/assets/js/components/cotizer/web/products-grid.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fd58c738", Component.options)
  } else {
    hotAPI.reload("data-v-fd58c738", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});