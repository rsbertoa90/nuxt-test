<template>
    <div class="d-flex flex-column p-4">
        <cotizer-form></cotizer-form>
        <list></list>
        <div class="col-12" style="height:100px"></div>
    </div> 
</template>

<script>
import cotizerForm from './form.vue';
import list from './list.vue';
export default {
    components:{
        cotizerForm,list
    }
}
</script>
