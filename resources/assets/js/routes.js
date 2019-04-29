
import Vue from 'vue';

import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

import {store} from './store/store.js';

Vue.use(VueRouter);
Vue.use(VueMeta);





function guardAdmin(to, from, next)
{  
    setTimeout(() => {
        
        let user = store.getters.getUser;
        if (user && user.role_id < 3)
        {
            next();
        }else{
            next('/login');
        }
        
    }, 100);
}

function guardLogin(to, from, next)
{  
    setTimeout(() => {
        
        let user = store.getters.getUser;
        if (user && user.role_id < 3)
        {
            next('/admin');
        }else{
           next();
        }
        
    }, 100);
}

/* 
import "core-js/modules/es6.promise";
import "core-js/modules/es6.array.iterator";
 */




import Home from  './components/home/Home.vue'; 
import Cotizer from './components/cotizer/Cotizer.vue';
import Contact from './components/contact/Contact.vue';
import Cart from './components/shoppingCart/ShoppingCart.vue';
import Category from './components/category/Category.vue';
import CategoryIndex from './components/category/categoryIndex.vue';
import Product from './components/category/product/Product.vue';
import Offers from  './components/offers/Offers.vue';

//const Home = () =>  import(/* webpackChunkName: "user-chunk" */ './components/home/Home.vue') ; 
//const Cotizer = () => import(/* webpackChunkName: "user-chunk" */ './components/cotizer/Cotizer.vue');
//const Contact = () => import(/* webpackChunkName: "user-chunk" */ './components/contact/Contact.vue');
//const Cart = () => import(/* webpackChunkName: "user-chunk" */ './components/shoppingCart/ShoppingCart.vue');
//const Category = () => import(/* webpackChunkName: "user-chunk" */ './components/category/Category.vue');
//const CategoryIndex = () => import(/* webpackChunkName: "user-chunk" */ './components/category/categoryIndex.vue');
//const Product = () => import(/* webpackChunkName: "user-chunk" */ './components/category/product/Product.vue');
//const Offers = ()  => import (/* webpackChunkName: "user-chunk" */ './components/offers/Offers.vue');


//const Login = () => import( /* webpackChunkName: "admin-chunk" */  './components/login/Login.vue');
//const Admin = () => import( /* webpackChunkName: "admin-chunk" */ './components/admin/Admin.vue');
//const Orders = () => import( /* webpackChunkName: "admin-chunk" */  './components/admin/Orders.vue');
//const Metadata = () => import( /* webpackChunkName: "admin-chunk" */  './components/admin/metadata/Super.vue');
//const Config = () => import( /* webpackChunkName: "admin-chunk" */  './components/admin/configs/Configs.vue');
import Login from  './components/login/Login.vue';
import Admin from './components/admin/Admin.vue';
import Orders from  './components/admin/Orders.vue';
import Metadata from  './components/admin/metadata/Super.vue';
import Config from  './components/admin/configs/Configs.vue';
import SearchStatics from './components/admin/search-statics/Search-statics.vue';

const router = new VueRouter({
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    mode:'history',
    routes:[
        {
            path:'/login',
            name:'login',
            component:Login,
            beforeEnter:guardLogin
        },
        {
            path:'/admin',
            name:'admin',
            component:Admin,
            beforeEnter:guardAdmin
        },
        {
            path:'/admin/busquedas',
            name:'searchStatics',
            component:SearchStatics,
            beforeEnter:guardAdmin
        },
        {
            path:'/admin/pedidos',
            name:'orders',
            component:Orders,
            beforeEnter:guardAdmin
        },
        {
            path:'/admin/metadata',
            name:'meta',
            component:Metadata,
            beforeEnter:guardAdmin
        },
        {
            path:'/admin/config',
            name:'config',
            component:Config,
            beforeEnter:guardAdmin
        },

        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path: '/carrito',
            name:'carrito',
            component: Cart
        },
        {
            path:'/contacto',
            name:'contacto',
            component:Contact
        },
        {
            path:'/cotizador',
            name:'cotizador',
            component: Cotizer
        },
        {
            path:'/ofertas',
            name:'ofertas',
            component: Offers
        },
        {
            path: '/:category_slug',
            component: Category,
            children: [{
                    path: '',
                    component: CategoryIndex,
                    name: 'category'
                },
                {
                    path: ':product_slug',
                    component: Product,
                    name: 'product'
                }
            ]

        }
    ]
    
});

export default router;