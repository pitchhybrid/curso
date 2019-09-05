<template>
    <div>
        <div class="tabs is-medium is-boxed is-centered">
            <ul>
                <li v-for="(it,index) in item" :key="it.item" :class="classe[index]">
                    <a @click="swap(index)">
                            {{it.item}}
                    </a>
                </li>
            </ul>
        </div>
        <div v-if="indice == item[0].item">
            <conteudo
            :src="'https://www.youtube.com/embed/A05_SehbPP8'">
            </conteudo>
        </div>
        <div v-if="indice == item[1].item">
            <conteudo
            :src="'https://www.youtube.com/embed/FUW_FN8uzy0'">
            </conteudo>
        </div>
        <div v-if="indice == item[2].item">
            <conteudo
            :src="'https://www.youtube.com/embed/825Jy6nElcU'">
            </conteudo>
        </div>
    </div>
</template>

<script>
import jquery from 'jquery'

export default {
    name:'tabs',
    data(){
        return{
            item:[
                {item:'Conversation'},
                {item:'Thinking'},
                {item:'Fluently'}
            ],
            indice:'Conversation',
            classe:['is-active','','']
        }
    },
    methods:{
        swap(index){
            this.indice = this.item[index].item
        }
    },
    mounted(){

        jquery("ul li").click(function() {
            // remove classes from all
            jquery("ul li").removeClass("is-active");
            // add class to the one we clicked
            jquery(this).addClass("is-active");
        })
    
    }
}
</script>
