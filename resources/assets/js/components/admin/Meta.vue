<template>
<div>

    <div v-if="meta" class="container m-auto">
        <form>
            <div class="row">
                <label class="col-12 col-lg-4" for="">Meta titulo</label>
                <textarea  @change="update('metatitle')" 
                    v-model.lazy="meta.metatitle" rows="2" 
                    class="form-control col-12 col-lg-6"></textarea>
            </div>
            <div class="row">
                <label class="col-12 col-lg-4"> Meta descripcion </label>
                <textarea  @change="update('metadescription')" 
                    v-model.lazy="meta.metadescription" rows="5"
                    class="form-control col-12 col-lg-6"></textarea>
            </div>
        </form>
    </div>
    <hr>
    <hr>
    
    <div>
        <admin-categories></admin-categories>
    </div>
</div>
</template>

<script>
import adminCategories from './Categories.vue';
export default {
    components:{adminCategories},
    data(){
        return {
            meta:null
        }
    },

    created(){
        var vm =this;
        this.$http.get('/api/metadata/home')
            .then(response => {
                vm.meta = response.data;
            })
    },
    methods:{
        update(field)
        {
            var data={
                field:field,
                value:this.meta[field],
                id : this.meta.id
            }
            this.$http.put('/admin/metadata',data);
        }
    }
}
</script>
