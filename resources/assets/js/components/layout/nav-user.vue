<template>
         <nav class="navbar navbar-expand-lg navbar-dark bg-fucsia font-weight-bold">
                <router-link class="navbar-brand " to="/">
                    <v-lazy-image style="width:45px" src="/storage/images/app/logo.png" alt="Bazar Mayorista Maju" />
                </router-link>
                <button @click="collapsed=!collapsed" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <fa-icon icon="bars" class="text-white" v-if="collapsed"> </fa-icon>
                    <fa-icon icon="times" class="text-white" v-else> </fa-icon>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                         <li class="nav-item text-white" v-if="total">
                            <router-link to="/carrito" class="nav-link text-white">
                                <fa-icon icon="shopping-cart"></fa-icon> Carrito
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
            </nav>
</template>
<script>
export default {
    data(){return{
        collapsed:true
    }},
    computed:{
        
        total(){
            return this.$store.getters.getTotal;
        }
    }
}
</script>

<style lang="scss">
    .text-white{
        color:#fff;
       
    }

    .navbar{
        padding:0 .5rem;
    }
</style>