<template>
<div v-if="category && category.products" class="row">
    <div class="col-3" v-if="$mq=='lg'">
        <div class="fixed-pannel"   :style="yStyle">
            <categories-pannel></categories-pannel>
        </div>
    </div>
    <div class="col-12 col-lg-9 row p-0 m-0">    
        <div class="red-ribbon col-12">
            <div class="logo-square" v-if="category.image">
                <v-lazy-image :src="category.image" :alt="category.name"></v-lazy-image>
            </div>
            <h2  class=" font-weight-bold" v-if="category.image">
                 {{category.name|uc}}
            </h2>
            <div col-lg-3>

            </div>
        </div>
        <div class="col-12">   
            <info-row></info-row>
        </div>
        <div class="col-12 descri" v-if="category.description">
           <p> {{category.description |ucFirst}} </p>
        </div>
        <div class="col-12 mt-4 row">
            <div class="col-12 col-lg-4 mt-2" v-for="p in category.products" :key="p.code">
                <productCard :product="p"></productCard>
            </div>
        </div>
    </div>

        
           
</div>
</template>


<script>
import infoRow from '../layout/info-row.vue';
import productCard from './product/small-card.vue';
import categoriesPannel from '../home/categories-pannel.vue';
export default {
    components:{productCard,categoriesPannel,infoRow},
    data(){
        return{
            yStyle:'top:90px'
            
        }
    },
    metaInfo(){
        return{
            title: this.metatitle,
            meta:[
                {name:'description',vmid:'description',content:this.metadescription}
            ]
        }
    },
   methods:{
        handleScroll(e){
            let def = 90;
            let ypos=window.scrollY;
           let wh = window.document.documentElement.clientHeight;
           let innerh = window.innerHeight;
           let scrollh = document.body.scrollHeight;
           let posicion = scrollh - (innerh+ypos);
           
            let fixedy =90;
            if (posicion < 450)
            {
                 fixedy = posicion - 450 + 90;
            }
            
            
            this.yStyle = 'top:'+fixedy+'px';
        
        }
    },
    computed:{
        metatitle(){
            if (this.category)
            {
               return this.category.metatitle ? this.category.metatitle : this.category.name+' '+"por mayor";
            }
        },
        metadescription(){
            if (this.category){
                if (this.category.metadescription){ return this.category.metadescription}
                else if (this.category.description){ return this.category.description}
                else {return this.metatitle}
            }

        },
        categories(){
            return this.$store.getters.getNotPaused;
        },
        category(){
            if (this.categories)
            {
                return this.categories.find (cat => {
                    return cat.slug === '/'+this.$route.params.category_slug;
                });
            }
        }
    },
     created () {
    window.addEventListener('scroll', this.handleScroll);

    
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss" scoped>

.descri{
    font-size:1.3rem;
}
    .fixed-pannel{
        position:fixed;
        top:45px;
        left:20px;
    }

    .red-ribbon{
    background-color: #D52B1E;
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    justify-content: space-around;
    color:#fff;
    margin-bottom:20px;
    margin-top:10px;
    
    .logo-square{
        background-color: #fff;
        border: 3px solid #868686;
        font-size:2rem;
        color:#D52B1E;
        /* padding:5px; */
        display: flex;
        justify-content: center;
        align-items:center;
        height:75px;
        width:75px;
    }
}

@media(max-width:600px){
    .red-ribbon{
        margin-top: 20px;
        width:100vw;
        h2{
            margin-left:10px;
            font-size:1rem;
        }
    }
}


</style>
