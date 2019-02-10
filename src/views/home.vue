<template>
<div>
  <carousel></carousel>
  <hr>
  <scrollspy></scrollspy>
  <div class="container">
    <div class="columns is-variable is-8">
      <div class="column">
        <card :img="slide1">
        </card>
      </div>

      <div class="column">
        <card :img="slide2">
        </card>
      </div>

      <div class="column">
        <card :img="slide3">          
        </card>
      </div>
    </div>
  </div>
  <hr>
  <titulo 
  :classe="'is-link'"
  :titulo="titulo"
  :lead="lead"
  ></titulo>
  <modal></modal>
  <hr>
  <div class="container"> 
    <tabs></tabs>
  </div>
  <hr>
  <contato></contato>
</div>
</template>

<script>
  // @ is an alias to /src
import slide1 from '@/assets/img/slider-1.jpg'
import slide2 from '@/assets/img/slider-2.jpg'
import slide3 from '@/assets/img/slider-3.jpg'


export default {
  name: 'home',
  data:()=>{
    return{
      slide1:slide1,
      slide2:slide2,
      slide3:slide3,
      titulo:"Go Natural English",
      lead:"Channel focused to improve your english"

    }
  },
  methods:{
  }
};
</script>
