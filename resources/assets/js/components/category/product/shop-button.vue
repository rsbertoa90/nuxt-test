<template>
    <div >
        <div class="col-12" v-if="!product.units">
            <button class="btn btn-success" style="cursor:pointer" @click="addFirstUnit"> <i class="fas fa-shopping-cart"></i> Agregar al carrito </button>
        </div>

        <div v-else class="col-12 row">
            <div style="font-size:2rem" class="col-4 d-2 d-flex flex-column justify-content-center">
                <i class="fas fa-shopping-cart text-success"></i>
            </div>
            <div class="col-6 p-4 d-flex flex-column justify-content-center">
                <input type="text" v-model="product.units" class="form-control">
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props:['product'],
    methods:{
        addFirstUnit(){
            Vue.set(this.product,'units',1);
        }
    }
}
</script>
