<template>
    <div class="row">
         <div class="col-12 mt-4">
            <button @click="job('prices-list-job')" class="btn btn-outline-info">  
                Refrescar Lista de Precios
            </button>
            <button @click="job('catalogo-job')" class="btn btn-outline-warning">  
                Refrescar Catalogo Digital
            </button>
          <!--   <a href="/super/failed-jobs" class="btn btn-outline-danger">  
                Failed jobs
            </a> -->
        </div>
        <div class="col-12 row" v-if="configs">
            <div class="col-12 mt-2">
                compra minima local: 
                <input type="number" @change="updateconfig('minbuy')" v-model.lazy="configs.minbuy">
            </div>
            <div class="col-12 mt-2">
                compra minima envios: 
                <input type="number" @change="updateconfig('minbuy_ship')" v-model.lazy="configs.minbuy_ship">
            </div>
        </div>
        <hr>
        <div class="col-12 row">
            <div class="col-12 mt-4" >
                <button v-if="configs && !configs.maintenance" class="btn btn-outline-danger" @click="toggleMaintenance">Ocultar precios</button>
                <button v-if="configs && configs.maintenance" class="btn btn-outline-success" @click="toggleMaintenance">Mostrar precios</button>
            </div>
        </div>
        <!-- <div class="col-12 row">
            <admin-slider></admin-slider>
        </div> -->
    </div>
</template>

<script>
import adminSlider from './admin-slider.vue';
export default {
     metaInfo(){return{
        title: 'ADMIN'   }},
    components:{adminSlider},
    computed:{
        configs(){
            return this.$store.getters.getConfig;
        }
    },
    methods:{
        toggleMaintenance(){
            let val = this.configs.maintenance ? 0 : 1;
            let data={
                field:'maintenance',
                value:val
            }
            this.$http.put('/admin/config',data)
            .then(r => {
                this.$store.dispatch('fetchConfig');
            });
        },
        job(route){
            this.$http.get('/admin/'+route)
            .then(res => {
                swal('Procedimiento puesto en cola','Los cambios seran visibles en unos minutos','success');
            });
        },
        updateconfig(field)
        {
            let data = {
                field : field,
                value : this.configs[field],
            };

            this.$http.put('/admin/config',data);
        },
    }
}

</script>
