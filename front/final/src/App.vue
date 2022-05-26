<template>
  <div id="app">
    <nav class="bg-light sticky-top">
      <NavBar />
      <!-- <router-link :to="{name:'community'}">Community</router-link> |
      <router-link :to="{name:'login'}">Login</router-link> |
      <router-link :to="{name:'movie',params:{moviePk:1}}">MovieDetail</router-link> |
      <router-link :to="{name:'NotFound404'}">NotFound404</router-link> |
      <router-link :to="{name: 'profile', params:{username:'admin'}}">Profile</router-link> | -->
      <!-- <router-link :to="{name: 'review', params:{reviewPk:1}}">ReviewDetail</router-link> | -->
      <!-- <router-link :to="{name: 'reviewNew'}">ReviewNew</router-link> | -->
    </nav>
    <router-view/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import NavBar from '@/components/NavBar.vue'
  export default {
    name: 'App',
    components: {
      NavBar
    },
    methods: {
      ...mapActions(['fetchCurrentUser', 'getGenreList','getMovies']),
    },
    created () {
      this.fetchCurrentUser()
      this.getGenreList()
      this.getMovies()
    }
  }

  
</script>

<style>
#app {
  text-align: center;
  font-family: 'Nanum Myeongjo', serif;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#app {
  /* background-color: #ffffff; */
}
</style>
