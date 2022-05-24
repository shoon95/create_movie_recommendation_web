<template>
  <div @click="updateGenre(genre)" :class="[genre.isSelected? 'isSelected' : 'notSelected']" class="col col-1 col-md-0.5">
    {{ genre.name }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'GenreListItem',
  props: {
    genre: Object,
  },
  methods: {
    ...mapActions(['updateGenre']),
  }
}
</script>

<style scoped>
  div {
    height:30px;
    width: 97px;
    border: solid 1px;
    border-radius: 20px;
    line-height: 30px;
  }
  .notSelected {
    background-color: rgba(255, 255, 255, 0.7);
    border-color: rgba(255, 255, 255, 0.7);
    box-shadow: 1px 1px 3px 0px;
  }

  .isSelected {

    background-color: rgba(185, 226, 213, 0.6);
    border-color: rgba(185, 226, 213, 0.6);
    box-shadow: 1px -1px 3px 0px;

  }
</style>