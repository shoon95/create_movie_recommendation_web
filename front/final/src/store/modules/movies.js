import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import drf from '@/api/drf'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],

  },
  getters: {
  },
  mutations: {
    GET_MOVIES (state, movie) {
      state.movies = movie.results.filter(item => item.overview)
    }
  },
  actions: {
    async getMovies ({commit}) {
      const url = 'https://api.themoviedb.org/3/movie/popular'
 
      const params = {
        'api_key' : '3108335d58371831522e2e99a0a78b38',
        'language' : 'ko',
      }
      const res = await axios.get(
        url, {
          params: params,
        } 
      )
      commit('GET_MOVIES', res.data)
    }
  },
  modules: {
  }
})
