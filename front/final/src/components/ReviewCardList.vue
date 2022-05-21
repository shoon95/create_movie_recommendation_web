<template>
  <div class="row">
      <ReviewCardListItem v-for="review in movieReviews" :key="review.id" :review="review" />
  </div>
</template>

<script>
import ReviewCardListItem from '@/components/ReviewCardListItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ReviewCardList',
  components: {
    ReviewCardListItem
  },
  computed: {
    ...mapGetters(['movieReviews'])
  }
}
</script>

<style>
</style>