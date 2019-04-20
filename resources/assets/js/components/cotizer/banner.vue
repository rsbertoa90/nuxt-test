<template>
<div class="neg-margins">
    <div class="red-ribbon col-12">
        <div class="cart-logo-square">
            <fa-icon icon="shopping-cart"></fa-icon>
        </div>
        <h2  class=" font-weight-bold">
                HACE TU PEDIDO
        </h2>
        <div col-lg-3>

        </div>
    </div>
    <div v-if="configs" class="col-12 row">
        <h4 class=" col-12 col-lg-6 text-center banner-font">
            <fa-icon icon="home" class="text-red"></fa-icon>
            Compra mínima para retirar en el local ${{configs.minbuy}}. Pago en efectivo.
        </h4>
        <h4 class="col-12 col-lg-6 text-center banner-font">
            <fa-icon icon="truck" class="text-red"></fa-icon>
            Compra mínima para envíos ${{configs.minbuy_ship}}. Pago depósito / transferencia bancaria.
        </h4>
    </div>
    <div v-if="customText" class="mt-3">
        <h5 >
            {{ customText.text }}
        </h5>
    </div>
</div>
</template>}

<script>
export default {
    data(){
        return{
            
            pos:true,
            customText:null
        }
    },
    computed:{
        configs()
        {
            return this.$store.getters.getConfig;
        }
    },
    created(){
        var vm=this;
          
        this.$http.get('/api/custom-text/banner')
            .then(res => {
                this.customText = res.data;
            });

     
    }
}
</script>


<style scoped lang="scss">

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
    
    .cart-logo-square{
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


.banner-font{
    font-size:1.25rem;
}
.colorRed{
    color:red;
     transition: ease 1s;
}
.colorBlue{
    color:blue;
     transition: ease 1s;
}
    .todaright{
          display: inline-flex;
        transform: rotate(15deg);
       
        transition: ease 1s;
    }
    .todaleft{
        display: inline-flex;
         transform: rotate(-15deg);
        
         transition: 1s ease;
    }

    .dared{
         /* transform: rotate(-15deg); */
         color:red;
         transition: 1s ease;
    }
    .dablue{
         color:blue;
        transition: ease 1s;
    }

    .neg-margins{
    margin-right: -7%;
    margin-left: -3%;
}
h2{
    white-space: nowrap;
}

</style>