<template>
  <div>
    <div  >
      <img class="first-img" :src="src" alt="">
    </div>
    <div>
      <MovieListItem v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>

  </div>
</template>

<script>
import MovieListItem from '@/components/MovieListItem.vue'

export default {
  name: 'MovieList',
  components: {
    MovieListItem
  },

  data() {
    return {
      src: require('@/assets/imgFile.png')
    }
  },

  computed: {
    movies() {
      return this.$store.state.movies
    }
  }
}
</script>

<style>
body {
  margin-left: 0;
  margin-right: 0;
  padding: 0;
  /* background-color: black; */
}
.first-img {
  width: 100%;
  height: 700px;
  /* margin-top: 300px; */
}

.my-img-div {
    margin-top: 300px;
    /* margin-bottom: px; */
    width: 500px;
    height: 600px;
    position: relative;
    top: 600px;
    left: 500px;
    right: 500px;
  }

.my-box {
  width: 300px;
  height: 300px;
  margin-bottom: 100px;
  border: 1px solid white;
  background-color: gray;
  position: absolute;
  top: 750px;
  left: 970px;
  right: 970px;
}

.first-div {
    position:relative;
  }
.my-img {
  width:450px;
  height:600px;
}
</style>