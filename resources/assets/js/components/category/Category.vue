<template>
<div v-if="category && category.products" class="d-flex flex-column">

         
   

    
      
         
          <div style="text-align: center">
              <h1> {{category.name}} </h1>
          </div>
          <div v-if="category.description" class="text-center mt-4">
              <p> {{category.description}} </p>
          </div>
          <br>
          <div class="container">
                <div class="row">
                    <div v-for="product in productsNotPaused" :key="product.id" class="col-lg-3 col-12">
                        <productCard :product="product" class="mt-4"></productCard>
                    </div>
                </div>
          </div>
           
         
        
</div>
</template>


<script>
import productCard from './productcard.vue';
export default {
    components:{productCard},
    metaInfo () {
        return{
            title: this.metatitle
        }
    },
    data() {
        return {
           
        }
    },
  
    computed:{
        metatitle(){
            return (this.category && this.category.metatitle.trim()) ? this.category.metatitle : 'Bazar Mayorista Maju';
        },
        categories(){
            return this.$store.getters.getCategories;
        },
        category()
        {
            var  vm = this;
            if (this.categories){
                return this.categories.find(cat => {
                    return cat.slug == '/'+vm.$route.params.category_slug;
                    console.log(cat.slug);
                    console.log('/'+vm.$route.params.category_slug);
                });
            }
        },
        productsNotPaused()
        {
            if (this.category)
            {
                return this.category.products.filter(prod => {
                    return !prod.paused;
                });
            }
        }
    }
}
</script>

