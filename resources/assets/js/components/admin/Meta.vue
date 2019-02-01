<template>
<div>

    <div>
        <a href="/admin/prices-list-job" class="btn btn-md btn-outline-info" > Refrescar lista de precios </a>
    </div>
    <div>
        <a href="/admin/catalogo-job" class="btn btn-md btn-outline-info" > Refrescar catalogo </a>
    </div>

    <div>
        <form method="post" action="/admin/replace-catalogo" enctype="multipart/form-data">
            <input type="hidden" name="_token" :value="csrf">
            <label class="btn btn-md btn-outline-info mt-3">Subir catalogo comprimido
                <input @change="catalogosubido=true" style="display:none" type="file" name="catalogo">
            </label>
            <button type="submit" v-if="catalogosubido">Guardar</button>
        </form>
    </div>

    <div v-if="meta" class="container m-auto">
       <!--  <a target="_blank"  href="/admin/catalogo" class="button btn btn-block btn-danger">CATALOGO</a> -->
       <br/>
        <form>
            <div class="row">
                <label class="col-12 col-lg-4" for="">Meta titulo</label>
                <textarea  @change="update('metatitle')" 
                    v-model.lazy="meta.metatitle" rows="2" 
                    class="form-control col-12 col-lg-6"></textarea>
            </div>
            <div rg="row">
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
    <div>
        <admin-customtexts></admin-customtexts>
    </div>
</div>
</template>

<script>
import adminCategories from './Categories.vue';
import adminCustomtexts from './customs.vue';
export default {
    components:{adminCategories, adminCustomtexts},
    data(){
        return {
            meta:null,
            catalogosubido:false,
            csrf:window.csrf
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
