<template>
    <div class="modal fade" id="image-modal" tabindex="-1" role="dialog">
   <div class="modal-dialog" role="document">
    <div  v-if="product" class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"> {{product.name}} </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <img class="img-small w-50 " :src="product.image" :alt="product.name">
          <form enctype="multipart/form-data" name="uploader" >
          <csrf></csrf>
            <div class="d-flex flex-column">
                <label for="" class="text-info font-weight-bold">Cambiar</label>
                <input type="file" name="file"  accept="image/x-png,image/gif,image/jpeg">
            </div>   
           
          </form>
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click="save">Guardar</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        props: ['product'],
        data: function(){
            return {
               file : null,
            }
        },
        
        
        methods : {
            save :  function(event){
                var vm =this;
                var file = $('input[type="file"]')[0].files[0];
                this.file = file;
                // console.log(file);
                
                
                var fdata =  new FormData();
                fdata.append('image',file);
                fdata.append('product',this.product.id)
                // console.log(fdata);
                

                $.ajax({
                    url: "/admin/product/image",
                    type: "post",
                    data: fdata,
                    // async: false,
                    cache: false,
                    contentType: false,
                    processData: false,
                    files : true,
                    success: function () {
                       $('#image-modal').modal('hide');
                        vm.$emit('refresh');
                    },
                });

        
        },
            
        
    }
}
</script>
