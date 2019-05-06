<template>
    <div class="row">
        <div class="col-3" v-if="$mq=='lg'">
            <categories-pannel></categories-pannel>
        </div>
        <div class="col-12 col-lg-9">
            <transition enter-active-class="animated slideInDown slow slower">    
                <router-view :key="kkey"></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import categoriesPannel from '../home/floating-categories-pannel.vue';
export default {
    components:{categoriesPannel},
    computed:{
        kkey(){
            return this.$route.path;
        }
    }
}
</script>
