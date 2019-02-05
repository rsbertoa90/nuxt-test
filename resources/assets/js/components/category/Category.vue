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
                    <div v-for="product in category.products" :key="product.id" class="col-lg-3 col-12">
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
    props:['category_id'],
    data() {
        return {
            category:null
        }
    },
    created(){
        
            this.$http.get('/api/category/'+this.category_id)
                .then(res=>{
                    this.category = res.data;
                });
        

    }
}
</script>
