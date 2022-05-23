import axios from 'axios'
import drf from '@/api/drf'
import _ from 'lodash'
// import router from '@/router'


export default {
  state: {
    movieReviews: {}
  },

  getters: {
    movieReviews (state) {
      return state.movieReviews
    }
  },

  mutations: {
    GET_MOVIE_REVIEWS (state, reviews) {
      state.movieReviews = reviews
    },

    GET_MOVIES_REVIEWS (state, movies) {
      state.movieReviews = []
      for ( let movie of movies ) {
        if ( !_.isEmpty(movie.reviews) ){
          for ( let review of movie.reviews ) {
            state.movieReviews.push(review)
          }
        }
      }

    }
  },

  actions: {
    async getMovieReviews ({commit}, movie) {

      const res = await axios({
        url: drf.community.movieReview(movie),
        method: 'get',
      })
      
      commit('GET_MOVIE_REVIEWS', res.data)
    },

    getMoviesReviews ({commit}, movies ) {
      commit('GET_MOVIES_REVIEWS', movies)
    }
  },

}
