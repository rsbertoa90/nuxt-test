<template>
     <transition enter-active-class="animated bounceIn" leave-active-class="animated fadeOutDown">
            <div v-if="total > 0" id="total">
                <div  class="bg-red p-1">
                    <div class=" bg-white d-flex justify-content-center p-1">
                         <fa-icon icon="shopping-cart" class="red mt-1 mr-2"></fa-icon>
                        ${{total | price}}
                    </div>
                </div>
               
                <div  class="bg-red p-1">
                    <div class="bg-white d-flex justify-content-center p-1">
                        <router-link to="/carrito" class="finish" >  Terminar pedido </router-link>
                    </div>
                </div>
            </div>    
    </transition>
</template>

<script>
export default {
   computed:{
       total(){
           return this.$store.getters.getTotal;
       }
   }
}
</script>

<style lang="scss" scoped>
.finish{
    color:#D52B1E;
    a{
        color:#D52B1E;
        &:hover{
            color:#D52B1E;
        }
    }
}

 #total {
        position: fixed;
        /* margin-left:50vw; */
        bottom: 25px;
        right:0;
        z-index: 900;
    }

     @media(min-width: 600px){
        
         #total {
             left:45%;
         }
     }
</style>

