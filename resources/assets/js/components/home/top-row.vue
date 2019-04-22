<template>
    <div class="row">
        <div class="col-3" v-if="$mq=='lg'">
            <categories-pannel></categories-pannel>
        </div>
        <div class="col-12 col-lg-6">
          
            <div class="col-12 d-flex justify-content-center">
                <h1>Bazar Mayorista Maju</h1>
            </div>
        
            <offer-slider></offer-slider>
        </div>
        <div class="col-3" v-if="$mq == 'lg'" >
            <h2>Sumate!</h2>
            <div class="google-form">

                FOTO QUE VA AL FORM GOOGLE
            </div>
        </div>
         
        
    </div>
</template>

<script>
import offerSlider from './offer-slider.vue';
import categoriesPannel from './categories-pannel.vue';

export default {
    components:{offerSlider,categoriesPannel}
}
</script>

<style lang="scss" scoped>
    .google-form{
        padding:5px;
        height: 480px;
        width:100%;
        border:1px solid #868686;
    }
</style>


