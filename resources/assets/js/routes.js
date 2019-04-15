
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



const Login = () => import('./components/login/Login.vue');

const Home = () =>  import('./components/home/Home.vue') ; 
const Cotizer = () => import('./components/cotizer/Cotizer.vue');
const Contact = () => import('./components/contact/Contact.vue');
const Cart = () => import('./components/shoppingCart/ShoppingCart.vue');
const Category = () => import('./components/category/Category.vue');
const CategoryIndex = () => import('./components/category/categoryIndex.vue');
const Product = () => import('./components/category/product/Product.vue');



const Admin = () => import('./components/admin/Admin.vue');
const Orders = () => import('./components/admin/Orders.vue'); 
const Metadata = () => import('./components/admin/metadata/Super.vue');
const Config = () => import('./components/admin/configs/Configs.vue');


const router = new VueRouter({
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