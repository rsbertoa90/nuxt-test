<template>
    <div v-if="offers && offers[selected]" class="slider-container">
         
           <router-link to="/ofertas" class="overflow-hidden">
                <transition leave-active-class="position-absolute animated slideOutRight">
                        <offerCard :product="offers[selected]" :key="offers[selected].name" class="bg-white"></offerCard>
                </transition>
           </router-link>
    </div>
</template>

<script>
import offerCard from '../category/product/card.vue';
export default {
    components:{offerCard},
    data(){
        return{
     
            selected: 0,
        }
    },
    methods:{
        getSlug(product)
        {
            return this.$store.getters.getProductSlug(product);
        }
    },
    computed:{
        offers(){
            return this.$store.getters.getOffers;
        }
    },
    created(){
        setInterval(()=>{
            this.selected++

        },5000);
    },
    watch:{
        selected()
        {
                if (this.selected < 0){this.selected = this.offers.length-1;}
                else if (this.selected >= this.offers.length){this.selected=0;}
            
        }
    },
  
}
</script>


<style lang="scss" scoped>
img{
    width:100%;
   
}
.slideOutRight{
    z-index: 900;
    margin-top:-10px;
    }

.slider-container{
    background-color: #fff;
    border:1px solid #868686;
    padding:5px;
    position:relative;
    height:470px;
    overflow: hidden;
}

.overflow-hidden{
    overflow: hidden;
}


a{
  color:#000;
  
}
a:hover {
  text-decoration: none;
  color: #000;
}
</style>
