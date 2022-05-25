<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="title">title: </label>
      <input v-model="newReview.title" type="text" id="title" />
    </div>
    <div>
      <label for="content">content: </label>
      <textarea v-model="newReview.content" type="text" id="content"></textarea>
    </div>
    <div>
      <label for="score">score: </label>
      <input v-model="newReview.score" type="range" name="score" min='0' max='5' step='0.5' oninput="document.getElementById('score').innerHTML=this.value;"/>
      <span id="score"></span>
    </div>
    <div>
      <label for="movie">movie: </label>
      <input v-model="newReview.movie" type="number" id="movie" />
    </div>
    <div>
      <button>{{ action }}</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    name: 'ReviewForm',
    props: {
      review: Object,
      action: String,
    },
    data() {
      return {
        newReview: {
          title: this.review.title,
          content: this.review.content,
          score: this.review.score,
          movie: this.review.movie,
        }
      }
    },

    methods: {
      ...mapActions(['createReview', 'updateReview']),
      onSubmit () {
        if (this.action === 'create') {
          this.createReview(this.newReview)
        } else if (this.action === 'update') {
          const payload = {
            pk: this.review.pk,
            ...this.newReview,
          }
          this.updateReview(payload)
        }  
      },
    }
  }
</script>

<style>

</style>