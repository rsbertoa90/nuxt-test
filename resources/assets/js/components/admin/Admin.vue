<template>
    <div class="container">   
        
         <div v-if="$mq == 'sm'" class="w-100 d-flex flex-column align-items-center jusify-content-center">
            <h2 class="text-warning">
                Lo sentimos. El administrador no esta disponible en dispositivos moviles.
            </h2>
            <br><br>
            <a href="/" class="button btn btn-outline-info">Volver</a>
               <br><br>
            <!-- <a href="/admin/reporte" class="button btn btn-outline-info">Reporte</a> -->
        </div>
        <div v-else>
             <a href="/" class="button btn btn-outline-info">Volver</a>
             <a href="/logout" class="button btn btn-outline-info">Salir de modo Admin</a>
             <!-- <a href="/admin/reporte" class="button btn btn-outline-info">Reporte</a> -->
             <div class="row w-100 d-flex justify-content-center">
                 <img src="/storage/images/app/MAJU.jpg" style="width : 200px ; height: 110px" alt="logo">
             </div>
             <hr>
                <admin-create :supliers="supliers" :categories="categories" @productSaved="refresh"></admin-create>
                <hr>
                <div class="row">
                    <label class="text-info font-weight-bold col-2">Ordenar por</label>
                    <select class="form-control col-3" v-model="orderBy" id="">
                        <option value="suplier.name">Proveedor</option>
                        <option value="category.name">Categoria</option>
                        <option value="name">Producto</option>
                        <option value="price">Precio</option>
                    </select>
                </div>

                <table id="table" class="table table-striped table-bordered ">
                                <thead class="">
                                    <th>imagen</th>
                                    <th>Codigo</th>
                                    <th>Proveedor</th>
                                    <th>Categoria</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th >Unidades x bulto</th>
                                    <th >Precio x mayor</th>
                                </thead>
                                <transition-group tag="tbody" 
                                                    enter-active-class="animated slideInLeft faster "
                                                    leave-active-class="animated fadeOutDown faster position-absolute ">
                                    <tr v-for="(product,productKey) in products" :key="product.id">
                                       <td>
                                           <img :src="product.image" style="width :150px" :alt="product.name" @click="imgModal(product)">
                                       </td>
                                       <td>
                                           <input v-model.lazy="product.code" @change="saveChange(product,'code')" 
                                                  type="text" class="form-control smallField">
                                       </td>
                                       <td >
                                            <select class="form-control" v-model="product.suplier_id" 
                                                    @change="changed(productKey,'suplier')">
                                               <option v-for="suplier in supliers" 
                                                        :key="suplier.id" 
                                                        :value="suplier.id"
                                                        :selected="suplier.id == product.suplier_id"> 
                                                    {{suplier.name}} 
                                                </option>
                                           </select>
                                       </td>
                                       <td>
                                           <select class="form-control" v-model="product.category_id"
                                                    @change="changed(productKey,'category')" >
                                               <option v-for="category in categories" 
                                                        :key="category.id" 
                                                        :value="category.id"
                                                        :selected ="product.category.id == category.id"
                                                        > 
                                                    {{category.name}} 
                                                </option>
                                           </select>
                                       </td>
                                       <td >
                                           <input type="text" v-model.lazy="product.name" 
                                                  @change="saveChange(product,'name')" class="form-control">
                                       </td>
                                       <td>
                                           <div class="row w-100 d-flex align-items-center">
                                                $<input v-model.lazy="product.price" @change="saveChange(product,'price')"
                                                        type="number" class=" form-control smallField">
                                                        
                                           </div>
                                        
                                       </td>
                                       <td    class="smallField">
                                           <input v-model.lazy="product.pck_units" @change="saveChange(product,'pck_units')"
                                                type="number" class="form-control smallField ">
                                       </td>
                                      <td>
                                           <div class="row w-100 d-flex align-items-center">
                                               
                                               $<input  v-model.lazy="product.pck_price" 
                                                        @change="saveChange(product,'pck_price')"
                                                     
                                                type="number" class="form-control smallField">
                                           </div>
                                        
                                       </td>
                                        <td class="d-flex flex-column justify-content-center align-items-center p-0">
                                            <button @click.prevent="deleteProduct(product)" class="btn btn-sm btn-outline-danger m-1">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                            <button @click.prevent="togglePause(product)" class="btn btn-sm m-1" :class="{'btn-info' : !product.paused, 'btn-success': product.paused}">
                                                <i :class="{'fa fa-pause-circle' : !product.paused , 'fa fa-play' : product.paused}"></i>
                                            </button>
                                            
                                        </td>
                                    </tr>
                                </transition-group>
                </table>
                          
                <image-modal :product="product"  ref="modal" @refresh="refresh()"></image-modal>
        </div>

         
    </div>
</template>

<script>
import imageModal from './Img-modal.vue';
import adminCreate from './Create.vue';
import adminReport from './Report.vue';
    export default {
        components : {
            adminReport,
            imageModal : imageModal,
            adminCreate : adminCreate
        },
        data(){
            return {
                products : [],
                categories :[],
                list : [],
                supliers : [],
                product : null,
                showModal : false,
                orderBy : 'suplier.name'
            }
        },
      
         watch : {
            orderBy(){
                this.products = _.sortBy(this.products,this.orderBy);
               
            },
        },
        methods : {
            changed(productKey,field){ 
               this.saveChange(this.products[productKey],field+'_id')
                
            },
            togglePause(product){
                var vm = this;
                product.paused = !product.paused;
                vm.saveChange(product,'paused');
                for (const key in vm.categories) {
                    if (vm.categories.hasOwnProperty(key)) {
                        const category = vm.categories[key];
                        for (const k in category.products) {
                            if (category.products.hasOwnProperty(k)) {
                                const prod = category.products[k];
                                if (prod.id == product.id )
                                {
                                    vm.categories[key].products[k].paused = product.paused;
                                    return;
                                }
                            }
                        }
                    }
                }

                
            },
            deleteProduct(product){
                var vm = this;
                this.$http.delete('/admin/product/'+product.id)
                    .then(response => {
                     
                        vm.refresh();   
                    });
            },
         
            refresh(){
                var vm = this;
                $.ajax({
                    url : 'api/categories',
                    success(response){
                        vm.categories = response;
                    }
                });
                $.ajax({
                    url : 'api/supliers',
                    success(response){
                        vm.supliers = response;
                    }
                });
                $.ajax({
                url : 'api/products',
                success(response){
                    vm.products = response;
                    vm.products = _.sortBy(vm.products, vm.orderBy);
                }
            });
            },
            saveChange(product,field){
                var data = {
                    product : product.id,
                    field : field,
                    value : product[field]
                }
               
                $.ajax({
                    method : 'put',
                    data : data,
                    url : '/admin/product/update'
                });
            },
            imgModal(product){
                this.product = product;
                this.showModal = true;
                let element = this.$refs.modal.$el
                
                $(element).modal('show')
            }
        },
        created(){
            this.refresh();
        },
        mounted() {
              this.$http.get('/getuser')
                .then(response => {
                    this.user = response.data;
                });
        },
    }
</script>

<style scoped>
.smallField{width: 70px;}
td {min-width: 110px;}
.btn-link {color : black;}
    td img {
        width: 10vw;
    }
   @media(max-width: 600px){
       table,.container,.card,.card-body {font-size: 0.66rem ; padding : 0}
       
       th,td, input{
           white-space:nowrap;
           width: 13vw;
           padding: 2px;
       }
       
       
        
       .nametd {width: 25vw;}
   }
</style>
