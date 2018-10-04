<template>
<div class="w-100">
    
    <div v-if="config && user && config.maintenance && user.role_id > 2">
        <div class="d-flex flex-column text-center w-100">
            <h1>
                Estamos Actualizando nuestros precios
            </h1>
            <h2>
                Vuelve a intentar mas adelante
            </h2>
        </div>
    </div>

    <div v-else class="container w-100" :class="{'bg-white' : user != null && user.role_id > 2}">   
        <div class="row w-100 d-flex justify-content-center">
            <div class="col-12 offset-lg-4 col-lg-4">
                <img src="/storage/images/app/MAJU.jpg" 
                style="width : 200px ; height: 100px" 
                alt="logo" >
            </div>
            <div class="col-12 col-lg-2">
                <button class="btn btn-outline-info btn-lg" 
                        @click.prevent="downloadPrices">
                    <span class="fa fa-download"></span> Descargar lista de precios
                </button> 
                <a class="btn btn-outline-warning btn-lg" 
                    href="/">
                     <span class="fa fa-sync-alt"></span> Resetear Cotizador
                </a> 
                <div v-if="user && user.role_id < 3">
                    <button v-if="config && !config.maintenance" @click="toggleMaintenance"
                    class="btn btn-outline-danger btn-lg" >
                        Ocultar cotizador al publico        
                    </button> 

                    <button v-else @click="toggleMaintenance"
                    class="btn btn-outline-success btn-lg" >
                        Mostrar cotizador al publico
                    </button> 
                </div>
            </div>
        </div>
       

             <hr v-if="user && user.role_id < 3">
             <div v-if="user && user.role_id < 3" class="row">
                <form   @submit.prevent="addSelectorProduct"
                        class="form form-inline w-100 d-flex  " 
                        :class="{'flex-column align-items-start justify-items-between':$mq != 'lg'}">
                    <div class=" d-flex ml-3 mt-2 " >
                        <label for="">Codigo</label>
                        <input type="text" v-model="selector.code" class="form-control ml-2">
                    </div>
                    <div class=" d-flex ml-3 mt-2 " >
                        <label for="">Producto</label>
                        <label class="text-info ml-4"> {{selector.name}} </label>
                    </div>
                    <div class=" d-flex ml-3 mt-2 " >
                        <label class="mr-2" for="">Unidades</label>
                        <input type="number" min="0"  class="form-control" v-model="selector.units">
                    </div>
                    <button type="submit" class="btn btn-md btn-secondary ml-2" :class="{'btn-outline-success':selector.product && selector.units > 0}"> <span class="fa fa-plus"></span> </button>
                </form>
                <div class="w-100">
                   <pedido @change="listChange" v-if="list && list.length > 0" :list="list"></pedido>
                </div>
             </div>
             <hr>
        <div id="accordion">
            <div v-for="category in poblatedCategories" :key="category.id" class="card flex-wrap">
                <div class="card-header" :id="category.id">
                    <h5 class="mb-0">
                        <button class="btn  btn-link w-100 text-left" 
                                data-toggle="collapse" 
                                :data-target="'#cat'+category.id" 
                                aria-expanded="true" 
                                :aria-controls="category.id">
                                
                                  
                                   {{category.name | ucFirst}}
                                 
                                
                        </button>
                    </h5>
                </div>
                <div :id="'cat'+category.id" class="collapse collapsed " aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                       <table class="table table-striped table-bordered ">
                           <thead class="">
                               <th>Foto</th>
                               <th v-if="user && user.role_id < 3">Codigo</th>
                               <th class="nametd">Nombre</th>
                               <th class="">Precio</th>
                               <th  class="">Llevando mas de</th>
                               <th v-if="$mq != 'sm'"  class="">Precio x mayor</th>
                               <th class="">Quiero</th>
                               <th v-if="$mq != 'sm'" class="">Subtotal</th>
                           </thead>
                           <tbody>
                               <tr v-for="product in activeProducts(category)" :key="product.id" >
                                   <td width="10%" @click="show(product.image)"> <v-lazy-image class="sampleImage" :src="product.image" :alt="product.name" /> </td>
                                   <td v-if="user && user.role_id < 3"> {{product.code}} </td>
                                   <td style="cursor:pointer" @click="show(product.image)">  {{product.name | ucFirst}} </td>
                                   <td class="text-info text-center"> 
                                       <span v-if="product.price > 0"> ${{product.price | price}} </span>
                                       <span v-else> - </span> 
                                       <span class="text-danger" v-if="$mq == 'sm'"> / ${{product.pck_price | price}}</span>
                                    </td>
                                   <td class="text-center">
                                      <span v-if="product.pck_units > 1"> {{product.pck_units}} </span>
                                      <span v-else> Venta x unidad </span>
                                    </td>
                                   <td v-if="$mq != 'sm'" class="text-center text-success font-weight-bold"> 
                                        <span v-if="product.pck_units > 1"> ${{product.pck_price | price}} </span>
                                        <span v-else> - </span>
                                    </td>

                                   <td v-if="!product.paused"><input type="number" min="0" class="form-control " v-model="product.units">
                                        
                                        <div v-if="$mq == 'sm' && product.units > 0" class="text-success d-flex flex-column p-0 m-0 justify-content-center align-items-center">
                                            
                                            <span v-if="product.units < product.pck_units">  ${{(product.price * product.units) | price}} </span>
                                            <span v-if="product.units >= product.pck_units">  ${{(product.pck_price * product.units) | price}} </span>
                                            
                                        </div>
                                   
                                   </td>
                                   <td v-else>
                                       <span class="text-danger">Sin Stock</span>
                                   </td>
                                   
                                   <td v-if="! product.units && $mq != 'sm'"> 0 </td>
                                   <td v-else-if="product.units < product.pck_units & $mq != 'sm'">$ {{ (product.units * product.price).toFixed(2) }}  </td>
                                   <td v-else-if="$mq != 'sm'"> ${{ (product.units * product.pck_price).toFixed(2) }} </td>
                               </tr>
                           </tbody>
                       </table>
                </div>
                </div>
            </div>
        </div>
        
        <transition enter-active-class="animated bounceIn" leave-active-class="animated fadeOutDown">
            <div v-if="total > 0" id="total"  class="col-12 row d-flex flex-column align-items-center justify-content-center w-100">
                <div  class="bg-success p-1 col-6 col-lg-2">
                    <div class="col-12 bg-white d-flex justify-content-center">
                    TOTAL : ${{total | price}}
                    </div>
                </div>
               
                <div  class="bg-success p-1 col-6 col-lg-2">
                    <div class="col-12 bg-white d-flex justify-content-center">
                        <a href="#form"> Terminar pedido </a>
                    </div>
                </div>
            </div>    
        </transition>
        <hr>
        <div>
            <cotizer-form :user="user" :list="list" :total="total"></cotizer-form>
            
        </div>
        <div v-if="!user || user.role_id > 2">
             <pedido @change="listChange" v-if="list && list.length > 0" :list=list></pedido>
        </div>
    </div>
