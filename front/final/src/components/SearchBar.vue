<template>
  <div>
    <input class="form-control" type="text" :value="query" @input="changeQuery">
    <!-- <SearchBarItem v-for=" movie in showMovies " :key="movie.id" :movie="movie"/> -->
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import { mapGetters } from 'vuex'
// import SearchBarItem from '@/components/SearchBarItem.vue'

export default {
  name: 'SearchBar',
  components: {
    // SearchBarItem
  },

  data () {
    return {
      query: '',
    }
  },
  computed: {
    ...mapGetters(['showMovies'])
  },

  methods: {
    ...mapActions(['showMovie']),
    changeQuery (e) {
      this.query = e.target.value
      if (this.query.length !== 0) {
        this.showMovie(this.query)
      }
      
    }
  }
}
</script>

<style>

</style>