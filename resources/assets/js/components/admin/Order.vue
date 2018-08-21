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
            <div class="col-12 offset-lg-9 col-lg-3">
                <a  :href="`/admin/pdf/${order.id}`" target="_blank"
                    class="btn btn-block btn-outline-primary">
                    Generar PDF
                </a>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12 col-lg-4" v-if="order.status == 'pagado'">
                <button  @click="setStatus('enviado')"
                    class="btn btn-block btn-outline-info">
                    <span class="fa fa-truck"></span>
                    Marcar como enviado
                </button>
            </div>
            <div class="col-12 col-lg-4" v-if="order.status != 'pagado' && order.status != 'cancelado'">
                <button  @click="setStatus('pagado')"
                    class="btn btn-block btn-outline-success">
                     <span class="fa fa-dollar-sign"></span>
                    Marcar como pagado
                </button>
            </div>
            <div class="col-12 col-lg-4" v-if="order.status != 'cancelado'" >
                <button 
                        @click="setStatus('cancelado')"
                    class="btn btn-block btn-outline-danger">
                     <span class="fa fa-times"></span>
                    Marcar como Cancelado
                </button>
            </div>
            <div class="col-12 col-lg-4" v-if="order.status != 'pendiente' && order.status != 'enviado'">
                <button  @click="setStatus('pendiente')"
                    class="btn btn-block btn-outline-warning">
                     <span class="far fa-clock"></span>
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

