<template>
  <div class="back" style="overflow:scroll; width:100%;  height:480px"  >
    <!-- reviewDetail -->

    <div v-if="review && isEditValue" >

      <!-- <img :src="`https://www.themoviedb.org/t/p/original/${ review.movie.poster_path }`" alt=""> -->

      <div class="row" >
        <aside class="col col-3">
          <img :src= "`http://127.0.0.1:8000${ review.user.profile_img }`" alt="" style="width:100px; height:100px; border-radius:100%;">
          <!-- <img :src="`https://www.themoviedb.org/t/p/original/${ review.movie.poster_path }`" alt="" class="poster shadow"> -->
        </aside>

        <div class="col" >
          <div v-if="review.user.username===currentUser.username">
            <button @click="[deleteReview(review), isModalView(false)]">삭제</button> | 
            <button @click="changeIsEdit">업데이트</button>
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
    </div>
    

    <!-- ReviewCreate -->
    <div v-if="!review">
      <div>
        <label for="title">title: </label>
        <input type="text" v-model="newReview.title">
        
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
        <searchBar @sendMovie="getMovieData" />
      </div>
      <div>
        <button @click="[createReview(newReview)]">제출</button>
        <button @click="changeIsEdit">취소</button>
      </div>
    </div>
    

    <!-- ReviewEdit -->

    <div v-if="!isEditValue">
      <div>
        <label for="title">title: </label>
        <input type="text" v-model="newReview.title">
        
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
        <button @click="[updateReview(newReview), changeIsEdit()]">제출</button>
        <button @click="changeIsEdit">취소</button>
      </div>

    </div>
  </div>
</template>

<script>
import CommentList from '@/components/CommentList.vue'
import searchBar from '@/components/search/SearchBar.vue'


import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ReviewDetailView',
  components: {
    CommentList, searchBar,
  },

  data() {
    return{
      isEdit: true,
      movie: '',
      newReview: {
          pk: '',
          title: '',
          content: '',
          score: '',
          movie: '',
        }
    }
  },

  computed: {
    ...mapGetters(['comment_set','review', 'isReviewer', 'currentUser', 'isAuthor']),
    likeCount() {
      return this.review.like_users?.length
    },
    isEditValue () {
      return this.isEdit
    }
  },
  watch: {
    isEdit () {
      this.newReview.pk = this.review.id
      this.newReview.title = this.review.title
      this.newReview.content = this.review.content
      this.newReview.score = this.review.score
      this.newReview.movie = this.review.movie.id

    }
  },
  
  methods: {
    ...mapActions(['isModalView','deleteReview', 'likeReview', 'fetchReview','updateReview','createReview']),
    changeIsEdit () {
      this.isEdit= !this.isEdit
    },
    getMovieData (data) {
      this.movie = data
      this.newReview.movie = data.id
    }

  },

  created() {
    if (this.review) {
      this.fetchReview(this.review.id)
    } 
  }
}

</script>

<style scoped>
  .poster {
    width: 300px;
    height: 450px;
    border-radius: 10px;
  }

</style>