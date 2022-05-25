<template>
  <div>
    <h1>New Review</h1>
    <review-form :review="review" action="create"></review-form>
  </div>
</template>

<script>
import ReviewForm from '@/components/ReviewForm.vue'
export default {
  name: 'ReviewNewView',
  components: { ReviewForm },
  data() {
    return {
      review: {
        pk: null,
        title: '',
        content: '',
        score: 0,
        movie: 0
      }
    }
  }

}
</script>

<style>

</style>