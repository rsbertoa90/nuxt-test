<template>
    <div class="">
        <h5>Envianos tu pedido</h5>
        <p>Recibiras confirmacion de tu presupuesto por email</p>
        <form class="col-12">
                <csrf></csrf>
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
        formData : {
            msg : '',
            phone : '',
            email : ''
        }
    }},

    methods : {
        send(){
            if (this.formData.email.length > 4 & this.list.length > 0){

                var data = {
                    msg : this.formData.msg,
                    phone : this.formData.phone,
                    email : this.formData.email,
                    list : JSON.stringify(this.list),
                    total : this.total
                };
                var vm = this;
                $.ajax({
                    method : 'post',
                    data : data,
                    url : '/cotizer/send',
                    success(){
                        swal('Enviamos tu presupuesto. Te estaremos contactando a la brevedad');
                    } 
                });
            }
        }
    }
}

</script>

<style>
</style>