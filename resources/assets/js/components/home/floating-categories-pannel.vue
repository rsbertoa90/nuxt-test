<template>
   <div class="fixed-pannel"   :style="yStyle">
            <categories-pannel></categories-pannel>
    </div>
</template>

<script>
import categoriesPannel from './categories-pannel.vue';
export default {
    components:{categoriesPannel},
     data(){
        return{
            yStyle:'top:100px',
           
        }
    },
      methods:{
        handleScroll(e){
            let def = 100;
            let ypos=window.scrollY;
           let wh = window.document.documentElement.clientHeight;
           let innerh = window.innerHeight;
           let scrollh = document.body.scrollHeight;
           let posicion = scrollh - (innerh+ypos);
           
            let fixedy =100;
            if (posicion < 450)
            {
                 fixedy = posicion - 450 + 100;
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


<style scoped lang="scss">
     .fixed-pannel{
        position:fixed;
        z-index:50;
        top:55px;
        left:20px;
    }
</style>