<template>
  <div class="ratio ratio-16x9 video">
    <iframe :src="src" frameborder="0"></iframe>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import {mapGetters} from 'vuex'
export default {
  name: 'MovieDetail',

  data () {
    return {
      moviePk: this.$route.params.moviePk
    }
  },
  methods: {
    ...mapActions(['selectMovie']),
  },
  computed: {
    ...mapGetters(['movieDetail']),
    src () {
      return require(`@/assets/${this.movieDetail.videos?.youtube_key}video.mp4`)
    }
  },


  
  
}
</script>

<style>
  .video {
    height: 30rem;
    width: 100%;
  }
</style>