<template>
  <div id="app">
    <nav>
      <SearchBar />
      <router-link :to="{name:'community'}">Community</router-link> |
      <router-link :to="{name:'login'}">Login</router-link> |
      <router-link :to="{name:'movie',params:{moviePk:1}}">MovieDetail</router-link> |
      <router-link :to="{name:'NotFound404'}">NotFound404</router-link> |
      <router-link :to="{name: 'profile', params:{username:'sjhty123@naver.com'}}">Profile</router-link> |
      <router-link :to="{name: 'review', params:{reviewPk:1}}">ReviewDetail</router-link> |
      <router-link :to="{name: 'reviewNew'}">ReviewNew</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import SearchBar from '@/components/search/SearchBar.vue'
  export default {
    name: 'App',
    components: {
      SearchBar
    },
    methods: {
      ...mapActions(['fetchCurrentUser']),
    },
    created () {
      this.fetchCurrentUser()
    }
  }
  
</script>

<style>
#app {
  text-align: center;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
