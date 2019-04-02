<template>

    <div >                        
     
            
            <v-lazy-image v-if="product.images[0]"   :src="product.images[0].url" /> 
     
     
            
            <v-lazy-image v-else   src="/storage/images/app/no-image.png" /> 
      
        
        <div style="margin-top:-16px; margin-left:10px;">  <br>
            
            
                <span v-if="product.price>0" style="width:73px ; height:60px; font-size: 1.2rem ; color:blue ; display:inline "> $ {{product.price.toFixed(2)}} </span>
        
                <span v-if="product.pck_units >1 && product.price > 0"> / </span>
            
            <span v-if="product.pck_units>1" style="width:73px ; height:60px;font-size: 1.25rem ; color:green ; display:inline ;"> ${{product.pck_price.toFixed(2)}}</span>        
        </div>
    
        <span style='font-size: 1rem; font-weight:bold; display:inline; line-height:normal'>
            Cod: {{product.code}} - {{product.name}}  
        </span>  <br>
        <span v-if="product.pck_units>1" style="font-size: .85rem; display:inline; color:green;">
            Precio especial a partir de {{product.pck_units}} unidades
        </span>
    
</div>


</template>


<script>
export default {
    props:['product'],

}
</script>

<style scoped>
    
    img{width:100%}
</style>
