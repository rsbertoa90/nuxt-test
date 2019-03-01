<template>
    <div class="whatsapp">
        <a rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=5491127082683&text=Hola!%20te%20escribo%20desde%20la%20pagina%20web,%20tengo%20una%20pregunta" > <i class="fab fa-whatsapp"></i>  <span> ¿Te podemos ayudar? </span> </a>
    </div>
</template>

<style scoped lang="scss">
     .whatsapp{
        position:fixed;
       
        bottom:5px;
        right:15px;
        z-index:110;
        background: #fff;
        border: 1px solid #ff0aaf;
        padding: 4px;
        a{color:#ff0aaf};
    }
    .fa-whatsapp{
      font-size: 1.3rem;
      color:#65BC54;
    }

    @media(min-width: 600px){
        .whatsapp{
            font-size:1.3rem;

        }
        .fa-whatsapp{
            font-size: 1.5rem;
        }
    }
</style>