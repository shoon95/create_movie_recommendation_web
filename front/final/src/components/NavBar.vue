<template>
  <div class="d-flex m-0 justify-content-between" id="nav">
    <div class="m-2 d-flex p-0 align-items-center">
      <!-- <router-link :to="{name:'community'}" class="text-decoration-none"><h2 id="logo">Muzul</h2></router-link> -->
      <router-link :to="{name:'community'}"
        ><img src='@/assets/name.png' id="logo"  alt=""></router-link>
      <SearchBar />
    </div>
    <div class="m-2 d-flex align-items-center" >
      <div class="d-flex" v-if="isLoggedIn">
        <router-link class="profile" :to="{name:'profile', params: {username: currentUser.username}}" 
        ><img :src="`http://127.0.0.1:8000${ currentUser.profile_img }`" alt=""></router-link>
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
      // src: require('../../../../back/media/4.jpg')
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
/* 
  #title {
    font-size: 100px;
  } */
  h2 {
    font-family: 'KOTRA_BOLD-Bold';
    color: white;
  }

  #nav {
    background-color: rgb(21, 29, 37);
  }

  #logo {
    width: 100px;
    /* box-shadow: 0px 0px 3px 1px; */
  }
</style>