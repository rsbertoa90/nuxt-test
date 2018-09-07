<template>
    <div class="container">   
        
         <div v-if="$mq == 'sm'" class="w-100 d-flex flex-column align-items-center jusify-content-center">
            <h2 class="text-warning">
                Lo sentimos. El administrador no esta disponible en dispositivos moviles.
            </h2>
        </div>
        <div v-else class="w-100">
            
             <div class="row w-100 d-flex justify-content-center">
                 <img src="/storage/images/app/MAJU.jpg" style="width : 200px ; height: 110px" alt="logo">
             </div>
             <hr>
             <h4>Nuevo Producto:</h4>
                <admin-create :supliers="supliers" :categories="categories" @productSaved="refresh"></admin-create>
                <hr>
                <div class="row d-flex flex-column justify-content-center align-items-center">
                         <div class="col-4 d-flex flex-column justify-content-center align-items-center">
                        <h4>Cambiar precios masivo</h4>
                        <h5>  <span class="text-info">{{selectedProducts.length}}</span>  Productos seleccionados </h5>
                        <div class="d-flex justify-content-center"> 
                            <button class="mr-2" @click="variation-=1">-</button>
                            <input style="width:45px; text-align-center" type="number" v-model="variation"> %
                            <button class="ml-2" @click="variation+=1">+</button>
                        
                        </div>
                            <button class="btn btn-md btn-outline-success mt-1" v-if="variation != 0 && selectedProducts.length > 0" @click="applyVariation">Aplicar</button>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-6 row">
                        <label class="text-info font-weight-bold col-4">Ordenar por</label>
                        <select class="form-control col-6" v-model="orderBy" id="">
                            <option value="suplier.name">Proveedor</option>
                            <option value="category.name">Categoria</option>
                            <option value="name">Producto</option>
                            <option value="price">Precio</option>
                        </select>
                    </div>
                    <div  class="col-6 d-flex flex-column">
                        <div class="d-flex align-items-center ">
                             <label class="text-info font-weight-bold">Filtrar</label>
                            <input type="checkbox" class="form-control" v-model="selector.checked" @change="checkSelect">
                            <select class="form-control col-4"  v-model="selector.id">
                                <option value="all"> Todo</option>
                                <option v-if="orderBy == 'category.name'" 
                                        v-for="category in categories" :key="category.id" :value="category.id"> 
                                        {{category.name}}
                                </option>
                                <option v-if="orderBy == 'suplier.name'" 
                                        v-for="suplier in supliers" :key="suplier.id" :value="suplier.id"> 
                                        {{suplier.name}}
                                </option>
                            </select>
                        </div>
                    </div>
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
                                                    leave-active-class="animated slideOutRight faster position-absolute ">
                                    <tr v-for="(product,productKey) in filteredProducts" :key="product.id">
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
                                           <textarea rows="4" type="text" v-model.lazy="product.name" 
                                                  @change="saveChange(product,'name')" class="form-control"></textarea>
                                       </td>
                                       <td>
                                           <div class="row w-100 d-flex align-items-center">
                                                $<input v-model.lazy="product.price" @change="saveChange(product,'price')"
                                                        type="number" step=".01" class=" form-control smallField">
                                                        
                                           </div>
                                        
                                       </td>
                                       <td    class="smallField">
                                           <input step="1" v-model.lazy="product.pck_units" @change="saveChange(product,'pck_units')"
                                                type="number" class="form-control smallField ">
                                       </td>
                                      <td>
                                           <div class="row w-100 d-flex align-items-center">
                                               
                                               $<input  v-model.lazy="product.pck_price" 
                                                        @change="saveChange(product,'pck_price')"
                                                     
                                                type="number" step=".01" class="form-control smallField">
                                           </div>
                                        
                                       </td>
                                        <td class="d-flex flex-column justify-content-center align-items-center p-0">
                                            <input class="form-control" type="checkbox" v-model="product.selected">
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
                selector : {id :'all', checked : false},
                variation:0,
                products : [],
                categories :[],
                list : [],
                supliers : [],
                product : null,
                showModal : false,
                orderBy : 'suplier.name'
            }
        },
        computed:{
            selectedProducts()
            {
                var list =[];
                    this.products.forEach(prod => {
                        if (prod.selected)
                        {
                            list.push(prod);
                        }
                    });
                return list;
            },
            filteredProducts()
            {
                if (this.products.length > 0)
                {
                    var prop = null;
                    if (this.orderBy == 'category.name'){prop = 'category'}
                    else if (this.orderBy == 'suplier.name'){prop = 'suplier'}
                    
                    if (prop && this.selector.id != 'all'){
                        var filtered = this.products.filter(prod => {
                                return prod[prop].id == this.selector.id;     
                        });
                        return _.orderBy(filtered,this.orderBy)
                    } else{ return _.orderBy(this.products,this.orderBy) }
                }
                return [];
            }
        },
         watch : {
            orderBy(){
                this.products = _.sortBy(this.products,this.orderBy);
                this.resetCheckboxes();
            },
            'selector.id'()
            {
                this.resetCheckboxes();
            }


        },
        methods : {
            resetCheckboxes(){
                this.selector.checked =false;
                this.products.forEach(prod => {
                    prod.selected = false;
                });
            },
            checkSelect(){
                if (this.selector.id == 'all')
                {
                    this.products.forEach(prod => {
                        if (prod.selected == undefined)
                        {
                            Vue.set(prod,'selected',true);
                        }
                        prod.selected = this.selector.checked;
                    });
                }else{
                    if (this.orderBy == 'category.name')
                    {
                        this.products.forEach(prod => {
                            if (prod.category.id == this.selector.id)
                            {
                                if (prod.selected == undefined)
                                {
                                    Vue.set(prod,'selected',true);
                                }
                                prod.selected = this.selector.checked;
                            }
                        });
                    } else if (this.orderBy == 'suplier.name')
                    {
                         this.products.forEach(prod => {
                            if (prod.suplier.id == this.selector.id)
                            {
                                if (prod.selected == undefined)
                                {
                                    Vue.set(prod,'selected',true);
                                }
                                prod.selected = this.selector.checked;
                            }
                        });
                    }
                }


            },
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
                        vm.categories = _.sortBy(vm.categories,'name');
                    }
                });
                $.ajax({
                    url : 'api/supliers',
                    success(response){
                        vm.supliers = response;
                         vm.supliers = _.sortBy(vm.supliers,'name');
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
            },
               selectAllProducts()
            {
                    this.products.forEach(prod => {
                        if (prod.selected == undefined)
                        {
                            Vue.set(prod,'selected',true)
                        }
                        else {
                            prod.selected = true;
                        }
                    });
            },
            applyVariation()
            {
                var vm =this;
                var variation = 1+(this.variation/100);
                this.selectedProducts.forEach(prod => {
                    prod.price = prod.price * variation;
                    prod.pck_price = prod.pck_price * variation;
                    vm.saveChange(prod,'price');
                    vm.saveChange(prod,'pck_price');
                });
                vm.variation = 0;
                vm.resetCheckboxes();
                vm.refresh();
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

input[type="checkbox"]{
    width: 25px;
    margin:  10px;
    height: 20px;
}


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
