<template>
  <div id="app">
    <nav>

      <router-link to="community/">Community</router-link> |
      <router-link to="/">Login</router-link>
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
