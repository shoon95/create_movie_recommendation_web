<template>
  <div style="overflow:scroll; width:100%;  height:800px;">
    <h1>{{ review.title }}</h1>
    {{ review.content }}
    {{ review.username }}
    <!-- {{ this.review.user.profile_img }} -->
    <!-- {{ `../../../../back${this.review.user.profile_img}` }}
    <img :src="`../../../../back${this.review.user.profile_img}`" alt=""> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ReviewDetailView',

  computed: {
    ...mapGetters(['review'])
  }
}

</script>

<style scoped>
  
</style>