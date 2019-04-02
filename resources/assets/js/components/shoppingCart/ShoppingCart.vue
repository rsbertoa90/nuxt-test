<template>
    <div class="d-flex flex-column">
        <cotizer-form></cotizer-form>
        <list></list>
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
