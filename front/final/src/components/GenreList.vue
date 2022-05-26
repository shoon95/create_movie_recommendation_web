<template>
  <div class="genre d-flex flex-wrap justify-content-between mb-3 mx-3 mt-0">
    <GenreListItem v-for="genre in genreItems" :key="genre.id" :genre="genre" />
  </div>
</template>

<script>

import GenreListItem from '@/components/GenreListItem.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'GenreList',
  components: {
    GenreListItem,
  },

  computed: {
    ...mapGetters(['genreItems']),
  }
}
</script>

<style scoped>
  .genre {
    margin-top:40px;
  }
</style>