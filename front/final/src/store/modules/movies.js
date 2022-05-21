// import Vue from 'vue'
// import Vuex from 'vuex'
import axios from 'axios'
import drf from '@/api/drf'
import _ from 'lodash'
// import router from '@/router'

// Vue.use(Vuex)

export default ({
  state: {
    movies: [],
    showMovies: {},
    movieDetail: {},
  },
  getters: {
    showMovies (state) {
      if (state.showMovies.length !== 0) {
        return state.showMovies
      }
    },
    movieDetail (state) {

      console.log(4)
      return state.movieDetail
    },

    isMovie: state => !_.isEmpty(state.movieDetail) 
  },
  mutations: {
    SHOW_MOVIE (state, showmovies) {
      for(let i=0; i < showmovies.length; i++){
        showmovies[i]['isMouseover'] = false
      }
      state.showMovies = showmovies
    },
    CHANGE_TRUE (state, movie) {
      const idx = state.showMovies.indexOf(movie)
      const item = state.showMovies[idx]
      item.isMouseover = true
      state.showMovies.splice(idx,1,item)

    },
    CHANGE_FALSE (state, movie) {
      const idx = state.showMovies.indexOf(movie)
      const item = state.showMovies[idx]
      item.isMouseover = false
      state.showMovies.splice(idx,1,item)

    },
    SELECT_MOVIE (state, movie) {
      state.movieDetail = movie
      console.log(3)
      console.log(movie)
      
    }
  },
  actions: {
    // 검색 키워드 입력 시 영화 목록 가져오기
    async showMovie ({commit}, query) {
      if (query.length === 0 ) {
        commit('SHOW_MOVIE',query)
      } else {
      const res = await axios({
        url: drf.movies.showMovies(query),
        method: 'get',
      })
      commit('SHOW_MOVIE',res.data )
      }
      
    },

    changeTrue({commit}, movie) {
      commit('CHANGE_TRUE', movie)
    },
    changeFalse({commit}, movie) {
      commit('CHANGE_FALSE', movie)
    },

    async selectMovie({commit}, movie) {
      console.log(2)
      const res = await axios({
        url: drf.movies.movie(movie),
        method: 'get',
      })

      commit('SELECT_MOVIE', res.data[0])
    }
  },
  modules: {
  }
})
