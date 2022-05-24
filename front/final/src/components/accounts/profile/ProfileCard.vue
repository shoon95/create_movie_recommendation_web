<template>
  <div class="container">
    <div class="d-flex">
      <div class="box col-3">
        <img class="profile" :src= "`http://127.0.0.1:8000${ profile.profile_img }`" alt="profile_img">
        </div>
      <div class="col-8 col-offset-1">
        <h1>{{ profile.nickname }}</h1>
        <h4>followers: {{ profile.followers.length }} | followings: {{ profile.followings.length }}</h4>
        <p>{{ profile.introduce }}</p>
      </div>
      <div v-if="isAuthor">
        <router-link :to="{ name: 'profileEdit', params: { username: profile.username } }">
          <button>Profile Update</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProfileCard',
  computed: {
    ...mapGetters(['isAuthor', 'profile'])
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