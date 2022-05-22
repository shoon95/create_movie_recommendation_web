<template>
  <div >
    <div class="first_div">
      <video class="video" :src="src" autoplay="1"  loop="1"></video>
      <div class="content">
        <p class="title"> {{ movieDetail.title }} </p>
        <p class="genres"> {{ movieDetail.genres }} </p>
        <p class="overview"> {{ movieDetail.overview }} </p>
        <p class="releaseDate"> {{ movieDetail.release_date }} </p>
        <p class="actors"> {{ movieDetail.actors }} </p>
        <p class="score"> {{ movieDetail.vote_average }} </p>
      </div>
      <button v-if="isLike" @click="changeIsLike(moviePk)">좋아요 상태</button>
      <button v-else @click="changeIsLike(moviePk)">비좋아요 상태</button>
      
    </div>
  
    
  </div>

</template>

<script>
import { mapActions } from 'vuex'
import {mapGetters} from 'vuex'
export default {
  name: 'MovieDetail',

  data () {
    return {
      moviePk: this.$route.params.moviePk,
    }
  },

  methods: {
    ...mapActions(['selectMovie','resetDetail','showLike','changeIsLike']), 
  },

  computed: {
    ...mapGetters(['movieDetail','isLike']),
    src () {
      return require(`@/assets/${this.movieDetail.videos?.youtube_key}video.mp4`)
    }
  },

  created () {
    this.showLike()
  },

  destroyed() {
    this.resetDetail()
  },


  
  
}
</script>

<style scoped>
  .first_div {
    position: relative;
  }

  .video {
    width: 100%;
  }

  .content {
    position: absolute;
    left : 5%;
    bottom: 35%;
    color: white;
    text-decoration-style: solid; 
  }

  .title {
    font-size: 4vw;
  }

  button {
    position: absolute;
    top: 15%;
    right: 5%;
  }

</style>