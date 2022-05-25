<template>
  <div class="carousel-item caro" :class="[this.idxMovie===this.movie? 'active': '']">
    <!-- <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
      <rect width="0%" height="100%" fill="#777"/>
      <image :href="`https://www.themoviedb.org/t/p/original/${ movie.backdrop_path }`" />
    </svg> -->
    <img :src="`https://www.themoviedb.org/t/p/original/${ movie.backdrop_path }`" alt="">
    <div class="container">
      <div class="carousel-caption text-start">
        <h1>{{ movie.title }}</h1>
        <p>&nbsp;</p>
        <!-- <p>&nbsp;</p> -->
        
        <!-- <p>{{ movie.release_date }}</p> -->
        <!-- <p>{{ movie.genres }}</p> -->

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CommunityMovieListItem',

  props: {
    movie: Object,
    idxMovie: Object,
  }
}
</script>

<style scoped>
  img {
    height: 700px;
    width: 100%;
  }

  .caro {
    height:700px;
    width: 100%;
  }
</style>