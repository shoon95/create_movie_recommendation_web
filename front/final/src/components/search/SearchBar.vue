<template>
    <!-- <SearchBarItem v-for=" movie in showMovies " :key="movie.id" :movie="movie"/> -->
  <div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="openModal">
      Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Search Your Movie</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button >
          </div>
          <div class="modal-body">
            <div v-if="is_show_input">
              <input class="form-control" type="text" :value="query" @input="changeQuery">
              <section class="border mt-4">
                <SearchBarItem v-for="movie in showMovies" :key="movie.id" :movie="movie" @receiveMovie="changeInputValue"/>
              </section>
            </div>
            <div v-if="is_show_movie">
              <img class="img-size" :src="`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${ movie.poster_path }`" alt="">
              {{ movie.title }}
              <button @click="selectMovieItem">검색</button>
            </div>
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="selectMovieItem">검색</button>
            <button type="button" class="btn btn-primary" @click="searchBack">뒤로</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    
</template>

<script>
import {mapActions} from 'vuex'
import { mapGetters } from 'vuex'
import SearchBarItem from '@/components/search/SearchBarItem.vue'

export default {
  name: 'SearchBar',
  components: {
    SearchBarItem
  },

  data () {
    return {
      query: '',
      is_show_input: true,
      is_show_movie: false,
      movie: ''
    }
  },
  computed: {
    ...mapGetters(['showMovies'])
  },

  methods: {
    ...mapActions(['showMovie']),
    changeQuery (e) {
      this.query = e.target.value
      this.showMovie(this.query)
   
    },
    changeInputValue (data) {
      this.query = data.title
      this.movie = data
      this.is_show_input = false
      this.is_show_movie = true
      this.showMovie(this.query)
    },
    searchBack () {
      this.is_show_input = true
      this.is_show_movie = false
    },
    openModal () {
      this.is_show_input = true
      this.is_show_movie = false
      this.query = ''
      this.showMovie(this.query)
    },
    selectMovieItem () {
      this.$router.push({name:'movie', params:{moviePk:`${this.movie.id}`}})
    }


  }
  
}
</script>

<style>
  .img-size {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
</style>