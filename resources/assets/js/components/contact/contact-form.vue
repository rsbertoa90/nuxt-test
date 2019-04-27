<template>
   <div class="w-100 row p-4">
       <div class="offset-1 col-11 col-lg-5 row mt-2 ">
           
                <div class="col-12 row form-group-row">
                    <label class="col-12 col-lg-4" for="">
                        Nombre y Apellido     
                    </label>
                    <input required type="text" v-model="formData.name"  class="form-control col-12 col-lg-8">
                </div>
                <div class="col-12 row form-group-row mt-2 ">
                    <label class="col-12 col-lg-4" for="">Email</label>
                    <input required type="email" v-model="formData.email"  class="form-control col-12 col-lg-8">
                </div> 
                <div class="col-12 row form-group-row mt-2 ">
                    <label class="col-12 col-lg-4" for="">Telefono</label>
                    <input v-model="formData.phone" type="text" class="form-control col-12 col-lg-8">
                </div> 
       </div>
        <div class="offset-1 col-11 col-lg-5 row mt-2 ">
                <div class="col-12 row form-group-row mt-2">
                    <label class="col-12 col-lg-4" > Provincia </label>
                    <select v-if="states.length > 0" v-model="state" class="form-control col-12 col-lg-8">
                        <option v-for="opt in states" :key="opt.id" :value="opt"> 
                            {{opt.name}}
                        </option>
                    </select>
                </div>
                <div class="col-12 row form-group-row mt-2">
                    <label class="col-12 col-lg-4" for=""> Ciudad </label>
                    <select v-if="state" v-model="formData.city" class="form-control col-12 col-lg-8">
                        <option v-for="opt in state.cities" :key="opt.id" :value="opt.id"> 
                            {{opt.name}}
                        </option>
                    </select>
                </div>


                <div class="col-12 row form-group-row mt-2 ">
                    <label class="col-12 col-lg-4" for="">Mensaje</label>
                    <textarea v-model="formData.message" name="msg" class="form-control col-12 col-lg-8"></textarea>
                </div> 
                


              
                
                  
               
        </div>      
        <div class="col-6 col-lg-4 offset-2 mt-3">
            <button class="btn btn-block btn-outline-danger" @click="send">
                Enviar
            </button>
        </div>
              
   </div>
</template>


<script>
export default {
    data(){
        return{
            state:null,
            formData:{
                name:'',
                email:'',
                phone:'',
                message:'',
                city:''

            }
        }
    },
    methods:{
        resetForm(){
            this.state=null;
            this.formData= {
                name:'',
                email:'',
                phone:'',
                message:'',
                city:''

            }
        },
        send(){
            this.$http.post('/contacto',this.formData)
                .then(r => {
                    swal('Enviamos tu mensaje','Un asesor de ventas se estara comunicando con vos a la brevedad','success');
                    this.resetForm();
                });
        }
    },
    computed:{
        states(){
            return this.$store.getters.getStates;
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
