<template>
  <div>
    <div class="container">
      <div class="d-flex">
        <div class="box col-3">
          <img class="profile" :src="require(`@/assets${profile.profile_img}`)" alt="">
        </div>
        <div class="col-8 col-offset-1">
          <h1>{{ profile.username }}</h1>
          <h4>followers: {{ profile.followers.length }} | followings: {{ profile.followings.length }}</h4>
          <p>ㅈ...ㅜㄱ...ㅇ..ㅕ...ㅈ...ㅝ....</p>
        </div>
      </div>
    </div>
    <hr>
    <movie-card-list-item></movie-card-list-item>
    <hr>
    <calender-card></calender-card>
    <hr>
    <liked-movie-list></liked-movie-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MovieCardListItem from '@/components/accounts/profile/MovieCardListItem.vue'
import CalenderCard from '@/components/accounts/profile/CalenderCard.vue'
import LikedMovieList from '@/components/accounts/profile/LikedMovieList.vue'

export default {
  name: 'ProfileView',
  components: {
    MovieCardListItem,
    CalenderCard,
    LikedMovieList,
  },

  computed: {
    ...mapGetters(['profile'])
  },

  methods: {
    ...mapActions(['fetchProfile'])
  },

  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  }

}
</script>

<style>
.box {
    width: 150px;
    height: 150px; 
    border-radius: 70%;
    overflow: hidden;
}
.profile {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>