<template>
    <div class="search-bar row mr-2 ml-4 d-flex align-items-center bg-white justify-content-between pr-3">
        <input placeholder="BUSCAR" type="text" @focus="focused = true" 
                @blur="focused=false" class=" search-field" >
        |
        <button class="search-btn">
            <fa-icon icon="search"></fa-icon>
        </button>
    
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
        height: 30px;

    }

    .search-btn{
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        border:none;
        cursor: pointer;
    }
   
    .search-field{
        border:none;
        height:30px;
        padding-left:20px;
        color:#868686;
        width: 90%;
        &:focus{
            border:none;
            outline:none;
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
