<template>
         <nav class="navbar  navbar-dark bg-fucsia font-weight-bold">
                <div @click="closeNav">
                    <router-link class="navbar-brand " to="/" @click="closeNav">
                        <v-lazy-image  style="width:45px" src="/storage/images/app/logo.png" alt="Bazar Mayorista Maju" />
                    </router-link>
                </div>
                <search-bar></search-bar>
                <button ref="toglerbutton" @click="collapsed=!collapsed" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <fa-icon icon="bars" class="text-white" v-if="collapsed"> </fa-icon>
                    <fa-icon icon="times" class="text-white" v-else> </fa-icon>
                </button>
                <div @click="closeNav">
                    <router-link to="/carrito" class="carrito" v-if="config && !config.maintenance">
                        <fa-icon icon="shopping-cart"></fa-icon>
                        <span class="nro-carrito" v-if="list">{{list.length}}</span>
                    </router-link>
                </div>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav" >
                         
                        <li class="nav-item text-white" @click="closeNav" v-if="config && !config.maintenance">
                            <router-link class="nav-link text-white" to="/ofertas">
                            <fa-icon icon="award"></fa-icon> Ofertas <span class="sr-only">(current)</span>
                            </router-link>
                        </li>
                        <li class="nav-item text-white" @click="closeNav" v-if="config && !config.maintenance">
                            <router-link class="nav-link text-white" to="/cotizador">
                            <fa-icon icon="shopping-cart"></fa-icon> Cotizador <span class="sr-only">(current)</span>
                            </router-link>
                        </li>
                        <li class="nav-item text-white" @click="closeNav">
                            <router-link class="nav-link text-white" to="/contacto">
                                <fa-icon icon="phone"></fa-icon>  Contactate
                            </router-link>
                        </li>
                        <li class="nav-item text-white" @click="closeNav" v-if="config && !config.maintenance">
                             <a class="nav-link text-white" target="_blank" href="/MAJU-lista-de-precios.pdf" >
                                <fa-icon icon="download"></fa-icon> Lista de precios
                            </a> 
                        </li>
                        <li class="nav-item text-white" @click="closeNav" v-if="config && !config.maintenance">
                            <a class="nav-link text-white" target="_blank" rel="noreferrer"
                                href="https://drive.google.com/file/d/1PRSqHX-70Eh7uAqOaF8xV-CAZ3BhqPL9/view">
                                <fa-icon icon="download"></fa-icon> Catalogo digital
                            </a> 
                        </li>
                        <li class="nav-item text-white" @click="closeNav">
                            <a class="nav-link text-white" target="_blank" rel="noreferrer"
                                href="https://goo.gl/maps/41ThzXr52pF2">
                                <fa-icon icon="home"></fa-icon> ¿Donde estamos?
                            </a> 
                        </li>
                        <li class="nav-item text-white">
                            <a class="nav-link text-white " href="#" @click="showCategories = !showCategories">
                               <fa-icon icon="list"></fa-icon> Categorias 
                                <fa-icon icon="chevron-down" v-if="!collapsed && showCategories"></fa-icon> 
                                <fa-icon icon="chevron-right" v-else></fa-icon> 
                            </a>
                            <div class="category-container" :class="{'category-displayed':showCategories}">
                                <ul v-if="categories && showCategories" class="categories-list" >
                                    <li v-for="category in categories" :key="category.name" @click="closeNav">
                                        <router-link :to="category.slug" >
                                            {{category.name}}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                           
                        </li>
                        <!-- ADMIN -->
                         <li class="nav-item " v-if="user && user.role_id < 3" @click="closeNav">
                             <router-link class="nav-link text-white" to="/admin"> <fa-icon icon="user-cog"></fa-icon> Administrar Productos</router-link>
                        </li>
                        <li class="nav-item " v-if="user && user.role_id < 3" @click="closeNav">
                            <router-link class="nav-link text-white" to="/admin/pedidos"> <fa-icon icon="user-cog"></fa-icon> Pedidos</router-link>
                        </li>
                        <li class="nav-item " v-if="user && user.role_id < 3" @click="closeNav">
                            <router-link class="nav-link text-white" to="/admin/metadata"> <fa-icon icon="user-cog"></fa-icon> Metadata</router-link>
                        </li>
                        <li class="nav-item " v-if="user && user.role_id < 3" @click="closeNav">
                            <a class="nav-link text-white" href="/logout"> <fa-icon icon="user-cog"></fa-icon> Salir</a>
                        </li>
                         <li class="nav-item " v-if="user && user.role_id < 3" @click="closeNav" >
                                <router-link class="nav-link text-white" to="/admin/config"> <fa-icon icon="user-cog"></fa-icon> Configs </router-link>
                        </li>
                        
                       
                    </ul>
                </div>
            </nav>
</template>
<script>
import searchBar from './search-bar.vue';
export default {
    components:{searchBar},
    data(){return{
        collapsed:true,
        showCategories:false
    }},
    computed:{
        config(){
            return this.$store.getters.getConfig;
        },
        list(){
            return this.$store.getters.getList;
        },
        total(){
            return this.$store.getters.getTotal;
        },
        user(){
            return this.$store.getters.getUser;
        },
        categories(){
            return this.$store.getters.getNotPaused;
        }
    },
    methods:{
        closeNav(){
            if(!this.collapsed){
                this.$refs.toglerbutton.click();
            }
        }
    }
}
</script>

<style lang="scss">
    .text-white{
        color:#fff;
       
    }

    .category-container{
        height:0;
        width:100%;
       
        transition: height 1s;
    }
    .category-displayed{
        height:120px;
        overflow-y:auto;
        transition: height 1s;
    }

    .navbar{
        padding:0 .9rem 0 .9rem;
        background-color: #D52B1E;
        width:100vw;
         position:fixed;
        top:0;
        left:0;
        z-index:999;
        box-shadow: 2px 2px 5px #999;
    }

    .carrito{
        position:relative;
        color:#fff;
        a{
            color:#fff;
            
        }
        .nro-carrito{
            display: flex;
            width:15px;
            height:15px;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            border:1px solid #868686;
            color:#D52B1E;
            position:absolute;
            top:0;
            right:-5px;
            border-radius:50%;
            font-size: .64rem;
        }
    }
    
    .categories-list{
        
        color:#fff;
        a{
            color:#fff;
        }
        height:300px;
        overflow-y:auto;
        overflow-x:hidden;
        white-space: normal;
    }
</style>