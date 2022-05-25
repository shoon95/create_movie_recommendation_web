<template>
  <div>
    <div>
      <profile-card></profile-card>
    </div>
    <hr>
    <movie-card-list-item></movie-card-list-item>
    <hr>
    <!-- <liked-movie-list></liked-movie-list> -->
  </div>
</template>

<script>
import MovieCardListItem from '@/components/accounts/profile/MovieCardListItem.vue'
import ProfileCard from '@/components/accounts/profile/ProfileCard.vue'
// import LikedMovieList from '@/components/accounts/profile/LikedMovieList.vue'

export default {
  name: 'ProfileView',
  components: {
    MovieCardListItem,
    ProfileCard,
    // LikedMovieList,
  },



}
</script>

<style>

</style>