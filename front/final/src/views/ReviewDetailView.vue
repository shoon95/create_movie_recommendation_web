<template>
  <div style="overflow:scroll; width:100%;  height:800px;">
    <div class="row">
      <aside class="col col-3">
        <img :src= "`http://127.0.0.1:8000${ review.user.profile_img }`" alt="" style="width:100px; height:100px; border-radius:100%;">
      </aside>
      <div class="col">
        <div v-if="review.user.username===currentUser.username">
          <button @click="[deleteReview(review), isModalView(false)]">삭제</button>
          <button>업데이트</button>
        </div>
        <h1>{{ review.title }}</h1>
        <div class="content">
          {{ review.content }} <br>
          {{ review.user.username }} <br>
          {{ review.created_at }}<br>
          {{ review.updated_at }}<br>
          {{ review.user.nickname }}<br>
          <button @click="likeReview(review)">like {{ likeCount  }}</button>
        </div>
      </div>
    </div>
    <div>
      <CommentList :comment_set="comment_set"/>
    </div>
    <!-- {{ `../../../../back${this.review.user.profile_img}` }}
    <img :src="`../../../../back${this.review.user.profile_img}`" alt=""> -->
  </div>
</template>

<script>
import CommentList from '@/components/CommentList.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ReviewDetailView',
  components: {
    CommentList,
  },
  // data() {
  //   // return{
  //   //   reviewPk: this.review.pk,
  //   // }
  // },

  computed: {
    ...mapGetters(['comment_set','review', 'isReviewer', 'currentUser', 'isAuthor']),
    likeCount() {
      return this.review.like_users?.length
    }
  },
  
  
  methods: {
    ...mapActions(['isModalView','deleteReview', 'likeReview', 'fetchReview'])
  },

  created() {
    this.fetchReview(this.review.id)
  }
}

</script>

<style scoped>
  
</style>