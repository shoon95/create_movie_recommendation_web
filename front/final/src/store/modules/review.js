import axios from 'axios'
import drf from '@/api/drf'
import router from '@/router'


export default {
  state: {
    tmpReviews: [],
    tmpReview: {},
  },

  getters: {
    tmpReviews: state => state.Reviews,
    tmpReview: state => state.tmpReview,
  },

  mutations: {
    SET_REVIEWS: (state, tmpReviews) => state.rmpReviews = tmpReviews,
    SET_REVIEW: (state, tmpReview) => state.tmpReview = tmpReview,
    CREATE_REVIEW: (state, tmpReview) => {
      state.review = tmpReview
      console.log(state.review)
    }
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
    createReview({ commit, getters }, {title,content,score,movie}) {
      axios({
        url: drf.community.community(),
        method: 'post',
        data: {title,content,score,movie},
        headers: getters.authHeader,
      })
      .then(res => {
        commit('CREATE_REVIEW', res.data)
      })
    },

    updateReview({ commit, getters }, { pk, title, content, score, movie }) {
      console.log(pk)
      console.log(title)
      console.log(content)
      console.log(score)
      console.log
    // updateReview({ commit, getters }, { review }) {
      // console.log(review.id)
      axios({
        url: drf.community.review(pk),
        method: 'put',
        data: { title, content,score, movie },
        headers: getters.authHeader,
      })
        .then( res =>
          commit('SET_REVIEW', res.data)
        )
        
    },

    likeReview({ commit, getters }, review) {
      console.log(review.id),
      axios({
        url: drf.community.likeReview(review.id),
        method: 'post',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_REVIEW', res.data))
  }
}}
