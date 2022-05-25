<template>
  <div>
    <div>
      <profile-card></profile-card>
    </div>
    <hr>
    <review-card-list></review-card-list>
    <hr>
    <!-- <liked-movie-list></liked-movie-list> -->
  </div>
</template>

<script>
import ReviewCardList from '@/components/accounts/profile/ReviewCardList.vue'
import ProfileCard from '@/components/accounts/profile/ProfileCard.vue'
// import LikedMovieList from '@/components/accounts/profile/LikedMovieList.vue'

export default {
  name: 'ProfileView',
  components: {
    ReviewCardList,
    ProfileCard,
    // LikedMovieList,
  },



}
</script>

<style>

</style>