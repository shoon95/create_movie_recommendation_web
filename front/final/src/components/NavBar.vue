<template>
  <div class="d-flex m-0 ">
    <div>
      <h1>Mozul</h1>
    </div>
    <div >
      <SearchBar />
    </div>
    
  </div>
</template>

<script>
import SearchBar from '@/components/search/SearchBar.vue'
export default {
  name: "NavBar",
  components: {
    SearchBar,
  }
}
</script>

<style>

</style>