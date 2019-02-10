<template>
<div class="box">
    <div class="columns">

        <div class="column" id="nav-item-01">
            
            <iframe :src="src"></iframe>
        
        </div>

        <div class="column is-5">
            <p>
                FAQ: <br>
                - Where are you from? <br>
                I was born in Minneapolis and have lived all over the US including Honolulu, 
                Boston, and New York City, and internationally in Japan for 3 years, 
                1 yr in Brazil and 1 yr in the Dominican Republic and have spent 2 years 
                backpacking around the world seeing many other countries.
            </p>
        </div>
    </div>
</div>
</template>
<script>
import jquery from 'jquery';

export default {
    name:'conteudo',
    props:{
        src:String,
    }
}
</script>
<style scoped>
iframe{
    width:560px; 
    height:315px;
}
@media screen and (max-width: 400px) {
   iframe{
    width:100% !important; 
    height:auto !important;
}
}
</style>
