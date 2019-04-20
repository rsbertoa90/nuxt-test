<template>
    <div class="scrollable-pannel" :style="yStyle" v-if="categories">
        <div class="heading">
            <h3>Categorias:</h3>
        </div>
        <ul>
            <li v-for="category in categories" :key="category.name"
                :class="{'selected':selected == category.id}">
                <div class="d-flex" @click="selected=category.id">

                    <div class="img-container" v-if="category.image" >
                        <v-lazy-image :src="category.image" :alt="category.name"></v-lazy-image>
                    </div>
                    <span class="ml-1">
                        {{category.name}}
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            selected:null,
            yStyle:'top:90px'
            
        }
    },
    computed:{
        searchTerm(){
            return this.$store.getters.getSearchTerm;
        },
        categories()
        {
            return this.$store.getters.getNotPaused;
        }
    },
    watch:{
        categories(){
            if (!this.selected){
                this.selected = this.categories[0].id;
            }
        },
        selected(){
            if(this.selected){
                this.$emit('selectedCategory',this.selected);
            }
          
        },
        searchTerm(){
            if (this.searchTerm.trim().length>1)
            {
                this.selected = null;
            }
        }
    },
    methods:{
        handleScroll(e){
            let def = 90;
            let ypos=window.scrollY;
           let wh = window.document.documentElement.clientHeight;
           let innerh = window.innerHeight;
           let scrollh = document.body.scrollHeight;
           let posicion = scrollh - (innerh+ypos);
           
            let fixedy =90;
            if (posicion < 450)
            {
                 fixedy = posicion - 450 + 90;
            }
            
            
            this.yStyle = 'top:'+fixedy+'px';
        
        }
    },
    created () {
    window.addEventListener('scroll', this.handleScroll);

    
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
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
        position:fixed;
            top:90px;
            left:20px;
        height: 450px;
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
