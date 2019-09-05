<template>

<div class="carousel carousel-animated carousel-animate-slide">

    <div class="carousel-container">

        <div v-for="(i,index) in imgs" :key="i.id" class="carousel-item has-background" :class="classe[index]">

            <img class="is-background" :src="i.largeImageURL" alt="i.user">

            <div :title="'views ' + i.views" 
                class="title">{{i.tags}} - 
              <i class="fas fa-heart"></i> 
              {{i.likes}}
            </div>

        </div>
    </div>
    <div class="carousel-navigation is-overlay">
    <div class="carousel-nav-left">
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </div>
    <div class="carousel-nav-right">
      <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </div>
  </div>
</div>

</template>
<script>
import carousel from '@/assets/bulma-carousel/src/js/index.js'
import axios from '@/axios'

export default {
    name:'carousel',
    created(){
    var vm = this
      axios.get('',{
        params:{
          q:'dogs',
          per_page:5,
          page:1,
          orientation:'horizontal'
        }
      }).then(function(response){
        vm.imgs = response.data.hits
        // console.log(response.data.hits)
      }).catch(error => error)
    
  },
    data(){
        return{
            imgs:[],
            classe:['is-active']
        }
    },
    mounted(){
        // carosel init
      carousel.attach()
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/bulma-carousel/src/sass/index.scss";
.carousel-container{
    height:500px;
}
@media only screen and (max-width: 500px){
  .carousel-container{
    height:200px !important;
  }
}
</style>

