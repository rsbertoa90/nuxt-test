<template>
         <nav class="navbar row" >
             <div class="col-2 p-0 m-0 row">
                <router-link class="navbar-brand col-7 " to="/">
                    <v-lazy-image  src="/storage/images/app/logo.png" alt="Bazar Mayorista Maju" />
                </router-link>
                <router-link to="/carrito" class="carrito col-4">
                            <fa-icon icon="shopping-cart"></fa-icon>
                            <span class="nro-carrito" v-if="list">{{list.length}}</span>
                </router-link>
             </div>
             
             <div class="col-10 row">
                    <div class="col-12 d-flex justify-content-start pt-1">
                        <div class="nav-phone text-white">
                            <fa-icon icon="phone"></fa-icon>
                            <span>11 27082683</span>
                        </div>
                        <search-bar></search-bar>
                       
                    </div>

                <div class="col-12">
                    
                   
                    <div class="d-flex justify-content-start" >
                        <ul class="nav-list">
                            <li class="nav-item text-white">
                                <router-link to="/ofertas" class="nav-link text-white">
                                    <fa-icon icon="award"></fa-icon> Ofertas
                                </router-link > 
                            </li>
                          
                            <li class="nav-item text-white">
                                <router-link class="nav-link text-white" to="/cotizador">
                                <fa-icon icon="shopping-cart"></fa-icon> Cotizador <span class="sr-only">(current)</span>
                                </router-link>
                            </li>
                            <li class="nav-item text-white">
                                <router-link class="nav-link text-white" to="/contactanos">
                                    <fa-icon icon="phone"></fa-icon>  Contactate
                                </router-link>
                            </li>
                            <li class="nav-item text-white">
                                <a class="nav-link text-white" target="_blank" href="/MAJU-lista-de-precios.pdf" >
                                    <fa-icon icon="download"></fa-icon> Lista de precios
                                </a> 
                            </li>
                            <li class="nav-item text-white">
                                <a class="nav-link text-white" target="_blank" rel="noreferrer"
                                    href="https://drive.google.com/file/d/1PRSqHX-70Eh7uAqOaF8xV-CAZ3BhqPL9/view">
                                    <fa-icon icon="download"></fa-icon> Catalogo digital
                                </a> 
                            </li>
                            <li class="nav-item text-white">
                                <a class="nav-link text-white" target="_blank" rel="noreferrer"
                                    href="https://goo.gl/maps/41ThzXr52pF2">
                                    <fa-icon icon="home"></fa-icon> ¿Donde estamos?
                                </a> 
                            </li>
                        </ul>
                    </div>
                    <div class="col-12" v-if="user && user.role_id < 3">
                        <ul class="nav-list">
                            <li class="nav-item " v-if="user && user.role_id < 3">
                                <router-link class="nav-link text-white" to="/admin"> <fa-icon icon="user-cog"></fa-icon> Administrar Productos</router-link>
                            </li>
                            <li class="nav-item " v-if="user && user.role_id < 3">
                                <router-link class="nav-link text-white" to="/admin/pedidos"> <fa-icon icon="user-cog"></fa-icon> Pedidos</router-link>
                            </li>
                            <li class="nav-item " v-if="user && user.role_id < 3">
                                <router-link class="nav-link text-white" to="/admin/metadata"> <fa-icon icon="user-cog"></fa-icon> Metadata</router-link>
                            </li>
                            <li class="nav-item " v-if="user && user.role_id < 3">
                                <router-link class="nav-link text-white" to="/admin/config"> <fa-icon icon="user-cog"></fa-icon> Configs </router-link>
                            </li>
                            <li class="nav-item " v-if="user && user.role_id < 3">
                                <a class="nav-link text-white" href="/logout"> <fa-icon icon="user-cog"></fa-icon> Salir</a>
                            </li>
                        </ul>
                    </div>
                            
                        
                </div>
             </div>
            </nav>
</template>
<script>

import searchBar from './wide-search-bar.vue';
export default {
    components:{searchBar},
    data(){return{
       
    }},
    computed:{
        list(){
            return this.$store.getters.getList;
        },
        total(){
            return this.$store.getters.getTotal;
        },
        user(){
            return this.$store.getters.getUser;
        }
    }
}
</script>

<style lang="scss">

.nav-list{
       list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: flex-start;
    margin: 0;
    margin-left: -15px;
    font-size: 1rem;
    padding-left: 0;
}
.navbar-brand{
    margin-top:-5px;
    width:100%;
    img{
    
        width:100%;
    }
}
    a:hover{
            color:#fff;
        }
    .text-white{
        color:#fff;
       
    }

    .navbar{
        padding:0 .5rem 0 30px;
        background-color: #D52B1E;
    }

    .carrito{
        font-size:2rem;
        position:relative;
        color:#fff;
        margin-top:-5px;

        .nro-carrito{
            display: flex;
            width:25px;
            height:25px;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            border:1px solid #868686;
            color:#D52B1E;
            position:absolute;
            top:0;
            right:-3px;
            border-radius:50%;
            font-size: .7rem;
        }
    }
    
</style>