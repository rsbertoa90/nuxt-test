<template>
    <div class="">
        <div v-if="loading" class="loader">
            <dot-loader :loading="loading" size="200px"></dot-loader>
        </div>

        <h5>Envianos tu pedido</h5>
        <p>Recibiras confirmacion de tu presupuesto por email</p>
        <form class="col-12">
                <csrf></csrf>
              
               <div class="col-12 row form-group-row">
                   <label class="col-4 col-lg-2" for="">Nombre</label>
                   <input required type="text" v-model="formData.name"  class="form-control col-8 col-lg-4">
                </div> 
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
                   <textarea v-model="formData.msg" name="msg" class="form-control col-8 col-lg-4"></textarea>
                </div> 
                <button class="button btn-lg btn-outline-success offset-2 mt-2" @click.prevent.stop="send">Enviar</button>

        </form>
            
    </div>
</template>

<script>
export default{
    props : {
        list : {default : []},
        total : {default : 0}
    },

    data(){return{
        loading : false,
        formData : {
            name : '',
            msg : '',
            phone : '',
            email : ''
        }
    }},

    methods : {
        
        send(){
            if (this.formData.email.length > 4 & this.list.length > 0){

                var data = {
                    name : this.formData.name,
                    msg : this.formData.msg,
                    phone : this.formData.phone,
                    email : this.formData.email,
                    list : JSON.stringify(this.list),
                    total : this.total
                };
                var vm = this;
                vm.loading = true;
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
}

</script>

<style>
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
</style>