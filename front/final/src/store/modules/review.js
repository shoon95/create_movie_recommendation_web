import axios from 'axios'
import drf from '@/api/drf'
import _ from 'lodash'
import router from '@/router'
// import router from '@/router'


export default {
  state: {
    review: [],
    reviews: {},
  },

  getters: {
    reviews: state => state.reviews,
    review: state => state.review,
    isAuthor: (state, getters) => {
      return state.review.user?.username === getters.currentUser.username
    },
    isReview: state => !_.isEmpty(state.review),
  },

  mutations: {
    SET_REVIEWS: (state, reviews) => state.reviews = reviews,
    SET_REVIEW: (state, review) => state.review = review,
    SET_REVIEW_COMMENTS: (state, comments) => (state.review.comments = comments),
  },

  actions: {
    createReview({ commit, getters }, review) {
      axios({
        url: drf.community.review(),
        method: 'post',
        data: review,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_REVIEW', res.data)
          router.push({
            name: 'review',
            params: { reviewPk: getters.review.pk }
          })
        })
    },

    updateReview({ commit, getters }, { pk, title, content }) {
      axios({
        url: drf.reviews.review(pk),
        method: 'put',
        data: { title, content },
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_REVIEW', res.data)
          router.push({
            name: 'review',
            params: { reviewPk: getters.review.pk }
          })
        })
    }

}}
