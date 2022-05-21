<template>
  <div class="col m-2">
    {{ review.title }}
  </div>
</template>

<script>
export default {
  name: 'ReviewCardListItem',
  props: {
    review: Object,
  }
}
</script>

<style scoped>
  div {
    border: solid 1px;
    /* width: 150px; */
    height: 250px;
  }
</style>