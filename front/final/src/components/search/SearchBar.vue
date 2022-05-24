<template>
  <div class="boxDiv">
    <div class="container-1">
      <span class="icon"><i class="fa fa-search"></i></span>
      <p class="warning" v-if="isWarnings">*영화를 이름을 다시 확인해주세요</p>

      <input type="search" id="search" list="search_list" placeholder="Search..." :value="query" @input="changeQuery" @keyup.enter="selectMovieItem" />
      <datalist id="search_list">
        <option v-for="movie in showMovies" :key="movie.id"  @click="selectMovieItem" >{{ movie.title }} </option>
      </datalist>

    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import { mapGetters } from 'vuex'
import _ from 'lodash'
export default {
  name: 'SearchBar',
  components: {
  },

  data () {
    return {
      query: '',
      movie: '',
      last_query: '',
      isWarning: false,
    }
  },
  computed: {
    ...mapGetters(['showMovies']),
    isWarnings () {
      return this.isWarning
    }
  },

  methods: {
    ...mapActions(['showMovie']),
    changeQuery (e) {
      this.isWarning=false
      this.query = e.target.value
      this.showMovie(this.query)   
    },
    
    selectMovieItem () {
      if ( !_.isEmpty(this.showMovies) ) {
        for ( let i of this.showMovies) {
          if (this.query === i.title) {
            this.movie = i
          }
        }
        this.$router.push({name:'movie', params:{moviePk:`${this.movie.id}`}})
        this.query=''
        this.movie=''
      } else {
        this.isWarning=true
      }
    }  
  }
      
}
</script>

<style scoped>
  .warning {
    color: red;
    position: absolute;
    top: 45px;
    left: 23px;
    font-size:12px;
  }
  .img-size {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
  body {
    background: #343d46;
  }
  .boxDiv {
    width: 300px;
    height: 50px; 
  }
  .container-1{
    width: 300px;
    vertical-align: middle;
    white-space: nowrap;
    position: relative;
  }

  .container-1 input#search{
    width: 300px;
    height: 33px;
    border: solid;
    font-size: 10pt;
    float: left;
    color: #63717f;
    padding-left: 30px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 10px;
    position:absolute;
    top: 9px;
    left: 10px;
  }

  .container-1 .icon{
    position: absolute;
    left: 4px;
    top: -4px;
    margin-left: 17px;
    margin-top: 17px;
    z-index: 1;
    color: #4f5b66;
  }
</style>