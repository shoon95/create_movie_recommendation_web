<template>
    <div @mouseover="changeTrue" @mouseleave="changeFalse" @click="emitMovie" :class="{'is-mouseover':movie.isMouseover }" class = "border m-0 d-flex justify-content-center align-items-center" style="height:45px">
        <p class="m-0 ">{{ movie.title }}</p>
        
    </div>
</template>

<script>


export default {
    name: 'SearchBrItem',
    props: {
        movie:Object,
    },

    methods: {
        changeTrue () {
            this.$store.dispatch('changeTrue', this.movie)
        },
        changeFalse () {
            this.$store.dispatch('changeFalse', this.movie)
        },
        emitMovie () {
            this.$emit('receiveMovie', this.movie)
        }
    }
}
</script>
<style>
    .is-mouseover {
        background-color:aqua;
    }
</style>