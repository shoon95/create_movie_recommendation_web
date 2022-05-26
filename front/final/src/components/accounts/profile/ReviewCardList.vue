<template>
    <div id="card-body">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
      <div class="hero-section">
        <div class="card-grid">
          <div>
            <ReviewCardListItem v-for="review in movieReviews" :key="review.id" :review="review" />
          </div>
        </div>
      </div>
      <button @click="myReview">button</button>
    </div>
</template>

<script>
import ReviewCardListItem from '@/components/accounts/profile/ReviewCardListItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ReviewCardList',
  components: {
    ReviewCardListItem
  },
  computed: {
    ...mapGetters(['movieReviews', 'tmpReviews'])
  },
  methods: {
    ...mapActions(['fetchReviews']),
    myReview() {
      console.log(this.tmpReviews)
      console.log(this.movieReviews)
    }
  },
  created() {
    this.fetchReviews()
  }
}
</script>

<style scoped>

</style>