</div>
</template>

<script>
import pedido from './pedido.vue'
    export default {
        components:{pedido},
        data(){
            return {
                selector:{
                    code:'',
                    name:'',
                    product:null,
                    units:0
                },
                categories : [],
                list : [],
                user : null,
                config:null
            }
        },
        watch : {
            'selector.code'(){
                var  vm = this;
                var res =false;
                this.categories.forEach(cat => {
                    cat.products.forEach(prod => {
                        if (vm.selector.code == prod.code){
                            vm.selector.product = prod;
                            vm.selector.name = prod.name;
                            res = true;
                        }
                    });
                });
                if (!res){
                    vm.selector.product = null;
                    vm.selector.name='';
                }
            },
            total() {
                   var result = [];
                   var vm = this;
                    vm.categories.forEach(function(category){
                    var prods = category.products.filter(function(el){     
                        return ( el.units != null & el.units > 0 );
                    });
                    if (prods.length > 0){
                        result.push(prods);
                        
                    }
                    
                });
                
                
                vm.list = [].concat.apply([], result);
               
            }
        },
        computed: {
            poblatedCategories(){
                var vm = this;
                var c = this.categories.filter(el => {
                    return (vm.activeProducts(el).length > 0);
                });
                return c;

            },
            total() {
                var vm = this;
                var tot = 0;
                vm.categories.forEach(function(category){
                    category.products.forEach(function(product){
                        if (product.units > 0)
                        {
                            if (product.units < product.pck_units){
                                tot+= product.price * product.units;
                            }
                            else {
                                tot+= product.pck_price * product.units
                            }
                        }
                    });
                });
                return tot;
            }
        },
        created(){
            var vm = this;
            $.ajax({
                url : 'api/categories',
                success(response){
                    vm.categories = response;
                    vm.categories = _.sortBy(vm.categories,'name');
                   
                }
            });

            this.$http.get('/config')
                .then(response => {
                    vm.config = response.data;
                }); 

          
        },
        mounted() {
              this.$http.get('/getuser')
                .then(response => {
                    this.user = response.data;
                });
        },
        methods:
        {
            listChange(event){
                let product = this.list.find(prod => {
                    return prod.id == event.id;
                });
                product.units = event.units;

            },
            addSelectorProduct(){
                var vm = this;
                if (vm.selector.units > 0 && vm.selector.product != null ){
                    let prod = this.selector.product;
                    if (prod.units == undefined)
                    {
                        Vue.set(prod,'units',0);
                    }
                   prod.units = this.selector.units;
                   vm.selector.product = null;
                   vm.selector.code = '';
                   vm.selector.units = 0;
                   vm.selector.name ='';
                   
                }
            },
            toggleMaintenance(){
                if (this.config.maintenance){
                    this.config.maintenance = 0;
                }else {this.config.maintenance =1;}

                this.$http.put('/admin/config',{field:'maintenance',value:this.config.maintenance})
            },
            userRole(){
                
                if (this.user){
                    return this.user.role_id;
                }
                return 3;
            },
          
            downloadPrices(){
                window.location.replace('/descargar-lista-de-precios');
            },
            activeProducts(category)
            {
                var active = category.products.filter(pr => {
                    return (! pr.paused)
                });
                active = _.sortBy(active,'name');
                return active;
            },
            show(url){
                var content = document.createElement("img");
                $(content).attr('src',url);
                content.style.width = '100%';
                swal({content : content});
            }
        },
        filters : {
            price(value){
                return  value.toFixed(2);
            }
        }
    }
</script>

<style scoped>
    .sampleImage{
        width: 50px;
    }

    .form-control{
        max-width: 80px;
    }
   .btn-link {color : black;}
    #total {
        position: fixed;
        /* margin-left:50vw; */
        bottom: 20px;
        z-index: 100;
    }
    img{width:100%}

    @media(max-width: 600px){
        
        td { white-space : normal;}
        #accordion{
            margin: 0 -3%;
        }
        table {
            table-layout: fixed;
            width:95vw;
            font-size: 0.66rem;
            font-weight: bold;
        }
        input[type="number"]{
            max-width: 70px;
        }
       
        .card-body,table th, table td{padding:5px;}
    }
    
    @media(min-width: 600px){
         .sampleImage{
            width: 150px;
        }
        table{ font-size: 1rem; font-weight: normal}
        td {white-space: normal;}
        .card-body,.container{padding:1.25rem}
        
    }
   
</style>
