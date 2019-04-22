<template>
    <div>
       
        <home-top-row></home-top-row>
        <homeInfo class="mt-4"></homeInfo>
        <homeBanners class="mt-4"></homeBanners>
        <homeOffers></homeOffers>
    </div>
</template>

<script>
import categoriesPannel from './categories-pannel.vue';
import homeTopRow from './top-row.vue';
import homeInfo from './info.vue';
import  homeOffers from './offers.vue';
import homeBanners from'./banners.vue';
export default {
    components:{homeOffers,homeTopRow,homeInfo,categoriesPannel,homeBanners},
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
