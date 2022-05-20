<template>
  <div id="app">
    <nav>
      <router-link to="/">Community</router-link> |
      <router-link to="login/">Login</router-link> |
      <router-link to="movies/1/">MovieDetail</router-link> |
      <router-link to="404/">NotFound404</router-link> |
      <router-link to="profile/admin/">Profile</router-link> |
      <router-link to="review/1/">ReviewDetail</router-link> |
      <router-link to="review/new/">ReviewNew</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App',

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
