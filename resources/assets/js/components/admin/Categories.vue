<template>
    <div class="row">
        <div v-if="categories" class="col-12 col-lg-6 d-flex flex-column justify-content-start align-items-center">
            <h4>Categorias</h4> 
            <hr>
            <div v-for="category in categories" :key="category.id">
                <textarea v-model.lazy="category.name" @change="update('category',category)"> </textarea>
            </div>
        </div>
        <div v-if="supliers" class="col-12 col-lg-6 d-flex flex-column justify-content-start align-items-center">
            <h4>Proveedores</h4> 
            <hr>
            <div v-for="suplier in supliers" :key="suplier.id">
                <textarea v-model.lazy="suplier.name" @change="update('suplier',suplier)"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            categories:[],
            supliers:[]
        }
    },
    methods:{
        update(type,obj)
        {
            let data = {
                id : obj.id,
                field: 'name',
                value : obj.name
            }
            this.$http.put('/admin/'+type,data);
        }
    },
    created(){
        this.$http.get('/api/categories')
            .then(response => {
                this.categories = response.data;
            });
        this.$http.get('/api/supliers')
            .then(response => {
                this.supliers = response.data;
            });
    }
}
</script>
