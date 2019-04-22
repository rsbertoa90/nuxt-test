<template>
    <div class="scrollable-pannel" v-if="categories">
        <div class="heading">
            <h3>Categorias:</h3>
        </div>
        <ul>
            <li v-for="category in categories" :key="category.name"
                :class="{'selected':$route.path == category.slug}">
                <router-link class="d-flex" :to="category.slug">

                    <div class="img-container" v-if="category.image" >
                        <v-lazy-image :src="category.image" :alt="category.name"></v-lazy-image>
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
        searchTerm(){
            return this.$store.getters.getSearchTerm;
        },
        categories()
        {
            return this.$store.getters.getNotPaused;
        }
    },
   
    
   
}
</script>


<style lang="scss" scoped>

    .heading{
        background-color: #D52B1E;
        color:#fff;
        display: flex;
        width:100%;
        justify-content: center;
        align-items: center;
    }
    .selected{
        border-left:2px solid #D52B1E;
        background-color: #D52B1E33;
    }




    .scrollable-pannel{
        border:1px solid #D52B1E;
        background-color: #fff;
       
        height: 529px;
        max-width:300px;
        overflow-y: auto;
        overflow-x:overlay;
        width:100%;
        ul{
            display: flex;
            flex-direction: column;
            margin:0;
            padding:0;
            padding-left:5px;
            a{
                color:#000;
                margin-left:5px;
            }
            }
        }
    

    .img-container{
        width:85px;
        img{
            width:85px;
        }
    }
    ul{
        list-style: none;
        li{
            cursor: pointer;
            &:hover{
                transform: scale(1.2);
                z-index:100;
                background-color: #D52B1E33;
            }
        }
    }

</style>
