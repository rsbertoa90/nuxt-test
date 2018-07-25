<template>
    <input type="hidden" name="_token" :value="csrf">
</template>

<script>
export default{
    data(){
        return{
            csrf : $('meta[name="csrf-token"]').attr('content')
        }
    }
}
</script>