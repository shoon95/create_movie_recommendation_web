import axios from 'axios'
import drf from '@/api/drf'
import _ from 'lodash'
// import router from '@/router'


export default {
  state: {
    movieReviews: {},
    isModalViewed: false,
    review: '',
    comment: '',

  },

  getters: {
    movieReviews (state) {
      return state.movieReviews
    },
    isModalViewed: state => state.isModalViewed,
    review: state => state.review,
    isReview: state => !_.isEmpty(state.review),
    comment_set: state => state.review.comment_set? state.review.comment_set : '',
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
      if ( data[1]==='create' ) {
        state.review = false
      } else {
        state.review = data[1]
      }
      
    },

    SET_REVIEW_COMMENTS: (state, comments) => (state.review.comment_set = comments),
    
    DELETE_REVIEW (state, review) {
      console.log(review)
      const idx = state.movieReviews.indexOf(review)
      state.movieReviews.splice(idx,1)
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
    },
    
    isModalView ({commit}, data ) {
      
      commit('IS_MODAL_VIEW', data)
    },
    
    createComment({ commit, getters }, { reviewPk, content }) {
      /* 댓글 생성
      POST: comments URL(댓글 입력 정보, token)
        성공하면
          응답으로 state.article의 comments 갱신
        실패하면
          에러 메시지 표시
      */
      const comment = { content }

      axios({
        url: drf.community.comments(reviewPk),
        method: 'post',
        data: comment,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_REVIEW_COMMENTS', res.data)
        })
        .catch(err => console.error(err.response))
    },

    updateComment({ commit, getters }, { reviewPk, commentPk, content }) {
      /* 댓글 수정
      PUT: comment URL(댓글 입력 정보, token)
        성공하면
          응답으로 state.article의 comments 갱신
        실패하면
          에러 메시지 표시
      */
      const comment = { content }

      axios({
        url: drf.community.comment(reviewPk, commentPk),
        method: 'put',
        data: comment,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_REVIEW_COMMENTS', res.data)
        })
        .catch(err => console.error(err.response))
    },

    deleteComment({ commit, getters }, { reviewPk, commentPk }) {
      /* 댓글 삭제
      사용자가 확인을 받고
        DELETE: comment URL (token)
          성공하면
            응답으로 state.article의 comments 갱신
          실패하면
            에러 메시지 표시
      */
        if (confirm('정말 삭제하시겠습니까?')) {
          axios({
            url: drf.community.comment(reviewPk, commentPk),
            method: 'delete',
            data: {},
            headers: getters.authHeader,
          })
            .then(res => {
              commit('SET_REVIEW_COMMENTS', res.data)
            })
            .catch(err => console.error(err.response))
        }
      },
      async deleteReview ({commit, getters}, review) {
        console.log(review)
        if (confirm('정말 삭제하시겠습니가?')) {
          await axios({
            url: drf.community.review(review.id),
            method: 'delete',
            data: {},
            headers: getters.authHeader,
          })
          commit('DELETE_REVIEW', review)
        }
      }
  },

}