<template>
  <div >
    <MovieDetail v-if="isMovie"/>
    <div>
      <ModalView class="fixed-top mt-4" style="min-width:1300px;" v-if="isModalViewed" @close-modal="isModalView(false)">
        <ReviewDetailView />
      </ModalView>
    </div>
    <div class="container">
      <ReviewCardList />
    </div>
    

  </div>
  
</template>

<script>
import MovieDetail from '@/components/MovieDetail.vue'
import ReviewCardList from '@/components/ReviewCardList.vue'
import ModalView from '@/views/ModalView.vue'
import ReviewDetailView from '@/views/ReviewDetailView.vue'

import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'MovieDetailView',
  
  components: {
    MovieDetail, ReviewCardList, ModalView,ReviewDetailView
  },
  data () {
    return {
      moviePk: this.$route.params.moviePk
  }},
  methods: {
    ...mapActions(['isModalVIew']),
  },

  computed: {
    ...mapGetters(['isMovie','movieDetail','isModalViewed']),
    isMovie () {
      return this.$store.getters.isMovie
    }
  },

  created () {  
    this.$store.dispatch('selectMovie', this.moviePk)
    this.$store.dispatch('getMovieReviews', this.moviePk)
  },

  watch: {
    $route(to, from) {
      console.log(to)
      console.log(to.params.moviePk)
      console.log(from)
      if (to.path != from.path) {
        this.$store.dispatch('resetDetail')
        this.$store.dispatch('selectMovie', to.params.moviePk)
        this.$store.dispatch('getMovieReviews', to.params.moviePk)
      }
    }
  }
}

</script>

<style>
  .reviewCardPlace {
    border: solid 1px;
    margin-top: 1%;

  }
</style>