<template>
  <div>
    <div>
      <profile-card></profile-card>
    </div>
    <div>
      <ModalView class="fixed-top mt-4" style=" min-width: 1100px; " v-if="isModalViewed" @close-modal="isModalView(false)">
        <ReviewDetailView />
      </ModalView>
    </div>
    <hr>
    <review-card-list ></review-card-list>
    <hr>
    <!-- <liked-movie-list></liked-movie-list> -->
  </div>
</template>

<script>
import ReviewCardList from '@/components/accounts/profile/ReviewCardList.vue'
import ProfileCard from '@/components/accounts/profile/ProfileCard.vue'
import ModalView from '@/views/ModalView.vue'
import ReviewDetailView from '@/views/ReviewDetailView.vue'
// import LikedMovieList from '@/components/accounts/profile/LikedMovieList.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'ProfileView',
  components: {
    ReviewCardList,
    ProfileCard,
    ModalView,
    ReviewDetailView,
    // LikedMovieList,
  },
  computed: {
    ...mapGetters(['isModalViewed']),
  }



}
</script>

<style>

</style>