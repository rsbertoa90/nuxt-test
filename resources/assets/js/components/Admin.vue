<template>
    <div class="container">   
     
        <div id="accordion">
            <div v-for="category in categories" :key="category.id" class="card flex-wrap">
                <div class="card-header" :id="category.id">
                    <h5 class="mb-0">
                        <button class="btn  btn-link" 
                                data-toggle="collapse" 
                                :data-target="'#'+category.name" 
                                aria-expanded="true" 
                                :aria-controls="category.name">
                        {{category.name.ucfirst()}}
                        </button>
                    </h5>
                </div>
                <div :id="category.name" class="collapse collapsed " aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                       <table class="table table-striped table-bordered ">
                           <thead class="">
                               <th v-if="$mq != 'sm' ">imagen</th>
                               <th>Nombre</th>
                               <th class="">Precio</th>
                               <th  class="">Unidades x bulto</th>
                               <th  class="">Precio x mayor</th>
                           </thead>
                           <tbody>
                               <tr v-for="product in category.products" :key="product.id">
                                   <td v-if="$mq != 'sm' ">
                                       <img :src="product.image" :alt="product.name" @click="imgModal(product)"> 
                                    </td>
                                   <td>  
                                       <input v-model.lazy="product.name" @change="saveChange(product,'name')" type="text" class="nametd"> 
                                    </td>
                                   <td class="text-info text-center"> 
                                       $<input type="number" v-model.lazy="product.price" @change="saveChange(product,'price')"> 
                                    </td>
                                   <td class="text-center">
                                       <input type="number" v-model.lazy="product.pck_units" @change="saveChange(product,'pck_units')"> 
                                    </td>
                                   <td class="text-center text-success font-weight-bold">
                                       $<input type="number" v-model.lazy="product.pck_price" @change="saveChange(product,'pck_price')"> 
                                    </td>
                               </tr>
                           </tbody>
                       </table>
                    </div>
                </div>
            </div>
        </div>
       <image-modal :product="product"  ref="modal" @refresh="refresh()"></image-modal>

        
    </div>
</template>

<script>
import imageModal from './Img-modal.vue';
    export default {
        components : {
            imageModal : imageModal
        },
        data(){
            return {
                categories : [],
                list : [],
                product : null,
                showModal : false,
            }
        },
        methods : {
            refresh(){
                var vm = this;
                $.ajax({
                    url : 'api/categories',
                    success(response){
                        vm.categories = response;
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
            var vm = this;
            $.ajax({
                url : 'api/categories',
                success(response){
                    vm.categories = response;
                }
            });

            
        },
    }
</script>

<style scoped>
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
       .form-control{width: 20vw;}
       .nametd {width: 25vw;}
   }
</style>
