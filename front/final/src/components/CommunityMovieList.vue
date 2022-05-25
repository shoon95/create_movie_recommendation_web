<template>

  <div>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" :class="[this.idxValue===0? 'active': '']" :aria-current="[this.idxValue===0? true:false]" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" :class="[this.idxValue===1? 'active': '']" :aria-current="[this.idxValue===1? true:false]" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" :class="[this.idxValue===2? 'active': '']" :aria-current="[this.idxValue===2? true:false]" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" :class="[this.idxValue===3? 'active': '']" :aria-current="[this.idxValue===3? true:false]" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" :class="[this.idxValue===4? 'active': '']" :aria-current="[this.idxValue===4? true:false]" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="5" :class="[this.idxValue===5? 'active': '']" :aria-current="[this.idxValue===5? true:false]" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="6" :class="[this.idxValue===6? 'active': '']" :aria-current="[this.idxValue===6? true:false]" aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="7" :class="[this.idxValue===7? 'active': '']" :aria-current="[this.idxValue===7? true:false]" aria-label="Slide 8"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="8" :class="[this.idxValue===8? 'active': '']" :aria-current="[this.idxValue===8? true:false]" aria-label="Slide 9"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="9" :class="[this.idxValue===9? 'active': '']" :aria-current="[this.idxValue===9? true:false]" aria-label="Slide 10"></button>
      
      </div>

      <div class="carousel-inner">
        <CommunityMovieListItem v-for="movie in movies" :key="movie.id" :movie="movie" :idxMovie="movies[idxValue]" />
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev" @click="switchCardBack">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next" @click="switchCardFront">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import CommunityMovieListItem from '@/components/CommunityMovieListItem.vue'

export default {
  name: 'CommunityMovieList',
  data () {
    return {
      idx: 0,
    }
  },

  components: {
    CommunityMovieListItem,
  },
  
  computed: {
    ...mapGetters(['movies']),
    idxValue () {
      return this.idx
    }
  },

  methods: {
    switchCardBack () {
      if ( this.idx == 0 ) {
        this.idx = 9
      } else {
        this.idx = this.idx - 1
      }
    },

    switchCardFront () {
      if ( this.idx == 9 ) {
        this.idx = 0
      } else {
        this.idx = this.idx + 1
      }
    }
  }
}
</script>

<style scoped>

</style>