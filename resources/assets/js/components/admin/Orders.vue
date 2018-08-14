<template>
    <div>
        <div class="row">
            <div class="col-12 row">
                <div class="col-6 p-0">
                    <button @click="source = 'online'" 
                        :class="{'btn btn-block btn-outline-primary': source != 'online',
                                'btn btn-block btn-primary' : source == 'online'}">
                        Ordenes Online
                    </button>
                </div>
                <div class="col-6 p-0">
                    <button @click="source = 'local'" 
                        :class="{'btn btn-block btn-outline-primary' : source != 'local',
                                'btn btn-block btn-primary' : source == 'local'}">
                        Ordenes tomadas en el local
                    </button>
                </div>
            </div>}
            <div class="col-12 row mt-2">
                   <div class="col-4 m-0 p-0">
                    <button @click="status = 'pendiente'" 
                        class="btn btn-block "
                        :class="{'btn-outline-info':status != 'pendiente',
                                'btn-info' : status == 'pendiente'}">
                        Pendientes
                    </button>
                </div>
                 <div class="col-4 m-0 p-0">
                    <button @click="status = 'confirmado'" 
                        class="btn btn-block"
                        :class="{'btn-outline-success':status != 'confirmado',
                                'btn-success' : status == 'confirmado'}">
                        Confirmadas
                    </button>
                </div>
                <div class="col-4 m-0 p-0">
                    <button @click="status = 'cancelado'" 
                        class="btn btn-block"
                        :class="{'btn-outline-danger':status != 'cancelado',
                                'btn-danger' : status == 'cancelado'}">
                       Canceladas
                    </button>
                </div>
               
            </div>
        </div>
        <div class="col-12 row">
            <div class="col-12 col-lg-4">
                <table class="table table-striped table-hover"> 
                    <thead>
                        <th>Fecha</th>
                        <th>Cliente</th>
                    </thead>
                    <tbody>
                        <tr  v-for="order in filteredOrders" 
                                :key="'order'+order.id"
                                @click ="selected = order"
                                style="cursor:pointer">
                            <td>{{order.created_at | datetime}}</td>
                            <td>{{order.name}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-12 col-lg-8 bg-white">
                <app-order @statusChanged="statusChanged" 
                        v-if="selected" :order="selected">
                </app-order>
            </div>
        </div>


    </div>
</template>

<script>
import appOrder from './Order.vue';
export default {
    components: {
        appOrder
    },
    data(){
        return {
            orders : [],
            status : 'pendiente',
            source : 'online',
            filtered : [],
            selected : null,

        }
    },
    methods : {
        statusChanged(event){
            this.status = event.status;
        }
    },
   
    computed : {
        filteredOrders(){
            var vm = this;
            let res = this.orders.filter(order => {
              
                return (order.source == vm.source 
                        && order.status == vm.status);
            });
            res = _.sortBy(res,'created_at');
            res = res.reverse();
         
            return res;
        }
    },
    created(){
        this.$http.get('/api/orders')
            .then(response => {this.orders = response.data });
        
    },
    filters : {
        datetime(val){
            return moment(val).format('DD/MM/YYYY H:mm')
        }
    }
    
}
</script>

<style>
    .cursor-pointer {
        cursor: pointer;
    }
   
</style>
