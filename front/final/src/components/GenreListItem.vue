<template>
  <button @click="updateGenre(genre)" :class="[genre.isSelected? 'isSelected' : 'notSelected']" class="col col-1 col-md-0.5">
    {{ genre.name }}
  </button>
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
  button {
    height:30px;
    width: 90px;
    font-size: 15px;
    border: solid 1px;
    border-radius: 5px;
    line-height: 30px;
  }
  .notSelected {
    background-color: rgb(255, 255, 255);
    border-color: rgb(255, 255, 255);
    box-shadow: 1px 1px 3px 0px;
  }

  .isSelected {

    background-color: #2c3e50;
    border-color: #2c3e50;
    color: rgba(255, 255, 255, 0.7);
    box-shadow: 1px -1px 3px 0px;

  }
</style>