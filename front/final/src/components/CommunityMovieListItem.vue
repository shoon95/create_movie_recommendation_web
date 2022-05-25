<template>
  <div class="carousel-item active caro">
    <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
      <rect width="100%" height="100%" fill="#777"/>
      <image :href="`https://www.themoviedb.org/t/p/original/${ movie.backdrop_path }`" />
    </svg>

    <div class="container">
      <div class="carousel-caption text-start">
        <h1>Example headline.</h1>
        <p>Some representative placeholder content for the first slide of the carousel.</p>
        <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
      </div>
    </div>
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
  image {
    height: 700px;
    width: 100%;
  }

  .caro {
    height:700px;
    width: 100%;
  }
</style>