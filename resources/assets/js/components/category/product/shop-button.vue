<template>
    <div >
        <div class="col-12" v-if="!product.units || product.units < minUnits">
            <button class="btn btn-block bg-red hover-border" style="cursor:pointer" @click="addFirstUnit">
                  <fa-icon icon="shopping-cart"></fa-icon> Agregar al carrito 
            </button>
        </div>

        <div v-else class="d-flex justify-content-center">
            <div style="font-size:2rem" class="mr-1 d-2 d-flex flex-column justify-content-center">
                    <fa-icon icon="shopping-cart" class="bg-white text-red"></fa-icon>
            </div>
            <div class=" d-flex  justify-content-center units-control">
                <button @click="product.units--" class="btn-red"> <fa-icon icon="minus"></fa-icon> </button>
                <input type="text" v-model="product.units" class=" units-field">
                <button @click="product.units++" class="btn-red"> <fa-icon icon="plus"></fa-icon> </button>
            </div>
                
        </div>
    </div>
</template>


<script>
export default {
    props:['product'],
    methods:{
        addFirstUnit(){
          
            Vue.set(this.product,'units',this.minUnits);
        }
    },
    computed:{
        minUnits(){
            return this.product.price > 0 ? 1 : this.product.pck_units ;
        }
    }
}
</script>


<style lang="scss" scoped>

.hover-border:hover{
    border:2px solid #868686;
}
    .units-control{
        border:1px solid #868686;
        padding:5px;
        border-radius: 15%;    
    }

    .bg-red
        {
            background-color: #D52B1E;      
            color:#fff;  
        }

        .text-red{
            &:focus{
                outline:none;
            }
            color: #D52B1E;
        }

        .btn-red{
            &:focus{
                outline:none;
                border:none;
            }
            background-color: #fff;
            color:#D52B1E;
            cursor: pointer;
            border:none;
        }
        .units-field{
            &:focus{
                outline:none;
            }
            width:70px;
            border:none;
            text-align:center;
            outline:none;

        }
</style>
