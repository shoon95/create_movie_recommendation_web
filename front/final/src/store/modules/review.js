import axios from 'axios'
import drf from '@/api/drf'
import _ from 'lodash'
import router from '@/router'
// import router from '@/router'


export default {
  state: {
    tmpReviews: [],
    tmpReview: {},
  },

  getters: {
    tmpReviews: state => state.Reviews,
    tmpReview: state => state.tmpReview,
    isReview: state => !_.isEmpty(state.tmpReview),
  },

  mutations: {
    SET_REVIEWS: (state, tmpReviews) => state.rmpReviews = tmpReviews,
    SET_REVIEW: (state, tmpReview) => state.tmpReview = tmpReview,
  },

  actions: {
    fetchReviews ({ commit, getters }) {
      axios({
        url: drf.community.community(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_REVIEWS', res.data))
    },

    fetchReview ({ commit, getters }, reviewPk) {
      axios({
        url: drf.community.review(reviewPk),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_REVIEW', res.data))
        .catch(err => {
          if (err.responses.statue == 404) {
            router.push({ name: 'NotFound404' })
          }
        })
    },
    createReview({ commit, getters }, review) {
      axios({
        url: drf.community.community(),
        method: 'post',
        data: review,
        headers: getters.authHeader,
      })
      .then(res => {
        commit('SET_REVIEW', res.data)
        router.push({
          name: 'review',
          params: { reviewPk: getters.tmpReview.pk }
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
            params: { reviewPk: getters.tmpReview.pk }
          })
        })
    }

}}
