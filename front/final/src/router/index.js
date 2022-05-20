import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'

import LoginView from '@/views/LoginView.vue'
import CommunityView from '@/views/CommunityView.vue'
import ProfileView from '@/views/ProfileView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'
import NotFound404 from '@/views/NotFound404.vue'
import ReviewDetailView from '@/views/ReviewDetailView.vue'
import ReviewNewView from '@/views/ReviewNewView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'login',
    component: LoginView
  },

  {
    path: '/profile/:username',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/community',  // Home
    name: 'community',
    component: CommunityView,
  },
  {
    path: '/review/:reviewPk',
    name: 'review',
    component: ReviewDetailView,
  },
  {
    path: '/review/new',
    name: 'reviewNew',
    component: ReviewNewView,
  },
  {
    path: '/movies/:moviePk',
    name: 'movie',
    component: MovieDetailView,
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '*',
    redirect: '/404'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
