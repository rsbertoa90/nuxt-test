<template>
    <div class="">
        <div v-if="loading" class="loader">
            <dot-loader :loading="loading" size="200px"></dot-loader>
        </div>

        <h5>Envianos tu pedido</h5>
        <p>Nos estaremos comunicando para confirmar tu presupuesto</p>
        <form class="col-12" id="form">
                <csrf></csrf>

              <div class="col-12 row form-group-row mb-3">
                  <div class="col-12 col-lg-4">
                    <input  type="radio"
                           v-model="formData.shipping" :value="false"> 
                     <span @click="formData.shipping=false"  class="text-secondary radioText" :class="{'text-success':!formData.shipping}">
                        <span class="fa fa-building"></span> Retiro en el local
                     </span>
                  </div>
              </div>
              <div class="col-12 row form-group-row mb-3">
                  <div class="col-12 col-lg-4">
                    <input  type="radio"
                           v-model="formData.shipping" :value="true"> 
                    <span  @click="formData.shipping=true" class="text-secondary radioText" :class="{'text-success':formData.shipping}">
                        <span class="fa fa-truck"></span> Envio por transporte
                    </span>
                  </div>
               </div> 

                <div v-if="user && user.role_id < 3" class="col-12 row form-group-row">
                   <label class="col-4 col-lg-2" for="">Nombre del Vendedor</label>
                   <input  type="text" v-model="formData.seller"  class="form-control col-8 col-lg-4">
                </div> 

               <div class="col-12 row form-group-row">
                   <label class="col-4 col-lg-2" for="">
                       Nombre y Apellido 
                       <span v-if="user && user.role_id < 3"> (del cliente) </span> 
                    </label>
                   <input required type="text" v-model="formData.name"  class="form-control col-8 col-lg-4">
                </div>

                <!-- DATOS DE ENVIO -->
                <div v-if="formData.shipping">
                    
                    <div class="col-12 row form-group-row">
                        <label class="col-4 col-lg-2" for=""> Provincia </label>
                        <select v-if="states.length > 0" v-model="state" class="form-control col-8 col-lg-4">
                            <option v-for="opt in states" :key="opt.id" :value="opt"> 
                                {{opt.name}}
                            </option>
                        </select>
                    </div>
                    <div class="col-12 row form-group-row">
                        <label class="col-4 col-lg-2" for=""> Ciudad </label>
                        <select v-if="state" v-model="formData.city" class="form-control col-8 col-lg-4">
                            <option v-for="opt in state.cities" :key="opt.id" :value="opt.id"> 
                                {{opt.name}}
                            </option>
                        </select>
                    </div>
                    <div class="col-12 row form-group-row">
                        <label class="col-4 col-lg-2" for=""> Direccion </label>
                        <input  type="text" v-model="formData.address"  class="form-control col-8 col-lg-4">
                    </div>
                    <div class="col-12 row form-group-row">
                        <label class="col-4 col-lg-2" for=""> Transporte </label>
                        <input  type="text" v-model="formData.transport"  class="form-control col-8 col-lg-4">
                    </div>
                    <div class="col-12 row form-group-row">
                        <label class="col-4 col-lg-2" for=""> Codigo Postal </label>
                        <input  type="text" v-model="formData.cp"  class="form-control col-8 col-lg-4">
                    </div>
                </div>
                <!-- /DATOS DE ENVIO -->

               <div class="col-12 row form-group-row">
                   <label class="col-4 col-lg-2" for="">Email</label>
                   <input required type="email" v-model="formData.email"  class="form-control col-8 col-lg-4">
                </div> 
               <div class="col-12 row form-group-row">
                   <label class="col-4 col-lg-2" for="">Telefono</label>
                   <input v-model="formData.phone" type="text" class="form-control col-8 col-lg-4">
                </div> 
               <div class="col-12 row form-group-row">
                   <label class="col-4 col-lg-2" for="">Mensaje</label>
                   <textarea v-model="formData.message" name="msg" class="form-control col-8 col-lg-4"></textarea>
                </div> 
                <button class="button btn-lg btn-outline-success offset-2 mt-2" @click.prevent.stop="send">Enviar</button>

        </form>
            
    </div>
</template>

<script>
export default{
    props : {
        list : {default : []},
        total : {default : 0},
        user: {default:{}},
    },
    computed:{
       
    },

    data(){return{
        states:[],
        state:null,
        cities:[],
        loading : false,
        formData : {
            name : '',
            seller:'',
            message : '',
            phone : '',
            email : '',
            shipping: true,
            city: null,
            address:'',
            transport:'',
            cp:'',

        }
    }},

    methods : {
         minBuy(){
            if (this.formData.shipping){
                return 4000;
            }
            else {return 1500;}
        },
        formValid()
        {   
            if (this.formData.shipping && !this.formData.city)
            {
                  swal('Por favor selecciones una localidad ','','error');
                 return false; 
            }
            else if(!this.formData.name || this.formData.name.trim() == '')
            {
                 swal('El campo "Nombre y Apellido" es obligatorio ','','error');
                 return false; 
            }
            else if (this.formData.email.length < 4 && this.user.role_id > 2)
            {
                swal('Hay algo mal con el mail','','error');
                return false;
            }else if (this.list.length <= 0) 
            {   
                swal('No hay productos seleccionados','','error');
                return false;
            } else if (this.total < this.minBuy())
            {
                swal('El minimo de compra es de $'+this.minBuy(),'','error');
                return false;
            } else {return true;}
        },
        send(){
            if (this.formValid()){

                var data = this.formData;
                if (data.shipping)
                {
                    data.shipping = 1;
                } else {data.shipping = 0;}

                data.list = JSON.stringify(this.list);
                data.total = this.total;
                
                var vm = this;
                vm.loading = true;
                if (this.user && this.user.role_id < 3){
                     $.ajax({
                        method : 'post',
                        data : data,
                        url : '/admin/cotizacion',
                        success(){
                            vm.loading = false;
                            swal('Pedido guardado', 'Podras hacer seguimiento desde el panel de pedidos', 'success')
                                .then(() => {
                                    window.location.replace('/');
                                });
                        } 
                    });
                }
                else {

                    $.ajax({
                        method : 'post',
                        data : data,
                        url : '/cotizer/send',
                        success(){
                            vm.loading = false;
                            swal('Enviamos tu presupuesto', 'Te estaremos contactando a la brevedad', 'success')
                                .then(() => {
                                    window.location.replace('/');
                                });
                        } 
                    });
                }
            }
        }
    },
    created()
    {
        var vm = this;
        this.$http.get('/api/states')
            .then(response => {
                vm.states = response.data;
            });
    }
}

</script>

<style lang="scss" scoped>
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

input[type="radio"] {
  -webkit-appearance: checkbox; /* Chrome, Safari, Opera */
  -moz-appearance: checkbox;    /* Firefox */
  -ms-appearance: checkbox;     /* not currently supported */
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  padding: 10px;
  margin-right: 15px;
}
.radioText{
    font-size:1.2rem;
}
</style>