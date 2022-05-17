<template>
  <div class="first-div">
    <div class="my-img-div">
      <img class="my-img" :src="`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${ movie.poster_path }`" alt="">
    </div>
    <div class="my-box"></div>
  </div>
</template>

<script>
export default {
  name: 'MovieListItem',
  props: {
    movie: Object
  }
}
</script>

<style scoped>
  

  

</style>