<template>
    <div>
        <appFrame></appFrame>
        <header>
            <app-nav></app-nav>
        </header>    
        <div class="py-4">
            <transition enter-active-class="animated fadeIn fast faster "
                       >
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import appFrame from './layout/frame.vue';
import appNav from './layout/navbar.vue';
export default {
    components:{appFrame,appNav},
    computed:{
        user(){
            return this.$store.getters.getUser;
        }
    }
}
</script>}

