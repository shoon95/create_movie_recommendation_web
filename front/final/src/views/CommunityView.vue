<template>
  <div>
    
    <div>
      <GenreList />
    </div>
    <div>
      <ModalView class="fixed-top mt-4" style=" min-width: 1100px; " v-if="isModalViewed" @close-modal="isModalView(false)">
        <ReviewDetailView />
      </ModalView>
    </div>
    <div class="second-div">
      <CommunityMovieList v-if="isMovies" />
    </div>
    <div>
      <ReviewCardList v-if="isMovies"/>
    </div>
  </div>
</template>

<script>
  import CommunityMovieList from '@/components/CommunityMovieList.vue'
  import ReviewCardList from '@/components/ReviewCardList.vue'
  import GenreList from '@/components/GenreList.vue'
  import ReviewDetailView from '@/views/ReviewDetailView.vue'
  import ModalView from '@/views/ModalView.vue'
  import { mapGetters, mapActions } from 'vuex'
  

export default {
  name: 'CommunityView',
  components: {
    CommunityMovieList, ReviewCardList, GenreList, ReviewDetailView, ModalView
  },

  methods: {
    ...mapActions(['isModalView']),
    getMovies: function (data) {
      this.$store.dispatch('getMovies', data)
    },
    getMoviesReviews: function (data) {
      this.$store.dispatch('getMoviesReviews', data)
    }

  },

  computed: {
    ...mapGetters(['selectedGenres','isMovies','movies','isModalViewed']),
  },

  watch: {
    selectedGenres (genre) {
      this.getMovies(genre)
    },deep:true,
    movies ( movie ) {
      this.getMoviesReviews(movie)
    },

  },
}
</script>

<style scoped>
  .second-div {
    /* border: solid; */
    height: 705px;
  }

</style>