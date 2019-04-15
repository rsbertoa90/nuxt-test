<template>
    <div class=" app-container">
       
        <header>
            <app-nav></app-nav>
        </header>    
        <div class="py-4 row">
            
            <div class="col-12 p-4">
                <transition enter-active-class="animated fadeIn fast faster ">
                    <keep-alive include="carrito">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
         <whatsappBtn v-if="!user || user.role_id > 2 "></whatsappBtn>
         <total-bouncer :total="total" v-if="total"></total-bouncer>
    </div>
</template>

<script>

import totalBouncer from './app/total-bouncer.vue'
import whatsappBtn from './layout/whatsapp.vue';

import appNav from './layout/navbar.vue';

export default {
    components:{appNav,whatsappBtn,totalBouncer,},
    computed:{
        user(){
            return this.$store.getters.getUser;
        },
        total(){
            return this.$store.getters.getTotal;
        }
    }
}
</script>

<style lang="scss" scoped>
    .app-container{
       width:98.5vw;
       padding:0 ;
       padding-bottom: 0;
       margin-bottom: 0;
       border:1px solid  #D52B1E;
       overflow: hidden;

    }
    .back-arrow{
        color:blue;
        margin-left:10%;
        cursor: pointer;
        font-size: 2rem;

    }
</style>