<template>
  <div class="d-flex m-0 justify-content-between">
    <div class="m-2 d-flex p-0 align-items-center">
      <router-link :to="{name:'community'}" class="text-decoration-none"><h2>Muzul</h2></router-link>
      <SearchBar />
    </div>
    <div class="m-2 d-flex align-items-center" >
      <div class="d-flex" v-if="isLoggedIn">
        <router-link class="profile" :to="{name:'profile', params: {username: currentUser.username}}" tag="img" :src="src"></router-link>
        <h2 class="logout" @click="logout">logout</h2>
      </div>
      <div v-else>
        <router-link :to="{name:'login'}" ><h2>login</h2></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/search/SearchBar.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "NavBar",
  data () {
    return {
      src: require('../../../../back/media/박상훈.jpg')
    }
  },
  components: {
    SearchBar,
  },
  computed: {
    ...mapGetters(['isLoggedIn','currentUser']),
  },

  methods: {
      ...mapActions(['logout']),
    },
}
</script>

<style scoped>
  .logout {
    cursor: pointer;
  }
  .profile {
    cursor: pointer;
    margin-right:7px;
    width: 45px;
    height: 45px;
    border-radius: 45px;
  }
</style>