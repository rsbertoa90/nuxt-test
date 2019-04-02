<template>
<div class="neg-margins">
      <h2  class="mt-4 font-weight-bold"
            :class="{dared:!pos,dablue:pos}">
        <span :class="{'todaright colorRed':pos, 'todaleft colorBlue':!pos}">
            <i class="fa fa-arrow-down"></i>
        </span>
            HACE TU PEDIDO
        <span :class="{'todaright colorBlue':!pos, 'todaleft colorRed':pos}">
             <i class="fa fa-arrow-down"></i>
        </span>
    </h2>
    <div v-if="configs" class="d-flex flex-column mb-1">
        <h4 class="text-primary">
            <span class="fas fa-home "></span>
            Compra mínima en el local ${{configs.minbuy}}
        </h4>
        <h4 class="fucsia">
            <span class="fas fa-truck "></span>
            Compra mínima para envíos ${{configs.minbuy_ship}} 
        </h4>
    </div>
    <div v-if="customText">
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

        setInterval(()=>{
            this.pos = !this.pos;
        },1000)
    }
}
</script>


<style scoped>
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