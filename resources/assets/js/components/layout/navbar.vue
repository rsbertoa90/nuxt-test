<template>
    <div>
        <navAdmin v-if="user && user.role_id < 3"></navAdmin>
        <navUser v-else></navUser>
    </div>
</template>


<script>
import navUser from './nav-user.vue';
import navAdmin from './nav-admin.vue';
export default {
    components:{navUser,navAdmin},
    computed:{
        user(){
            return this.$store.getters.getUser;
        }
    }

}
</script>
