<template>
    <div class="row mt-4 d-flex align-items-stretch p-4" v-if="offers && offers.length > 0">
        <div v-for="product in offers" :key="product.id" class="col-12 col-lg-3">
            <productCard :product="product"></productCard>
        </div>
    </div>
</template>

<script>
import productCard from '../category/product/small-card.vue';
export default {
    components:{productCard},
    computed:{
        offers(){
            return this.$store.getters.getOffers;
        },
        categories(){
            return this.$store.getters.getCategories;
        }
    },
    
}
</script>
