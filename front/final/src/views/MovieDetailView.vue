<template>
  <div>
    <MovieDetail v-if="isMovie"/>
  </div>
  
</template>

<script>
import MovieDetail from '@/components/MovieDetail.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'MovieDetailView',
  
  components: {
    MovieDetail,
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
  }
}
</script>

<style>

</style>