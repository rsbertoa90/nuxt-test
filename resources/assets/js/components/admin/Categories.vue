<template>
    <div class="row">
        <div v-if="categories" class="col-12 col-lg-6 d-flex flex-column justify-content-start align-items-center">
            <h4>Categorias</h4> 
            <hr>

            <div class="border border-success p-2 m-3 d-flex flex-column">
                <h4 class="text-success">Nueva categoria</h4>
                <textarea v-model="newcat"></textarea>
                <button class="btn btn-lg btn-outline-info"
                    @click="newCategory()">Guardar</button>
            </div>
            <hr>
            <div v-for="category in categories" :key="category.id" class="d-flex flex-column m-2">
                <textarea v-model.lazy="category.name" @change="update('category',category)"> </textarea>
                <button @click="destroyCat(category)" v-if="!category.products || !category.products.length" class="btn btn-danger">BORRAR</button>
            </div>
        </div>
        <div v-if="supliers" class="col-12 col-lg-6 d-flex flex-column justify-content-start align-items-center">
            <h4>Proveedores</h4> 
               <hr>

            <div class="border border-success p-2 m-3 d-flex flex-column">
                <h4 class="text-success">Nuevo proveedor</h4>
                <textarea v-model="newsup"></textarea>
                <button class="btn btn-lg btn-outline-info"
                    @click="newSuplier()">Guardar</button>
            </div>
            <hr>
            <div v-for="suplier in supliers" :key="suplier.id"  class="d-flex flex-column m-2">
                <textarea v-model.lazy="suplier.name" @change="update('suplier',suplier)"></textarea>
                 <button @click="destroySup(suplier)" v-if="!suplier.products || !suplier.products.length" class="btn btn-danger">BORRAR</button>
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            newcat:null,
            newsup:null,
            categories:[],
            supliers:[]
        }
    },
    methods:{
        destroyCat(cat){
             this.$http.delete('/admin/category/'+cat.id)
                .then(res => {
                    this.refresh();
                });   
        },
        destroySup(sup){
            this.$http.delete('/admin/suplier/'+sup.id)
                .then(res => {
                    this.refresh();
                });
        },
        newCategory(){
            var vm=this;
            if (this.newcat){
                let data = {
                    name : this.newcat
                }
                 this.$http.post('/admin/category',data)
                    .then(res => {
                          vm.refresh();
                        vm.newcat = null;
                    });
            }
        },
        newSuplier(){
            var vm =this;
            if (this.newsup){
                let data = {
                    name : this.newsup
                }
                 this.$http.post('/admin/suplier',data)
                  .then(res => {
                        vm.refresh();
                        vm.newsup = null;
                    });
            }
        },
        update(type,obj)
        {
            let data = {
                id : obj.id,
                field: 'name',
                value : obj.name
            }
            this.$http.put('/admin/'+type,data);
        },
        refresh(){
            this.$http.get('/api/categories')
            .then(response => {
                this.categories = response.data;
            });
        this.$http.get('/api/supliers')
            .then(response => {
                this.supliers = response.data;
            });    
        }
    },
    created(){
        this.refresh();
    }
}
</script>
