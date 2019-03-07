<template>
    <div>
        <div class="row">
            <div class="col-12">
                <input type="text" placeholder="BUSCAR" v-model="searchword">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchword:'';
        }
    }
}
</script>
