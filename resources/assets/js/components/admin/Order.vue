<template>
    <div class="border border-primary p-3 mt-3">
        <div>
            <div>
                <span class="font-weight-bold text-primary">Fecha: {{order.created_at | datetime}} </span> <br>
                <span class="font-weight-bold text-primary" v-if="order.seller">Vendedor: {{order.seller}} </span>
                <span v-if="order.comments"
                        class="mt-2"> -- {{order.comments}} -- </span>
            </div>
            <table class="table table-striped table-bordered mt-3">
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="op in order.order_products"
                    :key="'op'+op.product.id">
                    <td> {{op.product.code}} </td>
                    <td> {{op.product.name}} </td>
                    <td> ${{op.price}} </td>
                    <td> {{op.units}} </td>
                    <td> ${{op.units * op.price}} </td>
                </tr>
            
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td style="color : blue">TOTAL</td>
                    <td style="color : blue"> ${{total}} </td>
                    </tr>
            </tfoot>
        </table>
        </div>
        <div>
                <ul>
                    <li v-if="order.name">Nombre del cliente: {{order.name}} </li>
                    <li v-if="order.phone">Telefono: {{order.phone}} </li>
                    <li v-if="order.email">Email: {{order.email}} </li>
                    <li v-if="order.message">Mensaje adjunto: {{order.message}} </li>
                </ul>
        </div>
        <div class="row">
            <div class="col-12 col-lg-4">
                <a  :href="`/admin/pdf/${order.id}`" target="_blank"
                    class="btn btn-block btn-outline-primary">
                    Generar PDF
                </a>
            </div>
            <div class="col-12 col-lg-4" v-if="order.status != 'confirmado'">
                <button  @click="setStatus('confirmado')"
                    class="btn btn-block btn-outline-success">
                    Marcar como confirmado
                </button>
            </div>
            <div class="col-12 col-lg-4" v-if="order.status != 'cancelado'" >
                <button 
                        @click="setStatus('cancelado')"
                    class="btn btn-block btn-outline-danger">
                    Marcar como Cancelado
                </button>
            </div>
            <div class="col-12 col-lg-4" v-if="order.status != 'pendiente'">
                <button  @click="setStatus('pendiente')"
                    class="btn btn-block btn-outline-warning">
                    Marcar como Pendiente
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['order'],
    data(){
        return {

        }        
    },
    methods : {
        setStatus(status){
            var vm = this;
            this.order.status = status;
            var data = {
                order : this.order.id,
                field : 'status',
                value : status
            }
            this.$http.put('/admin/order',data)
                .then((response) => {
                    vm.$emit('statusChanged',response.data);
                })
        }
    },
    computed : {
        total(){
   
            var tot = 0;
            if (this.order.order_products && this.order.order_products.length > 0){
                this.order.order_products.forEach(op => {
                    tot+= (op.price * op.units);
                });
            }
        
            return tot;
        }
    },
     filters : {
        datetime(val){
            return moment(val).format('DD/MM/YYYY H:mm')
        }
    }
}
</script>

