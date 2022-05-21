import axios from 'axios'
import drf from '@/api/drf'
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
    GET_MOVIE_REVIEWS(state, movies) {
      state.movieReviews = movies
    }
  },

  actions: {
    async getMovieReviews ({commit}, movie_id) {
      const res = await axios({
        url: drf.community.movieReview(movie_id),
        method: 'get',
      })
      commit('GET_MOVIE_REVIEWS', res.data)
    }
  },
}
