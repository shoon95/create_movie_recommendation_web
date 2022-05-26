<template>
  <div class="comment-list">
    <comment-list-form></comment-list-form>

    <comment-list-item 
      v-for="comment in comment_set" 
      :comment="comment" 
      :key="comment.pk">
    </comment-list-item>        

  </div>
</template>

<script>
import CommentListItem from '@/components/CommentListItem.vue'
import CommentListForm from '@/components/CommentListForm.vue'
// import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'CommentList',
  components: { CommentListForm, CommentListItem },
  props: { comment_set: Array },
}
</script>

<style>

</style>