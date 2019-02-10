<template>
   <div class="card">
        <div class="card-image">
            <figure class="image">
                <img :src="img" alt="">
            </figure>
        </div>
            <div class="card-content">
                <h4 class="title is-5">Lorem ipsum</h4>
                <h6 class="subtitle">verbum carum</h6>
                <p class="card-text has-text-centered">dolor sit amet, consectetur adipiscing elit. Morbi sit amet nisi dui.</p>
            </div>
            <footer class="card-footer">
                <a href="#" @click.prevent.stop="ativo()" class="card-footer-item">clique</a>
                <a href="#" @click.prevent.stop="ativo()" class="card-footer-item">about</a>
            </footer>
        </div>

</template>

<script>
import jQuery from 'jquery'

export default {
    name:'card',
    mounted(){
         jQuery('.modal-close').click(function(){
             jQuery('.modal').removeClass('is-active')
         })
    },
    props:{
        img:String

    },
    methods:{
        ativo(){
            jQuery('.modal').addClass('is-active')
        }
    }
}
</script>
