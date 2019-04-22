<template>
    <div v-if="product">
        <productCard :product="product"></productCard>
    </div>
</template>

<script>
import productCard from './small-card.vue';
export default {
    components:{productCard},
    metaInfo(){
        return{
            title:this.metatitle,
            meta: [
                { charset: 'utf-8' },
                { vmid: 'description', name: 'description', content: this.metadescription }
            ]
        }
    },
    computed:{

        metatitle(){
            if (this.product )
            {
                
                return this.product.metatitle ? this.product.metatitle : this.product.name+' por mayor'
            }else{return ''}
            
        },
        metadescription(){
            if (this.product){
                if (this.product.metadescription)
                {
                    return this.product.metadescription;
                }
                else if (this.product.description)
                {
                    return this.product.description;
                }
                else return this.product.name+" "+'por mayor';
                    
            }  else{return ''}
            
        },
        categories(){
            return this.$store.getters.getNotPaused;
        },
        product(){
            let vm =this;
            let res = null;
             this.categories.forEach(c => {
                 let p = c.products.find(pr => {
                     if(pr.slug){
                       
                         let productSlug = '/'+pr.slug;
                         productSlug = productSlug.replace('//','/');
                         let routeParam = '/'+vm.$route.params.product_slug;
                         routeParam = routeParam.replace('//','/');
                        
                         return routeParam.trim().toLowerCase() == productSlug.trim().toLowerCase(); 
                     }
                   
                 });
                 if (p){
                     res = p;
                  
                     return res;
                 }
            });
            return res;
        }

    }

}
</script>

