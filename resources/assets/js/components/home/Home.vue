<template>
    <div>
       
        <home-banners></home-banners>
        <homeInfo class="mt-4"></homeInfo>
        <homeOffers></homeOffers>
    </div>
</template>

<script>
import categoriesPannel from './categories-pannel.vue';
import homeBanners from './banners.vue';
import homeInfo from './info.vue';
import  homeOffers from './offers.vue';
export default {
    components:{homeOffers,homeBanners,homeInfo,categoriesPannel},
    metaInfo(){return{
        title: this.metadata ? this.metadata.metatitle : 'Mayorista  del Mate',
        meta:[
            {name:'description', content: this.metadata ? this.metadata.metadescription : ''}
 
 ]
    }},
    computed:{
        metadatas(){
            return this.$store.getters.getMeta;
        },
        metadata(){
            if (this.metadatas){
                return this.metadatas.find(m => {
                    return m.page == 'home'
                });
            }
        },
        categories(){
            return this.$store.getters.getNotPaused;
        }
}
    }
</script>
