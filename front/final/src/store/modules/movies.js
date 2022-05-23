// import Vue from 'vue'
// import Vuex from 'vuex'
import axios from 'axios'
import drf from '@/api/drf'
import _ from 'lodash'
import router from '@/router'
// import router from '@/router'

// Vue.use(Vuex)

export default ({
  state: {
    movies: [],
    showMovies: {},
    movieDetail: {},
    isLike: '',
    genreItems: [],
    selectedGenres: [],
  },
  getters: {

    movies: state => state.movies,
    isMovies: state => !_.isEmpty(state.movies),
    showMovies (state) {
      if (state.showMovies.length !== 0) {
        return state.showMovies
      }
    },
    
    movieDetail (state) {

      return state.movieDetail
    },
    
    isMovie: state => !_.isEmpty(state.movieDetail),
    isLike: state => state.isLike,
    genreItems: state => state.genreItems,
    selectedGenres: state => state.selectedGenres

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
    },
    
    RESET_DETAIL (state) {
      state.movieDetail = {}
    },

    SHOW_LIKE (state, bool) {
      state.isLike = bool
    },

    CHANGE_IS_LIKE (state, data) {
      state.isLike = data.like
    },

    GET_GENRE_LIST (state, data) {
      for( let i=0; i < data.length; i++){
        data[i]['isSelected'] = false
      }
      state.genreItems = data

    },
    UPDATE_GENRE (state, data) {
      const idx = state.genreItems.indexOf(data)
      const item = state.genreItems[idx]
      item.isSelected = !item.isSelected
      if ( item.isSelected ) {
        state.selectedGenres.push(item.id)
      } else {
        const idx1 = state.selectedGenres.indexOf(item)
        state.selectedGenres.splice(idx1,1)
      }
      state.genreItems.splice(idx,1,item)
    },

    GET_MOVIES (state, data) {
      state.movies = data
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
      const res = await axios({
        url: drf.movies.movie(movie),
        method: 'get',
      })

      commit('SELECT_MOVIE', res.data[0])
    },

    resetDetail({commit}) {
      commit('RESET_DETAIL')
    },

    showLike({commit,getters}) {
      if (getters.isLoggedIn) {
        var flag = 0
        for( let i of getters.movieDetail.like_users ) {
          if ( i === getters.currentUser.pk) {
            flag = 1
            break
          }
        }
        if (flag) {
          commit ('SHOW_LIKE', true)
        } else {
          commit ('SHOW_LIKE', false)
        }
      } else {
          commit('SHOW_LIKE', false)
        }
      },

    async changeIsLike ({commit,getters, dispatch}, moviePk) {
      if (getters.isLoggedIn) {
        const res = await axios ({
          url: drf.movies.likeMovie(moviePk),
          method: 'post',
          headers: getters.authHeader,
        })
        .catch(err => {
          if (err) {
            dispatch('removeToken')
            router.push({ name: 'login' })
          }
        })
        commit('CHANGE_IS_LIKE', res.data)
      } else {
        if (confirm('로그인이 필요한 기능입니다. 로그인하시겠습니까?')){
          router.push({name: 'login'})
        }
      }
    },

    async getGenreList ({commit}) {
      const res = await axios ({
        url: drf.movies.genres(),
        method: 'get',
      })

      commit('GET_GENRE_LIST', res.data)
    },

    updateGenre({commit}, genre) {
      commit('UPDATE_GENRE', genre) 
    },

    async getMovies ({commit}, data) {
      if (data) {
        const res = await axios ({
          url: drf.movies.movies(),
          method: 'get',
          params: {
            genres: data
          }
        })
        commit('GET_MOVIES', res.data)

      } else {
        const res = await axios ({
          url: drf.movies.movies(),
          method: 'get',
        })
        commit('GET_MOVIES', res.data)
      }
      
    }
      

  },

  modules: {
  }
})
