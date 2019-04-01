<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary font-weight-bold">
           <router-link class="navbar-brand " to="/">
                <img style="width:100px" src="/storage/images/app/logo.png" alt="Bazar Mayorista Maju">
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    
                    <li class="nav-item ">
                        <router-link class="nav-link text-white" to="/">Cotizador <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link class="nav-link text-white" to="/admin">Administrar Productos</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link class="nav-link text-white" to="/admin/pedidos">Pedidos</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link class="nav-link text-white" to="/admin/metadata">Metadata</router-link>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link text-white" href="/logout">Salir</a>
                    </li>
                </ul>
            </div>
        </nav>
</template>

<style lang="scss">
    .text-white{
        color:#fff;
       
    }
</style>