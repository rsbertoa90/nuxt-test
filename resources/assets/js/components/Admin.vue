<template>
    <div class="container">   
        
         <div v-if="$mq == 'sm'" class="w-100 d-flex flex-column align-items-center jusify-content-center">
            <h2 class="text-warning">
                Lo sentimos. El administrador no esta disponible en dispositivos moviles.
            </h2>
            <br><br>
            <a href="/logout" class="button btn btn-outline-info">Volver</a>
        </div>
        <div v-else>
             <a href="/logout" class="button btn btn-outline-info">Volver</a>
             <div class="row w-100 d-flex justify-content-center">
                 <img src="/storage/images/app/MAJU.jpg" style="width : 200px ; height: 110px" alt="logo">
             </div>
             <hr>
                <admin-create :categories="categories" @productSaved="refresh"></admin-create>
                <hr>
                <div id="accordion">
                    <div v-for="category in categories" :key="category.id" class="card flex-wrap">
                        <div class="card-header" :id="category.id">
                            <h5 class="mb-0">
                                <button class="btn  btn-link w-100 btn-block text-left" 
                                        data-toggle="collapse" 
                                        :data-target="'#'+category.name" 
                                        aria-expanded="true" 
                                        :aria-controls="category.name"
                                       >
                                {{category.name.ucfirst()}}
                                </button>
                            </h5>
                        </div>
                        <div :id="category.name" class="collapse collapsed " aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                            <table class="table table-striped table-bordered ">
                                <thead class="">
                                    <th >imagen</th>
                                    <th>Codigo</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th >Unidades x bulto</th>
                                    <th >Precio x mayor</th>
                                </thead>
                                <transition-group tag="tbody" 
                                                    enter-active-class="animated slideInLeft faster "
                                                    leave-active-class="animated fadeOutDown faster ">
                                    <tr v-for="product in category.products" :key="product.id">
                                        <td >
                                            <img :src="product.image" :alt="product.name" @click="imgModal(product)"> 
                                        </td>
                                        <td>  
                                            <input v-model.lazy="product.code" @change="saveChange(product,'code')" type="text" class="nametd"> 
                                        </td>
                                        <td>  
                                            <input v-model.lazy="product.name" @change="saveChange(product,'name')" type="text" class="nametd"> 
                                        </td>
                                        
                                        <td class="text-info text-center"> 
                                            $<input style="width:80%" type="number" v-model.lazy="product.price" @change="saveChange(product,'price')"> 
                                            </td>
                                        <td class="text-center">
                                            <input type="number" v-model.lazy="product.pck_units" @change="saveChange(product,'pck_units')"> 
                                        </td>
                                        <td class="text-center text-success font-weight-bold">
                                            $<input style="width:80%" type="number" v-model.lazy="product.pck_price" @change="saveChange(product,'pck_price')"> 
                                        </td>
                                        <td>
                                            <button @click.prevent="deleteProduct(product)" class="btn btn-sm btn-outline-danger">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </transition-group>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
                <image-modal :product="product"  ref="modal" @refresh="refresh()"></image-modal>
        </div>

        
    </div>
</template>

<script>
import imageModal from './Img-modal.vue';
import adminCreate from './Create.vue';
    export default {
        components : {
            imageModal : imageModal,
            adminCreate : adminCreate
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
            deleteProduct(product){
                var vm = this;
                this.$http.delete('/admin/product/'+product.id)
                    .then(response => {
                        // console.log(response);
                        for (const key in vm.categories) {
                            if (vm.categories.hasOwnProperty(key)) {
                                const cat = vm.categories[key];
                                for (const k in cat.products) {
                                    if (cat.products.hasOwnProperty(k)) {
                                        const prod = cat.products[k];
                                        if(prod.id == product.id)
                                        {
                                            vm.categories[key].products.splice(k,1);
                                            if (vm.categories[key].products.length == 0){
                                                vm.categories.splice(key,1);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        
                    });
            },
            logme(e){console.log(e)},
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
        filters : {
            price(value){
                return  value.toFixed(2);
            }
        }
    }
</script>

<style scoped>
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
       .form-control{width: 20vw;}
       .nametd {width: 25vw;}
   }
</style>
