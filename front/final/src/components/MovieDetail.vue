<template>
  <div >
    <div class="first_div">
      <video class="video" :src="src" autoplay="1"  loop="1"></video>
      <div class="container content justify-content-start">
        <p><span class="title"> {{ movieDetail.title }} </span>
        <span class="score rounded-2 bg-warning p-2 bg-opacity-75"> {{ movieDetail.vote_average }} </span></p>
        <p class="releaseDate">개봉일: {{ movieDetail.release_date }} </p>
        <!-- <ul>
          <li v-for="genre in movieDetail.genres" :key="genre">
          {{ genre.name }}
          </li>
        </ul><br><br> -->
        <div class="d-flex">
          <div class="rounded-2 bg-danger bg-opacity-50" v-for="genre in movieDetail.genres" :key="genre" id="genre">
          {{ genre.name }}
          </div>
        </div><br><br>
        <p class="overview"> {{ movieDetail.overview }} </p>
      </div>
      <button v-if="isLike" @click="changeIsLike(moviePk)">좋아요 상태</button>
      <button v-else @click="changeIsLike(moviePk)">비좋아요 상태</button>
    </div>
    <div class="container justify-content-center d-flex" id="actors">
      <div class="actors me-5" v-for="actor in movieDetail.actors.slice(0, 10)" :key="actor.id">
        <img class="" :src='`https://www.themoviedb.org/t/p/original/${actor.profile_path}`' alt="">
        <p>{{ actor.name }}</p>
      </div>
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
    bottom: 15%;
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

  p {
    text-align: left;
    font-size: 1.2vw;
  }

  #genre {
    margin-right: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }


  ul {
    list-style: none;
    margin-left: 0px;
  }

  li {
    float: left;
  }

  img {
    width: 100px;
    height: 150px;
  }



</style>