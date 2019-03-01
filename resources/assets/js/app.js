
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

var VueResource = require('vue-resource');
Vue.use(VueResource);
Vue.http.headers.common['X-CSRF-TOKEN'] = $('meta[name="csrf-token"]').attr('content');
window.csrf = $('meta[name="csrf-token"]').attr('content');
// Vue.http.interceptors.push(function (request, next) {
//     request.headers['X-CSRF-TOKEN'] = $('meta[name="csrf-token"]').attr('content');
//     next();
// });
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


import VueMq from 'vue-mq'
Vue.use(VueMq, {
    breakpoints: {
        sm: 600,
        md: 1250,
        lg: Infinity,
    }
});


import DatatableFactory from 'vuejs-datatable';

Vue.use(DatatableFactory);

import moment from 'moment';
window.moment = moment;

Vue.component('admin-failed-jobs', require('./components/admin/FailedJobs.vue'));
Vue.component('dot-loader', require('vue-spinner/src/DotLoader.vue'));
Vue.component('app-cotizer', require('./components/cotizer/Cotizer.vue'));
Vue.component('app-nav', require('./components/layout/navbar.vue'));
Vue.component('cotizer-form', require('./components/cotizer/Cotizer-form.vue'));
Vue.component('admin-form', require('./components/admin/Form.vue'));
Vue.component('csrf', require('./components/csrf.vue'));
Vue.component('app-admin', require('./components/admin/Admin.vue'));
Vue.component('admin-report', require('./components/admin/Report.vue'));
Vue.component('admin-orders', require('./components/admin/Orders.vue'));
Vue.component('admin-meta', require('./components/admin/Meta.vue'));
Vue.component('app-category', require('./components/category/Category.vue'));
Vue.filter('price', val => {
    if (val % 1 != 0){return val.toFixed(2);}
    return val;
});
Vue.filter('ucFirst', val => {
    val = val.toLowerCase();

    return val.charAt(0).toUpperCase() + val.slice(1);
});
Vue.filter('uc', val => {
    return val.toUpperCase();
});

import swal from 'sweetalert';
window.swal = swal;

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});



import { VLazyImagePlugin } from "v-lazy-image";

Vue.use(VLazyImagePlugin);

String.prototype.ucfirst = function () {
    let str = this.toLowerCase(); 
    return str.charAt(0).toUpperCase() + this.slice(1);
}
const app = new Vue({
    el: '#app'
});
