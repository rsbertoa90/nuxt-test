<template>
    <div class="info-row">
        <div class="info-item">
            <fa-icon icon="truck" class="icon"></fa-icon>
            <div class="d-flex flex-column ml-2">
                <span> <b>ENVIO GRATIS</b> </span>
                <span>En CABA y Zona Oesta de GBA</span>
            </div>
        </div>
        <div class="info-item">
            <fa-icon icon="dollar-sign" class="icon"></fa-icon>
            <div class="d-flex flex-column ml-2">
                <span> <b>PAGO CONTRAREEMBOLSO</b> </span>
                <span>Paga al recibir tus productos</span>
            </div>
        </div>
        <div class="info-item">
            <fa-icon icon="dollar-sign" class="icon"></fa-icon>
            <div class="d-flex flex-column ml-2">
                <span> <b>PAGO CONTRAREEMBOLSO</b> </span>
                <span>Paga al recibir tus productos</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .info-row{
        background-color: #09879f;
        margin: 0 -6%;
        padding: 20px 6%;
        display: flex;
        justify-content: space-around;
    }
    .icon{
        font-size: 2rem;
    }
    .info-item{
        max-width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .9rem;
        color:#fff;
    }

    @media(max-width:660px)
    {
        .info-item{
            width: 100%;
            max-width: 100%;
             justify-content: start; 
             margin-top:15px;
             margin-left:15px;
        }
        .info-row{
            align-items:flex-start;
            flex-direction: column;
            justify-content: start; 
        }
    }


</style>

