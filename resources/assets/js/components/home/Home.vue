<template>
    <div>
        <h1>HOME</h1>
        <div class="d-flex flex-column">
           <router-link v-for="category in categories" :key="category.id"
                        :to="category.slug">
               {{category.name}}
           </router-link> 
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        categories(){
            return this.$store.getters.getNotPaused;
        }
    }
}
</script>
