<template>
    <div class="container box">
        <div class="columns">
            <div class="column is-7 box has-background-black">
                <p class="has-text-white has-text-centered subtitle is-5">
                    Ut massa massa, ullamcorper sed scelerisque eu, lobortis sit amet tellus. 
                    Etiam faucibus turpis fringilla ipsum commodo, vel imperdiet leo scelerisque. 
                    Nam pulvinar et libero at condimentum. Nam eu est non augue dignissim auctor vel
                    id sem. Aliquam gravida enim eu nibh facilisis, ut pretium est convallis. 
                    Suspendisse et nisi libero. Nulla fringilla lorem quis sapien pellentesque auctor. 
                    Vivamus venenatis aliquet rhoncus. Phasellus hendrerit pellentesque massa
                    in hendrerit. Nam volutpat non leo ut placerat. Duis nisi libero, convallis ac 
                    dictum sit amet, auctor sit amet neque. Aenean euismod magna urna, at tristique 
                    urna vestibulum ut. Nulla quis venenatis orci. Donec faucibus tempor
                    erat eu viverra. Ut varius elit quis neque finibus bibendum. Phasellus quis commodo 
                    enim, sed laoreet arcu.
                </p>
            </div>

            <div class="column">

                <p class="title">Contato</p>
                <form class="field">
                
                    <div class="control">
                        <label class="label">E-mail</label>
                        <input type="email" class="input" placeholder="example@example.com">
                        <small class="help">Insira seu e-mail</small>
                        <textarea class="textarea" rows="4"></textarea>
                        <div class="columns">
                            <div class="column is-1">
                                <input type="checkbox">
                            </div>
                            <div class="column">
                                <label class="label">Marque se queira emails informativos</label>
                            </div>
                        </div>
                        <button type="submit" class="button is-success">Submit</button>
                    </div>

                </form>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'contato',

}
</script>

<style>
div>p{
    margin-top: 5%
}
</style>
