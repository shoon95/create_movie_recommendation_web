<template>
  <div>
    <img :src="`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${ movie.poster_path }`" alt="">
  </div>
</template>

<script>
export default {
  name: 'CommunityMovieListItem',

  props: {
    movie: Object,
  }
}
</script>

<style scoped>
  img {
    height: 500px;
    width: 200px;
  }
</style>