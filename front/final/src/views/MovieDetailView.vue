<template>
  <div >
    <MovieDetail v-if="isMovie"/>
    <div class="container">
      <ReviewCardList />
    </div>
    

  </div>
  
</template>

<script>
import MovieDetail from '@/components/MovieDetail.vue'
import ReviewCardList from '@/components/ReviewCardList.vue'

import {mapGetters} from 'vuex'
export default {
  name: 'MovieDetailView',
  
  components: {
    MovieDetail, ReviewCardList
  },
  data () {
    return {
      moviePk: this.$route.params.moviePk
  }},

  computed: {
    ...mapGetters(['isMovie']),
  },
  created () {  
    this.$store.dispatch('selectMovie', this.moviePk)
    this.$store.dispatch('getMovieReviews', this.moviePk)
  }
}
</script>

<style>
  .reviewCardPlace {
    border: solid 1px;
    margin-top: 1%;

  }
</style>