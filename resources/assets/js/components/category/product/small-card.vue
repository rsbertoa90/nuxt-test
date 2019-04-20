<template>
    <div class="d-flex flex-column align-items-center product-card  justify-content-between h-100" v-if="product">
        <h2 class="text-center title">{{product.name | uc}}</h2>
        <div class="d-flex w-100 flex-column">
            
            <div class="image-container">
                <v-lazy-image :src="image.url"></v-lazy-image>
            </div>
            
            <div class="prices-container" v-if="config && !config.hide_prices">
                 
                 

                <div class="price" v-if="product.price > 0 && product.price != product.pck_price">
                    <div class="price-bg">
                        ${{product.price | price}} C/U
                    </div>
                 
                    <span class="min-sign" > Menos de {{product.pck_units}} unidades </span>
                </div>
               
                <div class="pck_price" >
                    <div class="price-bg">
                        ${{product.pck_price | price}} C/U
                    </div>
                    <span class="min-sign" v-if="product.price==0 && product.pck_units > 1" > Minimo {{product.pck_units}} unidades </span>
                    <span class="min-sign" v-if="product.pck_price < product.price && product.pck_units > 1" > Mas de {{product.pck_units}} unidades </span>
                </div>

                

            </div>
        </div>
       <div class="shop-button-container">
         <shop-button :product="product" ></shop-button>
       </div>
    </div>    
</template>


<script>
import shopButton from './shop-button.vue';
export default {
    props:['product'],
    components:{
        shopButton
    },
    data(){
        return{
            index:0
        }
    },
    computed:{
        productUrl(){
            let cats = this.$store.getters.getCategories;
            let category = cats.find(c => {
                return c.id == this.product.category_id;
            });
           
            let url = category.slug + '/' + this.product.slug;
            url = url.replace('//','/');
            return url;
        },
        
        config(){
            return this.$store.getters.getConfig;
        },
        image(){
        
            if (this.product.images && this.product.images[this.index])
            {
                return this.product.images[this.index];
            } else{
                return {url:'/storage/images/app/no-image.png'}
            }
        }
    }
}
</script>


<style lang="scss" scoped>

.min-sign{
    font-size: .85rem;
}

.price,.pck_price{
    text-align:center
}

    .shop-button-container{
        margin-top:5px;
        width:100%;
    }
    .title{
        display: flex;
        align-items:center;
        min-height: 50px;
        font-size:1.5rem;
    }

    .product-card{
        padding:10px;  
        border:1px solid #868686;
       
    }

    .image-container{
        width:100%;
        overflow: hidden;
      /*  padding:10px;
       border:1px solid #868686; */
        img{
            width: 100%;
        }
    }

    .prices-container{
        padding:10px;
        width:100%;
        display: flex;
        justify-content: center;
        .price-bg{
            margin:5px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
            padding: 10px 3px ;
            background-color: #D52B1E;
            color: #fff;
            text-align: center;
            justify-content: center;
            font-weight: bold;
            border-radius: 13%;
            font-size: .90rem;
            
              border-left:2px solid #fff;
            border-right:2px solid #fff;
        }

        
    }

</style>
