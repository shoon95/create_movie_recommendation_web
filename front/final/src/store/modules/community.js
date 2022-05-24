import axios from 'axios'
import drf from '@/api/drf'
import _ from 'lodash'
// import router from '@/router'


export default {
  state: {
    movieReviews: {},
    isModalViewed: false,
    review: ''
  },

  getters: {
    movieReviews (state) {
      return state.movieReviews
    },
    isModalViewed: state => state.isModalViewed,
    review: state => state.review
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
    },
    
    IS_MODAL_VIEW ( state, data) {
      state.isModalViewed = data[0]
      state.review = data[1]
    },
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
    },

    async isModalView ({commit}, data ) {
      
      const res =await axios({
        url: drf.community.review(data[1].id),
        method: 'get',
      })

      commit('IS_MODAL_VIEW', [data[0], res.data])
    } 
  },

}
