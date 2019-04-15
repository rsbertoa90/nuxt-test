<template>
    <div class="scrollable-pannel" v-if="categories">
        <ul>
            <li v-for="category in categories" :key="category.name">
                <router-link :to="category.slug" class="d-flex">
                    <div class="img-container">
                        <v-lazy-image v-if="category.image" :src="category.image" :alt="category.name"></v-lazy-image>
                    </div>
                    <span class="ml-1">
                        {{category.name}}
                    </span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed:{
        categories()
        {
            return this.$store.getters.getNotPaused;
        }
    }
}
</script>


<style lang="scss" scoped>

    .scrollable-pannel{
        height: 450px;
        overflow-y: auto;
        overflow-x:hidden;
        width:100%;
        ul{
            display: flex;
            flex-direction: column;
            a{
                color:#000;
            }
            }
        }
    

    .img-container{
        width:85px;
        img{
            width:85px;
        }
    }

</style>
