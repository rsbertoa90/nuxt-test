<template>
    <div class="search-bar row mr-2">
        <fa-icon v-if="!focused" icon="search" class="in-form-icon"></fa-icon>
        <fa-icon v-else icon="arrow-left" class="search-back-arrow" ></fa-icon> 
        <input placeholder="BUSCAR" type="text" @focus="focused = true" @blur="focused=false" class=" search-field" >
      
    
    </div>
</template>

<script>
export default {
    data(){
        return{
            focused:false
        }
    }

    /* Hacer interaccion con searchTerm de store */
}
</script>


<style lang="scss" scoped>
    .search-bar{
        position:relative;
        width : 50vw;

    }

    .in-form-icon{
        position:absolute;
        top:7px;
        left:2px;
        color:#868686;
        z-index:100;

    }
    
    .search-field{
        height:30px;
        padding-left:20px;
        color:#868686;
        width:40vw;
       
        &:focus{
            z-index:200;
            position:fixed;
            top:0;
            left:0;
            width:100vw;
            padding:20px 40px;
            -webkit-transition: width  .3s; /* Safari */
            transition: width .3s;
        }
    }

    .search-back-arrow{
         position:fixed;
        top:15px;
        left:7px;
        color:#868686;
        z-index:250;
        color:#000;
    }

</style>
