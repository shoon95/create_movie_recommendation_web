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
    background-color: rgba(229, 236, 247, 1);
    border-color: rgba(229, 236, 247, 1);
    box-shadow: 1px 1px 3px 0px;
  }

  .isSelected {

    background-color: rgb(13, 110, 253);
    border-color: rgba(13, 110, 253);
    color: rgba(255, 255, 255, 0.7);
    box-shadow: 1px -1px 3px 0px;

  }
</style>