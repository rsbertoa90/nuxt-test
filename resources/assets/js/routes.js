
import Vue from 'vue';

import VueRouter from 'vue-router';
import Meta from 'vue-meta';

import {store} from './store/store.js';

Vue.use(VueRouter);
Vue.use(Meta);





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

const Admin = () => import('./components/admin/Admin.vue');
const Orders = () => import('./components/admin/Orders.vue'); 
const Metadata = () => import('./components/admin/metadata/Super.vue');


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
            path:'/',
            name:'home',
            component:Home
        },
        
        {
            path:'/cotizador',
            name:'cotizador',
            component: Cotizer
        }
    ]
    
});

export default router;