
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


import VueMq from 'vue-mq'

Vue.component('app-cotizer', require('./components/Cotizer.vue'));
Vue.component('cotizer-form', require('./components/Cotizer-form.vue'));
Vue.component('csrf', require('./components/csrf.vue'));
Vue.component('app-admin', require('./components/Admin.vue'));
Vue.component('example-component', require('./components/ExampleComponent.vue'));

import swal from 'sweetalert';
window.swal = swal;

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});



Vue.use(VueMq, {
    breakpoints: {
        sm: 450,
        md: 1250,
        lg: Infinity,
    }
});
 
String.prototype.ucfirst = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const app = new Vue({
    el: '#app'
});
