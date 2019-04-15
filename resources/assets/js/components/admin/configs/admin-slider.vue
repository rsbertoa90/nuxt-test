<template>
    <div class="mt-4 p-4">
        <h2>Slider</h2>
        <!-- Sample -->
        <div class="row" v-if="this.slides && this.slides[this.selected]">
            <div class="col-12 img-container">
                <v-lazy-image :src="slide.image"></v-lazy-image>
                <button class="btn btn-outline-danger delete-button"><fa-icon icon="times"></fa-icon></button>
            </div>
            <div class="col-12">
                <label for="">Leyenda</label>
                <input type="text" v-model="selected.alt">
            </div>
            <div class="col-12">
                <label for="">URL destino</label>
                <input type="text" v-model="selected.url">
            </div>
        </div>

        <button @click="shoNewSlidePannel = !shoNewSlidePannel" class="btn btn-outline-info">Nueva Slide</button>
        <!-- New slide -->
        <div class="form row" v-if="shoNewSlidePannel">
            <div class="col-12">
                <label class="col-6" >Url destino</label>
                <input type="text" class="col-6" v-model="newSlide.url">
            </div>
            <div class="col-12">
                <label for="" class="col-6"> Alt </label>
                <input type="text" class="col-6" v-model="newSlide.alt">
            </div>
            <div class="col-12">
                <label class="btn btn-block btn-outline-info btn-file">
                    Cargar imagen <input @change="fileSelected =true"  type="file" style="display: none;" accept="image/*">
                </label>
                <span v-if="fileSelected"> Imagen subida </span>
            </div>
            <div class="col-12">
                <button class="btn btn-outiline-info" v-if="valid" @click="send">
                    Guardar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            selected:0,
            shoNewSlidePannel:false,
            slides:[],
            fileSelected:false,
            newSlide:{
                url:'',
                alt:''
            }
        }
    },
    created(){
        this.refresh();
    },
    computed:{
        valid(){
            return  (
                this.fileSelected &&
                this.newSlide.url &&
                this.newSlide.alt
            )
        }
    },
    methods:{
        refresh(){
            this.$http.get('/api/slides')
            .then(res => {
                this.slides = res.data;
            
            })
        },
        send()
        {

        }
    }


}
</script>


<style lang="sass" scoped>

</style>
