<template>
  <form @submit.prevent="onSubmit" class="comment-list-form">
  
    <label for="comment"></label>
    <input type="text" id="comment" v-model="content" required size="41" >
    <button class="butt">등록</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentListForm',
  data() {
    return {
      content: ''
    }
  },
  computed: {
    ...mapGetters(['review']),
  },
  methods: {
    ...mapActions(['createComment']),
    onSubmit() {
      this.createComment({ reviewPk: this.review.id, content: this.content, })
      this.content = ''
    }
  }
}
</script>

<style scoped>
.comment-list-form {
  margin: 1rem;
  padding: 1rem;
  border: solid 1px ;
}
#comment {
  background-color: rgb(248, 248, 248);
  border: 2px solid rgb(0, 0, 255,0.5);
  height: 25px;
  width: 80%;
}
/* class="button" style="margin-left:5px; height:27px; width:50px;" */
.butt {
  margin-left:5px;
  height: 29px;
  width: 50px;
  border-color: rgb(0, 0, 255,0.5);
  color: rgb(0, 0, 255,1);
  background-color: white;
  
}
</style>