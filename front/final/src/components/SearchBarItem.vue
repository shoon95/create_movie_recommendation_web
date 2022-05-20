<template>
  <div>
    <h1 class="btn btn-info bg-opacity-10 ">{{ movie.title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'SearchBarItem',
  props: {
    movie: Object
  }
}
</script>

<style>

</style>