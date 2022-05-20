<template>
  <div>
    <button class="btn btn-primary" @click="handle_toggle">
      찾기
    </button>

    <div v-show="is_show">
      <input class="form-control" type="text" :value="query" @input="changeQuery">
    </div>
    
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
      is_show: false
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
    },
    handle_toggle: function () {
      this.is_show = !this.is_show
    }
  }
}
</script>

<style>

</style>