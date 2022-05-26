<template>
  <div id="app">
    <nav class="bg-light sticky-top">
      <NavBar />
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
  font-family: 'HallymMjo-Regular';
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
