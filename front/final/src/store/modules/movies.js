// import Vue from 'vue'
// import Vuex from 'vuex'
import axios from 'axios'
import drf from '@/api/drf'
// import router from '@/router'

// Vue.use(Vuex)

export default ({
  state: {
    movies: [],
    showMovies: '',
  },
  getters: {
    showMovies (state) {
      if (state.showMovies.length !== 0) {
        return state.showMovies
      }
      
    } 
  },
  mutations: {
    SHOW_MOVIE (state, showmovies) {
      state.showMovies = showmovies
    }
  },
  actions: {
    // 검색 키워드 입력 시 영화 목록 가져오기
    async showMovie ({commit}, query) {
      console.log(query)
      const res = await axios({
        url: drf.movies.showMovies(query),
        method: 'get',
      })
      commit('SHOW_MOVIE',res.data )
      console.log(res)
    }
  },
  modules: {
  }
})
