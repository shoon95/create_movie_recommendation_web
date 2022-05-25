<template>
  <div class="d-flex justify-content-between">
    <CommunityMovieListItem v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CommunityMovieListItem from '@/components/CommunityMovieListItem.vue'

export default {
  name: 'CommunityMovieList',
  components: {
    CommunityMovieListItem,
  },
  
  computed: {
    ...mapGetters(['movies']),
  }
}
</script>

<style scoped>

</style>