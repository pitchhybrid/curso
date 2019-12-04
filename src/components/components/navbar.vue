<template>
    <div class="container">
        <nav class="navbar is-tab">
            <div class="navbar-brand my">
                <router-link class="navnar-item" :to="{name:'home'}">
                    <span class="title is-4">Portfolio</span>
                </router-link>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu" id="navbar">
                <div class="navbar-start">
                    <router-link class="navbar-item" :to="{name:'perfil'}"> Profile </router-link>
                    <router-link class="navbar-item" :to="{name:'servicos'}"> Services </router-link>
                    <router-link class="navbar-item" :to="{name:'depoimentos'}"> Depositions </router-link>
                    <router-link class="navbar-item" :to="{name:'contatos'}"> Contacts </router-link>
                </div>
                <div class="navbar-end my"> 
                    <input type="text" class="input is-rounded is-warning" name="search" placeholder="search here ...">
                    <button class="button is-primary"><i class="fas fa-search"></i></button>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import jquery from 'jquery'
export default {
    name:'navbar',
    mounted(){
        jquery(document).ready(function() {
            // Check for click events on the navbar burger icon
            jquery(".navbar-burger").click(function() {
                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                jquery(".navbar-burger").toggleClass("is-active");
                jquery(".navbar-menu").toggleClass("is-active");
           })
        })
    }
}

</script>
<style>
.my{
    margin-top: 1rem;
}
.button{
    margin-left: 0.5rem;
}
@media(min-width: 100px){
    .navbar{
        height: 10px;
    }
    input[type=text]{
        width: 85%;
    }
}
</style>
