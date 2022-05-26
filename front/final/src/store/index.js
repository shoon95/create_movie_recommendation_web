import Vue from 'vue'
import Vuex from 'vuex'

import movies from './modules/movies'
import accounts from './modules/accounts'
import community from './modules/community'
// import review from './modules/review'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { accounts, movies, community, },
})
