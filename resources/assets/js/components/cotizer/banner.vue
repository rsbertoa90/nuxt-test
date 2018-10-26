<template>
<div class="neg-margins">
      <h2  class="mt-4 font-weight-bold"
            :class="{dared:pos,dablue:!pos}">
        <span class="fa fa-arrow-down"
            :class="{todaright:pos, todaleft:!pos}"></span>
            HACE TU PEDIDO
        <span class="fa fa-arrow-down"
            :class="{todaright:!pos, todaleft:pos}"></span>
    </h2>
    <h4>
        Compra mínima en el local $1500, para envíos $4000.
    </h4>
</div>
</template>}

<script>
export default {
    data(){
        return{
            pos:true,
        }
    },
    created(){
        setInterval(()=>{
            this.pos = !this.pos;
        },1000)
    }
}
</script>


<style scoped>
    .todaright{
        transform: rotate(15deg);
        color:blue;
        transition: ease 1s;
    }
    .todaleft{
         transform: rotate(-15deg);
         color:red;
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