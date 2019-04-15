<template>
    <dir v-if="product">
        <h1>{{product.name}}</h1>
    </dir>
</template>

<script>
export default {
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
            }
            
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
                    
            }  
            
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
                         return pr.slug.trim().toLowerCase() == '/'+vm.$route.params.product_slug.trim().toLowerCase(); 
                     }
                   
                 });
                 if (p){
                     res = p;
                     return;
                 }
            });
            return res;
        }

    }

}
</script>

