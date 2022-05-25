<template>
  <div>
    <h1>New Review</h1>
    <review-form :review="review"></review-form>
  </div>
</template>

<script>
import ReviewForm from '@/components/ReviewForm.vue'
export default {
  components: { ReviewForm },
  data() {
    return {
      review: {
        pk: null,
        title: '',
        content: '',
      }
    }
  }

}
</script>

<style>

</style>