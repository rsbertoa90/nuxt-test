<template>
    <div>
        <div class="row">
            <div class="col-12 row">
                <div class="col-6 p-0">
                    <button @click="setSource('online')" 
                        :class="{'btn btn-block btn-outline-primary': source != 'online',
                                'btn btn-block btn-primary' : source == 'online'}">
                        Ordenes Online
                    </button>
                </div>
                <div class="col-6 p-0">
                    <button @click="setSource('local')" 
                        :class="{'btn btn-block btn-outline-primary' : source != 'local',
                                'btn btn-block btn-primary' : source == 'local'}">
                        Ordenes tomadas en el local
                    </button>
                </div>
            </div>
            <div class="col-12 row mt-2">
                   <div class="col-6 col-lg-3 m-0 p-0">
                    <button @click="changestatus('pendiente')" 
                        class="btn btn-block "
                        :class="{'btn-outline-warning':status != 'pendiente',
                                'btn-warning' : status == 'pendiente'}">
                        <span class="far fa-clock"></span>
                        Pendientes
                    </button>
                </div>
                 <div class="col-6 col-lg-3 m-0 p-0">
                    <button @click="changestatus('pagado')" 
                        class="btn btn-block"
                        :class="{'btn-outline-success':status != 'pagado',
                                'btn-success' : status == 'pagado'}">
                        <span class="fa fa-dollar-sign"></span>
                        Pagadas
                    </button>
                </div>
                 <div class="col-6 col-lg-3 m-0 p-0">
                    <button @click="changestatus('enviado')" 
                        class="btn btn-block"
                        :class="{'btn-outline-info':status != 'enviado',
                                'btn-info' : status == 'enviado'}">
                        <span class="fa fa-truck"></span>
                        Enviadas
                    </button>
                </div>
                <div class="col-6 col-lg-3 m-0 p-0">
                    <button @click="changestatus('cancelado')" 
                        class="btn btn-block"
                        :class="{'btn-outline-danger':status != 'cancelado',
                                'btn-danger' : status == 'cancelado'}">
                      <span class="fa fa-times"></span>
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
                        <th>Visto</th>
                    </thead>
                    <tbody>
                        <tr  v-for="order in filteredOrders" 
                                :key="'order'+order.id"
                                @click ="selected = order"
                                style="cursor:pointer"
                                :class="{'bg-info' : order == selected}">
                            <td>{{order.created_at | datetime}}</td>
                            <td>{{order.name}}</td>
                            <td> <input type="checkbox" v-model="order.viewed" @change="viewed(order)" class="form-control"> </td>
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
        viewed(order){
            if (order.viewed)
            {
                order.viewed = 1;
            }else { order.viewed = 0;}
            let data = {
                order:order.id,
                id: order.id,
                field: 'viewed',
                value: order.viewed
            }
            this.$http.put('/admin/order',data);
        },
        setSource(src){
            this.source = src;
            this.selected = null;
        },
        statusChanged(event){
            this.status = event.status;
        },
        changestatus(status)
        {
            this.status = status;
            this.selected = null;
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
