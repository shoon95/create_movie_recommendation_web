<template>
  <div>
    <div>
      <GenreList />
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
  import { mapGetters } from 'vuex'

export default {
  name: 'CommunityView',
  components: {
    CommunityMovieList, ReviewCardList, GenreList
  },

  methods: {
    getMovies: function (data) {
      this.$store.dispatch('getMovies', data)
    },
    getMoviesReviews: function (data) {
      this.$store.dispatch('getMoviesReviews', data)
    }
  },

  computed: {
    ...mapGetters(['selectedGenres','isMovies','movies']),
  },

  watch: {
    selectedGenres (genre) {
      this.getMovies(genre)
    },deep:true,
    movies ( movie ) {
      this.getMoviesReviews(movie)
    }

  }
  
}
</script>

<style scoped>
  .second-div {
    border: solid;
    height: 550px;
  }

</style>