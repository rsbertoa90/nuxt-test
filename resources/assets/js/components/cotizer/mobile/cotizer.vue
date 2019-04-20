<template>
    <div>
        <div class="row w-100 d-flex justify-content-center">
           
            <div class="col-12 col-lg-12" v-if="user && user.role_id < 3">
               <hideOptbutton></hideOptbutton>
            </div>

            <div :class="{'col-12 col-lg-5 text-center':$mq=='lg',
                         'col-12 col-lg-4 text-center neg-margins':$mq!='lg'}" >
                 <app-banner></app-banner>
            </div>
        </div>

        <!-- Barra de busqueda -->
         <div class="row">
            <input type="text" v-on:input="searchTerm = $event.target.value"  @change="selectedPage=1"
                    class="form-control search-bar" placeholder="¿ QUE ESTAS BUSCANDO ?">
        </div> 
        

        <code-selector v-if="user && user.role_id < 3" :list="list"></code-selector>
    
        <hr>
        

        <categories-acordion v-if="searchTerm.trim().length < 3"></categories-acordion>
        
        
         <div class="row" v-if="searchTerm.trim().length > 2 ">
            <paginator class="col-12"
                            :selectedPage="selectedPage"   
                            :products="filteredProducts" 
                            :productsPerPage="productsPerPage"
                            @selectPage="selectedPage=$event">

            </paginator>
            
            <products-table class="col-12" :products="paginatedProducts"></products-table>
            
            <paginator class="col-12"
                            :selectedPage="selectedPage"   
                            :products="filteredProducts" 
                            :productsPerPage="productsPerPage"
                            @selectPage="selectedPage=$event">

                </paginator>
        </div>

    <cotizer-tutorial v-if="!user || user.role_id > 2 && !tutoSeen"></cotizer-tutorial>

    </div>
</template>


<script>
import productsTable from '../products-table.vue';
import categoriesAcordion from '../categories-acordion.vue';
import codeSelector from '../code-selector.vue';
import appBanner from '../banner.vue';
import hideOptbutton from '../hide-opt-button.vue';
import cotizerTutorial from '../tutorial.vue';
 export default {
        components:{
              cotizerTutorial,
            productsTable,
            categoriesAcordion,
            codeSelector,
            appBanner,
           
            hideOptbutton,
            },
        data(){
            return {
                selectedPage:1,
                 productsPerPage:30,
                searchTerm:'',
                loading:true,
             
            }
        },
        watch : {
            searchTerm(){
              this.selectedPage = 1;
           },
        },
        computed: {
            tutoSeen(){
                return this.$store.getters.getTutoSeen;
            },
            list(){
                return this.$store.getters.getList;
            },
            paginatedProducts(){
                if (this.filteredProducts)
                {
                   return this.paginate(this.filteredProducts, this.selectedPage);
                }
            },
            filteredProducts(){
                var vm =this;
                if(this.searchTerm.trim() != ''){
                    let terms = vm.searchTerm.split(' ');
                    let res = [];
                    
                  
                    this.categories.forEach(cat => {
                        let categoryName = cat.name.toString().toLowerCase().trim(); 
                        cat.products.forEach(prod => {
                            let productName = prod.name.toString().toLowerCase().trim();
                            let addtores = true;
                            
                            terms.forEach(term => {
                                
                                term = term.toLowerCase();
                                if (    addtores 
                                        && productName.indexOf(term) < 0 
                                        && categoryName.indexOf(term) < 0  
                                    ){
                                        addtores = false;   
                                    } 

                            });
                            if (addtores){
                                res.push(prod);
                            }
                        });
                    });  
                    return res;  
                }
            },
            categories(){
                return this.$store.getters.getNotPaused;
            },
            config(){
                return this.$store.getters.getConfig;
            },
            user(){
                return this.$store.getters.getUser;
            },

            total() {
               return this.$store.getters.getTotal;
            }
        },
      
       
        methods:
        {
            paginate(array,page){
                if(array && array.length>0){
                    page--; 
                   return array.slice(page * this.productsPerPage, (page + 1) * this.productsPerPage);
                }
            },
         
        },
        filters : {
            price(value){
                return  value.toFixed(2);
            }
        }
    }
</script>


<style lang="scss" scoped>

.contain-all{
    width: 100vw;
    padding:5px;
    overflow: hidden;
}

   
 


    .lglogo{
        width : 200px ; 
        height: 100px;
    }
    .smlogo{
        width : 100px ; 
        height: 50px;
        margin-bottom: 15px;
        margin-top: 10px;
    
    }

    

   
   
   
   
    img{width:100%}

   

    .loader {
    position : fixed;
    height: 100%;
    width: 100%;
    z-index: 110;
    background-color: #ddddddaa;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 5%;
}

.search-bar{
    border:1px solid #D52B1E;
    padding:3px;
    margin-top:20px;
    text-align: center;
    

    &::placeholder{
        color: #D52B1E;
        text-align:center;
    }
}




</style>
