<template>
    <div class="row">
        <div class="col-3" v-if="$mq=='lg'">
            <categories-pannel></categories-pannel>
        </div>
        <div class="col-12 col-lg-9">
            <router-link to="/cotizador" >
                <div style="border:1px solid #000 ; display:flex;justify-content:center;align-items:center ;width:100%; height:449px"> <h1>TODOS LOS PRODUCTOS</h1></div>
            </router-link>
        </div>
        
    </div>
</template>

<script>
import categoriesPannel from './categories-pannel.vue';
export default {
    components:{categoriesPannel}
}
</script>



