<template>
  <div class="ratio ratio-16x9">
    <iframe :src="src" frameborder="0"></iframe>
    <!-- {{ src }} -->
    {{ moviePk }}
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

</style>