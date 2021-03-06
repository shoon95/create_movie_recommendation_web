import axios from 'axios'
import drf from '@/api/drf'
import router from '@/router'


export default {
  state: {
    token: localStorage.getItem('token') || '',
    currentUser: {},
    profile: {},
    authError: null,
  },

  getters: {
    isLoggedIn: state => !!state.token,
    currentUser: state => state.currentUser,
    profile: state => state.profile,
    isAuthor: state => state.currentUser.username === state.profile.username,
    authError: state => state.authError,
    authHeader: state => ({Authorization: `Token ${state.token}`}),
    
  },

  mutations: {
    SET_TOKEN: (state, token) => state.token = token,
    SET_CURRENT_USER: (state, user) => state.currentUser = user,
    SET_PROFILE: (state, profile) => state.profile = profile,
    SET_FOLLOWINGS: (state, currentUser) => state.profile.followings.append(currentUser),    
    SET_AUTH_ERROR: (state, error) => state.authError = error,
  },

  actions: {
    saveToken({ commit }, token) {
      commit('SET_TOKEN', token)
      localStorage.setItem('token', token)
    },

    removeToken({ commit }, token) {
      commit('SET_TOKEN', token)
      localStorage.setItem('token', '')
    },

    signup({ commit, dispatch }, Credentials) {
      axios({
        url: drf.accounts.signup(),
        method: 'post',
        data: Credentials,
      })
      .then(res => {
        const token = res.data.key
        dispatch('saveToken', token)
        dispatch('fetchCurrentUser')
        router.push({ name: 'community' })
      })
        .catch(err => {
        commit('SET_AUTH_ERROR', err.response.data)
      })
    },

    fetchCurrentUser({ commit, getters, dispatch }) {
      if (getters.isLoggedIn) {
        axios({
          url: drf.accounts.currentUserInfo(),
          method: 'get',
          headers: getters.authHeader,
        })

          .then(res => commit('SET_CURRENT_USER', res.data))
          .catch(err =>{
            if (err.response.status === 401) {
              dispatch('removeToken')
              router.push({ name: 'login' })
            }
          })
      }
    },

    login({ commit, dispatch }, loginCredentials) {
      axios({
        url: drf.accounts.login(),
        method: 'post',
        data: loginCredentials,
      })
        .then(res => {
          const token = res.data.key
          dispatch('saveToken', token)
          dispatch('fetchCurrentUser')
          router.back()
        })
        .catch(err => {
          commit('SET_AUTH_ERROR', err.response.data)
        })
    },

    logout({ getters, dispatch }) {
      axios({
        url: drf.accounts.logout(),
        method: 'post',
        headers: getters.authHeader,
      })
        .then(() => {
          dispatch('removeToken')
          router.push({ name: 'community' })
        })
    },

    fetchProfile({ commit, getters }, { username }) {
      axios({
        url: drf.accounts.profile(username),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_PROFILE', res.data)
        })
    },

    editProfile({ commit, getters }, { username, nickname, introduce }) {
      console.log({ username, nickname, introduce })
      axios({
        url: drf.accounts.edit_profile(username),
        method: 'put',
        data: { nickname, introduce },
        headers: getters.authHeader,
      })
        .then(res => {
          console.log(res)
          commit('SET_PROFILE', res.data)
          router.push({
            name: 'profile',
            params: { username: getters.profile.username }
          })
        })
          .catch(err => {
            console.log(err)
          })
    },

    followUser({ commit, getters }, username)  {
      console.log(username)
      axios({
        url: drf.accounts.follow(username),
        method: 'post',
        headers: getters.authHeader,
      })
      .then(res => commit('SET_PROFILE', res.data))
        .catch(err => console.log(err.response))
    }
  },
}
