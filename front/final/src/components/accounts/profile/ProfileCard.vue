<template>
  <div class="container">
    <div class="d-flex">
      <div class="box col-3">
        <!-- <img class="profile" :src= "`http://127.0.0.1:8000${ profile.profile_img }`" alt="profile_img"> -->
        </div>
      <div class="col-8 col-offset-1 container">
        <h1 v-if="profile.nickname">{{ profile.nickname }}</h1>
        <h1 v-else>{{ profile.username }}</h1>
        <h4>followers: {{ followersCount }} <br> followings: {{ followingsCount }}</h4>
        <p>{{ profile.introduce }}</p>
      </div>
      <div v-if="isAuthor">
        <router-link :to="{ name: 'profileEdit', params: { username: profile.username } }">
          <button class="btn btn-primary">Profile Update</button>
        </router-link>
      </div>
      <div v-if="!isAuthor">
        <button class="btn btn-primary" @click="followUser(username)">
        <div v-if="profile.followers.includes(currentUser.pk)">unfollow</div>
        <div v-else>follow</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProfileCard',
  data() {
    return {
      username: this.$route.params.username
    }
  },
  computed: {
    ...mapGetters(['isAuthor', 'profile', 'currentUser']),
    followersCount() {
      return this.profile.followers?.length
    },
    followingsCount() {
      return this.profile.followings?.length
    }
  },

  methods: {
    ...mapActions(['fetchProfile', 'followUser'])
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