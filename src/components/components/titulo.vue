<template>

        <div class="hero" :class="classe">
            <div class="hero-body">

                <div class="container">

                    <div class="has-text-centered">

                        <h1 class="title">{{titulo}}</h1>
                        <p class="subtile"> {{lead}}</p>

                    </div>

                </div>
            </div>
        </div>
</template>
<script>
export default {
    name:'titulo',
    props:{
        classe:String,
        titulo:String,
        lead:String
    },
}
</script>
