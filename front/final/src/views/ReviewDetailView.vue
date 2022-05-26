<template>
  <div class="back" style="overflow:scroll; width:100%;  height:480px"  >
    <!-- reviewDetail -->
    
    <div v-if="review && isEditValue" >
      <h3 class="card-title" >{{ review.movie.title }}</h3>
      
      <img :src= "`http://127.0.0.1:8000${ review.user.profile_img }`" alt="" style="width:75px; height:75px; border-radius:100%;">
      <div class="name">{{ review.user.nickname }}</div>

      <div >
        <h2 class="mt-3">{{ review.title }}</h2>
        <h4>{{ review.content }}</h4>
      </div>
            
      <div class="context" >   
        <div v-if="review.user.username===currentUser.username">
          <img src="@/assets/edit.png"  class="edit" @click="changeIsEdit" alt="">
          <img @click="[deleteReview(review), isModalView(false)]" class="trash" src="@/assets/trash.png" alt="">

        </div>
      </div>
      <button class="like" @click="likeReview(review)">like {{ likeCount  }}</button><br>
      생성 : {{ review.created_at | formatDate }} | 수정 : {{ review.updated_at | formatDate }}
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
import { formatDate } from '@/common/date.js'

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
      console.log(data)
      console.log(data.id)
      this.newReview.movie = data.id
    }

  },
  filters: {
    formatDate(time) {
    var date = new Date(time);
    return formatDate(date, 'yyyy.MM.dd'); 
   },
   formatDate2(time) {
    var date = new Date(time);
    return formatDate(date, 'hh:mm:ss'); 
   },
   formatDate3(time) {
    var date = new Date(time);
    return formatDate(date, 'yyyy MM dd  hh:mm:ss'); 
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
  .name {
    font-size: 13px;
  }
  .context {
    position: relative;
    right: -170px;
    top: -170px;
  }
  .poster {
    width: 300px;
    height: 450px;
    border-radius: 10px;
  }
  .card-title {
    border: solid 
  }

  .edit {
	height: 5%;
	width: 5%;
	cursor: pointer;
	margin-left:5px;
	/* margin-bottom: 9px; */
	padding-bottom: 5px;
	margin-left: 65px;
}
.trash {
	height: 5%;
	width: 5%;
	cursor: pointer;
	margin-left:5px;
	/* margin-bottom: 9px; */
	padding-bottom: 5px;
}

</style>